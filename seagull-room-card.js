const SEAGULL_ROOM_CARD_VERSION = "0.2.0";
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
  }

  getCardSize() {
    return 1;
  }

  _render() {
    if (!this._config) return;

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
    this._inner.style.display = "flex";
    this._inner.style.alignItems = "center";
    this._inner.style.justifyContent = "center";
    this._inner.style.padding = "16px";

    this._icon.setAttribute("icon", icon);
    this._icon.style.position = "absolute";
    this._icon.style.left = "10px";
    this._icon.style.top = "10px";
    this._icon.style.color = iconColor;
    this._icon.style.setProperty("--mdc-icon-size", `${iconSize}px`);
    this._icon.style.width = `${iconSize}px`;
    this._icon.style.height = `${iconSize}px`;
    this._icon.style.display = icon ? "block" : "none";

    if (!this._inner.textContent) {
      this._inner.textContent = "Seagull Room Card";
    }
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
  description: `Base room card with configurable background, border and top-left icon (v${SEAGULL_ROOM_CARD_VERSION}, ${SEAGULL_ROOM_CARD_COMMIT})`,
});
