# ha-seagull-room-card

Home Assistant custom card: `seagull-room-card`.

## Install

Resource (recommended):
- URL: `/local/seagull-room-card-loader.js`
- Type: `JavaScript Module`

## Card config (short)

```yaml
type: custom:seagull-room-card
background_color: "#eeeeeebb"
background_opacity: 0.6
border_radius: 16
border_width: 0
border_color: "#aaaaaa"
icon: mdi:sofa
icon_color: "#2233aa44"
icon_size: 60

buttons:
  cols: 3
  rows: 1
  size: 40
  gap: 5
  padding: 10
  align: right

  # defaults for each button
  icon: mdi:lightbulb
  color: "{{ state === 'on' ? '#111827' : '#e5e7eb' }}"      # icon color
  background: "{{ state === 'on' ? '#f59e0b' : '#4b5563' }}" # background color
  border: 0
  border_color: transparent

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
- Button-level fields can override section-level fields.
- Allowed actions: `toggle`, `more-info`, `perform-action`, `navigate`.
- `entity` can be from any domain.
- Same entity can be added multiple times (array form).

Template input supports:
1. `{{ ... }}` (JS expression)
2. `{%if ... %}...{%else%}...{%endif%}`
3. rule arrays with `state`, `state_not`, `state_above`, `state_below`, `state_template`, and fallback rule without condition.
