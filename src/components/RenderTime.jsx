import { useEffect, useRef, useState } from 'react'

const RenderTime = () => {
  const [renderTime, setRenderTime] = useState(0)
  const startTime = useRef(performance.now())

  useEffect(() => {
    const endTime = performance.now()
    const totalRenderTime = (endTime - startTime.current).toFixed(2)
    setRenderTime(totalRenderTime)
  }, [])

  return (
    <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Render Time</h2>
      <p>This component took <strong>{renderTime} ms</strong> to mount.</p>
    </div>
  )
}

export default RenderTime
