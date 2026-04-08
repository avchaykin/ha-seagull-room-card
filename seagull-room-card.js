const SEAGULL_ROOM_CARD_VERSION = "1.2.0";
const SEAGULL_ROOM_CARD_COMMIT = "dev";

const SEAGULL_ROOM_THEME_DEFAULT = {
  palette_mode: "auto", // auto | day | night
  palette: {
    card_border: { day: "#aaaaaa", night: "#64748b" },
    card_bg: { day: "#eeeeee", night: "#0f172a" },
    card_icon: { day: "#2233aa44", night: "#93c5fd55" },

    text_color: { day: "inherit", night: "#e2e8f0" },
    text_bg: { day: "transparent", night: "transparent" },
    text_border: { day: "transparent", night: "transparent" },

    btn_active_fg: { day: "#111827", night: "#111827" },
    btn_active_bg: { day: "#f59e0b", night: "#f59e0b" },
    btn_inactive_fg: { day: "#e5e7eb", night: "#e5e7eb" },
    btn_inactive_bg: { day: "#4b5563", night: "#374151" },
    default_light_active_fg: { day: "#111827", night: "#f8fafc" },
    default_light_inactive_fg: { day: "#111827", night: "#f8fafc" },
    default_light_inactive_bg: { day: "#cbd5e1", night: "#374151" },
    default_light_auto_inactive_fg: { day: "#111827", night: "#f8fafc" },
    seagull_primary: { day: "#4b5563", night: "#374151" },
    seagull_active: { day: "#f59e0b", night: "#f59e0b" },
    seagull_active_red: { day: "#ef4444", night: "#dc2626" },
    seagull_active_blue: { day: "#3b82f6", night: "#2563eb" },
    seagull_active_green: { day: "#22c55e", night: "#16a34a" },
    seagull_active_cyan: { day: "#06b6d4", night: "#0891b2" },
    seagull_active_purple: { day: "#a855f7", night: "#9333ea" },
    seagull_active_pink: { day: "#ec4899", night: "#db2777" },
    seagull_active_lime: { day: "#84cc16", night: "#65a30d" },
    btn_unavailable_fg: { day: "#f8fafc", night: "#cbd5e1" },
    btn_unavailable_bg: { day: "#cbd5e1", night: "#64748b" },
    btn_border: { day: "transparent", night: "transparent" },

    btn_auto_active_fg: { day: "#eaf2ff", night: "#eaf2ff" },
    btn_auto_active_bg: { day: "#3b82f6", night: "#2563eb" },
    btn_auto_inactive_fg: { day: "#111827", night: "#111827" },
    btn_auto_inactive_bg: { day: "#d1d5db", night: "#94a3b8" },

    btn_empty_inactive_fg: { day: "#111827", night: "#e2e8f0" },
    btn_empty_inactive_bg: { day: "#e5e7eb", night: "#334155" },

    btn_alert_active_fg: { day: "#fffafa", night: "#ffe4e6" },
    btn_alert_active_bg: { day: "#f63b3b", night: "#b91c1c" },

    obsolete_border: { day: "#d1d5db", night: "#94a3b8" },

    seagull_rose: { day: "#aa332244", night: "#aa332266" },
    seagull_indigo: { day: "#2233aa44", night: "#2233aa66" },
    seagull_emerald: { day: "#22aa3344", night: "#22aa3366" },
    seagull_amber: { day: "#cc992244", night: "#cc992266" },
    seagull_violet: { day: "#8844cc44", night: "#8844cc66" },
    seagull_cyan: { day: "#22aacc44", night: "#22aacc66" },
    seagull_orange_red: { day: "#cc552244", night: "#cc552266" },
    seagull_lime: { day: "#55aa2244", night: "#55aa2266" },
    seagull_cornflower: { day: "#4466cc44", night: "#4466cc66" },
    seagull_magenta: { day: "#cc44aa44", night: "#cc44aa66" },
    seagull_aqua: { day: "#22ccaa44", night: "#22ccaa66" },
    seagull_tangerine: { day: "#cc772244", night: "#cc772266" },
    seagull_slate_blue: { day: "#6677aa44", night: "#6677aa66" },
    seagull_olive: { day: "#77994444", night: "#77994466" },
    seagull_plum: { day: "#99447744", night: "#99447766" },
    seagull_steel: { day: "#44779944", night: "#44779966" },
    seagull_copper: { day: "#aa664444", night: "#aa664466" },
    seagull_mint: { day: "#44aa6644", night: "#44aa6666" },
  },
  card: {
    border_radius: 16,
    border_width: 0,
    border_color: "$card_border",
    background_color: "$card_bg",
    background_opacity: 0.45,
    icon: "mdi:sofa",
    icon_color: "$card_icon",
    icon_size: 60,
    font_url: "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap",
  },
  text: {
    color: "$text_color",
    background: "$text_bg",
    border_radius: 10,
    border_width: 0,
    border_color: "$text_border",
    size: 14,
    halign: "left",
    valign: "top",
    padding: 0,
    padding_top: null,
    padding_right: null,
    padding_bottom: null,
    padding_left: null,
  },
  button: {
    align: "right",
    size: 48,
    gap: 5,
    padding: 10,
    padding_top: null,
    padding_right: null,
    padding_bottom: null,
    padding_left: null,
    icons: {
      default: "mdi:help-circle-outline",
      light: { on: "mdi:lightbulb", off: "mdi:lightbulb-off" },
      lock: { locked: "mdi:lock", unlocked: "mdi:lock-open-variant", default: "mdi:lock-reset" },
      binary_sensor: {
        default_on: "mdi:check-circle",
        default_off: "mdi:circle-outline",
        device_class: {
          window: { on: "mdi:window-open", off: "mdi:window-closed" },
          door: { on: "mdi:door-open", off: "mdi:door-closed" },
          opening: { on: "mdi:garage-open", off: "mdi:garage" },
          motion: { on: "mdi:motion-sensor", off: "mdi:motion-sensor-off" },
          occupancy: { on: "mdi:home-account", off: "mdi:home-outline" },
          lock: { on: "mdi:lock-open-variant", off: "mdi:lock" },
        },
      },
    },
    default: {
      border_size: 0,
      border_color: "$btn_border",
      active: { color: "$btn_active_fg", background: "$btn_active_bg" },
      inactive: { color: "$btn_inactive_fg", background: "$btn_inactive_bg" },
      unavailable: { color: "$btn_unavailable_fg", background: "$btn_unavailable_bg" },
      obsolete: { border_size: 2, border_color: "$obsolete_border" },
    },
    automation: {
      active: { color: "$btn_auto_active_fg", background: "$btn_auto_active_bg" },
      inactive: { color: "$btn_auto_inactive_fg", background: "$btn_auto_inactive_bg" },
    },
    lock: {
      active: { color: "$btn_alert_active_fg", background: "$btn_alert_active_bg" },
    },
    binary_sensor: {
      device_class: {
        door: {
          active: { color: "$btn_alert_active_fg", background: "$btn_alert_active_bg" },
        },
      },
    },
    empty: {
      inactive: { color: "$btn_empty_inactive_fg", background: "$btn_empty_inactive_bg" },
    },
  },
};

class SeagullRoomCard extends HTMLElement {
  static getStubConfig() {
    return {
      type: "custom:seagull-room-card",
      background_color: "#eeeeee",
      background_opacity: 0.45,
      border_radius: 16,
      border_width: 0,
      border_color: "#aaaaaa",
      icon: "mdi:sofa",
      icon_color: "#2233aa44",
      icon_size: 60,
      tap_action: "more-info",
      double_tap_action: "more-info",
      hold_action: "more-info",
      variables: {
        temperature: "{{ states('sensor.second_bedroom_temperature') }}",
        humidity: "{{ states('sensor.second_bedroom_humidity') }}",
      },
      text: {
        entity: null,
        value: "",
        color: "inherit",
        background_color: "transparent",
        border_radius: 10,
        size: 14,
        halign: "left",
        valign: "top",
        padding: 0,
        padding_top: null,
        padding_right: null,
        padding_bottom: null,
        padding_left: null,
        tap_action: "more-info",
        double_tap_action: "more-info",
        hold_action: "more-info",
      },
      buttons: {
        cols: 3,
        rows: 1,
        size: 48,
        gap: 5,
        padding: 10,
        padding_top: null,
        padding_right: null,
        padding_bottom: null,
        padding_left: null,
        align: "right",
        icon: null,
        color: "{{ ((entity || '').startsWith('lock.') ? state === 'unlocked' : state === 'on') ? '#111827' : '#e5e7eb' }}",
        background: "{{ ((entity || '').startsWith('lock.') ? state === 'unlocked' : state === 'on') ? '#f59e0b' : '#4b5563' }}",
        border: 0,
        border_color: "transparent",
        use_light_color: false, // false | color | brightness | both/true
        invert_state: false,
        tap_action: "toggle",
        double_tap_action: "more-info",
        hold_action: "more-info",
        obsolete: null, // hours or { hours, color, background, border, border_color, icon }
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

    this._theme = this._normalizeTheme(this._config?.theme);

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
    const buttonsCfg = cfg.buttons || cfg.lights || {};

    const themeCard = this._theme?.card || {};
    const cardDef = SEAGULL_ROOM_THEME_DEFAULT.card;
    const bgColor = this._paletteColor(cfg.background_color ?? themeCard.background_color ?? cardDef.background_color);
    const opacity = this._clampOpacity(cfg.background_opacity ?? themeCard.background_opacity ?? cardDef.background_opacity);
    const radius = this._toPx(cfg.border_radius ?? themeCard.border_radius ?? cardDef.border_radius, cardDef.border_radius);
    const borderWidth = Math.max(0, this._toPx(cfg.border_width ?? themeCard.border_width ?? cardDef.border_width, cardDef.border_width));
    const borderColor = this._paletteColor(cfg.border_color ?? themeCard.border_color ?? cardDef.border_color);
    const fontFamily = cfg.font_family ?? themeCard.font_family ?? cardDef.font_family ?? "'Oswald', sans-serif";
    const fontWeight = cfg.font_weight ?? themeCard.font_weight ?? cardDef.font_weight ?? null;
    const fontSizeRaw = cfg.font_size ?? themeCard.font_size ?? cardDef.font_size ?? null;
    const fontUrl = cfg.font_url ?? themeCard.font_url ?? cardDef.font_url ?? null;

    const icon = cfg.icon ?? themeCard.icon ?? cardDef.icon;
    const iconColor = this._paletteColor(cfg.icon_color ?? themeCard.icon_color ?? cardDef.icon_color);
    const iconSize = Math.max(8, this._toPx(cfg.icon_size ?? themeCard.icon_size ?? cardDef.icon_size, cardDef.icon_size));

    const themeBtn = this._theme?.button || {};
    const btnDef = SEAGULL_ROOM_THEME_DEFAULT.button;
    const basePadding = Math.max(0, this._toPx(buttonsCfg.padding ?? themeBtn.padding ?? btnDef.padding, btnDef.padding));
    const padTop = Math.max(0, this._toPx(buttonsCfg.padding_top ?? themeBtn.padding_top ?? basePadding, basePadding));
    const padRight = Math.max(0, this._toPx(buttonsCfg.padding_right ?? themeBtn.padding_right ?? basePadding, basePadding));
    const padBottom = Math.max(0, this._toPx(buttonsCfg.padding_bottom ?? themeBtn.padding_bottom ?? basePadding, basePadding));
    const padLeft = Math.max(0, this._toPx(buttonsCfg.padding_left ?? themeBtn.padding_left ?? basePadding, basePadding));

    const size = Math.max(20, this._toPx(buttonsCfg.size ?? themeBtn.size ?? btnDef.size, btnDef.size));
    const gap = Math.max(0, this._toPx(buttonsCfg.gap ?? themeBtn.gap ?? btnDef.gap, btnDef.gap));
    const minRows = Math.max(0, parseInt(buttonsCfg.rows ?? 0, 10) || 0);
    const minRowsHeight = minRows > 0
      ? Math.round(padTop + padBottom + minRows * size + Math.max(0, minRows - 1) * gap)
      : 0;

    this._card.style.boxShadow = "none";
    this._card.style.borderRadius = `${radius}px`;
    this._card.style.overflow = "hidden";
    const bgIsRgba = /^rgba\(/i.test(String(bgColor).trim());
    this._card.style.background = (cfg.background_opacity == null && bgIsRgba)
      ? String(bgColor)
      : this._toRgba(bgColor, opacity);
    this._card.style.border = `${borderWidth}px solid ${borderColor}`;
    this._card.style.position = "relative";
    this._card.style.transition = "filter 120ms ease";
    this._card.style.fontFamily = String(fontFamily);
    if (fontWeight != null && fontWeight !== "") this._card.style.fontWeight = String(fontWeight);
    else this._card.style.removeProperty("font-weight");
    if (fontSizeRaw != null && fontSizeRaw !== "") this._card.style.fontSize = `${Math.max(8, this._toPx(fontSizeRaw, 14))}px`;
    else this._card.style.removeProperty("font-size");
    this._ensureFontLoaded(fontUrl);

    this._card.onmouseenter = () => {
      this._card.style.filter = "brightness(1.03)";
    };
    this._card.onmouseleave = () => {
      this._card.style.filter = "brightness(1)";
    };

    this._inner.style.minHeight = `${Math.max(80, minRowsHeight)}px`;
    this._inner.style.display = "block";
    this._inner.style.padding = `${padTop}px ${padRight}px ${padBottom}px ${padLeft}px`;
    this._inner.style.boxSizing = "border-box";
    this._inner.style.position = "relative";
    this._inner.style.zIndex = "2";

    this._updateCardIcon(icon, iconColor, iconSize);
    this._variablesContext = this._buildVariablesContext();

    const textHtml = this._buildTextHtml();
    const { html, items } = this._buildLightsHtmlAndItems();
    this._renderedLightItems = items;

    const combinedHtml = `
      ${textHtml}
      <div class="sg-room-buttons-layer" style="position:relative;z-index:3;">${html}</div>
    `;
    if (this._lastLightsHtml !== combinedHtml) {
      this._inner.innerHTML = combinedHtml;
      this._lastLightsHtml = combinedHtml;
      this._wireLightButtons();
    }

    this._wireTextActions();
    this._wireCardIconActions();
  }

  _updateCardIcon(icon, iconColor, iconSize) {
    if (!this._icon) return;

    const sig = `${icon}|${iconColor}|${iconSize}`;
    if (this._iconSig !== sig) {
      const prevIcon = this._icon.getAttribute("icon");
      if (prevIcon !== icon) this._icon.setAttribute("icon", icon);
      this._icon.style.color = iconColor;
      this._icon.style.setProperty("--mdc-icon-size", `${iconSize}px`);
      this._icon.style.width = `${iconSize}px`;
      this._icon.style.height = `${iconSize}px`;
      this._iconSig = sig;
    }

    this._icon.style.position = "absolute";
    this._icon.style.left = "10px";
    this._icon.style.top = "10px";
    this._icon.style.display = icon ? "block" : "none";
    this._icon.style.cursor = "pointer";
    this._icon.style.zIndex = "1";
  }

  _buildVariablesContext() {
    const out = {};
    const vars = this._config?.variables;
    if (!vars || typeof vars !== "object" || Array.isArray(vars)) return out;

    for (const [k, v] of Object.entries(vars)) {
      out[k] = this._resolveDynamicValue(v, this._config?.entity, this._hass?.states?.[this._config?.entity]?.state, null, out);
    }

    return out;
  }

  _entityList(entityRef) {
    if (Array.isArray(entityRef)) return entityRef.map((x) => String(x || "").trim()).filter(Boolean);
    const one = String(entityRef || "").trim();
    return one ? [one] : [];
  }

  _primaryEntityId(entityRef) {
    return this._entityList(entityRef)[0] || "";
  }

  _ensureFontLoaded(url) {
    const href = String(url || "").trim();
    if (!href || typeof document === "undefined") return;
    if (!this._loadedFontLinks) this._loadedFontLinks = new Set();
    if (this._loadedFontLinks.has(href)) return;

    const existing = document.querySelector(`link[data-sg-font="${CSS.escape(href)}"]`)
      || document.querySelector(`link[href="${href}"]`);
    if (existing) {
      this._loadedFontLinks.add(href);
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.setAttribute("data-sg-font", href);
    document.head.appendChild(link);
    this._loadedFontLinks.add(href);
  }

  _buttonView(item, buttonsCfg = {}) {
    const entityId = this._primaryEntityId(item?.entity);
    const state = entityId ? this._hass?.states?.[entityId]?.state : "";
    const raw = this._resolveDynamicValue(item?.view ?? buttonsCfg?.view, item?.entity, state, null);
    const cfg = raw && typeof raw === "object" ? raw : {};
    const type = String(this._resolveDynamicValue(cfg.type, item?.entity, state, "button") || "button").trim().toLowerCase();
    const style = String(this._resolveDynamicValue(cfg.style, item?.entity, state, "") || "").trim().toLowerCase();
    return { type: type || "button", style };
  }

  _isNumberView(item, buttonsCfg = {}) {
    return this._buttonView(item, buttonsCfg).type === "number";
  }

  _isRotatingView(item, buttonsCfg = {}) {
    const t = this._buttonView(item, buttonsCfg).type;
    return t === "number";
  }

  _viewRotationIndex(item, index = 0, count = 1) {
    if (!this._climatRotation) this._climatRotation = {};
    const key = this._climatKey(item, index);
    return Math.max(0, Number(this._climatRotation[key] || 0)) % Math.max(1, count);
  }

  _viewDisplayEntityId(item, buttonsCfg = {}, index = 0) {
    const entities = this._entityList(item?.entity);
    if (!entities.length) return "";
    if (!this._isRotatingView(item, buttonsCfg)) return entities[0];
    const i = this._viewRotationIndex(item, index, entities.length);
    return entities[i] || entities[0];
  }

  _climatKey(item, index = 0) {
    const explicit = item?.id ?? item?.key ?? item?.name ?? null;
    if (explicit != null && String(explicit).trim()) return `id:${String(explicit).trim()}`;
    const entities = this._entityList(item?.entity);
    if (entities.length) return `e:${entities.join("|")}`;
    return `idx:${index}`;
  }

  _rotateView(index, item) {
    const entities = this._entityList(item?.entity);
    if (!entities.length) return;
    if (!this._climatRotation) this._climatRotation = {};
    const key = this._climatKey(item, index);
    const cur = Math.max(0, Number(this._climatRotation[key] || 0));
    this._climatRotation[key] = (cur + 1) % entities.length;
    this._render();
  }

  _climatSuffix(st, state, unitCfg = true) {
    if (unitCfg === false) return "";
    if (typeof unitCfg === "string" && unitCfg.trim()) return unitCfg.trim();
    const unit = String(st?.attributes?.unit_of_measurement || "").trim();
    const dc = String(st?.attributes?.device_class || "").toLowerCase();
    if (unit.includes("%") || dc === "humidity" || /^\s*\d+(\.\d+)?\s*%\s*$/.test(String(state))) return "%";
    if (unit === "°C" || unit === "°F") return unit;
    if (unit.includes("°") || dc === "temperature") return "°C";
    return "";
  }

  _formatClimatValue(st, state, suffix = "") {
    const n = Number(state);
    if (!Number.isFinite(n)) return String(state ?? "");
    if (suffix === "%") return String(Math.round(n));
    if (suffix === "°C" || suffix === "°F") return n.toFixed(1);
    return String(Math.round(n * 10) / 10);
  }

  _buildTextHtml() {
    const textCfg = this._config?.text;
    if (!textCfg) return "";

    const entityId = this._config?.entity;
    const state = entityId && this._hass?.states?.[entityId]
      ? this._hass.states[entityId].state
      : undefined;

    const raw = this._resolveDynamicValue(textCfg.value, entityId, state, "");
    const value = raw == null ? "" : String(raw);
    if (!value.trim()) return "";

    const themeText = this._theme?.text || {};
    const txtDef = SEAGULL_ROOM_THEME_DEFAULT.text;
    const size = Math.max(8, this._toPx(textCfg.size ?? themeText.size ?? txtDef.size, txtDef.size));
    const textColor = this._paletteColor(this._resolveDynamicValue(textCfg.color, entityId, state, themeText.color ?? txtDef.color));
    const textBg = this._paletteColor(this._resolveDynamicValue(textCfg.background_color ?? textCfg.background, entityId, state, themeText.background ?? themeText.background_color ?? txtDef.background));
    const textRadius = Math.max(0, this._toPx(textCfg.border_radius ?? themeText.border_radius ?? txtDef.border_radius, txtDef.border_radius));
    const textBorderW = Math.max(0, this._toPx(textCfg.border_width ?? themeText.border_width ?? txtDef.border_width, txtDef.border_width));
    const textBorderColor = this._paletteColor(this._resolveDynamicValue(textCfg.border_color, entityId, state, themeText.border_color ?? txtDef.border_color));
    const halign = ["left", "center", "right"].includes(String(textCfg.halign ?? themeText.halign ?? txtDef.halign).toLowerCase())
      ? String(textCfg.halign ?? themeText.halign ?? txtDef.halign).toLowerCase()
      : txtDef.halign;
    const valign = ["top", "center", "bottom"].includes(String(textCfg.valign ?? themeText.valign ?? txtDef.valign).toLowerCase())
      ? String(textCfg.valign ?? themeText.valign ?? txtDef.valign).toLowerCase()
      : txtDef.valign;

    const basePadding = Math.max(0, this._toPx(textCfg.padding ?? themeText.padding ?? txtDef.padding, txtDef.padding));
    const padTop = Math.max(0, this._toPx(textCfg.padding_top ?? themeText.padding_top ?? basePadding, basePadding));
    const padRight = Math.max(0, this._toPx(textCfg.padding_right ?? themeText.padding_right ?? basePadding, basePadding));
    const padBottom = Math.max(0, this._toPx(textCfg.padding_bottom ?? themeText.padding_bottom ?? basePadding, basePadding));
    const padLeft = Math.max(0, this._toPx(textCfg.padding_left ?? themeText.padding_left ?? basePadding, basePadding));

    const alignY = valign === "top" ? "flex-start" : valign === "bottom" ? "flex-end" : "center";

    return `
      <div class="sg-room-text-layer" style="position:absolute;inset:0;z-index:2;pointer-events:auto;display:flex;align-items:${alignY};padding:${padTop}px ${padRight}px ${padBottom}px ${padLeft}px;box-sizing:border-box;overflow:hidden;cursor:pointer;">
        <style>
          .sg-room-text-layer h1,
          .sg-room-text-layer h2,
          .sg-room-text-layer h3 {
            margin: 0;
            padding: 0;
            font-weight: 700;
            line-height: 1.2;
          }
          .sg-room-text-layer h1 { font-size: 1.35em; }
          .sg-room-text-layer h2 { font-size: 1.2em; }
          .sg-room-text-layer h3 { font-size: 1.1em; }
        </style>
        <div style="width:100%;text-align:${halign};font-size:${size}px;line-height:1.35;color:${this._esc(textColor)};background:${this._esc(textBg)};border-radius:${textRadius}px;border:${textBorderW}px solid ${this._esc(textBorderColor)};padding:6px 8px;box-sizing:border-box;display:block;">${value}</div>
      </div>
    `;
  }

  _buildLightsHtmlAndItems() {
    const buttonsCfg = this._config.buttons || this._config.lights || {};
    const themeBtn = this._theme?.button || {};
    const btnDef = SEAGULL_ROOM_THEME_DEFAULT.button;
    const cols = Math.max(1, parseInt(buttonsCfg.cols ?? buttonsCfg.columns ?? 3, 10) || 3);
    const size = Math.max(20, this._toPx(buttonsCfg.size ?? themeBtn.size ?? btnDef.size, btnDef.size));
    const gap = Math.max(0, this._toPx(buttonsCfg.gap ?? themeBtn.gap ?? btnDef.gap, btnDef.gap));
    const alignRaw = String(buttonsCfg.align ?? themeBtn.align ?? btnDef.align).toLowerCase();
    const align = ["left", "right", "center", "justified"].includes(alignRaw) ? alignRaw : "justified";

    const items = this._collectButtonItems(buttonsCfg)
      .filter((it) => !it.hidden)
      .filter((it) => this._toBool(it?.empty, false) || !!it.entity || !!it.icon || !!buttonsCfg.icon)
      .map((it) => {
        const entityId = this._primaryEntityId(it?.entity);
        const st = entityId ? this._hass?.states?.[entityId] : null;
        const state = st?.state ?? "";

        const keepSpotRaw = Object.prototype.hasOwnProperty.call(it || {}, "keep_spot")
          ? it.keep_spot
          : buttonsCfg.keep_spot;
        const keepSpot = this._toBool(this._resolveDynamicValue(keepSpotRaw, entityId, state, false), false);

        const hasEntityState = !entityId || !!st;
        const isVisible = this._toBool(it?.empty, false) || this._isButtonItemVisible(it, buttonsCfg);

        if (hasEntityState && isVisible) return it;
        if (!keepSpot) return null;

        return { ...it, empty: true };
      })
      .filter(Boolean);

    if (!items.length) return { html: "", items: [] };

    const renderButton = (item, index, opts = {}) => {
      const mini = !!opts.mini;
      const entityId = this._viewDisplayEntityId(item, buttonsCfg, index);
      const hasEntity = !!entityId;
      const st = hasEntity ? this._hass.states[entityId] : null;
      const state = st?.state || "unknown";
      const isEmpty = !!this._resolveDynamicValue(item.empty ?? buttonsCfg.empty, item.entity, state, false);
      const colSpan = mini ? 1 : Math.max(1, parseInt(item.width ?? 1, 10) || 1);
      const safeColSpan = Math.min(cols, colSpan);
      const btnSize = mini ? Math.max(10, Math.floor(size * 0.36)) : size;
      const btnWidth = mini ? btnSize : (size * safeColSpan + gap * (safeColSpan - 1));

      if ((!hasEntity && isEmpty) || isEmpty) {
        const emptyHtml = `<div aria-hidden="true" style="${mini ? "" : `grid-column:span ${safeColSpan};`}width:${btnWidth}px;height:${btnSize}px;"></div>`;
        return { html: emptyHtml, colSpan: safeColSpan };
      }

      const domain = String(entityId || "").split(".")[0];
      const defaultDomainIcon = this._defaultEntityIcon(entityId, state, st?.attributes);
      const obsoleteCfg = this._resolveObsoleteConfig(item.obsolete ?? buttonsCfg.obsolete);
      const isObsolete = this._isEntityObsolete(st, obsoleteCfg?.hours);
      const isUnavailable = state === "unavailable";
      const themeStyle = this._resolveThemeButtonStyle(item, buttonsCfg, st, state, isObsolete);

      const baseIconTpl = isObsolete
        ? (obsoleteCfg.icon ?? item.icon ?? buttonsCfg.icon ?? themeStyle.icon)
        : (item.icon ?? buttonsCfg.icon ?? themeStyle.icon);
      const iconTplSelected = baseIconTpl;
      const entityOriginalIcon = st?.attributes?.icon || defaultDomainIcon;
      const resolvedIcon = this._resolveDynamicValue(iconTplSelected, item.entity, state, entityOriginalIcon);
      const hasExplicitIcon = !(iconTplSelected == null || iconTplSelected === false || String(iconTplSelected).trim() === "");
      const icon = (isUnavailable && !hasExplicitIcon) ? entityOriginalIcon : resolvedIcon;

      const iconColorTpl = isObsolete
        ? (obsoleteCfg.color ?? obsoleteCfg.icon_color ?? item.color ?? item.icon_color ?? buttonsCfg.color ?? buttonsCfg.icon_color ?? themeStyle.color)
        : (item.color ?? item.icon_color ?? buttonsCfg.color ?? buttonsCfg.icon_color ?? themeStyle.color);
      const bgTpl = isObsolete
        ? (obsoleteCfg.background ?? item.background ?? buttonsCfg.background ?? buttonsCfg.bg ?? themeStyle.background)
        : (item.background ?? buttonsCfg.background ?? buttonsCfg.bg ?? themeStyle.background);
      const borderTpl = isObsolete
        ? (obsoleteCfg.border ?? item.border ?? buttonsCfg.border ?? themeStyle.border_size)
        : (item.border ?? buttonsCfg.border ?? themeStyle.border_size);
      const borderColorTpl = isObsolete
        ? (obsoleteCfg.border_color ?? item.border_color ?? buttonsCfg.border_color ?? themeStyle.border_color)
        : (item.border_color ?? buttonsCfg.border_color ?? themeStyle.border_color);

      const lightColorModeRaw = this._resolveDynamicValue(
        item.use_light_color ?? item.light_color ?? buttonsCfg.use_light_color ?? buttonsCfg.light_color,
        item.entity,
        state,
        false
      );
      const lightColorMode = this._normalizeLightColorMode(lightColorModeRaw);
      const invertState = !!this._resolveDynamicValue(item.invert_state ?? buttonsCfg.invert_state, item.entity, state, false);
      const baseActive = this._isEntityActive(entityId, state);
      const isActive = invertState ? !baseActive : baseActive;

      const bDef = SEAGULL_ROOM_THEME_DEFAULT.button;
      const dDef = bDef.default || {};
      const emptyDef = bDef.empty || {};
      const autoDef = bDef.automation || {};
      const defaultBg = !hasEntity
        ? (emptyDef?.inactive?.background ?? "#e5e7eb")
        : (isUnavailable
          ? (dDef?.unavailable?.background ?? "#6b7280")
          : ((domain === "automation")
            ? (isActive ? (autoDef?.active?.background ?? "#3b82f6") : (autoDef?.inactive?.background ?? "#d1d5db"))
            : (isActive ? (dDef?.active?.background ?? "#f59e0b") : (dDef?.inactive?.background ?? "#4b5563"))));
      let bgColor = this._paletteColor(this._resolveDynamicValue(bgTpl, item.entity, state, defaultBg));
      if (hasEntity && !isUnavailable && lightColorMode !== "false" && entityId.startsWith("light.") && state === "on") {
        const resolvedLight = this._resolveLightEntityColor(st?.attributes, lightColorMode);
        if (resolvedLight) bgColor = resolvedLight;
      }

      const defaultIconColor = !hasEntity
        ? (emptyDef?.inactive?.color ?? "#9ca3af")
        : (isUnavailable
          ? (dDef?.unavailable?.color ?? "#d1d5db")
          : ((domain === "automation")
            ? (isActive ? (autoDef?.active?.color ?? "#eaf2ff") : (autoDef?.inactive?.color ?? "#111827"))
            : (isActive ? (dDef?.active?.color ?? "#111827") : (dDef?.inactive?.color ?? "#e5e7eb"))));
      const iColor = this._paletteColor(this._resolveDynamicValue(iconColorTpl, item.entity, state, defaultIconColor));
      const climatIconTextColor = this._paletteColor(isActive ? "$default_light_active_fg" : "$default_light_inactive_fg") || iColor;
      const climatIconBgColor = this._paletteColor("$default_light_inactive_bg") || bgColor;
      const borderW = Math.max(0, Number(this._resolveDynamicValue(borderTpl, item.entity, state, 0)) || 0);
      const borderColor = this._paletteColor(this._resolveDynamicValue(borderColorTpl, item.entity, state, "$btn_border"));
      const borderRadiusRaw = this._resolveDynamicValue(item.border_radius ?? buttonsCfg.border_radius ?? themeStyle.border_radius, item.entity, state, null);
      const borderRadiusCss = borderRadiusRaw == null || borderRadiusRaw === "" ? "9999px" : `${Math.max(0, this._toPx(borderRadiusRaw, 9999))}px`;
      const unavailablePattern = (hasEntity && isUnavailable)
        ? "background-image:repeating-linear-gradient(135deg, rgba(255,255,255,0.22) 0px, rgba(255,255,255,0.22) 6px, rgba(255,255,255,0) 6px, rgba(255,255,255,0) 12px);"
        : "";
      const gridSpanStyle = mini ? "" : `grid-column:span ${safeColSpan};`;
      const view = this._buttonView(item, buttonsCfg);
      const isNumber = view.type === "number";
      const numberStyle = view.style || "big";
      const gaugeCfg = view.type === "gauge" ? ((item?.view && typeof item.view === "object") ? item.view : ((buttonsCfg?.view && typeof buttonsCfg.view === "object") ? buttonsCfg.view : {})) : null;
      const gaugeStyle = String(this._resolveDynamicValue(gaugeCfg?.style, item.entity, state, "donut")).toLowerCase();
      const gaugeEnabled = !!gaugeCfg && gaugeStyle === "donut";

      const toScaleMinMax = (scale) => {
        if (scale && typeof scale === "object") {
          const min = Number(scale.min ?? 0);
          const max = Number(scale.max ?? 100);
          return {
            min: Number.isFinite(min) ? min : 0,
            max: Number.isFinite(max) ? max : 100,
          };
        }
        const n = Number(scale);
        return { min: 0, max: Number.isFinite(n) && n !== 0 ? n : 100 };
      };

      const gaugeValueRaw = this._resolveDynamicValue(gaugeCfg?.value, item.entity, state, state);
      const gaugeNumericValue = Number(gaugeValueRaw);
      const scale = toScaleMinMax(this._resolveDynamicValue(gaugeCfg?.scale, item.entity, state, 100));
      const denom = (scale.max - scale.min);
      const gaugeProgress = Number.isFinite(gaugeNumericValue) && Number.isFinite(denom) && denom !== 0
        ? Math.max(0, Math.min(1, (gaugeNumericValue - scale.min) / denom))
        : 0;
      const gaugeDefaultColor = this._paletteColor(dDef?.active?.background ?? "#f59e0b");
      const gaugeColor = this._paletteColor(this._resolveDynamicValue(gaugeCfg?.color, item.entity, state, gaugeDefaultColor));
      const gaugeBg = this._paletteColor(this._resolveDynamicValue(gaugeCfg?.background, item.entity, state, bgColor));
      const gaugeWidth = Math.max(1, this._toPx(this._resolveDynamicValue(gaugeCfg?.width, item.entity, state, Math.max(2, Math.round(btnSize * 0.12))), Math.max(2, Math.round(btnSize * 0.12))));
      const gaugePosRaw = Number(this._resolveDynamicValue(gaugeCfg?.position, item.entity, state, 0));
      const gaugePos = Number.isFinite(gaugePosRaw) ? Math.max(0, Math.min(1, gaugePosRaw)) : 0;
      const visualBorderW = gaugeEnabled ? 0 : borderW;
      const visualBgColor = (gaugeEnabled || (isNumber && numberStyle === "big")) ? "transparent" : bgColor;
      const donutHtml = gaugeEnabled
        ? `<span aria-hidden="true" style="position:absolute;inset:1px;border-radius:inherit;background:conic-gradient(from ${gaugePos}turn, ${this._esc(gaugeColor)} 0deg ${Math.round(gaugeProgress * 360)}deg, ${this._esc(gaugeBg)} ${Math.round(gaugeProgress * 360)}deg 360deg);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - ${gaugeWidth}px),#000 calc(100% - ${gaugeWidth}px));mask:radial-gradient(farthest-side,transparent calc(100% - ${gaugeWidth}px),#000 calc(100% - ${gaugeWidth}px));pointer-events:none;"></span>`
        : "";

      const unitCfg = this._resolveDynamicValue((item?.view && typeof item.view === "object" ? item.view.unit_of_measurement : undefined)
        ?? (buttonsCfg?.view && typeof buttonsCfg.view === "object" ? buttonsCfg.view.unit_of_measurement : undefined), item.entity, state, true);
      const numberFontFamily = this._resolveDynamicValue((item?.view && typeof item.view === "object" ? (item.view.font_familly ?? item.view.font_family) : undefined)
        ?? (buttonsCfg?.view && typeof buttonsCfg.view === "object" ? (buttonsCfg.view.font_familly ?? buttonsCfg.view.font_family) : undefined), item.entity, state, "inherit");
      const numberFontWeight = this._resolveDynamicValue((item?.view && typeof item.view === "object" ? item.view.font_weight : undefined)
        ?? (buttonsCfg?.view && typeof buttonsCfg.view === "object" ? buttonsCfg.view.font_weight : undefined), item.entity, state, 400);
      const valueFontSizeCfg = this._resolveDynamicValue((item?.view && typeof item.view === "object" ? item.view.value_font_size : undefined)
        ?? (buttonsCfg?.view && typeof buttonsCfg.view === "object" ? buttonsCfg.view.value_font_size : undefined), item.entity, state, null);
      const unitFontSizeCfg = this._resolveDynamicValue((item?.view && typeof item.view === "object" ? item.view.unit_font_size : undefined)
        ?? (buttonsCfg?.view && typeof buttonsCfg.view === "object" ? buttonsCfg.view.unit_font_size : undefined), item.entity, state, null);
      const climatSuffix = this._climatSuffix(st, state, unitCfg);
      const climatValue = this._formatClimatValue(st, state, climatSuffix);
      const showClimatValue = !isUnavailable;
      const valueFontPxBig = valueFontSizeCfg == null ? Math.max(9, Math.round(btnSize * 0.34)) : Math.max(8, this._toPx(valueFontSizeCfg, 11));
      const unitFontPxBig = unitFontSizeCfg == null ? Math.max(7, Math.round(btnSize * 0.17)) : Math.max(7, this._toPx(unitFontSizeCfg, 8));
      const valueFontPxThree = valueFontSizeCfg == null ? Math.max(9, Math.round(btnSize * 0.31)) : Math.max(8, this._toPx(valueFontSizeCfg, 10));
      const unitFontPxThree = unitFontSizeCfg == null ? Math.max(7, Math.round(btnSize * 0.17)) : Math.max(7, this._toPx(unitFontSizeCfg, 8));
      const gaugeShowValue = this._toBool(this._resolveDynamicValue(gaugeCfg?.show_value, item.entity, state, false), false);
      const gaugeValue = this._formatClimatValue(st, state, climatSuffix);
      const contentHtml = isNumber
        ? (numberStyle === "big"
          ? `<span style="position:relative;z-index:1;width:100%;height:100%;display:block;font-family:${this._esc(String(numberFontFamily))};">
              <ha-icon icon="${this._esc(icon)}" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:${this._esc(climatIconBgColor)};opacity:.95;--mdc-icon-size:${Math.max(16, Math.round(btnSize * 0.9))}px;"></ha-icon>
              ${showClimatValue ? `<span style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:inline-flex;align-items:flex-start;line-height:1;color:${this._esc(climatIconTextColor)};font-size:${valueFontPxBig}px;font-weight:${this._esc(String(numberFontWeight))};">
                <span>${this._esc(climatValue)}</span>
                ${climatSuffix ? `<span style="margin-left:0px;margin-top:0.12em;font-size:${unitFontPxBig}px;opacity:.95;line-height:1;">${this._esc(climatSuffix)}</span>` : ""}
              </span>` : ""}
            </span>`
          : `<span style="position:relative;z-index:1;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:2px 0;font-family:${this._esc(String(numberFontFamily))};">
              ${showClimatValue ? `<span style="height:60%;display:flex;align-items:center;justify-content:center;line-height:1;color:${this._esc(iColor)};font-size:${valueFontPxThree}px;font-weight:${this._esc(String(numberFontWeight))};transform:translateY(8px);position:relative;">
                ${climatSuffix ? `<span style="position:absolute;top:-0.42em;left:50%;transform:translateX(-50%);font-size:${unitFontPxThree}px;opacity:.9;line-height:1;">${this._esc(climatSuffix)}</span>` : ""}
                <span style="display:block;">${this._esc(climatValue)}</span>
              </span>` : `<span style="height:60%;"></span>`}
              <ha-icon icon="${this._esc(icon)}" style="position:relative;top:${showClimatValue ? "-2" : "0"}px;color:${this._esc(iColor)};--mdc-icon-size:${Math.max(10, Math.round(btnSize * (showClimatValue ? 0.24 : 0.34)))}px;"></ha-icon>
            </span>`)
        : (gaugeEnabled && gaugeShowValue)
          ? `<span style="position:relative;z-index:1;width:100%;height:100%;display:block;font-family:${this._esc(String(numberFontFamily))};">
              <ha-icon icon="${this._esc(icon)}" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:${this._esc(this._toRgba(iColor, 0.2))};opacity:1;--mdc-icon-size:${Math.max(12, Math.round(btnSize * 0.5))}px;"></ha-icon>
              <span style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:inline-flex;align-items:flex-start;line-height:1;color:${this._esc(iColor)};font-size:${valueFontPxBig}px;font-weight:${this._esc(String(numberFontWeight))};">
                <span>${this._esc(gaugeValue)}</span>
                ${climatSuffix ? `<span style="margin-left:0px;margin-top:0.12em;font-size:${unitFontPxBig}px;opacity:.95;line-height:1;">${this._esc(climatSuffix)}</span>` : ""}
              </span>
            </span>`
        : `<ha-icon icon="${this._esc(icon)}" style="position:relative;z-index:1;color:${this._esc(iColor)};--mdc-icon-size:${Math.round(btnSize * 0.5)}px;"></ha-icon>`;

      const html = `<button class="sg-room-light-btn" data-index="${index}" style="${gridSpanStyle}width:${btnWidth}px;height:${btnSize}px;border-radius:${borderRadiusCss};border:${visualBorderW}px solid ${this._esc(borderColor)};cursor:pointer;display:inline-flex;align-items:center;justify-content:center;align-self:start;background:${this._esc(visualBgColor)};${unavailablePattern}padding:0;direction:ltr;">
          <span style="position:relative;display:inline-flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:inherit;">
            ${donutHtml}
            ${contentHtml}
          </span>
        </button>`;
      return { html, colSpan: safeColSpan };
    };

    const indexedItems = items.map((it, idx) => ({ ...it, __idx: idx }));
    const blocks = [];
    for (let i = 0; i < indexedItems.length; i += 1) {
      const it = indexedItems[i];
      const entityId = this._primaryEntityId(it?.entity);
      const st = entityId ? this._hass?.states?.[entityId] : null;
      const state = st?.state ?? "";
      const isMini = this._toBool(this._resolveDynamicValue(it.mini ?? buttonsCfg.mini, it.entity, state, false), false);
      const isEmpty = this._toBool(it?.empty, false);

      if (!isMini || isEmpty) {
        blocks.push({ kind: "normal", item: it });
        continue;
      }

      const miniRun = [];
      while (i < indexedItems.length) {
        const cur = indexedItems[i];
        const curEntity = this._primaryEntityId(cur?.entity);
        const curState = curEntity ? this._hass?.states?.[curEntity]?.state : "";
        const curMini = this._toBool(this._resolveDynamicValue(cur.mini ?? buttonsCfg.mini, cur.entity, curState, false), false);
        const curEmpty = this._toBool(cur?.empty, false);
        if (!curMini || curEmpty) break;
        miniRun.push(cur);
        i += 1;
      }
      i -= 1;

      for (let k = 0; k < miniRun.length; k += 4) {
        blocks.push({ kind: "mini-group", items: miniRun.slice(k, k + 4) });
      }
    }

    const buttonDefs = blocks.map((b) => {
      if (b.kind === "normal") {
        return renderButton(b.item, b.item.__idx, { mini: false });
      }

      const miniSize = Math.max(10, Math.floor(size * 0.36));
      const miniButtons = [];
      const centers = [
        { x: 30, y: 30 },
        { x: 70, y: 30 },
        { x: 30, y: 70 },
        { x: 70, y: 70 },
      ];
      for (let i = 0; i < 4; i += 1) {
        const it = b.items[i];
        const pos = centers[i];
        if (!it) {
          miniButtons.push(`<div aria-hidden="true" style="position:absolute;left:${pos.x}%;top:${pos.y}%;width:${miniSize}px;height:${miniSize}px;transform:translate(-50%,-50%);"></div>`);
        } else {
          miniButtons.push(`<div style="position:absolute;left:${pos.x}%;top:${pos.y}%;transform:translate(-50%,-50%);">${renderButton(it, it.__idx, { mini: true }).html}</div>`);
        }
      }
      return {
        colSpan: 1,
        html: `<div style="grid-column:span 1;width:${size}px;height:${size}px;position:relative;overflow:hidden;">${miniButtons.join("")}</div>`,
      };
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
          <div style="display:grid;grid-template-columns:repeat(${cols}, ${size}px);gap:${gap}px;align-items:start;align-content:start;justify-items:start;width:fit-content;">
            ${spacer}
            ${rowButtons}
          </div>
        `;
      }).join("");

      return {
        items,
        html: `
          <div style="width:100%;display:flex;flex-direction:column;gap:${gap}px;align-items:flex-end;">
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

      btn.style.transition = "filter 120ms ease";
      btn.addEventListener("mouseenter", () => {
        btn.style.filter = "brightness(1.08)";
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.filter = "brightness(1)";
      });

      btn.addEventListener("pointerdown", () => {
        holdFired = false;
        clearTimeout(holdTimer);
        holdTimer = setTimeout(() => {
          holdFired = true;
          this._runAction(item, "hold_action", index);
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

        this._showButtonPressRing(btn);

        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => {
          this._runAction(item, "tap_action", index);
        }, 210);
      });

      btn.addEventListener("dblclick", (ev) => {
        ev.preventDefault();
        this._showButtonPressRing(btn);
        clearTimeout(clickTimer);
        clearTimeout(holdTimer);
        this._runAction(item, "double_tap_action", index);
      });
    });
  }

  _showButtonPressRing(btn) {
    if (!btn) return;

    if (btn._sgTapAnimTimer) {
      clearTimeout(btn._sgTapAnimTimer);
      btn._sgTapAnimTimer = null;
    }

    const bg = window.getComputedStyle(btn).backgroundColor || "#94a3b8";
    const ringColor = this._toRgba(bg, 0.45);

    btn.style.transition = "filter 140ms ease, box-shadow 220ms ease-out";
    btn.style.boxShadow = `0 0 0 6px ${ringColor}`;

    btn._sgTapAnimTimer = setTimeout(() => {
      btn.style.boxShadow = "none";
      btn._sgTapAnimTimer = null;
    }, 380);
  }

  _runAction(item, key, itemIndex = null) {
    const buttonsCfg = this._config.buttons || this._config.lights || {};
    const index = Number.isInteger(itemIndex) ? itemIndex : this._renderedLightItems?.indexOf(item);
    if (this._isRotatingView(item, buttonsCfg)) {
      if (key === "tap_action") {
        this._rotateView(index >= 0 ? index : 0, item);
        return;
      }
      if (this._isNumberView(item, buttonsCfg) && key === "hold_action") {
        this._runGenericAction({ action: "more-info" }, this._viewDisplayEntityId(item, buttonsCfg, index >= 0 ? index : 0));
        return;
      }
    }

    const act = this._resolveAction(item, key);
    if (!act) return;
    this._runGenericAction(act, this._primaryEntityId(item?.entity));
  }

  async _runGenericAction(act, entityId) {
    if (!act) return;
    const hass = this._hass;
    const type = act.action;

    if (Array.isArray(act.sequence)) {
      await this._runActionSequence(act.sequence, entityId);
      return;
    }

    if (type === "sequence") {
      const seq = Array.isArray(act.actions) ? act.actions : act.sequence;
      if (Array.isArray(seq)) {
        await this._runActionSequence(seq, entityId);
      }
      return;
    }

    if (type === "toggle") {
      if (!entityId) return;

      if (entityId.startsWith("lock.")) {
        const cur = hass?.states?.[entityId]?.state;
        const svc = cur === "locked" ? "unlock" : "lock";
        hass.callService?.("lock", svc, { entity_id: entityId });
      } else if (entityId.startsWith("media_player.")) {
        const cur = hass?.states?.[entityId]?.state;
        const svc = cur === "playing" ? "media_pause" : "media_play";
        hass.callService?.("media_player", svc, { entity_id: entityId });
      } else {
        hass.callService?.("homeassistant", "toggle", { entity_id: entityId });
      }
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

  async _runActionSequence(sequence, entityId) {
    if (!Array.isArray(sequence)) return;

    for (const step of sequence) {
      if (!step) continue;

      if (typeof step === "number") {
        await this._sleep(step);
        continue;
      }

      if (typeof step === "object") {
        const delay = Number(step.delay_ms ?? step.delay ?? NaN);
        if (Number.isFinite(delay) && delay > 0) {
          await this._sleep(delay);
          continue;
        }

        const normalized = this._normalizeSequenceAction(step);
        if (normalized) await this._runGenericAction(normalized, entityId);
      }
    }
  }

  _normalizeSequenceAction(step) {
    if (!step || typeof step !== "object") return null;
    if (step.action || step.type) return { ...step, action: step.action ?? step.type };
    if (Array.isArray(step.sequence) || Array.isArray(step.actions)) return { action: "sequence", ...step };
    if (step.perform_action || step.service) return { action: "perform-action", ...step };
    if (step.navigation_path || step.url_path || step.path) return { action: "navigate", ...step };
    return null;
  }

  _sleep(ms) {
    const wait = Math.max(0, Number(ms) || 0);
    return new Promise((resolve) => setTimeout(resolve, wait));
  }

  _resolveAction(item, key) {
    const buttonsCfg = this._config.buttons || this._config.lights || {};
    const domain = String(this._primaryEntityId(item?.entity) || "").split(".")[0];
    const isInfoDomain = domain === "sensor" || domain === "binary_sensor";
    const fallback = isInfoDomain
      ? "more-info"
      : (key === "tap_action" ? "toggle" : "more-info");
    const raw = item?.[key] ?? buttonsCfg?.[key] ?? fallback;
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

  _resolveTextAction(key) {
    const textCfg = this._config?.text || {};
    const fallback = "more-info";
    const raw = textCfg?.[key] ?? fallback;

    if (!raw) return null;
    if (typeof raw === "string") return { action: raw };
    if (typeof raw === "object") {
      const action = raw.action ?? raw.type;
      if (!action) return null;
      return { ...raw, action };
    }
    return null;
  }

  _wireTextActions() {
    const el = this._inner?.querySelector?.('.sg-room-text-layer');
    if (!el) return;

    let clickTimer = null;
    let holdTimer = null;
    let holdFired = false;

    const targetEntity = this._config?.text?.entity ?? this._config?.entity;

    el.onpointerdown = () => {
      holdFired = false;
      clearTimeout(holdTimer);
      holdTimer = setTimeout(() => {
        holdFired = true;
        const act = this._resolveTextAction("hold_action");
        this._runGenericAction(act, targetEntity);
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
        const act = this._resolveTextAction("tap_action");
        this._runGenericAction(act, targetEntity);
      }, 210);
    };

    el.ondblclick = (ev) => {
      ev.preventDefault();
      clearTimeout(clickTimer);
      clearTimeout(holdTimer);
      const act = this._resolveTextAction("double_tap_action");
      this._runGenericAction(act, targetEntity);
    };
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

  _collectButtonItems(buttonsCfg) {
    const out = [];

    const fromArray = (arr) => {
      if (!Array.isArray(arr)) return;
      arr.forEach((item) => {
        if (typeof item === "string") {
          out.push({ entity: item, width: 1 });
        } else if (item && typeof item === "object") {
          const hasEntity = !!item.entity;
          const hasIconOnly = !!item.icon;
          const isEmpty = this._toBool(item.empty, false);
          if (hasEntity || hasIconOnly || isEmpty) {
            out.push({ width: 1, ...item });
          }
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

    fromArray(buttonsCfg.entities);
    fromArray(buttonsCfg.items);
    fromArray(buttonsCfg.button);
    fromArray(buttonsCfg.buttons);
    fromArray(buttonsCfg.light);

    fromObject(buttonsCfg.entities);
    fromObject(buttonsCfg.items);
    fromObject(buttonsCfg.button);
    fromObject(buttonsCfg.buttons);
    fromObject(buttonsCfg.light);

    return out;
  }

  _isButtonItemVisible(item, buttonsCfg = {}) {
    const entityId = this._primaryEntityId(item?.entity);
    const st = entityId ? this._hass?.states?.[entityId] : null;
    const state = st?.state ?? "";

    const hasOwn = (obj, key) => !!obj && Object.prototype.hasOwnProperty.call(obj, key);
    const resolve = (key, fallback) => {
      const raw = hasOwn(item, key)
        ? item[key]
        : (hasOwn(buttonsCfg, key) ? buttonsCfg[key] : fallback);
      return this._resolveDynamicValue(raw, entityId, state, fallback);
    };

    const showRaw = resolve("show", true);
    if (!this._toBool(showRaw, true)) return false;

    if (!entityId) return true;

    if (hasOwn(item, "show_value") || hasOwn(buttonsCfg, "show_value")) {
      const expected = resolve("show_value", undefined);
      if (!this._matchesValueFilter(state, expected)) return false;
    }

    if (hasOwn(item, "show_not_value") || hasOwn(buttonsCfg, "show_not_value")) {
      const disallowed = resolve("show_not_value", undefined);
      if (this._matchesValueFilter(state, disallowed)) return false;
    }

    if (hasOwn(item, "show_above") || hasOwn(buttonsCfg, "show_above")) {
      const nState = Number(state);
      const nMin = Number(resolve("show_above", NaN));
      if (!Number.isFinite(nState) || !Number.isFinite(nMin) || !(nState > nMin)) return false;
    }

    if (hasOwn(item, "show_below") || hasOwn(buttonsCfg, "show_below")) {
      const nState = Number(state);
      const nMax = Number(resolve("show_below", NaN));
      if (!Number.isFinite(nState) || !Number.isFinite(nMax) || !(nState < nMax)) return false;
    }

    return true;
  }

  _matchesValueFilter(state, expected) {
    if (Array.isArray(expected)) {
      return expected.some((v) => String(state) === String(v));
    }

    if (typeof expected === "string") {
      const t = expected.trim();
      if (t.startsWith("[") && t.endsWith("]")) {
        try {
          const parsed = JSON.parse(t);
          if (Array.isArray(parsed)) {
            return parsed.some((v) => String(state) === String(v));
          }
        } catch (_e) {
          // ignore and compare as plain string
        }
      }
    }

    return String(state) === String(expected);
  }

  _toBool(value, fallback = false) {
    if (value === undefined || value === null) return fallback;
    if (typeof value === "boolean") return value;
    if (typeof value === "number") return value !== 0;

    const s = String(value).trim().toLowerCase();
    if (["true", "on", "yes", "1"].includes(s)) return true;
    if (["false", "off", "no", "0", "", "none", "null", "undefined"].includes(s)) return false;
    return fallback;
  }

  _resolveDynamicValue(input, entityId, state, fallback = null, varsCtx = null) {
    if (input == null) return fallback;

    if (Array.isArray(input)) {
      const byRules = this._resolveByRules(input, entityId, state, varsCtx);
      return byRules == null ? fallback : byRules;
    }

    if (typeof input === "object") return input;

    if (typeof input === "number" || typeof input === "boolean") return input;
    if (typeof input !== "string") return String(input);

    const s = input.trim();
    if (!s) return fallback;

    if (s.includes("{%") && s.includes("%}")) {
      const jinja = this._evalJinjaIfElseTemplate(s, entityId, state, varsCtx);
      return jinja == null ? fallback : jinja;
    }

    if (!s.startsWith("{{") || !s.endsWith("}}")) return s;

    const expr = s.slice(2, -2).trim();
    return this._evalJsTemplateExpr(expr, entityId, state, fallback, varsCtx);
  }

  _resolveByRules(rules, entityId, state, varsCtx = null) {
    let fallback;

    for (const rule of rules) {
      if (!rule || typeof rule !== "object") continue;
      const { value } = rule;

      const hasCond = ["state", "state_not", "state_above", "state_below", "state_template"].some((k) => rule[k] != null);
      if (!hasCond) {
        fallback = value;
        continue;
      }

      let ok = true;
      if (rule.state != null) ok = ok && String(state) === String(rule.state);
      if (rule.state_not != null) ok = ok && String(state) !== String(rule.state_not);
      if (rule.state_above != null) ok = ok && Number(state) > Number(rule.state_above);
      if (rule.state_below != null) ok = ok && Number(state) < Number(rule.state_below);
      if (rule.state_template != null) ok = ok && !!this._resolveDynamicValue(String(rule.state_template), entityId, state, false, varsCtx);

      if (ok) return value;
    }

    return fallback;
  }

  _evalJinjaIfElseTemplate(tpl, entityId, state, varsCtx = null) {
    const m = tpl.match(/{%\s*if\s+([\s\S]*?)\s*%}([\s\S]*?)(?:{%\s*else\s*%}([\s\S]*?))?{%\s*endif\s*%}/i);
    if (!m) return null;

    const cond = m[1]?.trim();
    const thenVal = (m[2] ?? "").trim();
    const elseVal = (m[3] ?? "").trim();
    const yes = this._evalSimpleCondition(cond, entityId, state, varsCtx);
    return yes ? thenVal : elseVal;
  }

  _evalSimpleCondition(cond, entityId, state, varsCtx = null) {
    const m = String(cond).match(/^(.*?)\s*(==|!=|>=|<=|>|<)\s*(.*?)$/);
    if (!m) return false;

    const left = this._resolveCondToken(m[1], entityId, state, varsCtx);
    const op = m[2];
    const right = this._resolveCondToken(m[3], entityId, state, varsCtx);

    if (op === "==") return String(left) === String(right);
    if (op === "!=") return String(left) !== String(right);

    const l = Number(left);
    const r = Number(right);
    if (!Number.isFinite(l) || !Number.isFinite(r)) return false;
    if (op === ">") return l > r;
    if (op === "<") return l < r;
    if (op === ">=") return l >= r;
    if (op === "<=") return l <= r;
    return false;
  }

  _resolveCondToken(token, entityId, state, varsCtx = null) {
    const t = String(token).trim();
    if (t === "state") return state;
    if (/^states\(entity\)$/i.test(t)) return this._hass?.states?.[entityId]?.state;
    if (varsCtx && Object.prototype.hasOwnProperty.call(varsCtx, t)) return varsCtx[t];
    const q = t.match(/^['\"]([\s\S]*)['\"]$/);
    if (q) return q[1];
    const n = Number(t);
    if (Number.isFinite(n)) return n;
    return t;
  }

  _evalJsTemplateExpr(expr, entityId, state, fallback, varsCtx = null) {
    try {
      const st = this._hass?.states?.[entityId];
      const statesFn = (eid) => this._hass?.states?.[eid]?.state;
      const stateAttrFn = (eid, attr) => this._hass?.states?.[eid]?.attributes?.[attr];
      const timeRestFn = (eid, attrOrUnit, unitMaybe) => {
        const id = String(eid || "").trim();
        if (!id) return null;

        const arg2 = attrOrUnit == null ? "" : String(attrOrUnit).trim();
        const looksLikeUnit = ["day", "days", "hour", "hours", "min", "mins", "minute", "minutes", "sec", "secs", "second", "seconds"].includes(arg2.toLowerCase());
        const attr = looksLikeUnit ? "" : arg2;
        const unitRaw = looksLikeUnit ? arg2 : (unitMaybe == null ? "sec" : String(unitMaybe));
        const unit = unitRaw.trim().toLowerCase();

        const rawVal = attr
          ? this._hass?.states?.[id]?.attributes?.[attr]
          : this._hass?.states?.[id]?.state;
        if (rawVal == null || rawVal === "") return null;

        const targetMs = Date.parse(String(rawVal));
        if (!Number.isFinite(targetMs)) return null;

        const diffSec = (targetMs - Date.now()) / 1000;
        const roundUp = (n) => (n >= 0 ? Math.ceil(n) : Math.floor(n));

        if (unit.startsWith("day")) return roundUp(diffSec / 86400);
        if (unit.startsWith("hour")) return roundUp(diffSec / 3600);
        if (unit.startsWith("min")) return roundUp(diffSec / 60);
        return roundUp(diffSec);
      };
      const timerProgressFn = (eid) => {
        const id = String(eid || "").trim();
        if (!id) return null;
        const stObj = this._hass?.states?.[id];
        if (!stObj) return null;

        const stateRaw = String(stObj.state || "").toLowerCase();
        if (stateRaw === "idle") return 100;

        const attrs = stObj.attributes || {};
        const parseDurationSec = (v) => {
          if (typeof v === "number" && Number.isFinite(v)) return v;
          const s = String(v || "").trim();
          if (!s) return NaN;
          if (/^\d+(?:\.\d+)?$/.test(s)) return Number(s);
          const m = s.match(/^(\d+):(\d{1,2})(?::(\d{1,2}))?$/);
          if (!m) return NaN;
          const a = Number(m[1] || 0);
          const b = Number(m[2] || 0);
          const c = Number(m[3] || 0);
          return m[3] != null ? (a * 3600 + b * 60 + c) : (a * 60 + b);
        };

        const totalSec = parseDurationSec(attrs.duration);
        if (!Number.isFinite(totalSec) || totalSec <= 0) return null;

        const remFromAttr = parseDurationSec(attrs.remaining);
        let remainingSec = Number.isFinite(remFromAttr) ? remFromAttr : NaN;

        if (!Number.isFinite(remainingSec)) {
          const finishMs = Date.parse(String(attrs.finishes_at || ""));
          if (Number.isFinite(finishMs)) {
            remainingSec = Math.max(0, (finishMs - Date.now()) / 1000);
          }
        }

        if (!Number.isFinite(remainingSec)) {
          const startMs = Date.parse(String(attrs.started_at || ""));
          if (Number.isFinite(startMs)) {
            const elapsed = Math.max(0, (Date.now() - startMs) / 1000);
            remainingSec = Math.max(0, totalSec - elapsed);
          }
        }

        if (!Number.isFinite(remainingSec)) return null;
        const progress = ((totalSec - remainingSec) / totalSec) * 100;
        return Math.max(0, Math.min(100, Math.round(progress * 10) / 10));
      };
      const normalizeEntityList = () => {
        if (Array.isArray(varsCtx?.e)) return varsCtx.e.map((x) => String(x || "")).filter(Boolean);
        if (Array.isArray(varsCtx?.entity)) return varsCtx.entity.map((x) => String(x || "")).filter(Boolean);
        if (Array.isArray(entityId)) return entityId.map((x) => String(x || "")).filter(Boolean);
        if (entityId != null && String(entityId).trim()) return [String(entityId).trim()];
        return [];
      };
      const entityList = normalizeEntityList();
      const attrsList = entityList.map((eid) => this._hass?.states?.[eid]?.attributes || {});
      const statesList = entityList.map((eid) => this._hass?.states?.[eid]?.state);
      const evalInCtx = (code) => {
        const fn = new Function("ctx", `with (ctx) { return (${code}); }`);
        return fn({
          hass: this._hass,
          entity: entityId,
          state,
          states: statesFn,
          state_attr: stateAttrFn,
          time_rest: timeRestFn,
          timer_progress: timerProgressFn,
          all_states: this._hass?.states,
          attributes: st?.attributes || {},
          e: entityList,
          s: statesList,
          a: attrsList,
          is_on: state === "on",
          vars: varsCtx || this._variablesContext || {},
          ...(varsCtx || this._variablesContext || {}),
          round: (v, d = 0) => {
            const n = Number(v);
            if (!Number.isFinite(n)) return v;
            const p = Number.isFinite(Number(d)) ? Math.max(0, Number(d)) : 0;
            return Number(n.toFixed(p));
          },
          upper: (v) => String(v).toUpperCase(),
          lower: (v) => String(v).toLowerCase(),
          trim: (v) => String(v).trim(),
          capitalize: (v) => {
            const s = String(v);
            return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : s;
          },
          title: (v) => String(v).split(/\s+/).map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w)).join(" "),
        });
      };

      const parts = String(expr).split("|").map((x) => x.trim()).filter(Boolean);
      let out = evalInCtx(parts[0] || expr);

      if (parts.length > 1) {
        for (let i = 1; i < parts.length; i += 1) {
          out = this._applyTemplateFilter(out, parts[i]);
        }
      }

      return out == null ? fallback : out;
    } catch (err) {
      console.warn("[seagull-room-card] template eval error", err, expr);
      return fallback;
    }
  }

  _applyTemplateFilter(value, filterSpec) {
    const m = String(filterSpec).match(/^(\w+)\s*(?:\((.*)\))?$/);
    if (!m) return value;

    const name = m[1].toLowerCase();
    const argRaw = (m[2] ?? "").trim();

    if (name === "round") {
      const n = Number(value);
      if (!Number.isFinite(n)) return value;
      const digits = argRaw ? Number(argRaw) : 0;
      const p = Number.isFinite(digits) ? Math.max(0, digits) : 0;
      return Number(n.toFixed(p));
    }

    if (name === "upper") return String(value).toUpperCase();
    if (name === "lower") return String(value).toLowerCase();
    if (name === "trim") return String(value).trim();
    if (name === "capitalize") {
      const s = String(value);
      return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : s;
    }
    if (name === "title") {
      return String(value)
        .split(/\s+/)
        .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w))
        .join(" ");
    }

    return value;
  }

  _isEntityActive(entityId, state) {
    const domain = String(entityId || "").split(".")[0];
    if (domain === "lock") return state === "unlocked";
    if (domain === "media_player") return state === "playing";
    return state === "on";
  }

  _defaultEntityIcon(entityId, state, attrs = {}) {
    const domain = String(entityId || "").split(".")[0];
    const icons = this._theme?.button?.icons || SEAGULL_ROOM_THEME_DEFAULT?.button?.icons || {};

    if (domain === "light") {
      const lightCfg = icons.light || {};
      return state === "on"
        ? (lightCfg.on || "mdi:lightbulb")
        : (lightCfg.off || "mdi:lightbulb-off");
    }

    if (domain === "lock") {
      const lockCfg = icons.lock || {};
      if (state === "locked") return lockCfg.locked || "mdi:lock";
      if (state === "unlocked") return lockCfg.unlocked || "mdi:lock-open-variant";
      return lockCfg.default || "mdi:lock-reset";
    }

    if (domain === "binary_sensor") {
      const bsCfg = icons.binary_sensor || {};
      const dcMap = bsCfg.device_class || {};
      const dc = String(attrs?.device_class || "").toLowerCase();
      const on = state === "on";

      const dcCfg = dcMap?.[dc] || null;
      if (dcCfg) {
        return on
          ? (dcCfg.on || bsCfg.default_on || "mdi:check-circle")
          : (dcCfg.off || bsCfg.default_off || "mdi:circle-outline");
      }

      return on
        ? (bsCfg.default_on || "mdi:check-circle")
        : (bsCfg.default_off || "mdi:circle-outline");
    }

    return icons.default || "mdi:help-circle-outline";
  }

  _resolveObsoleteConfig(raw) {
    const obs = SEAGULL_ROOM_THEME_DEFAULT.button?.default?.obsolete || {};
    const defaults = { border: Number(obs.border_size ?? 2), border_color: String(obs.border_color ?? "#d1d5db") };

    if (raw == null || raw === false) return null;
    if (typeof raw === "number") return { hours: raw, ...defaults };
    if (typeof raw === "string") {
      const n = Number(raw);
      return Number.isFinite(n) ? { hours: n, ...defaults } : null;
    }
    if (typeof raw === "object") {
      const hours = Number(raw.hours ?? raw.after_hours ?? raw.value ?? 0);
      if (!Number.isFinite(hours) || hours <= 0) return null;
      return {
        hours,
        icon: raw.icon,
        color: raw.color,
        icon_color: raw.icon_color,
        background: raw.background,
        border: raw.border ?? defaults.border,
        border_color: raw.border_color ?? defaults.border_color,
      };
    }
    return null;
  }

  _isEntityObsolete(st, hours) {
    const h = Number(hours);
    if (!st || !Number.isFinite(h) || h <= 0) return false;

    const ts = st.last_updated || st.last_changed;
    if (!ts) return false;

    const t = Date.parse(ts);
    if (!Number.isFinite(t)) return false;

    const ageMs = Date.now() - t;
    return ageMs > h * 3600 * 1000;
  }

  _normalizeLightColorMode(v) {
    if (v === true) return "both";
    if (v === false || v == null) return "false";
    const s = String(v).toLowerCase().trim();
    if (s === "true" || s === "both") return "both";
    if (s === "color" || s === "brightness" || s === "false") return s;
    return "false";
  }

  _resolveLightEntityColor(attrs, mode = "both") {
    if (!attrs || typeof attrs !== "object") return null;

    const briRaw = Number(attrs.brightness);
    const bri = Number.isFinite(briRaw) ? Math.max(0, Math.min(255, briRaw)) : 255;
    const mul = mode === "brightness" || mode === "both"
      ? (0.25 + 0.75 * (bri / 255))
      : 1;

    if (mode === "brightness") {
      const v = Math.round(245 * mul);
      return `rgb(${v}, ${v}, ${v})`;
    }

    if (Array.isArray(attrs.rgb_color) && attrs.rgb_color.length >= 3) {
      const [r0, g0, b0] = attrs.rgb_color.map((x) => Math.max(0, Math.min(255, Number(x) || 0)));
      const r = Math.round(r0 * mul);
      const g = Math.round(g0 * mul);
      const b = Math.round(b0 * mul);
      return `rgb(${r}, ${g}, ${b})`;
    }

    if (Array.isArray(attrs.hs_color) && attrs.hs_color.length >= 2) {
      const h = Number(attrs.hs_color[0]);
      const s = Number(attrs.hs_color[1]);
      if (Number.isFinite(h) && Number.isFinite(s)) {
        const lBase = mode === "both" ? Math.round(20 + 45 * (bri / 255)) : 50;
        return `hsl(${h}, ${s}%, ${lBase}%)`;
      }
    }

    if (attrs.color_temp_kelvin) {
      const k = Number(attrs.color_temp_kelvin);
      if (Number.isFinite(k)) {
        let base = [245, 158, 11];
        if (k <= 3000) base = [245, 158, 11];
        else if (k <= 4500) base = [243, 244, 246];
        else base = [191, 219, 254];
        const [r, g, b] = base.map((v) => Math.round(v * mul));
        return `rgb(${r}, ${g}, ${b})`;
      }
    }

    // if only color requested but no color attrs, keep default fallback in caller
    return null;
  }

  _normalizeTheme(theme) {
    if (!theme || typeof theme !== "object" || Array.isArray(theme)) {
      return JSON.parse(JSON.stringify(SEAGULL_ROOM_THEME_DEFAULT));
    }
    return this._deepMerge(SEAGULL_ROOM_THEME_DEFAULT, theme);
  }

  _deepMerge(base, patch) {
    if (!patch || typeof patch !== "object" || Array.isArray(patch)) {
      return JSON.parse(JSON.stringify(base));
    }
    const out = Array.isArray(base) ? [...base] : { ...(base || {}) };
    for (const [k, v] of Object.entries(patch)) {
      if (v && typeof v === "object" && !Array.isArray(v) && out[k] && typeof out[k] === "object" && !Array.isArray(out[k])) {
        out[k] = this._deepMerge(out[k], v);
      } else {
        out[k] = v;
      }
    }
    return out;
  }

  _paletteMode() {
    const mode = String(this._theme?.palette_mode || "auto").toLowerCase();
    if (mode === "day" || mode === "night") return mode;

    // auto => follow client UI theme (HA frontend darkMode)
    const darkMode = this._hass?.themes?.darkMode;
    if (typeof darkMode === "boolean") return darkMode ? "night" : "day";

    return "day";
  }

  _paletteColor(value) {
    if (value == null) return value;
    if (typeof value !== "string") return value;

    const raw = value.trim();
    if (!raw.startsWith("$")) return raw;

    const key = raw.slice(1);
    const entry = this._theme?.palette?.[key];
    if (!entry) return raw;
    if (typeof entry === "string") return entry;
    if (typeof entry === "object") {
      const mode = this._paletteMode();
      return entry[mode] ?? entry.day ?? entry.night ?? raw;
    }
    return raw;
  }

  _resolveThemeButtonStyle(item, buttonsCfg, st, state, isObsolete = false) {
    const themeButton = this._theme?.button;
    if (!themeButton || typeof themeButton !== "object") return {};

    const entityId = this._primaryEntityId(item?.entity);
    const domain = entityId ? String(entityId).split(".")[0] : "empty";
    const domainCfg = themeButton?.[domain] && typeof themeButton[domain] === "object" ? themeButton[domain] : {};

    const activeRaw = this._resolveDynamicValue(item.invert_state ?? buttonsCfg.invert_state, item.entity, state, false);
    const invertState = !!activeRaw;
    const baseActive = this._isEntityActive(entityId, state);
    const isActive = invertState ? !baseActive : baseActive;
    const isUnavailable = state === "unavailable";

    const attrs = st?.attributes || {};

    const merge = (into, from) => {
      if (!from || typeof from !== "object" || Array.isArray(from)) return into;
      return { ...into, ...from };
    };

    let style = {};
    style = merge(style, this._pickThemeBucket(themeButton, item.entity, state, attrs, isActive, isUnavailable, isObsolete));
    style = merge(style, this._pickThemeBucket(domainCfg, item.entity, state, attrs, isActive, isUnavailable, isObsolete));

    const dc = String(attrs?.device_class ?? "").trim();
    if (dc && domainCfg?.device_class && typeof domainCfg.device_class === "object") {
      const dcCfg = domainCfg.device_class[dc];
      style = merge(style, this._pickThemeBucket(dcCfg, item.entity, state, attrs, isActive, isUnavailable, isObsolete));
    }

    return {
      icon: style.icon,
      color: this._paletteColor(style.color ?? style.icon_color),
      background: this._paletteColor(style.background),
      border_size: style.border_size,
      border_color: this._paletteColor(style.border_color),
      border_radius: style.border_radius,
    };
  }

  _pickThemeBucket(src, entityId, state, attrs, isActive, isUnavailable, isObsolete) {
    if (!src || typeof src !== "object") return {};
    let out = {};

    const merge = (obj) => {
      if (obj && typeof obj === "object" && !Array.isArray(obj)) out = { ...out, ...obj };
    };

    const baseKeys = ["icon", "color", "icon_color", "background", "border_size", "border_color", "border_radius"];
    baseKeys.forEach((k) => {
      if (Object.prototype.hasOwnProperty.call(src, k)) out[k] = src[k];
    });

    if (isUnavailable && src.unavailable) merge(src.unavailable);
    else if (isObsolete && src.obsolete) merge(src.obsolete);
    else if (isActive && src.active) merge(src.active);
    else if (!isActive && src.inactive) merge(src.inactive);

    if (src.state_value && typeof src.state_value === "object") {
      const sv = src.state_value[state];
      merge(sv);
    }

    if (src.state_not_value && typeof src.state_not_value === "object") {
      Object.entries(src.state_not_value).forEach(([k, v]) => {
        if (String(state) !== String(k)) merge(v);
      });
    }

    if (src.state_above && typeof src.state_above === "object") {
      const nState = Number(state);
      Object.entries(src.state_above).forEach(([k, v]) => {
        const n = Number(k);
        if (Number.isFinite(nState) && Number.isFinite(n) && nState > n) merge(v);
      });
    }

    if (src.state_below && typeof src.state_below === "object") {
      const nState = Number(state);
      Object.entries(src.state_below).forEach(([k, v]) => {
        const n = Number(k);
        if (Number.isFinite(nState) && Number.isFinite(n) && nState < n) merge(v);
      });
    }

    if (src.state) {
      const stateCond = this._resolveDynamicValue(src.state, entityId, state, false, attrs);
      if (this._toBool(stateCond, false) && src.state_style && typeof src.state_style === "object") {
        merge(src.state_style);
      }
    }

    if (src.attribute_value && typeof src.attribute_value === "object") {
      for (const [attrName, valuesMap] of Object.entries(src.attribute_value)) {
        if (!valuesMap || typeof valuesMap !== "object") continue;
        const attrVal = attrs?.[attrName];
        const style = valuesMap[String(attrVal)];
        merge(style);
      }
    }

    if (src.attribute_not_value && typeof src.attribute_not_value === "object") {
      for (const [attrName, valuesMap] of Object.entries(src.attribute_not_value)) {
        if (!valuesMap || typeof valuesMap !== "object") continue;
        const attrVal = attrs?.[attrName];
        Object.entries(valuesMap).forEach(([v, style]) => {
          if (String(attrVal) !== String(v)) merge(style);
        });
      }
    }

    if (src.attribute_above && typeof src.attribute_above === "object") {
      for (const [attrName, valuesMap] of Object.entries(src.attribute_above)) {
        if (!valuesMap || typeof valuesMap !== "object") continue;
        const attrVal = Number(attrs?.[attrName]);
        Object.entries(valuesMap).forEach(([v, style]) => {
          const n = Number(v);
          if (Number.isFinite(attrVal) && Number.isFinite(n) && attrVal > n) merge(style);
        });
      }
    }

    if (src.attribute_below && typeof src.attribute_below === "object") {
      for (const [attrName, valuesMap] of Object.entries(src.attribute_below)) {
        if (!valuesMap || typeof valuesMap !== "object") continue;
        const attrVal = Number(attrs?.[attrName]);
        Object.entries(valuesMap).forEach(([v, style]) => {
          const n = Number(v);
          if (Number.isFinite(attrVal) && Number.isFinite(n) && attrVal < n) merge(style);
        });
      }
    }

    if (src.attribute) {
      const attrCond = this._resolveDynamicValue(src.attribute, entityId, state, false, attrs);
      if (this._toBool(attrCond, false) && src.attribute_style && typeof src.attribute_style === "object") {
        merge(src.attribute_style);
      }
    }

    return out;
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
      <div style="padding:12px 0; opacity:.9; font-size:13px; line-height:1.4;">
        <div style="margin-top:12px;background:var(--card-background-color,#f3f4f6);border-radius:9999px;padding:8px 10px;display:flex;align-items:center;justify-content:space-between;gap:10px;border:1px solid var(--divider-color,#d1d5db);">
          <div style="font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Seagull Room Card</div>
          <div style="background:#0ea5e9;color:#fff;border-radius:9999px;padding:2px 8px;font-size:12px;font-weight:700;line-height:1.6;">v${SEAGULL_ROOM_CARD_VERSION}</div>
        </div>
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
