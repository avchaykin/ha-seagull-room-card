# ha-seagull-room-card

Базовая кастомная карточка Home Assistant: `seagull-room-card`.

## Установка

1. Скопируй `seagull-room-card.js` в HA:
   - `/config/www/seagull-room-card.js`
2. Добавь ресурс Lovelace (рекомендуется loader без ручного bump версии):
   - URL: `/local/seagull-room-card-loader.js`
   - Type: **JavaScript Module**

> Loader на каждом обновлении страницы подтягивает `/local/seagull-room-card.js?t=<timestamp>`, поэтому менять версию в Resource Manager больше не нужно.

## Автодеплой при коммите (как в ha-seagull-badge-card)

В репозитории есть:
- `.githooks/post-commit` — автозапуск деплоя после каждого коммита
- `scripts/deploy-to-ha.sh` — копирование файла в Home Assistant через SSH + проверка SHA256

Включить hooks path один раз:

```bash
./scripts/setup-hooks.sh
```

(эквивалентно `git config core.hooksPath .githooks`)

Можно переопределить переменные окружения:

- `HA_HOST` (по умолчанию `192.168.1.184`)
- `HA_USER` (по умолчанию `avc`)
- `HA_KEY` (по умолчанию `~/.ssh/id_ed25519_openclaw_ha`)
- `HA_TARGET_FILE` (по умолчанию `/config/www/seagull-room-card.js`)

## Конфигурация карточки

```yaml
type: custom:seagull-room-card
background_color: "#1f2937"
background_opacity: 0.45
border_radius: 16
border_width: 1
border_color: "rgba(255,255,255,0.25)"
icon: mdi:sofa
icon_color: "#ffffff"
icon_size: 22
lights:
  cols: 4                         # columns/cols — количество колонок
  size: 44                        # размер кнопки
  gap: 10                         # расстояние между кнопками
  padding: 12                     # базовый внутренний отступ блока кнопок
  padding_top: 8                  # переопределение по направлениям (опционально)
  padding_right: 12
  padding_bottom: 12
  padding_left: 12
  align: justified                # left | center | right | justified
  color: "{{ state === 'on' ? 'rgba(245,158,11,0.9)' : 'rgba(75,85,99,0.45)' }}"
  icon_color: "{{ state === 'on' ? '#111827' : '#e5e7eb' }}"
  entities:
    - entity: light.living_main
      icon: mdi:ceiling-light
      color: "{{ is_on ? '#f59e0b' : '#334155' }}"      # override только для этой лампы
      icon_color: "{{ is_on ? '#111827' : '#cbd5e1' }}" # override только для этой лампы

# или объектной формой (можно скрыть отдельный свет)
# lights:
#   entities:
#     light.driveway_status_led: false
#     light.living_main:
#       icon: mdi:ceiling-light
#       color: "{{ is_on ? '#f59e0b' : '#334155' }}"
```

## Параметры

- `background_color` — цвет фона (hex или rgb/rgba; для hex/rgb автоматически применяется прозрачность)
- `background_opacity` — прозрачность фона от `0` до `1`
- `border_radius` — радиус скругления в пикселях
- `border_width` — толщина рамки в пикселях
- `border_color` — цвет рамки
- `icon` — MDI-иконка (например `mdi:sofa`), отображается в левом верхнем углу
- `icon_color` — цвет иконки
- `icon_size` — размер иконки в пикселях

### `lights`

- `lights.cols` / `lights.columns` — количество колонок
- `lights.size` — размер круглой кнопки
- `lights.gap` — расстояние между кнопками
- `lights.padding` — базовый внутренний отступ блока кнопок (для всех сторон)
- `lights.padding_top` / `lights.padding_right` / `lights.padding_bottom` / `lights.padding_left` — переопределение отступа по конкретной стороне
- `lights.align` — выравнивание кнопок:
  - `left` — сетка прижата влево
  - `center` — сетка по центру
  - `right` — сетка прижата вправо
  - `justified` — равномерно по ширине карточки
  - во всех режимах сохраняется `cols` (количество колонок)
  - кнопки выравниваются по верхнему краю (vertical top)
- `lights.color` — шаблон/значение цвета фона кнопки (наследуется)
- `lights.icon_color` — шаблон/значение цвета иконки (наследуется)
- `lights.entities` (или `lights.items` / `lights.light`) — override для конкретных источников света:
  - можно массивом объектов (`- entity: light.xxx ...`)
  - или объектом (`light.xxx: {...}`)
  - если указать `light.xxx: false`, этот свет скрывается (кнопка не рисуется)
  - если указать `light.xxx: {...}`, эта лампа будет показана (если entity существует)
  - `entity` — `light.xxx`
  - `icon` — иконка для этой лампы
  - `color` — цвет/шаблон только для этой лампы
  - `icon_color` — цвет иконки/шаблон только для этой лампы

Шаблон — строка вида `{{ ... }}`.
Доступные переменные в шаблоне: `state`, `is_on`, `entity`, `hass`, `states`, `attributes`.

Если хочешь оставить старый способ, можно использовать прямой ресурс `/local/seagull-room-card.js?v=...`, но тогда версию придётся поднимать вручную.

## Диагностика загрузки

При успешной загрузке модуля в браузерной консоли будет строка:

`🕊️ SEAGULL-ROOM-CARD v... (...) loaded`

Это сделано по аналогии с `ha-seagull-badge-card` и помогает быстро понять, что ресурс действительно подхватился.
