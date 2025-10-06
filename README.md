
# WorldWise — Explore Cities & Countries

WorldWise is a small React application built with Vite that helps you explore cities and countries on an interactive map, view details, and manage a simple list of places. It demonstrates modern React patterns including Context, custom hooks, CSS Modules, and client-side routing.

Shortly: WorldWise is a lightweight demo app for discovering and managing city data, designed for learning and prototyping mapping + UI patterns in React.

## Key features

- Interactive city and country lists
- Map integration and geolocation support (see `src/components/Map.jsx` and `src/hooks/useGeolocation.js`)
- Add/edit city forms and validations (`src/components/Form.jsx`)
- Routing and protected routes for simple auth flows (`src/pages/ProtectedRoute.jsx`, `src/contexts/FakeAuthContext.jsx`)
- Local demo dataset: `data/cities.json`
- Reusable components with CSS Modules for scoped styles

## Tech stack

- React (JSX)
- Vite (dev server + build)
- CSS Modules for component styles
- Context API for state management
- Custom hooks (geolocation, URL position)

## Quick start (development)

Open a terminal in the project root and run:

```powershell
npm install
npm run dev
```

Then open the local dev URL shown by Vite (usually `http://localhost:5173`).

To build for production:

```powershell
npm run build
npm run preview
```

## Project layout (important files)

- `src/` — application source
- `src/components/` — UI components (City, Map, Form, Sidebar, etc.)
- `src/contexts/` — React contexts (cities, fake auth)
- `src/hooks/` — custom hooks (`useGeolocation.js`, `useUrlPosition.js`)
- `data/cities.json` — demo dataset of cities used by the app

## Description variants

- One-liner: "WorldWise — a React + Vite demo app to explore and manage cities with a map and simple auth flows."

- Short (2–3 sentences): WorldWise is a lightweight React application for exploring cities and countries. It combines an interactive map with contextual lists, reusable components, and small demo data to showcase common UI and state-management patterns in modern React.

- Long (paragraph): WorldWise is a demo project built with React and Vite that focuses on discoverability and simple CRUD-like interactions for city data. The app includes an interactive map, geolocation-based features, contextual lists for cities and countries, and a tiny authentication flow to protect routes. It’s organized with CSS Modules, React Context, and custom hooks to keep the code modular and easy to extend. The included `data/cities.json` provides sample content so you can run and inspect the app immediately. The project is ideal for learning, prototyping mapping features, or using as a starter for small location-aware React projects.

## Contributing & notes

This repository is a learning/demo project. If you plan to extend it:

- Replace the demo `data/cities.json` with a backend or an external API.
- Add unit/integration tests around hooks and components.
- Improve accessibility and responsive styles in `src/components/*.module.css` files.

If you'd like, I can also add a CI badge, tests, or a short development checklist.
