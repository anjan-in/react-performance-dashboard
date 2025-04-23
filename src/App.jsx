import { Suspense, lazy } from 'react'

const FpsMonitor = lazy(() => import('./components/FpsMonitor'))
const MemoryUsage = lazy(() => import('./components/MemoryUsage'))
const RenderTime = lazy(() => import('./components/RenderTime'))
const FibonacciWasm = lazy(() => import('./components/FibonacciWasm'))

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>⚡ React Performance Dashboard</h1>

      <Suspense fallback={<p>Loading FPS Monitor...</p>}>
        <FpsMonitor />
      </Suspense>
      <Suspense fallback={<p>Loading Memory Usage...</p>}>
        <MemoryUsage />
      </Suspense>
      <Suspense fallback={<p>Loading Render Time...</p>}>
        <RenderTime />
      </Suspense>
      <Suspense fallback={<p>Loading WASM Module...</p>}>
        <FibonacciWasm />
      </Suspense>
    </div>
  )
}

export default App
