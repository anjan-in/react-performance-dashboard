import { useEffect, useRef, useState } from 'react'

const FpsMonitor = () => {
  const [fps, setFps] = useState(0)
  const frameCount = useRef(0)
  const lastTime = useRef(performance.now())

  useEffect(() => {
    let animationFrame

    const loop = (time) => {
      frameCount.current++
      const delta = time - lastTime.current

      if (delta >= 1000) {
        setFps(frameCount.current)
        frameCount.current = 0
        lastTime.current = time
      }

      animationFrame = requestAnimationFrame(loop)
    }

    animationFrame = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>FPS Monitor</h2>
      <p>Frames per second: <strong>{fps}</strong></p>
    </div>
  )
}

export default FpsMonitor
