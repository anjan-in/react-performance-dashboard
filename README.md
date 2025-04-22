# react-performance-dashboard ⚡

🧪 A React-based dashboard to monitor and visualize frontend performance metrics like FPS, memory usage, and render time using Web APIs and optional WebAssembly (WASM).

## 📊 Features

- FPS (Frames per second) Monitor
- Memory usage tracker
- Render timing via `performance.now()`
- Lazy loaded components with `React.lazy()`
- Optional WASM integration for CPU-heavy tasks
- Chrome DevTools profiling

## 🧠 Learnings

- `performance.now()` for accurate timing
- Real-time FPS calculation using `requestAnimationFrame`
- `performance.memory` insights
- Lazy loading and code splitting
- Integrating WebAssembly with React
- Using Chrome DevTools for render and memory profiling

## 🛠️ Tech Stack

- React
- JavaScript / Web APIs
- WebAssembly (WASM)
- Tailwind CSS
- Chrome DevTools

## 📸 Screenshots

*(Add a few screenshots or screen recordings here)*

## 🚀 How to Run

```bash
npm install
npm run dev


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
