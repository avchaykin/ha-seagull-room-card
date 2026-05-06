const SEAGULL_ROOM_CARD_VERSION = "1.2.4";
const SEAGULL_ROOM_CARD_COMMIT = "dev";

const SEAGULL_ROOM_THEME_DEFAULT = {
  palette_mode: "auto", // auto | day | night
  palette: {
    card_border: { day: "#aaaaaa", night: "#64748b" },
    card_bg: { day: "#eeeeee", night: "#1e293b" },
    card_icon: { day: "#2233aa44", night: "#93c5fd55" },

    text_color: { day: "inherit", night: "#e2e8f0" },
    text_bg: { day: "transparent", night: "transparent" },
    text_border: { day: "transparent", night: "transparent" },
    label_bg: { day: "#e5e7eb", night: "#374151" },
    label_fg: { day: "#374151", night: "#e5e7eb" },
    label_icon: { day: "#374151", night: "#e5e7eb" },

    btn_active_fg: { day: "#111827", night: "#111827" },
    btn_active_bg: { day: "#f59e0b", night: "#f59e0b" },
    btn_inactive_fg: { day: "#e5e7eb", night: "#e5e7eb" },
    btn_inactive_bg: { day: "#4b5563", night: "#374151" },
    default_light_active_fg: { day: "#111827", night: "#f8fafc" },
    default_light_inactive_fg: { day: "#111827", night: "#f8fafc" },
    default_light_inactive_bg: { day: "#cbd5e1", night: "#374151" },
    default_light_auto_inactive_fg: { day: "#111827", night: "#f8fafc" },
    seagull_primary: { day: "#4b5563", night: "#334155" },
    seagull_active: { day: "#f59e0b", night: "#f59e0b" },
    seagull_active_red: { day: "#ef4444", night: "#dc2626" },
    seagull_active_blue: { day: "#3b82f6", night: "#2563eb" },
    seagull_active_green: { day: "#22c55e", night: "#16a34a" },
    seagull_active_cyan: { day: "#06b6d4", night: "#0891b2" },
    seagull_active_purple: { day: "#a855f7", night: "#9333ea" },
    seagull_active_pink: { day: "#ec4899", night: "#db2777" },
    seagull_active_lime: { day: "#84cc16", night: "#65a30d" },
    seagull_active_rose: { day: "#f43f5e", night: "#e11d48" },
    seagull_active_indigo: { day: "#6366f1", night: "#4f46e5" },
    seagull_active_emerald: { day: "#10b981", night: "#059669" },
    seagull_active_amber: { day: "#fbbf24", night: "#f59e0b" },
    seagull_active_orange_red: { day: "#f97316", night: "#ea580c" },
    seagull_active_cornflower: { day: "#60a5fa", night: "#3b82f6" },
    seagull_active_magenta: { day: "#d946ef", night: "#c026d3" },
    seagull_active_aqua: { day: "#2dd4bf", night: "#14b8a6" },
    seagull_active_tangerine: { day: "#fb923c", night: "#f97316" },
    seagull_active_mint: { day: "#34d399", night: "#10b981" },
    btn_unavailable_fg: { day: "#f8fafc", night: "#cbd5e1" },
    btn_unavailable_bg: { day: "#cbd5e1", night: "#64748b" },
    btn_border: { day: "transparent", night: "transparent" },

    btn_auto_active_fg: { day: "#eaf2ff", night: "#eaf2ff" },
    btn_auto_active_bg: { day: "#3b82f6", night: "#2563eb" },
    btn_auto_inactive_fg: { day: "#111827", night: "#111827" },
    btn_auto_inactive_bg: { day: "#d1d5db", night: "#94a3b8" },

    btn_empty_inactive_fg: { day: "#111827", night: "#e2e8f0" },
    btn_empty_inactive_bg: { day: "#e5e7eb", night: "#334155" },
    seagull_b: { day: "#e5e7eb", night: "#334155" },
    seagull_a: { day: "#334155", night: "#cbd5e1" },

    btn_alert_active_fg: { day: "#fffafa", night: "#ffe4e6" },
    btn_alert_active_bg: { day: "#f63b3b", night: "#b91c1c" },

    obsolete_border: { day: "#d1d5db", night: "#94a3b8" },

    seagull_rose: { day: "#aa332244", night: "#7b463e33" },
    seagull_indigo: { day: "#2233aa44", night: "#30386d33" },
    seagull_emerald: { day: "#22aa3344", night: "#4f8c5733" },
    seagull_amber: { day: "#cc992244", night: "#b19a6433" },
    seagull_violet: { day: "#8844cc44", night: "#76589533" },
    seagull_cyan: { day: "#22aacc44", night: "#5996a533" },
    seagull_orange_red: { day: "#cc552244", night: "#9b654e33" },
    seagull_lime: { day: "#55aa2244", night: "#6d935633" },
    seagull_cornflower: { day: "#4466cc44", night: "#58679533" },
    seagull_magenta: { day: "#cc44aa44", night: "#9e618f33" },
    seagull_aqua: { day: "#22ccaa44", night: "#61ae9f33" },
    seagull_tangerine: { day: "#cc772244", night: "#a6805933" },
    seagull_slate_blue: { day: "#6677aa44", night: "#70778e33" },
    seagull_olive: { day: "#77994444", night: "#7f8e6833" },
    seagull_plum: { day: "#99447744", night: "#7b556c33" },
    seagull_steel: { day: "#44779944", night: "#5a718033" },
    seagull_copper: { day: "#aa664444", night: "#8e6f6033" },
    seagull_mint: { day: "#44aa6644", night: "#67957633" },
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
    const labelsHtml = this._buildLabelsHtml();
    const { html, items } = this._buildLightsHtmlAndItems();
    this._renderedLightItems = items;

    const combinedHtml = `
      ${textHtml}
      ${labelsHtml}
      <div class="sg-room-buttons-layer" style="position:relative;z-index:3;">${html}</div>
    `;
    if (this._lastLightsHtml !== combinedHtml) {
      this._inner.innerHTML = combinedHtml;
      this._lastLightsHtml = combinedHtml;
      this._wireLightButtons();
    }

    this._wireTextActions();
    this._wireLabelActions();
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

        const phantomCfg = this._resolvePhantomConfig(it, buttonsCfg, it?.entity, state);
        if (hasEntityState && !isVisible && phantomCfg && this._isPhantomVisible(phantomCfg, it?.entity, state, st)) {
          return { ...it, __phantom: true, __phantomCfg: phantomCfg };
        }

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
      const isPhantom = this._toBool(item?.__phantom, false);
      const phantomCfg = item?.__phantomCfg || null;
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
      const isWatchface = view.type === "watchface";
      const isProgress = view.type === "progress";
      const numberStyle = view.style || "big";
      const viewCfg = (item?.view && typeof item.view === "object")
        ? item.view
        : ((buttonsCfg?.view && typeof buttonsCfg.view === "object") ? buttonsCfg.view : {});
      const gaugeCfg = view.type === "gauge" ? ((item?.view && typeof item.view === "object") ? item.view : ((buttonsCfg?.view && typeof buttonsCfg.view === "object") ? buttonsCfg.view : {})) : null;
      const gaugeStyle = String(this._resolveDynamicValue(gaugeCfg?.style, item.entity, state, "donut")).toLowerCase();
      const gaugeEnabled = !!gaugeCfg && (gaugeStyle === "donut" || gaugeStyle === "meter");
      const gaugeMeterEnabled = !!gaugeCfg && gaugeStyle === "meter";
      const progressCfg = isProgress ? ((item?.view && typeof item.view === "object") ? item.view : ((buttonsCfg?.view && typeof buttonsCfg.view === "object") ? buttonsCfg.view : {})) : null;
      const progressStyle = String(this._resolveDynamicValue(progressCfg?.style, item.entity, state, "runner")).toLowerCase();
      const progressEnabled = !!progressCfg && progressStyle === "runner";

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
      const hasGaugeValueOverride = !!gaugeCfg && Object.prototype.hasOwnProperty.call(gaugeCfg, "value");
      const gaugeNumericValue = Number(gaugeValueRaw);
      const scale = toScaleMinMax(this._resolveDynamicValue(gaugeCfg?.scale, item.entity, state, 100));
      const denom = (scale.max - scale.min);
      const gaugeProgress = Number.isFinite(gaugeNumericValue) && Number.isFinite(denom) && denom !== 0
        ? Math.max(0, Math.min(1, (gaugeNumericValue - scale.min) / denom))
        : 0;
      const gaugeDefaultColor = this._paletteColor(dDef?.active?.background ?? "#f59e0b");
      const gaugeColor = this._paletteColor(this._resolveDynamicValue(gaugeCfg?.color, item.entity, state, gaugeDefaultColor));
      const gaugeBgDefault = this._paletteColor(dDef?.inactive?.background ?? "rgba(148,163,184,0.25)");
      const gaugeBg = this._paletteColor(this._resolveDynamicValue(gaugeCfg?.background, item.entity, state, gaugeBgDefault));
      const gaugeGradientCfgRaw = gaugeCfg?.gradient;
      const gaugeGradientCfg = (gaugeGradientCfgRaw && typeof gaugeGradientCfgRaw === "object") ? gaugeGradientCfgRaw : null;
      const gaugeGradientEnabled = this._toBool(this._resolveDynamicValue(gaugeGradientCfg?.enabled, item.entity, state, !!gaugeGradientCfg), !!gaugeGradientCfg);
      const gaugeGradientSolid = this._toBool(this._resolveDynamicValue(gaugeGradientCfg?.solid, item.entity, state, false), false);
      const gaugeGradientReverse = this._toBool(this._resolveDynamicValue(gaugeGradientCfg?.reverse, item.entity, state, false), false);
      const gaugeGradientStepsRaw = Number(this._resolveDynamicValue(gaugeGradientCfg?.steps, item.entity, state, 0));
      const gaugeGradientSteps = Number.isFinite(gaugeGradientStepsRaw) ? Math.max(0, Math.floor(gaugeGradientStepsRaw)) : 0;
      const gaugeGradientPreset = String(this._resolveDynamicValue(gaugeGradientCfg?.preset, item.entity, state, "default") || "default").toLowerCase();
      const gaugeGradientStopsRaw = Array.isArray(gaugeGradientCfg?.stops) ? gaugeGradientCfg.stops : null;
      const gaugeDefaultStops = gaugeGradientPreset === "royg"
        ? [
            { at: 0.00, color: "#22c55e" },
            { at: 0.28, color: "#84cc16" },
            { at: 0.52, color: "#facc15" },
            { at: 0.74, color: "#fb923c" },
            { at: 1.00, color: "#ef4444" },
          ]
        : gaugeGradientPreset === "default"
          ? [
              { at: 0.00, color: "$btn_inactive_bg" },
              { at: 1.00, color: "$btn_active_bg" },
            ]
          : [
              { at: 0, color: "#22c55e" },
              { at: 1, color: "#ef4444" },
            ];
      const gaugeGradientStopsBase = (gaugeGradientStopsRaw || gaugeDefaultStops)
        .map((s) => {
          const at = Number(s?.at);
          const color = this._paletteColor(s?.color);
          if (!Number.isFinite(at) || !color) return null;
          return { at: Math.max(0, Math.min(1, at)), color };
        })
        .filter(Boolean)
        .sort((a, b) => a.at - b.at);
      const gaugeGradientStops = gaugeGradientReverse
        ? gaugeGradientStopsBase.map((s) => ({ at: 1 - s.at, color: s.color })).sort((a, b) => a.at - b.at)
        : gaugeGradientStopsBase;
      const gaugeWidth = Math.max(1, this._toPx(this._resolveDynamicValue(gaugeCfg?.width, item.entity, state, Math.max(2, Math.round(btnSize * 0.12))), Math.max(2, Math.round(btnSize * 0.12))));
      const gaugeInnerBgRaw = this._resolveDynamicValue(gaugeCfg?.inner_background ?? gaugeCfg?.["inner-background"], item.entity, state, null);
      const gaugeInnerBg = gaugeInnerBgRaw == null || gaugeInnerBgRaw === "" ? null : this._paletteColor(gaugeInnerBgRaw);
      const gaugePosRaw = Number(this._resolveDynamicValue(gaugeCfg?.position, item.entity, state, 0));
      const gaugePos = Number.isFinite(gaugePosRaw) ? Math.max(0, Math.min(1, gaugePosRaw)) : 0;
      const gaugeColorAt = (t) => {
        const tt = Math.max(0, Math.min(1, t));
        if (!gaugeGradientEnabled || gaugeGradientStops.length < 2) return gaugeColor;
        let left = gaugeGradientStops[0];
        let right = gaugeGradientStops[gaugeGradientStops.length - 1];
        for (let i = 0; i < gaugeGradientStops.length - 1; i += 1) {
          const a = gaugeGradientStops[i];
          const b = gaugeGradientStops[i + 1];
          if (tt >= a.at && tt <= b.at) { left = a; right = b; break; }
        }
        const parseHex = (hex) => {
          const h = String(hex || "").trim();
          const m = h.match(/^#([0-9a-f]{6})$/i);
          if (!m) return null;
          const v = m[1];
          return { r: parseInt(v.slice(0, 2), 16), g: parseInt(v.slice(2, 4), 16), b: parseInt(v.slice(4, 6), 16) };
        };
        const l = parseHex(left.color);
        const r = parseHex(right.color);
        if (!l || !r) return right?.color || left?.color || gaugeColor;
        const span = Math.max(0.000001, right.at - left.at);
        const k = Math.max(0, Math.min(1, (tt - left.at) / span));
        const mix = (a, b) => Math.round(a + (b - a) * k);
        return `#${mix(l.r, r.r).toString(16).padStart(2, "0")}${mix(l.g, r.g).toString(16).padStart(2, "0")}${mix(l.b, r.b).toString(16).padStart(2, "0")}`;
      };
      const gaugePeakCfgRaw = gaugeCfg?.peak;
      const gaugePeakListRaw = Array.isArray(gaugePeakCfgRaw) ? gaugePeakCfgRaw : (gaugePeakCfgRaw && typeof gaugePeakCfgRaw === "object" ? [gaugePeakCfgRaw] : []);
      const gaugePeaks = gaugePeakListRaw.map((peakCfg) => {
        const enabled = this._toBool(this._resolveDynamicValue(peakCfg?.enabled, item.entity, state, true), true);
        if (!enabled) return null;
        const peakEntity = String(this._resolveDynamicValue(peakCfg?.entity, item.entity, state, "") || "").trim();
        const peakStateObj = peakEntity ? this._hass?.states?.[peakEntity] : null;
        const peakValueRaw = this._resolveDynamicValue(peakCfg?.value, item.entity, state, peakStateObj?.state ?? null);
        const peakNumericValue = Number(peakValueRaw);
        const peakProgress = Number.isFinite(peakNumericValue) && Number.isFinite(denom) && denom !== 0
          ? Math.max(0, Math.min(1, (peakNumericValue - scale.min) / denom))
          : null;
        if (!Number.isFinite(peakProgress)) return null;
        const peakColorDefault = gaugeColorAt(peakProgress);
        const peakColor = this._paletteColor(this._resolveDynamicValue(peakCfg?.color, item.entity, state, peakColorDefault));
        const peakBackgroundRaw = this._resolveDynamicValue(peakCfg?.background, item.entity, state, null);
        const peakBackground = peakBackgroundRaw == null || peakBackgroundRaw === "" ? null : this._paletteColor(peakBackgroundRaw);
        const peakNoMark = this._toBool(this._resolveDynamicValue(peakCfg?.no_mark ?? peakCfg?.["no-mark"], item.entity, state, false), false);
        const peakWidth = Math.max(1, this._toPx(this._resolveDynamicValue(peakCfg?.width, item.entity, state, 10), 10));
        const peakThickness = Math.max(1, this._toPx(this._resolveDynamicValue(peakCfg?.thickness, item.entity, state, 4), 4));
        return { peakProgress, peakColor, peakBackground, peakNoMark, peakWidth, peakThickness };
      }).filter(Boolean);
      const progressActive = progressEnabled ? this._isProgressVisible(progressCfg, item.entity, state) : false;
      const progressColorDefault = this._paletteColor("$seagull_primary") || this._paletteColor(dDef?.active?.background ?? "#f59e0b");
      const progressColor = this._paletteColor(this._resolveDynamicValue(progressCfg?.color, item.entity, state, progressColorDefault));
      const progressBg = this._paletteColor(this._resolveDynamicValue(progressCfg?.background, item.entity, state, "transparent"));
      const progressWidth = Math.max(1, this._toPx(this._resolveDynamicValue(progressCfg?.width, item.entity, state, 6), 6));
      const progressLengthRaw = Number(this._resolveDynamicValue(progressCfg?.length, item.entity, state, 0.25));
      const progressLength = Number.isFinite(progressLengthRaw) ? Math.max(0.01, Math.min(1, progressLengthRaw)) : 0.25;
      const progressSpeedRaw = Number(this._resolveDynamicValue(progressCfg?.speed, item.entity, state, 0.5));
      const progressSpeed = Number.isFinite(progressSpeedRaw) ? Math.max(0.05, progressSpeedRaw) : 1;
      const progressDurSec = 1 / progressSpeed;
      const progressSegDeg = Math.round(progressLength * 360);
      const visualBorderW = gaugeEnabled ? 0 : borderW;
      const visualBgColor = (gaugeEnabled || (isNumber && numberStyle === "big")) ? "transparent" : bgColor;
      let finalBorderStyle = "solid";
      let finalBorderColor = borderColor;

      let finalIcon = icon;
      let finalIconColor = iColor;
      let finalBgColor = visualBgColor;
      if (isPhantom) {
        const activeBgDefault = "rgba(148,163,184,0.22)";
        const activeFgDefault = "rgba(226,232,240,0.65)";

        const phantomBgRaw = this._resolveDynamicValue(phantomCfg?.background ?? phantomCfg?.bg, item.entity, state, null);
        const phantomColorRaw = this._resolveDynamicValue(phantomCfg?.color, item.entity, state, null);
        const phantomIconRaw = this._resolveDynamicValue(phantomCfg?.icon, item.entity, state, null);

        const activeBg = this._paletteColor(activeBgDefault);
        const activeFg = this._paletteColor(activeFgDefault);

        finalBgColor = this._paletteColor(phantomBgRaw != null ? phantomBgRaw : activeBg);
        finalIconColor = this._paletteColor(phantomColorRaw != null ? phantomColorRaw : "rgba(148,163,184,0.55)");
        if (phantomIconRaw != null && phantomIconRaw !== "") finalIcon = phantomIconRaw;
        finalBorderStyle = "dashed";
        finalBorderColor = this._paletteColor("rgba(148,163,184,0.55)");
        if (phantomColorRaw == null) finalIconColor = finalBorderColor;
      }
      const gaugeProgressDeg = Math.round(gaugeProgress * 360);
      const meterStartDeg = 140;
      const meterSpanDeg = 260;
      const meterEndDeg = meterStartDeg + meterSpanDeg;
      const meterProgressEndDeg = meterStartDeg + Math.round(meterSpanDeg * gaugeProgress);
      const meterRadius = 44;
      const meterCx = 50;
      const meterCy = 54;
      const meterStroke = Math.max(2, gaugeWidth);
      const meterPeakArc = (pDeg, strokeW, color) => {
        const a1 = (pDeg - 2) * Math.PI / 180;
        const a2 = pDeg * Math.PI / 180;
        const x1 = meterCx + meterRadius * Math.cos(a1);
        const y1 = meterCy + meterRadius * Math.sin(a1);
        const x2 = meterCx + meterRadius * Math.cos(a2);
        const y2 = meterCy + meterRadius * Math.sin(a2);
        return `<path d="M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${meterRadius} ${meterRadius} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)}" stroke="${this._esc(color)}" stroke-width="${strokeW}" fill="none" stroke-linecap="round"/>`;
      };
      const gaugeGradientFullCircle = (() => {
        if (!gaugeGradientEnabled || gaugeGradientStops.length < 2) return null;
        const colorAt = (t) => {
          const tt = Math.max(0, Math.min(1, t));
          let left = gaugeGradientStops[0];
          let right = gaugeGradientStops[gaugeGradientStops.length - 1];
          for (let i = 0; i < gaugeGradientStops.length - 1; i += 1) {
            const a = gaugeGradientStops[i];
            const b = gaugeGradientStops[i + 1];
            if (tt >= a.at && tt <= b.at) { left = a; right = b; break; }
          }
          const parseHex = (hex) => {
            const h = String(hex || "").trim();
            const m = h.match(/^#([0-9a-f]{6})$/i);
            if (!m) return null;
            const v = m[1];
            return { r: parseInt(v.slice(0, 2), 16), g: parseInt(v.slice(2, 4), 16), b: parseInt(v.slice(4, 6), 16) };
          };
          const l = parseHex(left.color);
          const r = parseHex(right.color);
          if (!l || !r) return right?.color || left?.color || gaugeColor;
          const span = Math.max(0.000001, right.at - left.at);
          const k = Math.max(0, Math.min(1, (tt - left.at) / span));
          const mix = (a, b) => Math.round(a + (b - a) * k);
          return `#${mix(l.r, r.r).toString(16).padStart(2, "0")}${mix(l.g, r.g).toString(16).padStart(2, "0")}${mix(l.b, r.b).toString(16).padStart(2, "0")}`;
        };
        if (gaugeGradientSteps >= 2) {
          const parts = [];
          for (let i = 0; i < gaugeGradientSteps; i += 1) {
            const fromT = i / gaugeGradientSteps;
            const toT = (i + 1) / gaugeGradientSteps;
            const fromDeg = Math.round(fromT * 360);
            const toDeg = Math.round(toT * 360);
            const c = this._esc(colorAt((fromT + toT) / 2));
            parts.push(`${c} ${fromDeg}deg ${toDeg}deg`);
          }
          return parts.join(", ");
        }
        const parts = [];
        for (let i = 0; i < gaugeGradientStops.length - 1; i += 1) {
          const a = gaugeGradientStops[i];
          const b = gaugeGradientStops[i + 1];
          const fromDeg = Math.round(a.at * 360);
          const toDeg = Math.round(b.at * 360);
          if (toDeg <= fromDeg) continue;
          parts.push(`${this._esc(a.color)} ${fromDeg}deg, ${this._esc(b.color)} ${toDeg}deg`);
        }
        return parts.length ? parts.join(", ") : null;
      })();
      const gaugeGradientSolidColor = (() => {
        if (!gaugeGradientEnabled || !gaugeGradientSolid || gaugeGradientStops.length < 2) return null;
        const t = Math.max(0, Math.min(1, gaugeProgress));
        let left = gaugeGradientStops[0];
        let right = gaugeGradientStops[gaugeGradientStops.length - 1];
        for (let i = 0; i < gaugeGradientStops.length - 1; i += 1) {
          const a = gaugeGradientStops[i];
          const b = gaugeGradientStops[i + 1];
          if (t >= a.at && t <= b.at) { left = a; right = b; break; }
        }
        const parseHex = (hex) => {
          const h = String(hex || "").trim();
          const m = h.match(/^#([0-9a-f]{6})$/i);
          if (!m) return null;
          const v = m[1];
          return {
            r: parseInt(v.slice(0, 2), 16),
            g: parseInt(v.slice(2, 4), 16),
            b: parseInt(v.slice(4, 6), 16),
          };
        };
        const l = parseHex(left.color);
        const r = parseHex(right.color);
        if (!l || !r) return this._esc(right?.color || left?.color || gaugeColor);
        const span = Math.max(0.000001, right.at - left.at);
        const k = Math.max(0, Math.min(1, (t - left.at) / span));
        const mix = (a, b) => Math.round(a + (b - a) * k);
        const rr = mix(l.r, r.r).toString(16).padStart(2, "0");
        const gg = mix(l.g, r.g).toString(16).padStart(2, "0");
        const bb = mix(l.b, r.b).toString(16).padStart(2, "0");
        return `#${rr}${gg}${bb}`;
      })();
      const gaugeGradientActiveArc = (() => {
        if (!gaugeGradientEnabled || gaugeGradientStops.length < 2) return null;
        if (gaugeProgressDeg <= 0) return `transparent 0deg 360deg`;
        const colorAt = (t) => {
          const tt = Math.max(0, Math.min(1, t));
          let left = gaugeGradientStops[0];
          let right = gaugeGradientStops[gaugeGradientStops.length - 1];
          for (let i = 0; i < gaugeGradientStops.length - 1; i += 1) {
            const a = gaugeGradientStops[i];
            const b = gaugeGradientStops[i + 1];
            if (tt >= a.at && tt <= b.at) { left = a; right = b; break; }
          }
          const parseHex = (hex) => {
            const h = String(hex || "").trim();
            const m = h.match(/^#([0-9a-f]{6})$/i);
            if (!m) return null;
            const v = m[1];
            return { r: parseInt(v.slice(0, 2), 16), g: parseInt(v.slice(2, 4), 16), b: parseInt(v.slice(4, 6), 16) };
          };
          const l = parseHex(left.color);
          const r = parseHex(right.color);
          if (!l || !r) return right?.color || left?.color || gaugeColor;
          const span = Math.max(0.000001, right.at - left.at);
          const k = Math.max(0, Math.min(1, (tt - left.at) / span));
          const mix = (a, b) => Math.round(a + (b - a) * k);
          return `#${mix(l.r, r.r).toString(16).padStart(2, "0")}${mix(l.g, r.g).toString(16).padStart(2, "0")}${mix(l.b, r.b).toString(16).padStart(2, "0")}`;
        };
        if (gaugeGradientSteps >= 2) {
          const parts = [];
          for (let i = 0; i < gaugeGradientSteps; i += 1) {
            const fromT = i / gaugeGradientSteps;
            const toT = (i + 1) / gaugeGradientSteps;
            const segFrom = Math.round(fromT * 360);
            const segTo = Math.round(toT * 360);
            const from = Math.max(0, segFrom);
            const to = Math.min(gaugeProgressDeg, segTo);
            if (to <= from) continue;
            const c = this._esc(colorAt((fromT + toT) / 2));
            parts.push(`${c} ${from}deg ${to}deg`);
          }
          return parts.length ? `${parts.join(", ")}, transparent ${gaugeProgressDeg}deg 360deg` : `transparent 0deg 360deg`;
        }
        const activeParts = [];
        for (let i = 0; i < gaugeGradientStops.length - 1; i += 1) {
          const a = gaugeGradientStops[i];
          const b = gaugeGradientStops[i + 1];
          const segFrom = Math.round(a.at * 360);
          const segTo = Math.round(b.at * 360);
          if (segTo <= segFrom) continue;
          const from = Math.max(0, segFrom);
          const to = Math.min(gaugeProgressDeg, segTo);
          if (to <= from) continue;
          activeParts.push(`${this._esc(a.color)} ${from}deg, ${this._esc(b.color)} ${to}deg`);
        }
        if (!activeParts.length) return `transparent 0deg 360deg`;
        return `${activeParts.join(", ")}, transparent ${gaugeProgressDeg}deg 360deg`;
      })();
      const donutHtml = gaugeEnabled
        ? (gaugeGradientFullCircle
          ? `<span aria-hidden="true" style="position:absolute;inset:1px;border-radius:inherit;background:conic-gradient(from ${gaugePos}turn, ${this._esc(gaugeBg)} 0deg 360deg);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - ${gaugeWidth}px),#000 calc(100% - ${gaugeWidth}px));mask:radial-gradient(farthest-side,transparent calc(100% - ${gaugeWidth}px),#000 calc(100% - ${gaugeWidth}px));pointer-events:none;z-index:1;"></span>
             <span aria-hidden="true" style="position:absolute;inset:1px;border-radius:inherit;background:conic-gradient(from ${gaugePos}turn, ${gaugeGradientSolid && gaugeGradientSolidColor ? `${this._esc(gaugeGradientSolidColor)} 0deg ${gaugeProgressDeg}deg, transparent ${gaugeProgressDeg}deg 360deg` : gaugeGradientActiveArc});-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - ${gaugeWidth}px),#000 calc(100% - ${gaugeWidth}px));mask:radial-gradient(farthest-side,transparent calc(100% - ${gaugeWidth}px),#000 calc(100% - ${gaugeWidth}px));pointer-events:none;z-index:3;"></span>`
          : `<span aria-hidden="true" style="position:absolute;inset:1px;border-radius:inherit;background:conic-gradient(from ${gaugePos}turn, ${this._esc(gaugeColor)} 0deg ${gaugeProgressDeg}deg, ${this._esc(gaugeBg)} ${gaugeProgressDeg}deg 360deg);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - ${gaugeWidth}px),#000 calc(100% - ${gaugeWidth}px));mask:radial-gradient(farthest-side,transparent calc(100% - ${gaugeWidth}px),#000 calc(100% - ${gaugeWidth}px));pointer-events:none;z-index:3;"></span>`)
        : "";
      const gaugePeakHtml = (gaugeEnabled && gaugePeaks.length)
        ? gaugePeaks.filter((p) => !p.peakNoMark).map((p) => {
            const peakDeg = gaugeMeterEnabled
              ? (meterStartDeg + Math.round(meterSpanDeg * p.peakProgress))
              : Math.round(p.peakProgress * 360);
            const fromDeg = Math.max(0, peakDeg - p.peakThickness);
            if (gaugeMeterEnabled) {
              return `<span aria-hidden="true" style="position:absolute;inset:1px;border-radius:inherit;pointer-events:none;z-index:2;">
                <svg viewBox="0 0 100 100" width="100%" height="100%" style="display:block;overflow:visible;">
                  ${meterPeakArc(peakDeg, p.peakWidth, p.peakColor)}
                </svg>
              </span>`;
            }
            return `<span aria-hidden="true" style="position:absolute;inset:1px;border-radius:inherit;background:conic-gradient(from ${gaugePos}turn, transparent 0deg ${fromDeg}deg, ${this._esc(p.peakColor)} ${fromDeg}deg ${peakDeg}deg, transparent ${peakDeg}deg 360deg);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - ${p.peakWidth}px),#000 calc(100% - ${p.peakWidth}px));mask:radial-gradient(farthest-side,transparent calc(100% - ${p.peakWidth}px),#000 calc(100% - ${p.peakWidth}px));pointer-events:none;z-index:2;"></span>`;
          }).join("")
        : "";
      const gaugePeakBackgroundHtml = (gaugeEnabled && gaugePeaks.length)
        ? gaugePeaks
          .filter((p) => !!p.peakBackground)
          .map((p) => {
            const peakDeg = gaugeMeterEnabled
              ? (meterStartDeg + Math.round(meterSpanDeg * p.peakProgress))
              : Math.round(p.peakProgress * 360);
            if (gaugeMeterEnabled) {
              return `<span aria-hidden="true" style="position:absolute;inset:1px;border-radius:inherit;pointer-events:none;z-index:2;">
                <svg viewBox="0 0 100 100" width="100%" height="100%" style="display:block;overflow:visible;">
                  <path d="M ${ (meterCx + meterRadius * Math.cos(meterStartDeg * Math.PI/180)).toFixed(2)} ${ (meterCy + meterRadius * Math.sin(meterStartDeg * Math.PI/180)).toFixed(2)} A ${meterRadius} ${meterRadius} 0 ${((peakDeg - meterStartDeg) > 180) ? 1 : 0} 1 ${ (meterCx + meterRadius * Math.cos(peakDeg * Math.PI/180)).toFixed(2)} ${ (meterCy + meterRadius * Math.sin(peakDeg * Math.PI/180)).toFixed(2)}" stroke="${this._esc(p.peakBackground)}" stroke-width="${meterStroke}" fill="none" stroke-linecap="round"/>
                </svg>
              </span>`;
            }
            return `<span aria-hidden="true" style="position:absolute;inset:1px;border-radius:inherit;background:conic-gradient(from ${gaugePos}turn, ${this._esc(p.peakBackground)} 0deg ${peakDeg}deg, transparent ${peakDeg}deg 360deg);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - ${gaugeWidth}px),#000 calc(100% - ${gaugeWidth}px));mask:radial-gradient(farthest-side,transparent calc(100% - ${gaugeWidth}px),#000 calc(100% - ${gaugeWidth}px));pointer-events:none;z-index:2;"></span>`;
          }).join("")
        : "";
      const meterHtml = gaugeMeterEnabled
        ? `<span aria-hidden="true" style="position:absolute;inset:1px;border-radius:inherit;pointer-events:none;z-index:1;">
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="display:block;overflow:visible;">
              <path d="M ${(meterCx + meterRadius * Math.cos(meterStartDeg * Math.PI/180)).toFixed(2)} ${(meterCy + meterRadius * Math.sin(meterStartDeg * Math.PI/180)).toFixed(2)} A ${meterRadius} ${meterRadius} 0 1 1 ${(meterCx + meterRadius * Math.cos(meterEndDeg * Math.PI/180)).toFixed(2)} ${(meterCy + meterRadius * Math.sin(meterEndDeg * Math.PI/180)).toFixed(2)}" stroke="${this._esc(gaugeBg)}" stroke-width="${meterStroke}" fill="none" stroke-linecap="round"/>
              <path d="M ${(meterCx + meterRadius * Math.cos(meterStartDeg * Math.PI/180)).toFixed(2)} ${(meterCy + meterRadius * Math.sin(meterStartDeg * Math.PI/180)).toFixed(2)} A ${meterRadius} ${meterRadius} 0 ${((meterProgressEndDeg - meterStartDeg) > 180) ? 1 : 0} 1 ${(meterCx + meterRadius * Math.cos(meterProgressEndDeg * Math.PI/180)).toFixed(2)} ${(meterCy + meterRadius * Math.sin(meterProgressEndDeg * Math.PI/180)).toFixed(2)}" stroke="${this._esc(gaugeColor)}" stroke-width="${meterStroke}" fill="none" stroke-linecap="round"/>
            </svg>
          </span>`
        : "";
      const gaugeInnerBgHtml = (gaugeEnabled && gaugeInnerBg)
        ? `<span aria-hidden="true" style="position:absolute;inset:${Math.max(1, gaugeWidth - 1)}px;border-radius:inherit;background:${this._esc(gaugeInnerBg)};pointer-events:none;z-index:0.5;"></span>`
        : "";
      const progressHtml = progressEnabled
        ? `<span aria-hidden="true" style="position:absolute;inset:0;border-radius:inherit;background:${this._esc(progressBg)};-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - ${progressWidth}px),#000 calc(100% - ${progressWidth}px));mask:radial-gradient(farthest-side,transparent calc(100% - ${progressWidth}px),#000 calc(100% - ${progressWidth}px));pointer-events:none;"></span>
           <span aria-hidden="true" style="position:absolute;inset:0;display:block;border-radius:inherit;z-index:2;opacity:${progressActive ? "1" : "0"};background:conic-gradient(from 0deg, ${this._esc(progressColor)} 0deg ${progressSegDeg}deg, transparent ${progressSegDeg}deg 360deg);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - ${progressWidth}px),#000 calc(100% - ${progressWidth}px));mask:radial-gradient(farthest-side,transparent calc(100% - ${progressWidth}px),#000 calc(100% - ${progressWidth}px));pointer-events:none;animation:sg-runner-${index} ${progressDurSec}s linear infinite;"></span>
           <style>@keyframes sg-runner-${index}{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}</style>`
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
      const gaugeSuffix = hasGaugeValueOverride ? this._climatSuffix(st, gaugeValueRaw, unitCfg) : climatSuffix;
      const gaugeValue = this._formatClimatValue(st, hasGaugeValueOverride ? gaugeValueRaw : state, gaugeSuffix);
      const watchStyle = String(this._resolveDynamicValue(viewCfg?.style, item.entity, state, "solid") || "solid").toLowerCase();
      const watchScaleRaw = String(this._resolveDynamicValue(viewCfg?.scale, item.entity, state, "hour") || "hour").toLowerCase();
      const watchScale = watchScaleRaw === "day" ? "day" : "hour";
      const watchWindowMs = watchScale === "day" ? (12 * 60 * 60 * 1000) : (60 * 60 * 1000);
      const watchNotchesRaw = this._resolveDynamicValue(viewCfg?.notches, item.entity, state, 12);
      const watchNotches = Math.max(1, Math.min(60, parseInt(watchNotchesRaw, 10) || 12));
      const watchLengthRaw = this._resolveDynamicValue(viewCfg?.length, item.entity, state, Math.max(6, Math.round(btnSize * 0.22)));
      const watchLength = Math.max(2, this._toPx(watchLengthRaw, Math.max(6, Math.round(btnSize * 0.22))));
      const watchTimeLengthRaw = this._resolveDynamicValue(viewCfg?.time_length, item.entity, state, Math.round(watchLength * 2));
      const watchTimeLength = Math.max(2, this._toPx(watchTimeLengthRaw, Math.round(watchLength * 1.25)));
      const watchColor = this._paletteColor(this._resolveDynamicValue(viewCfg?.color, item.entity, state, "#111111"));
      const watchTimeColor = this._paletteColor(this._resolveDynamicValue(viewCfg?.time_color, item.entity, state, "#ef4444"));
      const watchAccentColor = this._paletteColor(this._resolveDynamicValue(viewCfg?.accent_color, item.entity, state, "#22c55e"));
      const watchShowState = this._resolveDynamicValue(viewCfg?.show_state, item.entity, state, "");
      const nowDate = new Date();
      const watchProgress = watchScale === "day"
        ? (((nowDate.getHours() % 12) * 60) + nowDate.getMinutes()) / (12 * 60)
        : nowDate.getMinutes() / 60;
      const watchIndex = Math.min(watchNotches - 1, Math.max(0, Math.floor(watchProgress * watchNotches)));
      this._ensureWatchfaceHistory(entityId, watchShowState, watchNotches, watchWindowMs);
      const watchMarks = this._getWatchfaceMinuteMarks(entityId, watchShowState, watchNotches, watchWindowMs);
      const watchStroke = Math.max(0.9, Math.min(2.4, 2.5 - (watchNotches / 60) * 1.4));
      const watchLengthPct = Math.max(2, Math.min(40, (watchLength / Math.max(1, btnSize)) * 100));
      const watchTimeLengthPct = Math.max(2, Math.min(45, (watchTimeLength / Math.max(1, btnSize)) * 100));
      const rOuter = 46;
      const rInner = Math.max(4, rOuter - (watchLengthPct * 0.42));
      const rInnerTime = Math.max(3, rOuter - (watchTimeLengthPct * 0.42));
      const watchfaceNotchesHtml = `<span style="position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;width:100%;height:100%;">
        <svg viewBox="0 0 100 100" width="100%" height="100%" style="display:block;overflow:visible;">
          ${Array.from({ length: watchNotches }, (_, i) => {
            const angle = (i / watchNotches) * (Math.PI * 2) - Math.PI / 2;
            const isTime = i === watchIndex;
            const rIn = isTime ? rInnerTime : rInner;
            const x1 = 50 + rIn * Math.cos(angle);
            const y1 = 50 + rIn * Math.sin(angle);
            const x2 = 50 + rOuter * Math.cos(angle);
            const y2 = 50 + rOuter * Math.sin(angle);
            const c = isTime
              ? watchTimeColor
              : (watchMarks && watchMarks[i] ? watchAccentColor : watchColor);
            return `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="${this._esc(c)}" stroke-width="${watchStroke.toFixed(2)}" stroke-linecap="round" />`;
          }).join("")}
        </svg>
      </span>`;
      const watchSegDeg = 360 / Math.max(1, watchNotches);
      const watchSolidAccentStops = Array.from({ length: watchNotches }, (_, i) => {
        const from = (i * watchSegDeg).toFixed(3);
        const to = ((i + 1) * watchSegDeg).toFixed(3);
        const c = watchMarks && watchMarks[i] ? watchAccentColor : "transparent";
        return `${this._esc(c)} ${from}deg ${to}deg`;
      }).join(", ");
      const watchSolidTimeFrom = (watchIndex * watchSegDeg).toFixed(3);
      const watchSolidTimeTo = ((watchIndex + 1) * watchSegDeg).toFixed(3);
      const watchfaceSolidHtml = `<span style="position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;width:100%;height:100%;">
        <span aria-hidden="true" style="position:absolute;inset:1px;border-radius:inherit;background:${this._esc(watchColor)};-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - ${watchLength}px),#000 calc(100% - ${watchLength}px));mask:radial-gradient(farthest-side,transparent calc(100% - ${watchLength}px),#000 calc(100% - ${watchLength}px));pointer-events:none;"></span>
        <span aria-hidden="true" style="position:absolute;inset:1px;border-radius:inherit;background:conic-gradient(from -90deg, ${watchSolidAccentStops});-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - ${watchLength}px),#000 calc(100% - ${watchLength}px));mask:radial-gradient(farthest-side,transparent calc(100% - ${watchLength}px),#000 calc(100% - ${watchLength}px));pointer-events:none;"></span>
        <span aria-hidden="true" style="position:absolute;inset:1px;border-radius:inherit;background:conic-gradient(from -90deg, transparent 0deg ${watchSolidTimeFrom}deg, ${this._esc(watchTimeColor)} ${watchSolidTimeFrom}deg ${watchSolidTimeTo}deg, transparent ${watchSolidTimeTo}deg 360deg);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - ${watchTimeLength}px),#000 calc(100% - ${watchTimeLength}px));mask:radial-gradient(farthest-side,transparent calc(100% - ${watchTimeLength}px),#000 calc(100% - ${watchTimeLength}px));pointer-events:none;"></span>
      </span>`;
      const watchfaceHtml = watchStyle === "notches" ? watchfaceNotchesHtml : watchfaceSolidHtml;
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
        : (gaugeMeterEnabled && gaugeShowValue)
          ? `<span style="position:relative;z-index:4;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:6px 0 4px 0;font-family:${this._esc(String(numberFontFamily))};">
              <span style="height:62%;display:flex;align-items:flex-end;justify-content:center;line-height:1;color:${this._esc(iColor)};font-size:${Math.max(valueFontPxBig + 2, Math.round(btnSize*0.38))}px;font-weight:${this._esc(String(numberFontWeight))};position:relative;">
                <span>${this._esc(gaugeValue)}</span>
                ${gaugeSuffix ? `<span style="margin-left:0px;margin-top:0.1em;font-size:${unitFontPxBig}px;opacity:.95;line-height:1;">${this._esc(gaugeSuffix)}</span>` : ""}
              </span>
              <ha-icon icon="${this._esc(icon)}" style="position:relative;top:0px;color:${this._esc(iColor)};--mdc-icon-size:${Math.max(12, Math.round(btnSize * 0.24))}px;"></ha-icon>
            </span>`
        : (gaugeEnabled && gaugeShowValue)
          ? `<span style="position:relative;z-index:1;width:100%;height:100%;display:block;font-family:${this._esc(String(numberFontFamily))};">
              <ha-icon icon="${this._esc(icon)}" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:${this._esc(this._toRgba(iColor, 0.2))};opacity:1;--mdc-icon-size:${Math.max(12, Math.round(btnSize * 0.5))}px;"></ha-icon>
              <span style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:inline-flex;align-items:flex-start;line-height:1;color:${this._esc(iColor)};font-size:${valueFontPxBig}px;font-weight:${this._esc(String(numberFontWeight))};">
                <span>${this._esc(gaugeValue)}</span>
                ${gaugeSuffix ? `<span style="margin-left:0px;margin-top:0.12em;font-size:${unitFontPxBig}px;opacity:.95;line-height:1;">${this._esc(gaugeSuffix)}</span>` : ""}
              </span>
            </span>`
        : isWatchface
          ? watchfaceHtml
        : `<ha-icon icon="${this._esc(finalIcon)}" style="position:relative;z-index:1;color:${this._esc(finalIconColor)};--mdc-icon-size:${Math.round(btnSize * 0.5)}px;"></ha-icon>`;

      const badgeRaw = item?.badge ?? buttonsCfg?.badge;
      const badgeCfg = this._resolveDynamicValue(badgeRaw, item.entity, state, null);
      const badgeVisible = this._isBadgeVisible(badgeCfg, item.entity, state);
      let badgeHtml = "";
      if (badgeVisible && badgeCfg && typeof badgeCfg === "object") {
        const badgeIcon = this._resolveDynamicValue(badgeCfg.icon, item.entity, state, "");
        const badgeText = this._resolveDynamicValue(badgeCfg.text, item.entity, state, "");
        const hasBadgeIcon = !!String(badgeIcon || "").trim();
        const hasBadgeText = !hasBadgeIcon && !!String(badgeText || "").trim();
        const badgeColor = this._paletteColor(this._resolveDynamicValue(badgeCfg.color ?? badgeCfg.background, item.entity, state, "#ef4444"));
        const badgeIconColor = this._paletteColor(this._resolveDynamicValue(badgeCfg.icon_color ?? badgeCfg.text_color, item.entity, state, "#ffffff"));
        const defaultBadgeSize = hasBadgeIcon ? Math.max(12, Math.round(btnSize * 0.34)) : Math.max(4, Math.round(btnSize * 0.1));
        const badgeSize = Math.max(6, this._toPx(this._resolveDynamicValue(badgeCfg.size, item.entity, state, defaultBadgeSize), defaultBadgeSize));

        if (hasBadgeIcon || hasBadgeText) {
          const iconSize = Math.max(10, Math.round(badgeSize * 0.78));
          badgeHtml = `<span aria-hidden="true" style="position:absolute;left:85.36%;top:14.64%;transform:translate(-50%,-50%);width:${badgeSize}px;height:${badgeSize}px;border-radius:999px;background:${this._esc(badgeColor)};display:inline-flex;align-items:center;justify-content:center;pointer-events:none;z-index:3;">
              ${hasBadgeIcon
      ? `<ha-icon icon="${this._esc(String(badgeIcon))}" style="position:relative;top:-1px;color:${this._esc(badgeIconColor)};--mdc-icon-size:${iconSize}px;"></ha-icon>`
      : `<span style="color:${this._esc(badgeIconColor)};font-size:${Math.max(7, Math.round(badgeSize * 0.52))}px;line-height:1;font-weight:700;">${this._esc(String(badgeText))}</span>`}
            </span>`;
        } else {
          badgeHtml = `<span aria-hidden="true" style="position:absolute;top:0;right:0;width:${badgeSize}px;height:${badgeSize}px;border-radius:999px;background:${this._esc(badgeColor)};pointer-events:none;z-index:3;"></span>`;
        }
      }

      const holdAct = this._resolveAction(item, "hold_action");
      const holdType = String(holdAct?.action || "").toLowerCase();
      const holdEntityId = this._primaryEntityId(item?.entity);
      const isBrightnessHoldCfg = holdType === "brightness" && String(holdEntityId || "").startsWith("light.");
      const touchActionStyle = isBrightnessHoldCfg ? "touch-action:none;-ms-touch-action:none;" : "";

      const brightnessOverlayHtml = isBrightnessHoldCfg
        ? `<span class="sg-room-brightness-overlay" style="position:absolute;inset:0;display:none;align-items:center;justify-content:center;z-index:4;pointer-events:none;font-size:${Math.max(10, Math.round(btnSize * 0.32))}px;font-weight:600;line-height:1;color:${this._esc(finalIconColor)};">0%</span>`
        : "";

      const html = `<button class="sg-room-light-btn" data-index="${index}" style="${gridSpanStyle}${touchActionStyle}width:${btnWidth}px;height:${btnSize}px;border-radius:${borderRadiusCss};border:${Math.max(visualBorderW, isPhantom ? 1 : 0)}px ${finalBorderStyle} ${this._esc(finalBorderColor)};cursor:pointer;display:inline-flex;align-items:center;justify-content:center;align-self:start;background:${this._esc(finalBgColor)};${unavailablePattern}padding:0;direction:ltr;">
          <span style="position:relative;display:inline-flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:inherit;">
            ${donutHtml}
            ${meterHtml}
            ${gaugeInnerBgHtml}
            ${gaugePeakBackgroundHtml}
            ${gaugePeakHtml}
            ${progressHtml}
            ${contentHtml}
            ${badgeHtml}
            ${brightnessOverlayHtml}
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

  _buildLabelsHtml() {
    const labelsCfg = this._config?.labels;
    if (!labelsCfg) return "";

    const items = this._collectGenericItems(labelsCfg, ["labels", "entities", "items", "label"])
      .filter((it) => !it.hidden)
      .filter((it) => this._isGenericItemVisible(it, labelsCfg));
    if (!items.length) return "";

    const sizeDefault = 12;
    const gap = Math.max(0, this._toPx(labelsCfg.gap ?? 6, 6));
    const padTop = Math.max(0, this._toPx(labelsCfg.padding_top ?? labelsCfg.offset_top ?? 10, 10));
    const padSide = Math.max(0, this._toPx(labelsCfg.padding_side ?? labelsCfg.padding_x ?? labelsCfg.offset_side ?? 10, 10));
    const padLeft = Math.max(0, this._toPx(labelsCfg.padding_left ?? padSide, padSide));
    const padRight = Math.max(0, this._toPx(labelsCfg.padding_right ?? padSide, padSide));
    const wrap = this._toBool(labelsCfg.wrap ?? false, false);
    const buttonsCfg = this._config?.buttons || this._config?.lights || {};
    const btnAlignRaw = String(buttonsCfg.align ?? "right").toLowerCase();
    const oppositeDefault = btnAlignRaw === "left" ? "right" : "left";
    const align = ["left", "center", "right"].includes(String(labelsCfg.align || oppositeDefault).toLowerCase())
      ? String(labelsCfg.align || oppositeDefault).toLowerCase()
      : oppositeDefault;
    const alignItemsCss = align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start";

    const html = items.map((it, idx) => {
      const entityId = this._primaryEntityId(it.entity);
      const st = entityId ? this._hass?.states?.[entityId] : null;
      const state = st?.state ?? "";
      const textRaw = this._resolveDynamicValue(it.text ?? labelsCfg.text, it.entity, state, state);
      const text = String(textRaw ?? "").trim();
      if (!text) return "";

      const textSize = Math.max(8, this._toPx(it.text_size ?? it.size ?? labelsCfg.text_size ?? labelsCfg.size ?? sizeDefault, sizeDefault));
      const padX = Math.max(0, this._toPx(it.padding_x ?? labelsCfg.padding_x ?? Math.round(textSize * 0.7), Math.round(textSize * 0.7)));
      const padY = Math.max(0, this._toPx(it.padding_y ?? labelsCfg.padding_y ?? Math.max(1, Math.round(textSize * 0.2)), Math.max(1, Math.round(textSize * 0.2))));
      const height = Math.max(10, Math.round(textSize + padY * 2));
      const radius = Math.max(0, this._toPx(it.border_radius ?? labelsCfg.border_radius ?? height, height));
      const borderW = Math.max(0, this._toPx(it.border ?? labelsCfg.border ?? 0, 0));
      const textColor = this._paletteColor(this._resolveDynamicValue(it.color ?? it.text_color ?? labelsCfg.color ?? labelsCfg.text_color, it.entity, state, "$label_fg"));
      const iconColor = this._paletteColor(this._resolveDynamicValue(it.icon_color ?? labelsCfg.icon_color, it.entity, state, "$label_icon"));
      const bg = this._paletteColor(this._resolveDynamicValue(it.background ?? it.bg ?? labelsCfg.background ?? labelsCfg.bg, it.entity, state, "$label_bg"));
      const borderColor = this._paletteColor(this._resolveDynamicValue(it.border_color ?? labelsCfg.border_color, it.entity, state, "transparent"));

      const iconRaw = this._resolveDynamicValue(it.icon ?? labelsCfg.icon, it.entity, state, st?.attributes?.icon || null);
      const showIcon = !(iconRaw === false || iconRaw == null || String(iconRaw).trim() === "");
      const iconHtml = showIcon ? `<ha-icon icon="${this._esc(iconRaw)}" style="--mdc-icon-size:${Math.max(10, Math.round(textSize * 1.1))}px;color:${this._esc(iconColor)};"></ha-icon>` : "";

      return `<button class="sg-room-label" data-label-index="${idx}" style="display:inline-flex;align-items:center;gap:6px;height:${height}px;border:${borderW}px solid ${this._esc(borderColor)};border-radius:${radius}px;padding:0 ${padX}px;background:${this._esc(bg)};color:${this._esc(textColor)};font-size:${textSize}px;line-height:1;cursor:pointer;white-space:nowrap;pointer-events:auto;">${iconHtml}<span>${this._esc(text)}</span></button>`;
    }).filter(Boolean).join("");

    if (!html) return "";
    return `<div class="sg-room-labels-layer" style="position:absolute;inset:0;z-index:3;pointer-events:none;display:flex;flex-direction:column;flex-wrap:${wrap ? "wrap" : "nowrap"};align-items:${alignItemsCss};align-content:flex-start;gap:${gap}px;padding:${padTop}px ${padRight}px 0 ${padLeft}px;box-sizing:border-box;">${html}</div>`;
  }

  _collectGenericItems(cfg, keys = ["items"]) {
    const out = [];
    const fromArray = (arr) => {
      if (!Array.isArray(arr)) return;
      arr.forEach((item) => {
        if (typeof item === "string") out.push({ entity: item });
        else if (item && typeof item === "object") out.push({ ...item });
      });
    };
    const fromObject = (obj) => {
      if (!obj || Array.isArray(obj) || typeof obj !== "object") return;
      Object.entries(obj).forEach(([entityId, value]) => {
        if (value === false) out.push({ entity: entityId, hidden: true });
        else if (value === true) out.push({ entity: entityId });
        else if (value && typeof value === "object") out.push({ entity: entityId, ...value });
      });
    };
    keys.forEach((k) => {
      fromArray(cfg?.[k]);
      fromObject(cfg?.[k]);
    });
    return out;
  }

  _isGenericItemVisible(item, cfg = {}) {
    const entityId = this._primaryEntityId(item?.entity);
    const state = entityId ? (this._hass?.states?.[entityId]?.state ?? "") : "";
    const hasOwn = (obj, key) => !!obj && Object.prototype.hasOwnProperty.call(obj, key);
    const resolve = (key, fallback) => this._resolveDynamicValue(hasOwn(item, key) ? item[key] : (hasOwn(cfg, key) ? cfg[key] : fallback), item?.entity, state, fallback);
    if (!this._toBool(resolve("show", true), true)) return false;
    if (hasOwn(item, "show_state") || hasOwn(cfg, "show_state")) if (!this._matchesValueFilter(state, resolve("show_state", undefined))) return false;
    if (hasOwn(item, "show_not_state") || hasOwn(cfg, "show_not_state")) if (this._matchesValueFilter(state, resolve("show_not_state", undefined))) return false;
    if (hasOwn(item, "show_above") || hasOwn(cfg, "show_above")) { const s = Number(state); const n = Number(resolve("show_above", NaN)); if (!Number.isFinite(s) || !Number.isFinite(n) || !(s > n)) return false; }
    if (hasOwn(item, "show_below") || hasOwn(cfg, "show_below")) { const s = Number(state); const n = Number(resolve("show_below", NaN)); if (!Number.isFinite(s) || !Number.isFinite(n) || !(s < n)) return false; }
    return true;
  }

  _wireLabelActions() {
    const nodes = this._inner?.querySelectorAll?.('.sg-room-label');
    if (!nodes?.length) return;
    const labelsCfg = this._config?.labels || {};
    const items = this._collectGenericItems(labelsCfg, ["labels", "entities", "items", "label"]).filter((it) => !it.hidden).filter((it) => this._isGenericItemVisible(it, labelsCfg));
    nodes.forEach((el) => {
      const idx = Number(el.getAttribute("data-label-index"));
      const item = items[idx] || {};
      const entityId = this._primaryEntityId(item.entity) || this._config?.entity;
      let clickTimer = null; let holdTimer = null; let holdFired = false;
      const resolve = (key) => {
        const raw = item?.[key] ?? labelsCfg?.[key] ?? "more-info";
        if (!raw) return null;
        if (typeof raw === "string") return { action: raw };
        if (typeof raw === "object") return { ...raw, action: raw.action ?? raw.type };
        return null;
      };
      el.onpointerdown = () => { holdFired = false; clearTimeout(holdTimer); holdTimer = setTimeout(() => { holdFired = true; this._runGenericAction(resolve("hold_action"), entityId); }, 420); };
      const clear = () => clearTimeout(holdTimer);
      el.onpointerup = clear; el.onpointerleave = clear;
      el.onclick = (ev) => { ev.preventDefault(); if (holdFired) return; clearTimeout(clickTimer); clickTimer = setTimeout(() => this._runGenericAction(resolve("tap_action"), entityId), 210); };
      el.ondblclick = (ev) => { ev.preventDefault(); clearTimeout(clickTimer); clearTimeout(holdTimer); this._runGenericAction(resolve("double_tap_action"), entityId); };
    });
  }

  _wireLightButtons() {
    const btns = this._inner.querySelectorAll(".sg-room-light-btn");

    btns.forEach((btn) => {
      let clickTimer = null;
      let holdTimer = null;
      let holdFired = false;
      let brightnessDragActive = false;
      let brightnessDragPointerId = null;
      let brightnessStartY = 0;
      let brightnessStartPct = 50;
      let brightnessLastPct = null;
      let brightnessLastSentAt = 0;
      let prevTouchAction = "";
      let touchLockActive = false;
      let lastTouchTapAt = 0;
      let suppressClickUntil = 0;

      const index = Number(btn.getAttribute("data-index"));
      const item = this._renderedLightItems?.[index];
      if (!item) return;
      const isPhantom = this._toBool(item?.__phantom, false);
      const holdAct = this._resolveAction(item, "hold_action");
      const holdType = String(holdAct?.action || "").toLowerCase();
      const holdEntityId = this._primaryEntityId(item?.entity);
      const isBrightnessHoldCfg = holdType === "brightness" && String(holdEntityId || "").startsWith("light.");
      const brightnessOverlayEl = btn.querySelector(".sg-room-brightness-overlay");

      const showBrightnessOverlay = (pct) => {
        if (!brightnessOverlayEl) return;
        const value = Math.max(1, Math.min(100, Math.round(Number(pct) || 0)));
        brightnessOverlayEl.textContent = `${value}%`;
        brightnessOverlayEl.style.display = "inline-flex";
        btn.querySelectorAll("ha-icon").forEach((el) => {
          if (el.dataset.sgPrevOpacity == null) el.dataset.sgPrevOpacity = el.style.opacity ?? "";
          el.style.opacity = "0";
        });
      };

      const hideBrightnessOverlay = () => {
        if (!brightnessOverlayEl) return;
        brightnessOverlayEl.style.display = "none";
        btn.querySelectorAll("ha-icon").forEach((el) => {
          if (el.dataset.sgPrevOpacity != null) {
            el.style.opacity = el.dataset.sgPrevOpacity;
            delete el.dataset.sgPrevOpacity;
          } else {
            el.style.opacity = "";
          }
        });
      };

      const handleBrightnessMove = (ev) => {
        if (!brightnessDragActive) return;
        if (brightnessDragPointerId != null && ev.pointerId != null && ev.pointerId !== brightnessDragPointerId) return;
        ev.preventDefault?.();
        ev.stopPropagation?.();
        const entityId = this._primaryEntityId(item?.entity);
        if (!String(entityId || "").startsWith("light.")) return;

        const dy = ev.clientY - brightnessStartY;
        const deltaPct = -dy / 2;
        const nextPct = Math.max(1, Math.min(100, Math.round(brightnessStartPct + deltaPct)));
        if (nextPct === brightnessLastPct) return;

        const now = Date.now();
        if ((now - brightnessLastSentAt) < 70) return;
        brightnessLastPct = nextPct;
        brightnessLastSentAt = now;
        showBrightnessOverlay(nextPct);
        this._setLightBrightnessPct(entityId, nextPct);
      };

      const preventTouchScroll = (ev) => {
        if (!touchLockActive) return;
        ev.preventDefault?.();
      };

      const clearHold = () => {
        clearTimeout(holdTimer);
        if (touchLockActive) {
          btn.style.touchAction = prevTouchAction;
          touchLockActive = false;
        }
        hideBrightnessOverlay();
        brightnessDragActive = false;
        brightnessDragPointerId = null;
        window.removeEventListener("pointermove", handleBrightnessMove, true);
        window.removeEventListener("pointerup", clearHold, true);
        window.removeEventListener("pointercancel", clearHold, true);
        window.removeEventListener("touchmove", preventTouchScroll, true);
      };

      btn.style.transition = "filter 120ms ease";
      btn.addEventListener("mouseenter", () => {
        btn.style.filter = "brightness(1.08)";
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.filter = "brightness(1)";
      });

      btn.addEventListener("pointerdown", (ev) => {
        if (isPhantom) return;
        if (isBrightnessHoldCfg && ev.pointerType === "touch") {
          prevTouchAction = btn.style.touchAction || "";
          btn.style.touchAction = "none";
          touchLockActive = true;
          window.addEventListener("touchmove", preventTouchScroll, { capture: true, passive: false });
        }
        holdFired = false;
        brightnessDragActive = false;
        brightnessDragPointerId = null;
        clearTimeout(holdTimer);
        holdTimer = setTimeout(() => {
          holdFired = true;
          const holdAct = this._resolveAction(item, "hold_action");
          const holdType = String(holdAct?.action || "").toLowerCase();
          const entityId = this._primaryEntityId(item?.entity);
          const isBrightnessHold = holdType === "brightness" && String(entityId || "").startsWith("light.");
          if (isBrightnessHold) {
            brightnessDragActive = true;
            brightnessDragPointerId = ev.pointerId;
            brightnessStartY = ev.clientY;
            const lightState = String(this._hass?.states?.[entityId]?.state || "");
            brightnessStartPct = lightState === "off" ? 1 : this._getLightBrightnessPct(entityId);
            brightnessLastPct = brightnessStartPct;
            brightnessLastSentAt = 0;
            if (!touchLockActive) {
              prevTouchAction = btn.style.touchAction || "";
              btn.style.touchAction = "none";
              touchLockActive = true;
            }
            try { btn.setPointerCapture?.(ev.pointerId); } catch (_) {}
            ev.preventDefault?.();
            ev.stopPropagation?.();
            window.addEventListener("pointermove", handleBrightnessMove, true);
            window.addEventListener("pointerup", clearHold, true);
            window.addEventListener("pointercancel", clearHold, true);
            showBrightnessOverlay(brightnessStartPct);
            this._setLightBrightnessPct(entityId, brightnessStartPct);
          } else {
            this._runAction(item, "hold_action", index);
          }
        }, 420);
      });

      btn.addEventListener("pointermove", (ev) => {
        handleBrightnessMove(ev);
      });

      btn.addEventListener("pointerup", clearHold);
      btn.addEventListener("pointerleave", clearHold);
      btn.addEventListener("pointercancel", clearHold);

      btn.addEventListener("pointerup", (ev) => {
        if (isPhantom || holdFired || brightnessDragActive) return;
        if (ev.pointerType !== "touch") return;
        const now = Date.now();
        if (now - lastTouchTapAt < 320) {
          suppressClickUntil = now + 350;
          lastTouchTapAt = 0;
          clearTimeout(clickTimer);
          this._runAction(item, "double_tap_action", index);
        } else {
          lastTouchTapAt = now;
        }
      });

      btn.addEventListener("click", (ev) => {
        ev.preventDefault();
        if (isPhantom) return;
        if (Date.now() < suppressClickUntil) return;
        if (holdFired) return;

        this._showButtonPressRing(btn);

        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => {
          this._runAction(item, "tap_action", index);
        }, 210);
      });

      btn.addEventListener("dblclick", (ev) => {
        ev.preventDefault();
        if (isPhantom) return;
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
      return;
    }

    if (type === "brightness") {
      if (!entityId || !String(entityId).startsWith("light.")) return;
      const pctRaw = Number(act.brightness_pct ?? act.value ?? NaN);
      if (!Number.isFinite(pctRaw)) return;
      this._setLightBrightnessPct(entityId, pctRaw);
    }
  }

  _getLightBrightnessPct(entityId) {
    const st = this._hass?.states?.[entityId];
    const briRaw = Number(st?.attributes?.brightness);
    if (Number.isFinite(briRaw)) {
      return Math.max(1, Math.min(100, Math.round((briRaw / 255) * 100)));
    }
    return st?.state === "on" ? 100 : 50;
  }

  _setLightBrightnessPct(entityId, pct) {
    if (!entityId || !String(entityId).startsWith("light.")) return;
    const value = Math.max(1, Math.min(100, Math.round(Number(pct) || 0)));
    this._hass?.callService?.("light", "turn_on", { entity_id: entityId, brightness_pct: value });
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
    const entityRef = item?.entity;
    const entityId = this._primaryEntityId(entityRef);
    const st = entityId ? this._hass?.states?.[entityId] : null;
    const state = st?.state ?? "";

    const hasOwn = (obj, key) => !!obj && Object.prototype.hasOwnProperty.call(obj, key);
    const resolve = (key, fallback) => {
      const raw = hasOwn(item, key)
        ? item[key]
        : (hasOwn(buttonsCfg, key) ? buttonsCfg[key] : fallback);
      return this._resolveDynamicValue(raw, entityRef, state, fallback);
    };

    const showRaw = resolve("show", true);
    if (!this._toBool(showRaw, true)) return false;

    if (!entityId) return true;

    // DEPRECATED COMPAT: show_value/show_not_value are legacy aliases.
    // TODO(next major): remove show_value/show_not_value fallback and keep only show_state/show_not_state.
    if (hasOwn(item, "show_state") || hasOwn(buttonsCfg, "show_state") || hasOwn(item, "show_value") || hasOwn(buttonsCfg, "show_value")) {
      const expected = hasOwn(item, "show_state") || hasOwn(buttonsCfg, "show_state")
        ? resolve("show_state", undefined)
        : resolve("show_value", undefined);
      if (!this._matchesValueFilter(state, expected)) return false;
    }

    if (hasOwn(item, "show_not_state") || hasOwn(buttonsCfg, "show_not_state") || hasOwn(item, "show_not_value") || hasOwn(buttonsCfg, "show_not_value")) {
      const disallowed = hasOwn(item, "show_not_state") || hasOwn(buttonsCfg, "show_not_state")
        ? resolve("show_not_state", undefined)
        : resolve("show_not_value", undefined);
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

  _isBadgeVisible(badgeCfg, entityRef, state) {
    if (!badgeCfg || typeof badgeCfg !== "object") return false;

    const entityId = this._primaryEntityId(entityRef);
    const hasOwn = (k) => Object.prototype.hasOwnProperty.call(badgeCfg, k);
    const resolve = (k, fallback) => this._resolveDynamicValue(badgeCfg[k], entityRef, state, fallback);

    if (hasOwn("show")) {
      if (!this._toBool(resolve("show", true), true)) return false;
    }

    // DEPRECATED COMPAT: show_value/show_not_value are legacy aliases.
    // TODO(next major): remove show_value/show_not_value fallback and keep only show_state/show_not_state.
    const expected = hasOwn("show_state") ? resolve("show_state", undefined)
      : (hasOwn("show_value") ? resolve("show_value", undefined)
      : (hasOwn("state") ? resolve("state", undefined)
        : (hasOwn("state_value") ? resolve("state_value", undefined) : undefined)));
    if (expected !== undefined && !this._matchesValueFilter(state, expected)) return false;

    const disallowed = hasOwn("show_not_state") ? resolve("show_not_state", undefined)
      : (hasOwn("show_not_value") ? resolve("show_not_value", undefined)
      : (hasOwn("state_not_value") ? resolve("state_not_value", undefined) : undefined));
    
    if (disallowed !== undefined && this._matchesValueFilter(state, disallowed)) return false;

    if (hasOwn("show_above")) {
      const nState = Number(state);
      const nMin = Number(resolve("show_above", NaN));
      if (!Number.isFinite(nState) || !Number.isFinite(nMin) || !(nState > nMin)) return false;
    }

    if (hasOwn("show_below")) {
      const nState = Number(state);
      const nMax = Number(resolve("show_below", NaN));
      if (!Number.isFinite(nState) || !Number.isFinite(nMax) || !(nState < nMax)) return false;
    }

    if (!entityId) {
      // badge with explicit show=true can still render for icon-only button
      return !hasOwn("show") || this._toBool(resolve("show", true), true);
    }

    return true;
  }

  _isProgressVisible(progressCfg, entityRef, state) {
    if (progressCfg == null) return false;
    if (typeof progressCfg !== "object") return this._toBool(this._resolveDynamicValue(progressCfg, entityRef, state, false), false);
    let cfg = progressCfg;
    if (typeof progressCfg === "object" && Object.prototype.hasOwnProperty.call(progressCfg, "show")) {
      const rawShow = this._resolveDynamicValue(progressCfg.show, entityRef, state, null);
      if (rawShow == null) return false;
      cfg = (typeof rawShow === "object") ? rawShow : { show_state: rawShow };
    }
    if (cfg && typeof cfg === "object") {
      const hasAnyVisibilityKey = ["show", "show_state", "show_not_state", "show_value", "show_not_value", "show_above", "show_below"].some((k) => Object.prototype.hasOwnProperty.call(cfg, k));
      if (!hasAnyVisibilityKey) return true;
    }
    const hasOwn = (obj, key) => !!obj && Object.prototype.hasOwnProperty.call(obj, key);
    const resolve = (key, fallback) => {
      const raw = hasOwn(cfg, key) ? cfg[key] : fallback;
      return this._resolveDynamicValue(raw, entityRef, state, fallback);
    };

    const showRaw = resolve("show", true);
    if (!this._toBool(showRaw, true)) return false;

    const entityId = this._primaryEntityId(entityRef);
    if (!entityId) return true;

    if (hasOwn(cfg, "show_state") || hasOwn(cfg, "show_value")) {
      const expected = hasOwn(cfg, "show_state") ? resolve("show_state", undefined) : resolve("show_value", undefined);
      if (!this._matchesValueFilter(state, expected)) return false;
    }
    if (hasOwn(cfg, "show_not_state") || hasOwn(cfg, "show_not_value")) {
      const disallowed = hasOwn(cfg, "show_not_state") ? resolve("show_not_state", undefined) : resolve("show_not_value", undefined);
      if (this._matchesValueFilter(state, disallowed)) return false;
    }
    if (hasOwn(cfg, "show_above")) {
      const nState = Number(state);
      const nMin = Number(resolve("show_above", NaN));
      if (!Number.isFinite(nState) || !Number.isFinite(nMin) || !(nState > nMin)) return false;
    }
    if (hasOwn(cfg, "show_below")) {
      const nState = Number(state);
      const nMax = Number(resolve("show_below", NaN));
      if (!Number.isFinite(nState) || !Number.isFinite(nMax) || !(nState < nMax)) return false;
    }

    return true;
  }

  _resolvePhantomConfig(item, buttonsCfg, entityRef, state) {
    const raw = (item && Object.prototype.hasOwnProperty.call(item, "phantom")) ? item.phantom : buttonsCfg?.phantom;
    const cfg = this._resolveDynamicValue(raw, entityRef, state, null);
    if (!cfg || typeof cfg !== "object") return null;
    const enabledRaw = Object.prototype.hasOwnProperty.call(cfg, "enabled") ? cfg.enabled : true;
    if (!this._toBool(this._resolveDynamicValue(enabledRaw, entityRef, state, true), true)) return null;
    return cfg;
  }

  _watchfaceCacheKey(entityId, showState, windowMs = 60 * 60 * 1000) {
    return `${entityId}::${String(showState)}::${Math.max(1, Number(windowMs) || (60 * 60 * 1000))}`;
  }

  _getWatchfaceMinuteMarks(entityId, showState, notches, windowMs = 60 * 60 * 1000) {
    if (!entityId || showState == null || showState === "") return null;
    const key = this._watchfaceCacheKey(entityId, showState, windowMs);
    const rec = this._watchfaceHistoryCache?.[key];
    if (!rec || !Array.isArray(rec.marks)) return null;
    return rec.marks.slice(0, Math.max(1, notches));
  }

  _ensureWatchfaceHistory(entityId, showState, notches, windowMs = 60 * 60 * 1000) {
    if (!entityId || showState == null || showState === "") return;
    if (!this._watchfaceHistoryCache) this._watchfaceHistoryCache = {};

    const rangeMs = Math.max(60 * 1000, Number(windowMs) || (60 * 60 * 1000));
    const key = this._watchfaceCacheKey(entityId, showState, rangeMs);
    const now = Date.now();
    const minuteBucket = Math.floor(now / 60000);
    const cached = this._watchfaceHistoryCache[key];
    if (cached && cached.bucket === minuteBucket) return;
    if (cached && cached.loading) return;

    this._watchfaceHistoryCache[key] = { ...(cached || {}), loading: true, bucket: minuteBucket };

    const end = new Date(now);
    const start = new Date(now - rangeMs);
    const path = `history/period/${encodeURIComponent(start.toISOString())}?filter_entity_id=${encodeURIComponent(entityId)}&end_time=${encodeURIComponent(end.toISOString())}`;

    this._hass.callApi("GET", path)
      .then((resp) => {
        const rows = Array.isArray(resp) && Array.isArray(resp[0]) ? resp[0] : [];
        const target = String(showState);
        const stepMs = rangeMs / Math.max(1, notches);
        const marks = Array.from({ length: Math.max(1, notches) }, () => false);

        if (!rows.length) {
          this._watchfaceHistoryCache[key] = { marks, bucket: minuteBucket, loading: false };
          this._render();
          return;
        }

        const events = rows
          .map((r) => ({
            state: String(r?.state ?? ""),
            ts: Date.parse(String(r?.last_changed || r?.last_updated || "")),
          }))
          .filter((e) => Number.isFinite(e.ts))
          .sort((a, b) => a.ts - b.ts);

        for (let i = 0; i < events.length; i += 1) {
          const cur = events[i];
          const segStart = Math.max(start.getTime(), cur.ts);
          const segEnd = Math.min(end.getTime(), i + 1 < events.length ? events[i + 1].ts : end.getTime());
          if (segEnd <= segStart) continue;
          if (cur.state !== target) continue;

          const from = Math.max(0, Math.floor((segStart - start.getTime()) / stepMs));
          const to = Math.min(marks.length - 1, Math.floor((Math.max(segStart, segEnd - 1) - start.getTime()) / stepMs));
          for (let j = from; j <= to; j += 1) marks[j] = true;
        }

        this._watchfaceHistoryCache[key] = { marks, bucket: minuteBucket, loading: false };
        this._render();
      })
      .catch(() => {
        this._watchfaceHistoryCache[key] = { marks: Array.from({ length: Math.max(1, notches) }, () => false), bucket: minuteBucket, loading: false };
      });
  }

  _isPhantomVisible(cfg, entityRef, state, stObj) {
    if (!cfg || !stObj) return false;

    const durationRaw = this._resolveDynamicValue(cfg.duration, entityRef, state, 0);
    const durationSec = Math.max(0, Number(durationRaw) || 0);
    if (durationSec <= 0) return false;

    const changedMs = Date.parse(String(stObj.last_changed || ""));
    if (!Number.isFinite(changedMs)) return false;
    const ageSec = (Date.now() - changedMs) / 1000;
    if (!(ageSec >= 0 && ageSec <= durationSec)) return false;

    const hasOwn = (k) => Object.prototype.hasOwnProperty.call(cfg, k);
    const resolve = (k, fallback) => this._resolveDynamicValue(cfg[k], entityRef, state, fallback);

    // DEPRECATED COMPAT: show_value/show_not_value are legacy aliases.
    // TODO(next major): remove show_value/show_not_value fallback and keep only show_state/show_not_state.
    const expected = hasOwn("show_state") ? resolve("show_state", undefined)
      : (hasOwn("show_value") ? resolve("show_value", undefined)
      : (hasOwn("state") ? resolve("state", undefined)
        : (hasOwn("state_value") ? resolve("state_value", undefined) : undefined)));
    if (expected !== undefined && !this._matchesValueFilter(state, expected)) return false;

    const disallowed = hasOwn("show_not_state") ? resolve("show_not_state", undefined)
      : (hasOwn("show_not_value") ? resolve("show_not_value", undefined)
      : (hasOwn("state_not_value") ? resolve("state_not_value", undefined) : undefined));
    if (disallowed !== undefined && this._matchesValueFilter(state, disallowed)) return false;

    return true;
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
        const idRaw = (eid == null || String(eid).trim() === "") ? entityId : eid;
        const id = String(idRaw || "").trim();
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
          const iso = s.match(/^P(?:\d+Y)?(?:\d+M)?(?:\d+D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i);
          if (iso) {
            const h = Number(iso[1] || 0);
            const m = Number(iso[2] || 0);
            const sec = Number(iso[3] || 0);
            return h * 3600 + m * 60 + sec;
          }

          const parts = s.split(":");
          if (parts.length === 2 || parts.length === 3) {
            const nums = parts.map((p) => Number(p));
            if (nums.every((n) => Number.isFinite(n))) {
              if (parts.length === 3) return nums[0] * 3600 + nums[1] * 60 + nums[2];
              return nums[0] * 60 + nums[1];
            }
          }

          return NaN;
        };

        let totalSec = parseDurationSec(attrs.duration);
        if ((!Number.isFinite(totalSec) || totalSec <= 0) && stateRaw === "idle") return 100;

        let remainingSec = NaN;
        const finishMs = Date.parse(String(attrs.finishes_at || ""));
        if (Number.isFinite(finishMs)) {
          remainingSec = Math.max(0, (finishMs - Date.now()) / 1000);
        }

        if (!Number.isFinite(remainingSec)) {
          const remFromAttr = parseDurationSec(attrs.remaining);
          remainingSec = Number.isFinite(remFromAttr) ? remFromAttr : NaN;
        }

        if (!Number.isFinite(remainingSec)) {
          const startMs = Date.parse(String(attrs.started_at || ""));
          if (Number.isFinite(startMs)) {
            const elapsed = Math.max(0, (Date.now() - startMs) / 1000);
            if (Number.isFinite(totalSec) && totalSec > 0) {
              remainingSec = Math.max(0, totalSec - elapsed);
            }
          }
        }

        if ((!Number.isFinite(totalSec) || totalSec <= 0) && Number.isFinite(remainingSec)) {
          if (Number.isFinite(finishMs)) {
            const nowSec = Date.now() / 1000;
            const elapsed = Math.max(0, nowSec - (finishMs / 1000 - remainingSec));
            totalSec = remainingSec + elapsed;
          }
        }

        if (!Number.isFinite(totalSec) || totalSec <= 0) return null;

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
    this._config = _config || {};
    this._render();
  }

  _findDeprecatedVisibilityKeys(obj, path = "") {
    const out = [];
    if (!obj || typeof obj !== "object") return out;
    if (Array.isArray(obj)) {
      obj.forEach((v, i) => out.push(...this._findDeprecatedVisibilityKeys(v, `${path}[${i}]`)));
      return out;
    }
    for (const [k, v] of Object.entries(obj)) {
      const p = path ? `${path}.${k}` : k;
      const parentIsView = path.endsWith(".view") || path === "view";
      if ((k === "show_value" || k === "show_not_value") && !parentIsView) out.push(p);
      out.push(...this._findDeprecatedVisibilityKeys(v, p));
    }
    return out;
  }

  _render() {
    const deprecated = this._findDeprecatedVisibilityKeys(this._config || {});
    const warnHtml = deprecated.length
      ? `<div style="margin-top:10px;background:#fff7ed;border:1px solid #fdba74;color:#9a3412;border-radius:10px;padding:8px 10px;font-size:12px;line-height:1.35;">
          <div style="font-weight:700;">Deprecated config keys detected</div>
          <div>Use <code>show_state</code>/<code>show_not_state</code> instead of <code>show_value</code>/<code>show_not_value</code>.</div>
          <div style="margin-top:4px;opacity:.85;max-height:90px;overflow:auto;">${deprecated.map((p) => `<div>• <code>${p}</code></div>`).join("")}</div>
        </div>`
      : "";

    this.innerHTML = `
      <div style="padding:12px 0; opacity:.9; font-size:13px; line-height:1.4;">
        <div style="margin-top:12px;background:var(--card-background-color,#f3f4f6);border-radius:9999px;padding:8px 10px;display:flex;align-items:center;justify-content:space-between;gap:10px;border:1px solid var(--divider-color,#d1d5db);">
          <div style="font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Seagull Room Card</div>
          <div style="background:#0ea5e9;color:#fff;border-radius:9999px;padding:2px 8px;font-size:12px;font-weight:700;line-height:1.6;">v${SEAGULL_ROOM_CARD_VERSION}</div>
        </div>
        ${warnHtml}
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
