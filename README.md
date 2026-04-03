# ha-seagull-room-card

Базовая кастомная карточка Home Assistant: `seagull-room-card`.

## Установка

1. Скопируй `seagull-room-card.js` в HA:
   - `/config/www/seagull-room-card.js`
2. Добавь ресурс Lovelace:
   - URL: `/local/seagull-room-card.js?v=1`
   - Type: **JavaScript Module**

## Автодеплой при коммите (как в ha-seagull-badge-card)

В репозитории есть:
- `.githooks/post-commit` — автозапуск деплоя после каждого коммита
- `scripts/deploy-to-ha.sh` — копирование файла в Home Assistant через SSH + проверка SHA256

Включить hooks path один раз:

```bash
git config core.hooksPath .githooks
```

Можно переопределить переменные окружения:

- `HA_HOST` (по умолчанию `192.168.1.184`)
- `HA_USER` (по умолчанию `avc`)
- `HA_KEY` (по умолчанию `~/.ssh/id_ed25519_openclaw_ha`)
- `HA_TARGET_FILE` (по умолчанию `/config/www/seagull-room-card.js`)

## Конфигурация карточки

```yaml
type: custom:seagull-room-card
background_color: "#1f2937"     # базовый цвет фона
background_opacity: 0.45         # 0..1
border_radius: 16                # px
```

## Параметры

- `background_color` — цвет фона (hex или rgb/rgba; для hex/rgb автоматически применяется прозрачность)
- `background_opacity` — прозрачность фона от `0` до `1`
- `border_radius` — радиус скругления в пикселях
