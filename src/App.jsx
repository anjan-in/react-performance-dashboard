import FpsMonitor from './components/FpsMonitor'

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>⚡ React Performance Dashboard</h1>
      <FpsMonitor />
    </div>
  )
}

export default App
