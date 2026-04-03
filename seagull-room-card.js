const SEAGULL_ROOM_CARD_VERSION = "0.5.0";
const SEAGULL_ROOM_CARD_COMMIT = "dev";

class SeagullRoomCard extends HTMLElement {
  static getStubConfig() {
    return {
      type: "custom:seagull-room-card",
      background_color: "#1f2937",
      background_opacity: 0.45,
      border_radius: 16,
      border_width: 1,
      border_color: "rgba(255,255,255,0.25)",
      icon: "mdi:sofa",
      icon_color: "#ffffff",
      icon_size: 22,
      lights: {
        cols: 4,
        size: 44,
        gap: 10,
        align: "justified",
        color: "{{ state === 'on' ? 'rgba(245,158,11,0.9)' : 'rgba(75,85,99,0.45)' }}",
        icon_color: "{{ state === 'on' ? '#111827' : '#e5e7eb' }}",
        entities: [
          { entity: "light.example_light" }
        ],
      },
    };
  }

  static async getConfigElement() {
    return document.createElement("seagull-room-card-editor");
  }

  setConfig(config) {
    if (!config || config.type !== "custom:seagull-room-card") {
      throw new Error("Card type must be custom:seagull-room-card");
    }
    this._config = config;
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
  }

  getCardSize() {
    return 2;
  }

  _render() {
    if (!this._config || !this._hass) return;

    if (!this._card) {
      this._card = document.createElement("ha-card");
      this._inner = document.createElement("div");
      this._inner.className = "seagull-room-card-inner";

      this._icon = document.createElement("ha-icon");
      this._icon.className = "seagull-room-card-icon";

      this._card.appendChild(this._inner);
      this._card.appendChild(this._icon);
      this.appendChild(this._card);
    }

    const bgColor = this._config.background_color ?? "#1f2937";
    const opacity = this._clampOpacity(this._config.background_opacity ?? 0.45);
    const radius = this._toPx(this._config.border_radius ?? 16, 16);
    const borderWidth = Math.max(0, this._toPx(this._config.border_width ?? 1, 1));
    const borderColor = this._config.border_color ?? "rgba(255,255,255,0.25)";

    const icon = this._config.icon ?? "mdi:sofa";
    const iconColor = this._config.icon_color ?? "#ffffff";
    const iconSize = Math.max(8, this._toPx(this._config.icon_size ?? 22, 22));

    this._card.style.boxShadow = "none";
    this._card.style.borderRadius = `${radius}px`;
    this._card.style.overflow = "hidden";
    this._card.style.background = this._toRgba(bgColor, opacity);
    this._card.style.border = `${borderWidth}px solid ${borderColor}`;
    this._card.style.position = "relative";

    this._inner.style.minHeight = "80px";
    this._inner.style.padding = "42px 12px 12px";
    this._inner.style.boxSizing = "border-box";

    this._icon.setAttribute("icon", icon);
    this._icon.style.position = "absolute";
    this._icon.style.left = "10px";
    this._icon.style.top = "10px";
    this._icon.style.color = iconColor;
    this._icon.style.setProperty("--mdc-icon-size", `${iconSize}px`);
    this._icon.style.width = `${iconSize}px`;
    this._icon.style.height = `${iconSize}px`;
    this._icon.style.display = icon ? "block" : "none";

    this._inner.innerHTML = this._buildLightsHtml();
    this._wireLightButtons();
  }

  _buildLightsHtml() {
    const lightsCfg = this._config.lights || {};
    const cols = Math.max(1, parseInt(lightsCfg.cols ?? lightsCfg.columns ?? 4, 10) || 4);
    const size = Math.max(20, this._toPx(lightsCfg.size ?? 44, 44));
    const gap = Math.max(0, this._toPx(lightsCfg.gap ?? 10, 10));
    const alignRaw = String(lightsCfg.align ?? "justified").toLowerCase();
    const align = ["left", "right", "center", "justified"].includes(alignRaw) ? alignRaw : "justified";

    const perEntity = this._lightOverridesByEntity(lightsCfg);
    const orderedEntities = Array.from(perEntity.keys()).filter((entityId) => {
      const ov = perEntity.get(entityId);
      return entityId.startsWith("light.") && !ov?.hidden;
    });

    const entities = orderedEntities.filter((entityId) => !!this._hass?.states?.[entityId]);

    if (!entities.length) {
      return `<div style="font-size:12px;opacity:.8;">Set explicit lights in <code>lights.entities</code>.</div>`;
    }

    const buttons = entities.map((entityId) => {
      const st = this._hass.states[entityId];
      const state = st?.state || "unknown";
      const ov = perEntity.get(entityId) || {};
      const icon = ov.icon || st?.attributes?.icon || "mdi:lightbulb";

      const bgTemplate = ov.color ?? lightsCfg.color;
      const iconTemplate = ov.icon_color ?? lightsCfg.icon_color;

      const bgColor = this._resolveTemplateColor(bgTemplate, entityId, state) || (state === "on" ? "rgba(245,158,11,0.9)" : "rgba(75,85,99,0.45)");
      const iColor = this._resolveTemplateColor(iconTemplate, entityId, state) || (state === "on" ? "#111827" : "#e5e7eb");

      return `
        <button class="sg-room-light-btn" data-entity="${this._esc(entityId)}"
          style="width:${size}px;height:${size}px;border-radius:9999px;border:none;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;align-self:start;background:${this._esc(bgColor)};padding:0;">
          <ha-icon icon="${this._esc(icon)}" style="color:${this._esc(iColor)};--mdc-icon-size:${Math.round(size * 0.5)}px;"></ha-icon>
        </button>
      `;
    }).join("");

    if (align === "justified") {
      return `
        <div style="display:grid;grid-template-columns:repeat(${cols}, minmax(0,1fr));gap:${gap}px;align-items:start;align-content:start;">
          ${buttons}
        </div>
      `;
    }

    const justify = align === "left" ? "start" : align === "right" ? "end" : "center";
    return `
      <div style="display:grid;grid-template-columns:repeat(${cols}, ${size}px);gap:${gap}px;justify-content:${justify};align-items:start;align-content:start;">
        ${buttons}
      </div>
    `;
  }

  _wireLightButtons() {
    const btns = this._inner.querySelectorAll(".sg-room-light-btn");
    btns.forEach((btn) => {
      btn.addEventListener("click", (ev) => {
        ev.preventDefault();
        const entityId = btn.getAttribute("data-entity");
        if (!entityId || !this._hass?.callService) return;
        this._hass.callService("homeassistant", "toggle", { entity_id: entityId });
      });
    });
  }

  _lightOverridesByEntity(lightsCfg) {
    const map = new Map();

    const ingestArray = (arr) => {
      if (!Array.isArray(arr)) return;
      arr.forEach((item) => {
        if (typeof item === "string") {
          map.set(item, { entity: item });
        } else if (item?.entity) {
          map.set(item.entity, item);
        }
      });
    };

    const ingestObject = (obj) => {
      if (!obj || Array.isArray(obj) || typeof obj !== "object") return;
      Object.entries(obj).forEach(([entityId, value]) => {
        if (value === false) {
          map.set(entityId, { entity: entityId, hidden: true });
        } else if (value && typeof value === "object") {
          map.set(entityId, { entity: entityId, ...value });
        } else if (value === true) {
          map.set(entityId, { entity: entityId });
        }
      });
    };

    ingestArray(lightsCfg.entities);
    ingestArray(lightsCfg.items);
    ingestArray(lightsCfg.light);

    ingestObject(lightsCfg.entities);
    ingestObject(lightsCfg.items);
    ingestObject(lightsCfg.light);

    return map;
  }

  _resolveTemplateColor(template, entityId, state) {
    if (template == null) return null;
    if (typeof template !== "string") return String(template);

    const s = template.trim();
    if (!s.startsWith("{{") || !s.endsWith("}}")) return s;

    const expr = s.slice(2, -2).trim();
    try {
      const st = this._hass?.states?.[entityId];
      const fn = new Function("ctx", `with (ctx) { return (${expr}); }`);
      const out = fn({
        hass: this._hass,
        entity: entityId,
        state,
        states: this._hass?.states,
        attributes: st?.attributes || {},
        is_on: state === "on",
      });
      return out == null ? null : String(out);
    } catch (err) {
      console.warn("[seagull-room-card] template eval error", err, template);
      return null;
    }
  }

  _esc(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  _toPx(value, fallback) {
    const n = Number(value);
    return Number.isFinite(n) ? n : fallback;
  }

  _clampOpacity(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return 0.45;
    return Math.min(1, Math.max(0, n));
  }

  _toRgba(color, opacity) {
    const c = String(color).trim();
    const hex = c.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (hex) {
      let h = hex[1];
      if (h.length === 3) h = h.split("").map((x) => x + x).join("");
      const int = parseInt(h, 16);
      const r = (int >> 16) & 255;
      const g = (int >> 8) & 255;
      const b = int & 255;
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    const rgb = c.match(/^rgba?\(([^)]+)\)$/i);
    if (rgb) {
      const parts = rgb[1].split(",").map((v) => Number(v.trim()));
      if (parts.length >= 3 && parts.slice(0, 3).every(Number.isFinite)) {
        const [r, g, b] = parts;
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }
    }
    return c;
  }
}

class SeagullRoomCardEditor extends HTMLElement {
  setConfig(_config) {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div style="padding:12px 0; opacity:.85; font-size:13px; line-height:1.4;">
        <div><b>Seagull Room Card</b></div>
        <div style="margin-top:6px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace;">
          Version: v${SEAGULL_ROOM_CARD_VERSION}<br>
          Commit: ${SEAGULL_ROOM_CARD_COMMIT}
        </div>
        <div style="margin-top:8px; opacity:.75;">Use the YAML tab to edit card configuration.</div>
      </div>
    `;
  }
}

customElements.define("seagull-room-card-editor", SeagullRoomCardEditor);
customElements.define("seagull-room-card", SeagullRoomCard);

if (!window.__SEAGULL_ROOM_CARD_ANNOUNCED__) {
  window.__SEAGULL_ROOM_CARD_ANNOUNCED__ = true;
  console.info(
    `%c🐦 SEAGULL-ROOM-CARD%c v${SEAGULL_ROOM_CARD_VERSION} (%c${SEAGULL_ROOM_CARD_COMMIT}%c) loaded`,
    "color:#fff;background:#f97316;padding:2px 6px;border-radius:4px;font-weight:700;",
    "color:inherit;",
    "color:#f59e0b;font-weight:700;",
    "color:inherit;"
  );
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "seagull-room-card",
  name: "Seagull Room Card",
  preview: true,
  description: `Room card with explicit light buttons (v${SEAGULL_ROOM_CARD_VERSION}, ${SEAGULL_ROOM_CARD_COMMIT})`,
});
