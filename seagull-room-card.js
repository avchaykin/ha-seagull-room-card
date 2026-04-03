class SeagullRoomCard extends HTMLElement {
  static getStubConfig() {
    return {
      type: "custom:seagull-room-card",
      background_color: "#1f2937",
      background_opacity: 0.45,
      border_radius: 16,
    };
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
      this._card.appendChild(this._inner);
      this.appendChild(this._card);
    }

    const bgColor = this._config.background_color ?? "#1f2937";
    const opacity = this._clampOpacity(this._config.background_opacity ?? 0.45);
    const radius = this._toPx(this._config.border_radius ?? 16, 16);

    this._card.style.boxShadow = "none";
    this._card.style.borderRadius = `${radius}px`;
    this._card.style.overflow = "hidden";
    this._card.style.background = this._toRgba(bgColor, opacity);

    this._inner.style.minHeight = "80px";
    this._inner.style.display = "flex";
    this._inner.style.alignItems = "center";
    this._inner.style.justifyContent = "center";
    this._inner.style.padding = "16px";

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

    // #RGB or #RRGGBB
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

    // rgb/rgba
    const rgb = c.match(/^rgba?\(([^)]+)\)$/i);
    if (rgb) {
      const parts = rgb[1].split(",").map((v) => Number(v.trim()));
      if (parts.length >= 3 && parts.slice(0, 3).every(Number.isFinite)) {
        const [r, g, b] = parts;
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }
    }

    // fallback for named/css vars: keep input color if unsupported
    return c;
  }
}

customElements.define("seagull-room-card", SeagullRoomCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "seagull-room-card",
  name: "Seagull Room Card",
  description: "Base room card with configurable translucent background and corner radius",
});
