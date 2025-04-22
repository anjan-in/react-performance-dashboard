import { useEffect, useState } from 'react'

const MemoryUsage = () => {
    const [usedJSHeap, setUsedJSHeap] = useState(0)
    const [totalJSHeap, setTotalJSHeap] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        if (performance.memory) {
            const { usedJSHeapSize, totalJSHeapSize } = performance.memory
            setUsedJSHeap((usedJSHeapSize / 1048576).toFixed(2)) // MB
            setTotalJSHeap((totalJSHeapSize / 1048576).toFixed(2)) // MB
        }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    if (!performance.memory) {
        return (
            <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
                <h2>Memory Usage</h2>
                <p style={{ color: 'red' }}>Not supported in this browser.</p>
            </div>
        )
    }

    return (
        <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Memory Usage</h2>
            <p>Used JS Heap: <strong>{usedJSHeap} MB</strong></p>
            <p>Total JS Heap: <strong>{totalJSHeap} MB</strong></p>
        </div>
    )
}

export default MemoryUsage
