# ha-seagull-room-card

Home Assistant custom card: `custom:seagull-room-card`.

<img src="assets/screenshot.jpg" alt="Seagull Room Card screenshot" width="360" />

## What it does (short)

- Room card with top text block + button grid
- Flexible button definitions (`entities`, `items`, `button`, `buttons`, `lights`)
- Per-button style, width, visibility rules, actions
- Templates (`{{ ... }}` and inline text like `{{ states(entity)|round }}°C`)
- Theme system with palette + day/night mode

Full reference: **[DOCUMENTATION.md](./DOCUMENTATION.md)**

## Installation

### Option A — HACS (recommended)

1. HACS → **Frontend** → **⋮** → **Custom repositories**
2. Add: `https://github.com/avchaykin/ha-seagull-room-card`
3. Category: **Dashboard**
4. Install **Seagull Room Card**
5. Add Lovelace resource:
   - URL: `/hacsfiles/ha-seagull-room-card/seagull-room-card.js`
   - Type: `JavaScript Module`

### Option B — Manual

1. Copy files to HA:
   - `/config/www/seagull-room-card.js`
   - `/config/www/seagull-room-card-loader.js`
2. Add Lovelace resource:
   - URL: `/local/seagull-room-card-loader.js`
   - Type: `JavaScript Module`

## Minimal config

```yaml
type: custom:seagull-room-card
buttons:
  entities:
    - entity: light.living_room
```
