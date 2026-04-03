# ha-seagull-room-card

Home Assistant custom card: `seagull-room-card`.

## Install

Resource (recommended):
- URL: `/local/seagull-room-card-loader.js`
- Type: `JavaScript Module`

## Card config (short)

```yaml
type: custom:seagull-room-card
background_color: "#eeeeee"
background_opacity: 0.6
border_radius: 16
border_width: 0
border_color: "#aaaaaa"
icon: mdi:sofa
icon_color: "#2233aa44"
icon_size: 60

variables:
  temperature: "{{ states('sensor.second_bedroom_temperature') }}"
  humidity: "{{ states('sensor.second_bedroom_humidity') }}"

text:
  entity: sensor.second_bedroom_temperature  # target entity for text actions (optional)
  color: "{{ state === 'on' ? '#ffffff' : '#111827' }}"
  value: |
    <b>Kitchen</b><br/>
    <i>{{ states(entity) }}</i>
  size: 14
  halign: left                  # left | center | right
  valign: top                   # top | center | bottom
  padding: 0
  padding_top: null
  padding_right: null
  padding_bottom: null
  padding_left: null
  tap_action: more-info
  double_tap_action: more-info
  hold_action: more-info

buttons:
  cols: 3
  rows: 1
  size: 48
  gap: 5
  padding: 10
  align: right

  # defaults for each button
  icon: mdi:lightbulb
  color: "{{ state === 'on' ? '#111827' : '#e5e7eb' }}"      # icon color
  background: "{{ state === 'on' ? '#f59e0b' : '#4b5563' }}" # background color
  border: 0
  border_color: transparent
  use_light_color: false         # false | color | brightness | both (или true)

  tap_action: toggle
  double_tap_action: more-info
  hold_action: more-info

  entities:
    - entity: light.living_main
      width: 1
      icon: mdi:ceiling-light
      # per-button overrides
      color:
        - state: on
          value: "#ffffff"
        - state: off
          value: "#000000"
        - value: "#ff0000"
      background: "{%if states(entity) == 'on' %}#f59e0b{%else%}#334155{%endif%}"

    - entity: switch.garage
      width: 2
```

## Notes

- `buttons` is the main section name now.
- Legacy alias `lights` still works.
- `variables` allows defining reusable template variables on card level.
- These variables are available in all templates (including `text.value`) as plain names and via `vars.<name>`.
- `text` supports multiline template value with HTML formatting (`<b>`, `<i>`, `<br/>`, etc.).
- `text.value` can use the same template formats as buttons.
- `text.entity` + `text.tap_action/double_tap_action/hold_action` are supported (defaults: all `more-info`).
- Click priority: buttons > text > card icon.
- If card-level `entity` is set, it can be referenced in text templates.
- Button-level fields can override section-level fields.
- Allowed actions: `toggle`, `more-info`, `perform-action`, `navigate`.
- `entity` can be from any domain.
- Active-state defaults: `on` for regular domains, `unlocked` for `lock.*`, `playing` for `media_player.*`.
- Same entity can be added multiple times (array form).

Template input supports:
1. `{{ ... }}` (JS expression)
2. `{%if ... %}...{%else%}...{%endif%}`
3. rule arrays with `state`, `state_not`, `state_above`, `state_below`, `state_template`, and fallback rule without condition.
