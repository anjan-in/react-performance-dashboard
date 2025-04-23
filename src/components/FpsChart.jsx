import { useEffect, useRef, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

const FpsChart = () => {
  const [data, setData] = useState([])
  const frameTimes = useRef([])
  const lastTime = useRef(performance.now())

  useEffect(() => {
    const loop = () => {
      const now = performance.now()
      const delta = now - lastTime.current
      const fps = Math.round(1000 / delta)
      lastTime.current = now

      frameTimes.current.push({ time: new Date().toLocaleTimeString().split(' ')[0], fps })
      if (frameTimes.current.length > 30) frameTimes.current.shift()
      setData([...frameTimes.current])

      requestAnimationFrame(loop)
    }

    requestAnimationFrame(loop)
  }, [])

  return (
    <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>FPS Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, 120]} />
          <Tooltip />
          <Line type="monotone" dataKey="fps" stroke="#8884d8" strokeWidth={2} dot={false} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FpsChart
