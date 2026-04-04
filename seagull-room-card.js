const SEAGULL_ROOM_CARD_VERSION = "0.10.10";
const SEAGULL_ROOM_CARD_COMMIT = "dev";

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

    const bgColor = cfg.background_color ?? "#eeeeee";
    const opacity = this._clampOpacity(cfg.background_opacity ?? 0.45);
    const radius = this._toPx(cfg.border_radius ?? 16, 16);
    const borderWidth = Math.max(0, this._toPx(cfg.border_width ?? 0, 0));
    const borderColor = cfg.border_color ?? "#aaaaaa";

    const icon = cfg.icon ?? "mdi:sofa";
    const iconColor = cfg.icon_color ?? "#2233aa44";
    const iconSize = Math.max(8, this._toPx(cfg.icon_size ?? 60, 60));

    const basePadding = Math.max(0, this._toPx(buttonsCfg.padding ?? 10, 10));
    const padTop = Math.max(0, this._toPx(buttonsCfg.padding_top ?? basePadding, basePadding));
    const padRight = Math.max(0, this._toPx(buttonsCfg.padding_right ?? basePadding, basePadding));
    const padBottom = Math.max(0, this._toPx(buttonsCfg.padding_bottom ?? basePadding, basePadding));
    const padLeft = Math.max(0, this._toPx(buttonsCfg.padding_left ?? basePadding, basePadding));

    const size = Math.max(20, this._toPx(buttonsCfg.size ?? 48, 48));
    const gap = Math.max(0, this._toPx(buttonsCfg.gap ?? 5, 5));
    const minRows = Math.max(0, parseInt(buttonsCfg.rows ?? 0, 10) || 0);
    const minRowsHeight = minRows > 0
      ? Math.round(padTop + padBottom + minRows * size + Math.max(0, minRows - 1) * gap)
      : 0;

    this._card.style.boxShadow = "none";
    this._card.style.borderRadius = `${radius}px`;
    this._card.style.overflow = "hidden";
    this._card.style.background = this._toRgba(bgColor, opacity);
    this._card.style.border = `${borderWidth}px solid ${borderColor}`;
    this._card.style.position = "relative";
    this._card.style.transition = "filter 120ms ease";

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

    const size = Math.max(8, this._toPx(textCfg.size ?? 14, 14));
    const textColor = this._resolveDynamicValue(textCfg.color, entityId, state, "inherit");
    const textBg = this._resolveDynamicValue(textCfg.background_color, entityId, state, "transparent");
    const textRadius = Math.max(0, this._toPx(textCfg.border_radius ?? 10, 10));
    const halign = ["left", "center", "right"].includes(String(textCfg.halign ?? "left").toLowerCase())
      ? String(textCfg.halign ?? "left").toLowerCase()
      : "left";
    const valign = ["top", "center", "bottom"].includes(String(textCfg.valign ?? "top").toLowerCase())
      ? String(textCfg.valign ?? "top").toLowerCase()
      : "top";

    const basePadding = Math.max(0, this._toPx(textCfg.padding ?? 0, 0));
    const padTop = Math.max(0, this._toPx(textCfg.padding_top ?? basePadding, basePadding));
    const padRight = Math.max(0, this._toPx(textCfg.padding_right ?? basePadding, basePadding));
    const padBottom = Math.max(0, this._toPx(textCfg.padding_bottom ?? basePadding, basePadding));
    const padLeft = Math.max(0, this._toPx(textCfg.padding_left ?? basePadding, basePadding));

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
        <div style="width:100%;text-align:${halign};font-size:${size}px;line-height:1.35;color:${this._esc(textColor)};background:${this._esc(textBg)};border-radius:${textRadius}px;padding:6px 8px;box-sizing:border-box;display:block;">${value}</div>
      </div>
    `;
  }

  _buildLightsHtmlAndItems() {
    const buttonsCfg = this._config.buttons || this._config.lights || {};
    const cols = Math.max(1, parseInt(buttonsCfg.cols ?? buttonsCfg.columns ?? 3, 10) || 3);
    const size = Math.max(20, this._toPx(buttonsCfg.size ?? 48, 48));
    const gap = Math.max(0, this._toPx(buttonsCfg.gap ?? 5, 5));
    const alignRaw = String(buttonsCfg.align ?? "right").toLowerCase();
    const align = ["left", "right", "center", "justified"].includes(alignRaw) ? alignRaw : "justified";

    const items = this._collectButtonItems(buttonsCfg)
      .filter((it) => !it.hidden)
      .filter((it) => this._toBool(it?.empty, false) || (!!it.entity && !!this._hass?.states?.[it.entity]))
      .filter((it) => this._toBool(it?.empty, false) || this._isButtonItemVisible(it, buttonsCfg));

    if (!items.length) return { html: "", items: [] };

    const buttonDefs = items.map((item, index) => {
      const hasEntity = !!item?.entity;
      if (!hasEntity && this._toBool(item?.empty, false)) {
        const colSpan = Math.max(1, parseInt(item.width ?? 1, 10) || 1);
        const safeColSpan = Math.min(cols, colSpan);
        const btnWidth = size * safeColSpan + gap * (safeColSpan - 1);
        const html = `<div class="sg-room-light-empty" style="grid-column:span ${safeColSpan};width:${btnWidth}px;height:${size}px;" aria-hidden="true"></div>`;
        return { html, colSpan: safeColSpan };
      }

      const st = this._hass.states[item.entity];
      const state = st?.state || "unknown";

      const defaultDomainIcon = this._defaultEntityIcon(item.entity, state, st?.attributes);

      const obsoleteCfg = this._resolveObsoleteConfig(item.obsolete ?? buttonsCfg.obsolete);
      const isObsolete = this._isEntityObsolete(st, obsoleteCfg?.hours);

      const baseIconTpl = isObsolete ? (obsoleteCfg.icon ?? item.icon ?? buttonsCfg.icon) : (item.icon ?? buttonsCfg.icon);
      const icon = this._resolveDynamicValue(baseIconTpl, item.entity, state, st?.attributes?.icon || defaultDomainIcon);

      const iconColorTpl = isObsolete
        ? (obsoleteCfg.color ?? obsoleteCfg.icon_color ?? item.color ?? item.icon_color ?? buttonsCfg.color ?? buttonsCfg.icon_color)
        : (item.color ?? item.icon_color ?? buttonsCfg.color ?? buttonsCfg.icon_color);
      const bgTpl = isObsolete
        ? (obsoleteCfg.background ?? item.background ?? buttonsCfg.background ?? buttonsCfg.bg)
        : (item.background ?? buttonsCfg.background ?? buttonsCfg.bg);
      const borderTpl = isObsolete ? (obsoleteCfg.border ?? item.border ?? buttonsCfg.border) : (item.border ?? buttonsCfg.border);
      const borderColorTpl = isObsolete
        ? (obsoleteCfg.border_color ?? item.border_color ?? buttonsCfg.border_color)
        : (item.border_color ?? buttonsCfg.border_color);

      const lightColorModeRaw = this._resolveDynamicValue(
        item.use_light_color ?? item.light_color ?? buttonsCfg.use_light_color ?? buttonsCfg.light_color,
        item.entity,
        state,
        false
      );
      const lightColorMode = this._normalizeLightColorMode(lightColorModeRaw);
      const invertState = !!this._resolveDynamicValue(item.invert_state ?? buttonsCfg.invert_state, item.entity, state, false);
      const isUnavailable = state === "unavailable";
      const canToggle = this._canToggleEntity(item.entity);
      const baseActive = this._isEntityActive(item.entity, state);
      const isActive = invertState ? !baseActive : baseActive;

      const defaultBg = isUnavailable
        ? "#6b7280"
        : (!canToggle ? (isActive ? "#3b82f6" : "#d1d5db") : (isActive ? "#f59e0b" : "#4b5563"));

      let bgColor = this._resolveDynamicValue(
        bgTpl,
        item.entity,
        state,
        defaultBg
      );
      if (!isUnavailable && lightColorMode !== "false" && item.entity.startsWith("light.") && state === "on") {
        const resolvedLight = this._resolveLightEntityColor(st?.attributes, lightColorMode);
        if (resolvedLight) bgColor = resolvedLight;
      }

      const defaultIconColor = isUnavailable
        ? "#d1d5db"
        : (!canToggle ? (isActive ? "#eaf2ff" : "#111827") : (isActive ? "#111827" : "#e5e7eb"));

      const iColor = this._resolveDynamicValue(
        iconColorTpl,
        item.entity,
        state,
        defaultIconColor
      );
      const borderW = Math.max(0, Number(this._resolveDynamicValue(borderTpl, item.entity, state, 0)) || 0);
      const borderColor = this._resolveDynamicValue(borderColorTpl, item.entity, state, "transparent");

      const colSpan = Math.max(1, parseInt(item.width ?? 1, 10) || 1);
      const safeColSpan = Math.min(cols, colSpan);
      const btnWidth = size * safeColSpan + gap * (safeColSpan - 1);
      const isEmpty = !!this._resolveDynamicValue(item.empty ?? buttonsCfg.empty, item.entity, state, false);

      const html = isEmpty
        ? `
        <div aria-hidden="true"
          style="grid-column:span ${safeColSpan};width:${btnWidth}px;height:${size}px;"></div>
      `
        : `
        <button class="sg-room-light-btn" data-index="${index}"
          style="grid-column:span ${safeColSpan};width:${btnWidth}px;height:${size}px;border-radius:9999px;border:${borderW}px solid ${this._esc(borderColor)};cursor:pointer;display:inline-flex;align-items:center;justify-content:center;align-self:start;background:${this._esc(bgColor)};padding:0;direction:ltr;">
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

      btn.style.transition = "filter 100ms ease";
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

  _resolveAction(item, key) {
    const buttonsCfg = this._config.buttons || this._config.lights || {};
    const fallback = key === "tap_action" ? "toggle" : "more-info";
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
        } else if (item?.entity || item?.empty === true) {
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
    const entityId = String(item?.entity || "");
    if (!entityId) return false;

    const st = this._hass?.states?.[entityId];
    const state = st?.state;
    if (state == null) return false;

    const hasOwn = (obj, key) => !!obj && Object.prototype.hasOwnProperty.call(obj, key);
    const resolve = (key, fallback) => {
      const raw = hasOwn(item, key)
        ? item[key]
        : (hasOwn(buttonsCfg, key) ? buttonsCfg[key] : fallback);
      return this._resolveDynamicValue(raw, entityId, state, fallback);
    };

    const showRaw = resolve("show", true);
    if (!this._toBool(showRaw, true)) return false;

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
      const evalInCtx = (code) => {
        const fn = new Function("ctx", `with (ctx) { return (${code}); }`);
        return fn({
          hass: this._hass,
          entity: entityId,
          state,
          states: statesFn,
          all_states: this._hass?.states,
          attributes: st?.attributes || {},
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

    if (domain === "light") {
      return state === "on" ? "mdi:lightbulb" : "mdi:lightbulb-off";
    }

    if (domain === "lock") {
      if (state === "locked") return "mdi:lock";
      if (state === "unlocked") return "mdi:lock-open-variant";
      return "mdi:lock-reset";
    }

    if (domain === "binary_sensor") {
      const dc = String(attrs?.device_class || "").toLowerCase();
      const on = state === "on";

      if (dc === "window") return on ? "mdi:window-open" : "mdi:window-closed";
      if (dc === "door") return on ? "mdi:door-open" : "mdi:door-closed";
      if (dc === "opening") return on ? "mdi:garage-open" : "mdi:garage";
      if (dc === "motion") return on ? "mdi:motion-sensor" : "mdi:motion-sensor-off";
      if (dc === "occupancy") return on ? "mdi:home-account" : "mdi:home-outline";
      if (dc === "lock") return on ? "mdi:lock-open-variant" : "mdi:lock";

      return on ? "mdi:check-circle" : "mdi:circle-outline";
    }

    return "mdi:help-circle-outline";
  }

  _canToggleEntity(entityId) {
    const domain = String(entityId || "").split(".")[0];
    const supported = new Set([
      "light",
      "switch",
      "input_boolean",
      "fan",
      "humidifier",
      "cover",
      "lock",
      "media_player",
    ]);
    return supported.has(domain);
  }

  _resolveObsoleteConfig(raw) {
    const defaults = { border: 2, border_color: "#d1d5db" };

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
