import FpsMonitor from './components/FpsMonitor'
import MemoryUsage from './components/MemoryUsage'

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>⚡ React Performance Dashboard</h1>
      <FpsMonitor />
      <MemoryUsage />
    </div>
  )
}

export default App
