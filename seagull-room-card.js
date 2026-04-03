const SEAGULL_ROOM_CARD_VERSION = "0.6.2";
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
      tap_action: "more-info",
      double_tap_action: "more-info",
      hold_action: "more-info",
      lights: {
        cols: 4,
        size: 44,
        gap: 10,
        padding: 12,
        padding_top: null,
        padding_right: null,
        padding_bottom: null,
        padding_left: null,
        align: "justified",
        color: "{{ state === 'on' ? 'rgba(245,158,11,0.9)' : 'rgba(75,85,99,0.45)' }}",
        icon_color: "{{ state === 'on' ? '#111827' : '#e5e7eb' }}",
        tap_action: "toggle",
        double_tap_action: "more-info",
        hold_action: "more-info",
        entities: [{ entity: "light.example_light", width: 1 }],
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
      this._icon = document.createElement("ha-icon");
      this._icon.className = "seagull-room-card-icon";
      this._card.appendChild(this._inner);
      this._card.appendChild(this._icon);
      this.appendChild(this._card);
    }

    const cfg = this._config;
    const lightsCfg = cfg.lights || {};

    const bgColor = cfg.background_color ?? "#1f2937";
    const opacity = this._clampOpacity(cfg.background_opacity ?? 0.45);
    const radius = this._toPx(cfg.border_radius ?? 16, 16);
    const borderWidth = Math.max(0, this._toPx(cfg.border_width ?? 1, 1));
    const borderColor = cfg.border_color ?? "rgba(255,255,255,0.25)";

    const icon = cfg.icon ?? "mdi:sofa";
    const iconColor = cfg.icon_color ?? "#ffffff";
    const iconSize = Math.max(8, this._toPx(cfg.icon_size ?? 22, 22));

    const basePadding = Math.max(0, this._toPx(lightsCfg.padding ?? 12, 12));
    const padTop = Math.max(0, this._toPx(lightsCfg.padding_top ?? basePadding, basePadding));
    const padRight = Math.max(0, this._toPx(lightsCfg.padding_right ?? basePadding, basePadding));
    const padBottom = Math.max(0, this._toPx(lightsCfg.padding_bottom ?? basePadding, basePadding));
    const padLeft = Math.max(0, this._toPx(lightsCfg.padding_left ?? basePadding, basePadding));

    this._card.style.boxShadow = "none";
    this._card.style.borderRadius = `${radius}px`;
    this._card.style.overflow = "hidden";
    this._card.style.background = this._toRgba(bgColor, opacity);
    this._card.style.border = `${borderWidth}px solid ${borderColor}`;
    this._card.style.position = "relative";

    this._inner.style.minHeight = "80px";
    this._inner.style.display = "block";
    this._inner.style.padding = `${padTop}px ${padRight}px ${padBottom}px ${padLeft}px`;
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
    this._icon.style.cursor = "pointer";

    const { html, items } = this._buildLightsHtmlAndItems();
    this._renderedLightItems = items;
    this._inner.innerHTML = html;
    this._wireLightButtons();
    this._wireCardIconActions();
  }

  _buildLightsHtmlAndItems() {
    const lightsCfg = this._config.lights || {};
    const cols = Math.max(1, parseInt(lightsCfg.cols ?? lightsCfg.columns ?? 4, 10) || 4);
    const size = Math.max(20, this._toPx(lightsCfg.size ?? 44, 44));
    const gap = Math.max(0, this._toPx(lightsCfg.gap ?? 10, 10));
    const alignRaw = String(lightsCfg.align ?? "justified").toLowerCase();
    const align = ["left", "right", "center", "justified"].includes(alignRaw) ? alignRaw : "justified";

    const items = this._collectLightItems(lightsCfg)
      .filter((it) => !it.hidden)
      .filter((it) => it.entity?.startsWith("light."))
      .filter((it) => !!this._hass?.states?.[it.entity]);

    if (!items.length) return { html: "", items: [] };

    const buttonDefs = items.map((item, index) => {
      const st = this._hass.states[item.entity];
      const state = st?.state || "unknown";

      const icon = item.icon || st?.attributes?.icon || "mdi:lightbulb";
      const bgTemplate = item.color ?? lightsCfg.color;
      const iconTemplate = item.icon_color ?? lightsCfg.icon_color;

      const bgColor = this._resolveTemplateColor(bgTemplate, item.entity, state)
        || (state === "on" ? "rgba(245,158,11,0.9)" : "rgba(75,85,99,0.45)");
      const iColor = this._resolveTemplateColor(iconTemplate, item.entity, state)
        || (state === "on" ? "#111827" : "#e5e7eb");

      const colSpan = Math.max(1, parseInt(item.width ?? 1, 10) || 1);
      const safeColSpan = Math.min(cols, colSpan);
      const btnWidth = size * safeColSpan + gap * (safeColSpan - 1);

      const html = `
        <button class="sg-room-light-btn" data-index="${index}"
          style="grid-column:span ${safeColSpan};width:${btnWidth}px;height:${size}px;border-radius:9999px;border:none;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;align-self:start;background:${this._esc(bgColor)};padding:0;direction:ltr;">
          <ha-icon icon="${this._esc(icon)}" style="color:${this._esc(iColor)};--mdc-icon-size:${Math.round(size * 0.5)}px;"></ha-icon>
        </button>
      `;

      return { html, colSpan: safeColSpan };
    });

    const buttons = buttonDefs.map((b) => b.html).join("");

    if (align === "justified") {
      return {
        items,
        html: `
          <div style="display:grid;grid-template-columns:repeat(${cols}, minmax(0,1fr));gap:${gap}px;align-items:start;align-content:start;justify-items:start;direction:ltr;">
            ${buttons}
          </div>
        `,
      };
    }

    if (align === "right") {
      const rows = [];
      let current = [];
      let used = 0;

      for (const b of buttonDefs) {
        if (used + b.colSpan > cols) {
          rows.push({ items: current, used });
          current = [b];
          used = b.colSpan;
        } else {
          current.push(b);
          used += b.colSpan;
        }
      }
      if (current.length) rows.push({ items: current, used });

      const rowsHtml = rows.map((row) => {
        const empty = Math.max(0, cols - row.used);
        const spacer = empty > 0
          ? `<div style="grid-column:span ${empty};width:${size * empty + gap * (empty - 1)}px;height:1px;"></div>`
          : "";
        const rowButtons = row.items.map((b) => b.html).join("");
        return `
          <div style="display:grid;grid-template-columns:repeat(${cols}, ${size}px);gap:${gap}px;align-items:start;align-content:start;justify-items:start;">
            ${spacer}
            ${rowButtons}
          </div>
        `;
      }).join("");

      return {
        items,
        html: `
          <div style="width:100%;display:flex;flex-direction:column;gap:${gap}px;align-items:stretch;">
            ${rowsHtml}
          </div>
        `,
      };
    }

    const outerJustify = align === "left" ? "flex-start" : "center";

    return {
      items,
      html: `
        <div style="width:100%;display:flex;justify-content:${outerJustify};align-items:flex-start;">
          <div style="display:grid;grid-template-columns:repeat(${cols}, ${size}px);gap:${gap}px;align-items:start;align-content:start;justify-items:start;direction:ltr;">
            ${buttons}
          </div>
        </div>
      `,
    };
  }

  _wireLightButtons() {
    const btns = this._inner.querySelectorAll(".sg-room-light-btn");

    btns.forEach((btn) => {
      let clickTimer = null;
      let holdTimer = null;
      let holdFired = false;

      const index = Number(btn.getAttribute("data-index"));
      const item = this._renderedLightItems?.[index];
      if (!item) return;

      btn.addEventListener("pointerdown", () => {
        holdFired = false;
        clearTimeout(holdTimer);
        holdTimer = setTimeout(() => {
          holdFired = true;
          this._runAction(item, "hold_action");
        }, 420);
      });

      const clearHold = () => {
        clearTimeout(holdTimer);
      };

      btn.addEventListener("pointerup", clearHold);
      btn.addEventListener("pointerleave", clearHold);

      btn.addEventListener("click", (ev) => {
        ev.preventDefault();
        if (holdFired) return;

        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => {
          this._runAction(item, "tap_action");
        }, 210);
      });

      btn.addEventListener("dblclick", (ev) => {
        ev.preventDefault();
        clearTimeout(clickTimer);
        clearTimeout(holdTimer);
        this._runAction(item, "double_tap_action");
      });
    });
  }

  _runAction(item, key) {
    const act = this._resolveAction(item, key);
    if (!act) return;
    this._runGenericAction(act, item.entity);
  }

  _runGenericAction(act, entityId) {
    if (!act) return;
    const hass = this._hass;
    const type = act.action;

    if (type === "toggle") {
      if (!entityId) return;
      hass.callService?.("homeassistant", "toggle", { entity_id: entityId });
      return;
    }

    if (type === "more-info") {
      if (!entityId) return;
      this.dispatchEvent(
        new CustomEvent("hass-more-info", {
          bubbles: true,
          composed: true,
          detail: { entityId },
        })
      );
      return;
    }

    if (type === "navigate") {
      const path = act.navigation_path ?? act.url_path ?? act.path ?? "/";
      if (window?.history?.pushState) {
        window.history.pushState(null, "", path);
        window.dispatchEvent(new Event("location-changed"));
      } else {
        window.location.assign(path);
      }
      return;
    }

    if (type === "perform-action") {
      const perf = act.perform_action ?? act.service;
      if (!perf || typeof perf !== "string") return;
      const [domain, service] = perf.includes(".") ? perf.split(".") : ["homeassistant", perf];
      const data = act.data ?? act.service_data ?? {};
      const target = act.target ?? {};
      hass.callService?.(domain, service, { ...data, ...target });
    }
  }

  _resolveAction(item, key) {
    const lightsCfg = this._config.lights || {};
    const fallback = key === "tap_action" ? "toggle" : "more-info";
    const raw = item?.[key] ?? lightsCfg?.[key] ?? fallback;
    if (!raw) return null;

    if (typeof raw === "string") {
      return { action: raw };
    }

    if (typeof raw === "object") {
      const action = raw.action ?? raw.type;
      if (!action) return null;
      return { ...raw, action };
    }

    return null;
  }

  _resolveCardAction(key) {
    const fallback = "more-info";
    const raw = this._config?.[key] ?? fallback;
    if (!raw) return null;

    if (typeof raw === "string") return { action: raw };
    if (typeof raw === "object") {
      const action = raw.action ?? raw.type;
      if (!action) return null;
      return { ...raw, action };
    }
    return null;
  }

  _wireCardIconActions() {
    const el = this._icon;
    if (!el) return;

    let clickTimer = null;
    let holdTimer = null;
    let holdFired = false;

    el.onpointerdown = () => {
      holdFired = false;
      clearTimeout(holdTimer);
      holdTimer = setTimeout(() => {
        holdFired = true;
        const act = this._resolveCardAction("hold_action");
        this._runGenericAction(act, this._config?.entity);
      }, 420);
    };

    const clearHold = () => clearTimeout(holdTimer);
    el.onpointerup = clearHold;
    el.onpointerleave = clearHold;

    el.onclick = (ev) => {
      ev.preventDefault();
      if (holdFired) return;
      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => {
        const act = this._resolveCardAction("tap_action");
        this._runGenericAction(act, this._config?.entity);
      }, 210);
    };

    el.ondblclick = (ev) => {
      ev.preventDefault();
      clearTimeout(clickTimer);
      clearTimeout(holdTimer);
      const act = this._resolveCardAction("double_tap_action");
      this._runGenericAction(act, this._config?.entity);
    };
  }

  _collectLightItems(lightsCfg) {
    const out = [];

    const fromArray = (arr) => {
      if (!Array.isArray(arr)) return;
      arr.forEach((item) => {
        if (typeof item === "string") {
          out.push({ entity: item, width: 1 });
        } else if (item?.entity) {
          out.push({ width: 1, ...item });
        }
      });
    };

    const fromObject = (obj) => {
      if (!obj || Array.isArray(obj) || typeof obj !== "object") return;
      Object.entries(obj).forEach(([entityId, value]) => {
        if (value === false) {
          out.push({ entity: entityId, hidden: true, width: 1 });
        } else if (value === true) {
          out.push({ entity: entityId, width: 1 });
        } else if (value && typeof value === "object") {
          out.push({ entity: entityId, width: 1, ...value });
        }
      });
    };

    fromArray(lightsCfg.entities);
    fromArray(lightsCfg.items);
    fromArray(lightsCfg.light);

    fromObject(lightsCfg.entities);
    fromObject(lightsCfg.items);
    fromObject(lightsCfg.light);

    return out;
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
  description: `Room card with explicit light buttons and per-item actions (v${SEAGULL_ROOM_CARD_VERSION}, ${SEAGULL_ROOM_CARD_COMMIT})`,
});
