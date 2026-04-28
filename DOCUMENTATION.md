# Seagull Room Card — Full Documentation

## 1) Card overview

`custom:seagull-room-card` is a compact room card for Home Assistant with:

- card icon
- optional text layer
- configurable button grid
- dynamic templates and visibility
- per-domain defaults and actions
- day/night palette theme

---

## 2) Minimal example

```yaml
type: custom:seagull-room-card
buttons:
  entities:
    - entity: light.living_room
```

---

## 3) Top-level config

- `type` (required): `custom:seagull-room-card`
- `entity` (optional): default entity used by templates/actions
- `icon`, `icon_color`, `icon_size`
- `background_color`, `background_opacity`, `border_radius`, `border_width`, `border_color`
- `font_family`, `font_weight`, `font_size`, `font_url` (card-level defaults)
- `tap_action`, `double_tap_action`, `hold_action` (card-level actions)
- `variables` (custom template variables)
- `text` (text layer block)
- `buttons` (button layout/logic)
- `lights` (alias for `buttons`)
- `theme` (palette + style defaults)

---

## 4) Text block (`text`)

Fields:

- `text.entity` (optional)
- `text.value` (supports templates)
- `text.color`, `text.background_color` (or `text.background`)
- `text.border_radius`, `text.border_width`, `text.border_color`
- `text.size`, `text.halign`, `text.valign`
- `text.padding`, `text.padding_top`, `text.padding_right`, `text.padding_bottom`, `text.padding_left`
- `text.tap_action`, `text.double_tap_action`, `text.hold_action`

Example:

```yaml
text:
  value: "{{ states(entity)|round }}°C"
  color: "$text_color"
  size: 16
  halign: left
  valign: top
```

---

## 5) Buttons block (`buttons` / `lights`)

### 5.1 Layout + defaults

- `cols` / `columns`
- `rows` (minimum row height reservation)
- `size`, `gap`
- `padding`, `padding_top`, `padding_right`, `padding_bottom`, `padding_left`
- `align`: `left | center | right | justified`

Style defaults:

- `icon`, `color`, `background`, `bg`
- `border`, `border_color`, `border_radius`
- `font_family`, `font_weight`, `font_size` (button text)

Behavior defaults:

- `use_light_color` / `light_color`
- `invert_state`
- `obsolete`
- `phantom`

Visibility defaults:

- `show`
- `show_value`, `show_not_value`
- `show_above`, `show_below`
- `keep_spot`

Action defaults:

- `tap_action`, `double_tap_action`, `hold_action`

### 5.2 Button collections

Supported keys (array or object where relevant):

- `buttons.entities`
- `buttons.items`
- `buttons.button`
- `buttons.buttons`
- `buttons.light`

`lights` works as alias of `buttons`.

---

## 6) Per-button fields

Each item may include:

- `entity` (optional for icon/text-only button)
  - can be a single entity string
  - or an array of entities
- `width` (column span)
- `icon`
- `text` or `label`
- `color`, `background`, `border`, `border_color`, `border_radius`
- `font_family`, `font_weight`, `font_size`
- `mini` (render as mini button)
- `view` (button presentation mode)
- `badge` (top-right indicator)
- `empty` (render blank slot)
- `tap_action`, `double_tap_action`, `hold_action`
- `show`, `show_value`, `show_not_value`, `show_above`, `show_below`
- `show`, `show_state`, `show_not_state`, `show_above`, `show_below`
- `keep_spot`
- `invert_state`
- `obsolete`

Badge (`badge`) supports condition keys compatible with button visibility (`show`, `show_value`/`state`, `show_not_value`, `show_above`, `show_below`) and display keys:
- `color` / `background`
- `icon`, `icon_color`
- `text`
- `size`

Behavior:
- without `icon`/`text`: small dot in top-right corner of button bounding box (inside the box)
- with `icon` (or `text`): larger badge center placed on button circumference in top-right sector

Example:

```yaml
buttons:
  items:
    - entity: light.kitchen
      badge:
        show: "{{ state == 'on' }}"
        color: "#ef4444"
```

Phantom button (`phantom`):

Shows a temporary ghost version of a button when normal button visibility has just turned off.

- `enabled` (default: `true` when `phantom` is set)
- `duration` (seconds)
- conditions: `state` / `state_value`, `state_not_value` (also supports `show_value` / `show_not_value`)
- style: `color`, `background`, `icon`

Defaults when style fields are omitted:
- gray semi-transparent ghost style with dashed border

Priority rule:
- full/normal button visibility always wins over phantom (if both conditions match)

```yaml
buttons:
  items:
    - entity: binary_sensor.front_door
      show: "{{ state == 'on' }}"
      phantom:
        duration: 120
        state: "off"
```

```yaml
buttons:
  items:
    - entity: alarm_control_panel.home
      badge:
        state: "armed_away"
        icon: mdi:shield-lock
        color: "#22c55e"
        icon_color: "#ffffff"
        size: 16
```

If `entity` is an array:

- first entity is the primary one (state/domain/actions)
- all entities are available in templates as shortcuts:
  - `e[0]`, `e[1]`, ... for entity ids
  - `s[0]`, `s[1]`, ... for states (`states(e[i])`)
  - `a[0]['attr']`, `a[1]['attr']`, ... for attributes

Example:

```yaml
buttons:
  items:
    - entity:
        - input_select.alarm_mode
        - input_boolean.alarm_pause
        - timer.alarm_pause_timer
      color:
        - state_template: "{{ s[0] == 'away' || s[1] == 'on' }}"
          value: goldenrod
        - value: dimgrey
```

Visibility naming:
- Preferred: `show_state`, `show_not_state`
- Deprecated (still supported): `show_value`, `show_not_value`

Mini buttons:

- `mini: true` makes button 4x smaller (2x2 packing)
- consecutive mini buttons are grouped 4 per normal slot, then continue into next slot

```yaml
buttons:
  items:
    - entity: light.a
      mini: true
    - entity: light.b
      mini: true
    - entity: light.c
      mini: true
    - entity: light.d
      mini: true
    - entity: light.e
      mini: true
```

View modes (`view`):

```yaml
view:
  type: button
```

Default button mode (can be omitted).

```yaml
view:
  type: gauge
  style: donut
  color: ...
  background: ...
  scale: { min: 0, max: 100 }
  value: ...
  width: 4
  position: 0.75
```

Gauge options:
- `style`: `donut` (default)
- `value` (default entity state)
- `scale` number or `{min,max}`

```yaml
view:
  type: progress
  style: runner
  show:
    show_state: "on"
  width: 6
  length: 0.25
  speed: 1
  color: "$seagull_active_blue"
  background: "transparent"
```

Progress mode (`view.type: progress`, `style: runner`):
- visibility uses the same syntax as buttons (`show`, `show_state`, `show_not_state`, `show_value`, `show_not_value`, `show_above`, `show_below`)
- you can use either top-level keys in `view` or nested `show:` block
- active state renders a rotating segment
- `width`: ring thickness
- `length`: segment length, `1` means full circle
- `speed`: turns per second, `1` means one full rotation per second
- `color`: active segment color
- `background`: base ring color (default: `transparent`)
- `color`, `background`, `width`, `position`
- `show_value`: show value text over gauge (number-like)
- `icon` can be an array aligned with `entity` order

```yaml
view:
  type: number
  style: big
```

Default style for `view.type: number` is `big`.

```yaml
view:
  type: watchface
  style: solid
  scale: hour
  notches: 12
  length: 10
  time_length: 14
  color: "#111111"
  time_color: "#ef4444"
  show_state: "on"
  accent_color: "#22c55e"
```

Watchface mode:
- `style`: `solid` (default donut ring) or `notches` (legacy tick marks)
- `scale`: `hour` (default, full circle = 60 min) or `day` (full circle = 12h)
- `notches`: number of marks (1..60)
- `length`: notch length toward center
- `time_length`: current-time notch length (default: `2 * length`)
- active segment is highlighted with `time_color`
- other notches use `color`
- optional `show_state`: marks periods in the selected scale window where entity was in that state
- `accent_color`: color for such historical marks

Number mode `three-lines`:

- layout: top value + bottom icon
- value area ~60% of button height
- supports one or multiple entities (`entity` can be array)
- tap action: rotates visible entity/value/icon
- hold action: always opens `more-info` for currently shown entity
- for temperature/humidity/percent values, shows small suffix on the right (`°` or `%`)
- uses condensed font (`Oswald`)
- `unit_of_measurement`: `true | false | <string>`
- `value_font_size`, `unit_font_size`
- `font_familly` (or `font_family`) to override number-view font; default is HA/Lovelace standard (`inherit`)
- `font_weight` to control number-view text weight (default: `400`)

Example:

```yaml
buttons:
  items:
    - view:
        type: number
        style: three-lines
      entity:
        - sensor.living_temperature
        - sensor.living_humidity
```

Number mode `big`:

- button background is hidden
- large icon is rendered as background (icon color uses button `background` color)
- value text is larger, lower and left-aligned
- unit (`%`, `°C`, `°F`) is shown on the right of value, top-aligned

```yaml
buttons:
  items:
    - view:
        type: number
        style: big
      entity:
        - sensor.living_temperature
        - sensor.living_humidity
```

Button text behavior:

- If text exists, icon is shown on the left.
- For `width: 1`, if icon + text do not fit, icon is hidden and text remains.
- If `icon: false` or `icon: null`, icon is explicitly hidden and only text is shown.
- Overflow text is clipped (no ellipsis).

---

## 7) Actions

Supported action types:

- `toggle`
- `more-info`
- `navigate`
- `perform-action`
- `sequence`
- `brightness` (light only, mainly for hold gesture)

### 7.1 `toggle`

- Generic domains: `homeassistant.toggle`
- `lock.*`: switches between `lock.lock` and `lock.unlock`
- `media_player.*`: switches between `media_play` and `media_pause`

### 7.2 `more-info`

Opens Home Assistant more-info dialog for target entity.

### 7.3 `navigate`

Uses `navigation_path` / `url_path` / `path`.

### 7.4 `perform-action`

- `perform_action` (or `service`) as `domain.service`
- optional `data` / `service_data`
- optional `target`

### 7.5 `sequence`

Run actions in order.

Supports delay steps:

- object with `delay_ms` or `delay`
- plain number (milliseconds)

Example:

```yaml
tap_action:
  action: sequence
  sequence:
    - action: perform-action
      perform_action: light.turn_on
      target:
        entity_id: light.kitchen
    - delay_ms: 300
    - action: more-info
```

### 7.6 `brightness`

For `light.*` entities, you can set:

```yaml
hold_action: brightness
```

Behavior:
- long-press starts brightness mode
- drag up increases brightness
- drag down decreases brightness
- updates are sent as `light.turn_on` with `brightness_pct`

---

## 8) Templates and variables

Dynamic fields support:

- plain values
- rules arrays (`[{ state: ..., value: ... }]`)
- template strings

Supported template forms:

- full expression: `{{ ... }}`
- inline expression in text: `Temp {{ states(entity)|round }}°C`
- simple Jinja-style condition blocks: `{% if ... %}...{% else %}...{% endif %}`

Built-ins available in template context include:

- `hass`
- `entity`
- `state`
- `states(entity_id)` helper
- `state_attr(entity_id, attr)` helper
- `time_rest(entity_id, attr?, unit)` helper
- `timer_progress(timer_entity_id)` helper
- `all_states`
- `attributes`
- `e` (entity array shortcut)
- `s` (states array shortcut aligned with `e`)
- `a` (attributes array shortcut aligned with `e`)
- `is_on`
- `vars` + flattened `variables`
- filters/helpers: `round`, `upper`, `lower`, `trim`, `capitalize`, `title`

Top-level `variables` can be reused in templates.

Shortcuts examples:

```yaml
color:
  - state_template: "{{ state_attr('schedule.dechets', 'trash') == 'ordures' }}"
    value: dimgrey
  - value: red
```

```yaml
variables:
  e:
    - sensor.temp_living
    - sensor.temp_bedroom

text:
  value: "Living: {{ s[0] }} / Bedroom attr: {{ a[1]['unit_of_measurement'] }}"
```

`time_rest` examples:

```yaml
text:
  value: "До старта: {{ time_rest('timer.wakeup', 'finishes_at', 'min') }} мин"
```

```yaml
text:
  value: "До события: {{ time_rest('sensor.next_event', '', 'hour') }} ч"
```

`timer_progress` example:

```yaml
buttons:
  items:
    - entity: timer.kitchen
      view:
        type: gauge
        show_value: true
        value: "{{ timer_progress('timer.kitchen') }}"
        scale: 100
```

Rules arrays with `state` / `state_template`:

```yaml
icon:
  - state: "on"
    value: mdi:lightbulb
  - value: mdi:lightbulb-off
```

```yaml
color:
  - state_template: "{{ s[0] == 'HOME' && s[1] == 'off' }}"
    value: dimgrey
  - state_template: "{{ s[0] == 'AWAY' }}"
    value: goldenrod
  - value: red
```

Notes:
- `state` compares against the primary entity state.
- `state_template` lets you use full expression logic.
- in rules arrays, use `value` (not `icon`/`color`) for the resolved output.

---

## 9) Visibility rules

Per-button (or default in `buttons`):

- `show` (boolean)
- `show_value` / `show_not_value`
- `show_above` / `show_below` (numeric state checks)

If entity is unavailable/missing and `keep_spot` is true, blank placeholder can preserve grid shape.

---

## 10) Obsolete state styling

`obsolete` can mark stale entities based on update age.

Accepted forms:

- `obsolete: <hours>`
- `obsolete:` object with options (`hours`, `color`, `background`, `border`, `border_color`, `icon`)

---

## 11) Theme system

`theme` supports:

- `theme.palette_mode`: `auto | day | night`
- `theme.palette`: custom named colors (`string` or `{ day, night }`)
- `theme.card`, `theme.text`, `theme.button`

Palette references use `$name` syntax.

Example:

```yaml
buttons:
  background: "$seagull_rose"
```

Default theme schema is provided in `seagull-room-card-theme-default.js`.

---

## 12) Domain defaults

Active-state mapping:

- regular domains: `state == on`
- `lock.*`: active when `state == unlocked`
- `media_player.*`: active when `state == playing`

Default action mapping:

- `sensor.*` and `binary_sensor.*`: tap / hold / double_tap default to `more-info`
- other domains: tap defaults to `toggle`, hold/double to `more-info`

---

## 13) Interaction feedback

Button press feedback uses a temporary translucent outer ring (`box-shadow`) based on current button color.

- does not change button size
- does not move layout
- intended to provide instant response before entity state updates

---

## 14) Advanced example

```yaml
type: custom:seagull-room-card
entity: climate.living_room
icon: mdi:sofa
font_family: "Oswald, sans-serif"

text:
  value: "{{ states('sensor.living_room_temperature')|round }}°C"
  size: 16

buttons:
  cols: 3
  size: 48
  gap: 6
  font_weight: 700

  items:
    - entity: light.living_room
      text: "Main"
      width: 1

    - entity: switch.floor_lamp
      text: "Floor"
      icon: false

    - entity: lock.front_door
      text: "Door"
      show: "{{ states(entity) != 'unavailable' }}"

    - empty: true
      width: 2
```

---

## 15) Version/debug notes

- Card logs version information in browser console.
- Version badge is shown in editor context.
