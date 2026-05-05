# Seagull Room Card — User Guide

`custom:seagull-room-card` — карточка Home Assistant для управления комнатой через текстовый блок + сетку кнопок.

---

## 1. Установка

### Вариант A (рекомендуется): HACS

1. HACS → **Frontend** → **⋮** → **Custom repositories**
2. Добавьте: `https://github.com/avchaykin/ha-seagull-room-card`
3. Category: **Dashboard**
4. Установите **Seagull Room Card**
5. В Lovelace Resources добавьте:
   - URL: `/hacsfiles/ha-seagull-room-card/seagull-room-card.js`
   - Type: `JavaScript Module`

### Вариант B: вручную

1. Скопируйте в HA:
   - `/config/www/seagull-room-card.js`
   - `/config/www/seagull-room-card-loader.js`
2. В Resources добавьте:
   - URL: `/local/seagull-room-card-loader.js`
   - Type: `JavaScript Module`

---

## 2. Первый запуск за 3 минуты

### Шаг 1. Добавьте минимальную карточку

```yaml
type: custom:seagull-room-card
buttons:
  entities:
    - entity: light.living_room
```

### Шаг 2. Добавьте вторую кнопку

```yaml
type: custom:seagull-room-card
buttons:
  entities:
    - entity: light.living_room
    - entity: switch.tv
```

### Шаг 3. Добавьте верхний текст

```yaml
type: custom:seagull-room-card
text:
  value: "{{ states('sensor.living_room_temperature')|round(1) }}°C"
buttons:
  entities:
    - entity: light.living_room
    - entity: switch.tv
```

---

## 3. Базовая структура конфигурации

```yaml
type: custom:seagull-room-card
entity: climate.living_room # optional
text: ...                    # optional
buttons: ...                 # основной блок
theme: ...                   # optional
```

Главные блоки:
- `text` — верхняя текстовая плашка
- `buttons` (или alias `lights`) — сетка кнопок
- `theme` — визуальные токены/палитра

---

## 4. Настройка блока `text`

Часто используемые поля:
- `value` (поддерживает шаблоны)
- `color`, `background_color`
- `size`, `halign`, `valign`
- `padding` и side-specific padding
- `tap_action` / `hold_action` / `double_tap_action`

Пример:

```yaml
text:
  value: "{{ states(entity)|round }}°C"
  color: "$text_color"
  size: 16
  halign: left
  valign: top
```

---

## 5. Настройка блока `buttons`

### 5.1 Layout

- `cols` / `columns`
- `rows`
- `size`
- `gap`
- `align`: `left | center | right | justified`

Пример:

```yaml
buttons:
  cols: 4
  gap: 8
  align: justified
  entities:
    - entity: light.living_room
    - entity: switch.tv
```

### 5.2 Где описывать кнопки

Поддерживаются:
- `buttons.entities`
- `buttons.items`
- `buttons.button`
- `buttons.buttons`
- `buttons.light`

Рекомендуется для новых конфигов: **`buttons.items`** (наиболее универсально).

---

## 6. Конфигурация одной кнопки

Поддерживаемые поля (основные):
- `entity`
- `icon`
- `text` / `label`
- `width` (span по колонкам)
- `color`, `background`, `border`, `border_radius`
- `tap_action`, `hold_action`, `double_tap_action`
- `show`, `show_state`, `show_not_state`, `show_above`, `show_below`
- `badge`
- `mini`
- `view`

Пример:

```yaml
buttons:
  items:
    - entity: light.kitchen
      icon: mdi:lightbulb
      text: Kitchen
      width: 2
      show_state: "on"
```

---

## 7. Visibility и условная логика

### 7.1 Показывать кнопку по состоянию

```yaml
buttons:
  items:
    - entity: binary_sensor.window
      show_state: "on"
```

### 7.2 Показывать по шаблону

```yaml
buttons:
  items:
    - entity: sensor.energy_price
      show: "{{ states(entity)|float(0) > 0.20 }}"
```

> `show_value` / `show_not_value` поддерживаются, но предпочтительнее `show_state` / `show_not_state`.

---

## 8. Badge-индикаторы

Пример dot-badge если свет включён:

```yaml
buttons:
  items:
    - entity: light.kitchen
      badge:
        show: "{{ state == 'on' }}"
        color: "#ef4444"
```

Пример icon-badge:

```yaml
buttons:
  items:
    - entity: alarm_control_panel.home
      badge:
        state: "armed_away"
        icon: mdi:shield-lock
        color: "#22c55e"
        icon_color: "#ffffff"
```

---

## 9. Mini-кнопки

`mini: true` включает packed-режим (4 mini в слот обычной кнопки).

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
```

---

## 10. Расширенные view-режимы

### Default button view

```yaml
view:
  type: button
```

### Gauge

```yaml
view:
  type: gauge
  style: donut
  scale: { min: 0, max: 100 }
  gradient:
    enabled: true
    preset: default
    solid: false
    # optional custom stops
    # stops:
    #   - at: 0
    #     color: "#22c55e"
    #   - at: 0.5
    #     color: "#eab308"
    #   - at: 1
    #     color: "#ef4444"
  peak:
    - entity: sensor.living_room_power_peak
      width: 10
      thickness: 5
    - entity: sensor.living_room_power_warning
      thickness: 6
```

`peak` для gauge:
- поддерживает объект **или массив объектов** (несколько рисок)
- `entity` — сенсор, из которого берётся пиковое значение
- `value` — альтернативно можно передать значение напрямую/шаблоном (если не указан `entity`)
- `enabled` (default `true`)
- `color` — цвет риски (по умолчанию берётся из градиента в точке значения peak; если градиент выключен — цвет gauge)
- `background` — если задан, этим цветом закрашивается фон gauge от 0 до значения peak
- `no_mark` (или `no-mark`) — скрыть риску peak (default: `false`), оставить только background
- `width` — толщина кольца peak (default: `10`)
- `thickness` — угловая толщина риски (в градусах дуги, default: `4`)

`gradient` для gauge:
- `enabled` — включить градиентную раскраску дуги
- `preset` — `default` (по умолчанию: `$btn_inactive_bg` → `$btn_active_bg`) или `royg` (зелёный → жёлтый → оранжевый → красный)
- `stops` — кастомные точки градиента (`at` от `0..1`, `color`)
- `steps` — количество дискретных шагов градиента (если задано, градиент рисуется ступенчато)
- `reverse` (default: `false`) — реверсирует порядок градиента
- `solid` (default: `false`) — если `true`, активная дуга красится в один цвет, вычисленный по позиции текущего значения в градиенте

По умолчанию peak рисуется как риска поверх gauge, немного шире основного кольца.

### Progress

```yaml
view:
  type: progress
  style: runner
  length: 0.25
  speed: 1
```

---

## 11. Примеры «под задачу»

### 11.1 Свет + шторы + температура

```yaml
type: custom:seagull-room-card
text:
  value: "Living room · {{ states('sensor.living_room_temperature')|round(1) }}°C"
buttons:
  cols: 4
  items:
    - entity: light.living_room
      text: Main
    - entity: light.floor_lamp
      text: Floor
    - entity: cover.living_room_blinds
      text: Blinds
    - entity: climate.living_room
      text: Climate
```

### 11.2 Кнопка только при активном датчике

```yaml
buttons:
  items:
    - entity: binary_sensor.motion_living_room
      icon: mdi:motion-sensor
      color: "#ef4444"
      show_state: "on"
```

---

## 12. Troubleshooting

1. Карточка не отображается:
   - проверьте resource URL;
   - сделайте hard refresh браузера;
   - проверьте, что файл реально в `/www` или в HACS пути.

2. Шаблон не работает:
   - проверьте entity id;
   - проверьте синтаксис Jinja;
   - попробуйте простой шаблон без фильтров.

3. Кнопка не видна:
   - временно уберите `show*` условия;
   - проверьте текущее состояние entity в Developer Tools.

---

## 13. Анализ текущей структуры конфига + предложения

### Что уже хорошо

1. Очень гибкая система кнопок (подходит для реальных сложных комнат).
2. Мощные visibility-правила и шаблоны.
3. Поддержка alias-ключей упрощает совместимость старых конфигов.

### Что сейчас создаёт путаницу

1. **Слишком много синонимов** (`entities/items/button/buttons/light`, `cols/columns`, `background/bg`).
2. **Смешение уровней абстракции** (layout + style + behavior + visibility в одном плоском слое).
3. **Частично устаревший нейминг** (`show_value` vs `show_state`).
4. **Сложно понять «рекомендуемый путь»** для новых пользователей.

### Практичные улучшения без ломки

1. Зафиксировать «канон» для новых конфигов:
   - `buttons.items`
   - `columns` (вместо `cols`)
   - `show_state` / `show_not_state`
   - `background` (вместо `bg`)

2. Ввести мягкую нормализацию в редакторе/доке:
   - автоматически конвертировать alias в canonical-поля при сохранении (опционально).

3. Подсветить deprecated-поля в документации:
   - но не удалять их из рантайма сразу.

4. Для v2 (дальше) перейти к вложенной структуре:

```yaml
buttons:
  layout:
    columns: 4
    gap: 8
    align: justified
  defaults:
    style:
      background: "#1f2937"
      border_radius: 10
    behavior:
      invert_state: false
  items:
    - entity: light.kitchen
      label: Kitchen
```

### Рекомендованный план миграции

- Этап 1: документация + canonical-примеры (сейчас)
- Этап 2: предупреждения в editor UI для legacy-ключей
- Этап 3: optional auto-migrate при сохранении
- Этап 4: только после этого обсуждать «hard deprecations»

---

## 14. Короткая памятка (TL;DR)

Для новых конфигов используйте:
- `buttons.items`
- `columns`
- `show_state` / `show_not_state`
- явные `tap_action` для нестандартных сценариев

И начинайте с малого: 2–4 кнопки, потом усложняйте.
