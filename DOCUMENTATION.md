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
- `font_family`, `font_weight`, `font_size` (card-level defaults)
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
- `width` (column span)
- `icon`
- `text` or `label`
- `color`, `background`, `border`, `border_color`, `border_radius`
- `font_family`, `font_weight`, `font_size`
- `empty` (render blank slot)
- `tap_action`, `double_tap_action`, `hold_action`
- `show`, `show_value`, `show_not_value`, `show_above`, `show_below`
- `keep_spot`
- `invert_state`
- `obsolete`

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
- `all_states`
- `attributes`
- `e` (entity array shortcut)
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
  value: "Living: {{ states(e[0]) }} / Bedroom attr: {{ a[1]['unit_of_measurement'] }}"
```

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
font_family: "PT Sans Narrow, sans-serif"

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
