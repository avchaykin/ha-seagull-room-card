# ha-seagull-room-card

Home Assistant custom card: `seagull-room-card`.

## Screenshot

![Seagull Room Card screenshot](assets/screenshot.jpg)

---

## Installation

### 1) Put files into HA `/www`

Copy to Home Assistant:

- `/config/www/seagull-room-card.js`
- `/config/www/seagull-room-card-loader.js`

### 2) Add Lovelace resource (recommended loader)

- URL: `/local/seagull-room-card-loader.js`
- Type: `JavaScript Module`

Loader adds cache-busting automatically, so after deploy you usually only need page refresh.

---

## Minimal config

```yaml
type: custom:seagull-room-card
buttons:
  entities:
    - entity: light.living_room
```

---

---

## Parameter reference

## Card-level

- `type` — must be `custom:seagull-room-card`
- `entity` — optional default entity for card icon actions and templates
- `background_color` — card background base color
- `background_opacity` — 0..1 alpha applied to background color
- `border_radius` — card corner radius (px)
- `border_width` — card border width (px)
- `border_color` — card border color
- `icon` — top-left card icon
- `icon_color` — top-left icon color
- `icon_size` — top-left icon size (px)
- `tap_action`, `double_tap_action`, `hold_action` — actions on card icon
- `variables` — map of reusable template variables
- `text` — text layer config
- `buttons` — buttons layer config

### Card icon actions

Supported action types:

- `toggle`
- `more-info`
- `navigate`
- `perform-action`

Examples:

```yaml
tap_action: toggle
```

```yaml
double_tap_action:
  action: navigate
  navigation_path: /lovelace/lights
```

```yaml
hold_action:
  action: perform-action
  perform_action: light.turn_off
  target:
    entity_id: light.living_room
```

---

## `variables`

Card-level variables available in templates:

- directly by name: `temperature`
- via object: `vars.temperature`

Example:

```yaml
variables:
  temperature: "{{ states('sensor.temp') }}"
```

---

## `text`

- `entity` — entity for text templates and text actions (fallback to card `entity`)
- `value` — template/HTML text (supports multiline)
- `color` — text color (template-capable)
- `background_color` — background color for text block (template-capable)
- `border_radius` — text background corner radius (px)
- `size` — font size (px)
- `halign` — `left | center | right`
- `valign` — `top | center | bottom`
- `padding`, `padding_top`, `padding_right`, `padding_bottom`, `padding_left`
- `tap_action`, `double_tap_action`, `hold_action` — default `more-info`

### Text rendering notes

- Text is visual background layer relative to buttons.
- Click priority: **buttons > text > card icon**.
- HTML formatting allowed (`<b>`, `<i>`, `<br/>`, `<h1>..<h3>`).
- `h1/h2/h3` are bold, slightly larger, no extra margins.

---

## `buttons`

### Layout

- `cols` / `columns` — columns count
- `rows` — minimum row count (controls min card height)
- `size` — button size (px), default `48`
- `gap` — gap between buttons
- `padding`, `padding_top`, `padding_right`, `padding_bottom`, `padding_left`
- `align` — `left | center | right | justified`

### Default button style (inherited by each button)

- `icon`
- `color` (icon color)
- `background`
- `border`
- `border_color`
- `use_light_color` — `false | color | brightness | both | true`
- `invert_state` — `true/false`; inverts active/inactive default state mapping
- `obsolete` — stale style trigger: hours (number) or object
- `show` — `true/false` (supports templates)
- `show_value` — show only if entity state equals value (or one of values in array)
- `show_not_value` — hide if entity state equals value (or one of values in array)
- `show_above` — show only if entity state is numerically greater
- `show_below` — show only if entity state is numerically smaller

### Default button actions

- `tap_action`, `double_tap_action`, `hold_action`
- default behavior: tap=`toggle`, double=`more-info`, hold=`more-info`

### Buttons collection

Use any of:

- `buttons.entities`
- `buttons.items`
- `buttons.button`
- `buttons.buttons`

Legacy alias `lights` is still accepted.

Array form (allows duplicates):

```yaml
buttons:
  entities:
    - entity: light.a
    - entity: light.a
```

Object form:

```yaml
buttons:
  entities:
    light.a: true
    light.b: false
    switch.c:
      width: 2
```

### Theme (palette + mapping)

You can define theme directly in card config:

- `theme_palette` — named colors (token -> color)
- `theme_mapping` — mapping from tokens to card/text/button parts
- or `theme: { palette: ..., mapping: ... }`

Entity button mapping is hierarchical:
1. base state buckets on `buttons` level (`active`, `inactive`, `unavailable`, optional `state` / `state_value`)
2. `domains.<domain>` override
3. `entities.<entity_id>` override
4. `rules[]` template-based override

Notes:
- default base behavior is equivalent to previous `toggle` palette
- `domains.automation` defaults to previous `non_toggle` palette
- pseudo-domain `domains.no_entity` controls icon-only buttons without `entity`
- At any hierarchy level for buttons you can set: `icon`, `color` (alias of `icon_color`), `background`, `border_size`, `border_color`

Default palette+mapping reference: `SEAGULL_THEME.default.yaml`.

### Per-button parameters

- `entity` (any domain, optional if `icon` is provided)
- `width` — width in columns (default `1`)
- `icon`, `color`, `background`, `border`, `border_color`
- `use_light_color`
- `invert_state`
- `obsolete`
- `show`, `show_value`, `show_not_value`, `show_above`, `show_below`
- `active`, `inactive` — template bool (`true/false`) to force visual active/inactive state (especially useful without `entity`)
- `empty` — renders an empty slot (space is reserved, button is not rendered); can be used without `entity` to place a blank cell
- `tap_action`, `double_tap_action`, `hold_action`
- `hidden` (internal, used by object form with `false`)

Visibility params inherit from `buttons`/`lights` level and can be overridden per button. Templates can use `entity`.
`active` / `inactive` also support inheritance and templates.
`empty` also supports inheritance and templates.

Buttons without `entity` are supported (icon-only): they use a lighter default style and can run actions like `navigate` and `perform-action`.

---

## Domain-specific behavior

### Active state mapping (used by default palettes)

- regular entities: `state == on`
- `lock.*`: `state == unlocked`
- `media_player.*`: `state == playing`

### `toggle` action mapping

- regular: `homeassistant.toggle`
- `lock.*`: `lock.lock` / `lock.unlock`
- `media_player.*`: `media_player.media_play` / `media_player.media_pause`

### `unavailable`

Default visual fallback for any domain:

- icon color: pale gray
- background: gray

### Non-toggle entities fallback

If entity domain is not toggle-capable by default, fallback style is:

- active (`on`): blue background + light icon
- inactive: light-gray background + dark icon

### Default icons

- By default card tries entity icon first (`attributes.icon`).
- For `light.*` without icon it falls back to:
  - `mdi:lightbulb` (on)
  - `mdi:lightbulb-off` (off)
- For `binary_sensor.*` without icon, fallback depends on `device_class` (window/door/opening/etc.) and state.

---

## `obsolete` behavior

If configured and entity is stale longer than N hours (`last_updated` / `last_changed`), obsolete style is applied.

Supported forms:

```yaml
obsolete: 6
```

or

```yaml
obsolete:
  hours: 6
  icon: mdi:clock-alert-outline
  color: "#d1d5db"
  background: "#6b7280"
  border: 2
  border_color: "#d1d5db"
```

Default obsolete style (when only hours provided):

- `border: 2`
- `border_color: #d1d5db`

---

## Template syntax

A value can be configured using:

1) JS mustache expression:

```yaml
"{{ state === 'on' ? '#fff' : '#000' }}"
```

2) Jinja-like if/else block:

```yaml
"{%if states(entity) == 'on' %}#fff{%else%}#000{%endif%}"
```

3) Rule array:

```yaml
color:
  - state: on
    value: "#ffffff"
  - state_not: unavailable
    value: "#dddddd"
  - state_above: 50
    value: "#00ff00"
  - state_below: 10
    value: "#ff0000"
  - state_template: "{{ states(entity) == 'unknown' }}"
    value: "#999999"
  - value: "#ff0000"  # fallback (else)
```

### Template context

Available helpers/values include:

- `entity`, `state`, `attributes`
- `states(entity_id)` helper
- `vars` and top-level names from `variables`
- `round`, `upper`, `lower`, `trim`, `capitalize`, `title`

Pipe filters supported for mustache output:

- `|round`, `|round(1)`
- `|upper`, `|lower`, `|trim`, `|capitalize`, `|title`

---

## Auto-deploy notes

Repository includes local auto-deploy hooks:

- `.githooks/post-commit`
- `scripts/deploy-to-ha.sh`

Enable once:

```bash
./scripts/setup-hooks.sh
```

---

## Console announce

When loaded, card writes:

`🐦 SEAGULL-ROOM-CARD v... (...) loaded`
