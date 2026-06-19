# MC Air Brothers Ltd — Website

Marketing website for **MC Air Brothers Ltd** — commercial & residential cooling and energy in Discovery Bay, St. Ann, Jamaica. Air conditioning, solar energy, water heaters, water pumps, coolers & fans.

## Pages
- `index.html` — Home
- `services.html` — Services
- `shop.html` — Shop (product inventory)
- `about.html` — About
- `contact.html` — Contact (WhatsApp/call, quote form, map, hours)

## Deploy on GitHub Pages
1. Create a new repository and upload **all** files in this folder, keeping the structure (`assets/` must stay alongside the HTML).
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
3. Your site goes live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

It is a static site — no build step, no dependencies to install. Just plain HTML/CSS/JS.

## Contact details (edit in the HTML if these change)
- WhatsApp / Phone: **876-478-4799** (`https://wa.me/18764784799`)
- Email: **mcairbrothers@gmail.com**
- Instagram: **@mcairbrothersac_ltd**
- Location: Discovery Bay, St. Ann, Jamaica
- Hours: Mon–Sat, 9:00 a.m. – 5:00 p.m.

## Notes
- **Product & section photos** are currently hot-linked from external sources. For a production site, replace them with your own photos of the stock you carry — search each HTML file for `src="https://` to find and swap image URLs. Prices on the Shop page are indicative (JMD) and marked to confirm.
- Placeholders marked `[CLIENT TO CONFIRM]` (service radius, founding details) are intentional — fill them in when ready.

## Files
| File | Purpose |
|------|---------|
| `styles.css` | Shared brand system (colors, type, header, footer, buttons) |
| `home.css` / `pages.css` / `shop.css` | Page-specific styles |
| `site.js` | Mobile menu + quote-form → WhatsApp |
| `image-slot.js` | Drag-and-drop image placeholders |
| `assets/mc-logo.png` | Company logo |
