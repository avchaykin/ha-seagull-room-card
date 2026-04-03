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
area_id: living_room              # debug: фильтр света по area_id
background_color: "#1f2937"      # базовый цвет фона
background_opacity: 0.45          # 0..1
border_radius: 16                 # px
border_width: 1                   # px
border_color: "rgba(255,255,255,0.25)"
icon: mdi:sofa                    # иконка в левом верхнем углу
icon_color: "#ffffff"
icon_size: 22                     # px
```

## Параметры

- `area_id` — area id (или имя зоны) для отладки; карточка выводит список `light.*` сущностей из этой зоны
- `background_color` — цвет фона (hex или rgb/rgba; для hex/rgb автоматически применяется прозрачность)
- `background_opacity` — прозрачность фона от `0` до `1`
- `border_radius` — радиус скругления в пикселях
- `border_width` — толщина рамки в пикселях
- `border_color` — цвет рамки
- `icon` — MDI-иконка (например `mdi:sofa`), отображается в левом верхнем углу
- `icon_color` — цвет иконки
- `icon_size` — размер иконки в пикселях

Если хочешь оставить старый способ, можно использовать прямой ресурс `/local/seagull-room-card.js?v=...`, но тогда версию придётся поднимать вручную.

## Диагностика загрузки

При успешной загрузке модуля в браузерной консоли будет строка:

`🕊️ SEAGULL-ROOM-CARD v... (...) loaded`

Это сделано по аналогии с `ha-seagull-badge-card` и помогает быстро понять, что ресурс действительно подхватился.
