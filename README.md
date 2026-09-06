# VECTOR 2026 — React

The React/Vite conversion of the VECTOR 2026 tech fest site.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
├── main.jsx              # entry point (BrowserRouter)
├── App.jsx                # shared layout: backdrop, navbar, routes, footer
├── index.css               # design tokens + all styling
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SpiderWeb.jsx          # interactive SVG hero visual, routes to event pages
│   ├── WebSceneBackdrop.jsx   # ambient Three.js background (fixed, full page)
│   ├── EventsSection.jsx
│   ├── EventCard.jsx
│   ├── EventDetail.jsx        # shared layout used by all 3 event detail pages
│   ├── RegistrationMotivation.jsx
│   ├── Countdown.jsx
│   ├── Footer.jsx
│   └── Reveal.jsx             # scroll-reveal wrapper (IntersectionObserver)
├── pages/
│   ├── HomePage.jsx
│   ├── SquidGamePage.jsx
│   ├── TreasureHuntPage.jsx
│   ├── CodeFusionAIPage.jsx
│   └── NotFoundPage.jsx
├── hooks/
│   └── useCountdown.js
└── data/
    └── eventsData.js       # single source of truth for all 3 events' content
```

## Before you launch

- **Google Form link** — `REGISTER_FORM_URL` in `src/data/eventsData.js`.
- **Contact details** — `CONTACT_EMAIL` / `CONTACT_PHONE` in the same file, plus the social links in `Footer.jsx`.
- **Dates, venues, fees, prizes** — all per-event fields live in `src/data/eventsData.js`; edit an event object and every page that shows it (home cards, detail page, spider-web hover label) updates together.
- **Deploying as an SPA** — since routing is client-side, make sure your host rewrites unknown paths to `/index.html` (e.g. a Netlify `_redirects` file with `/* /index.html 200`, or the Vercel/GitHub Pages equivalent), or deep links like `/squid-game` will 404 on refresh.

## Notes

- The visual gallery, "Web Experience" narrative section, About, and FAQ sections from the original static site were intentionally dropped as part of the streamlined 6-section home page (Nav, Hero, Countdown, Events, Registration CTA, Footer).
- `WebSceneBackdrop` is a straight port of the original `web-scene.js` Three.js logic into a `useEffect`-managed component, with proper cleanup on unmount.
