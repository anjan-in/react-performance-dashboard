import { useEffect, useState } from 'react'
import { loadWasmModule } from '../utils/loadWasm'

const FibonacciWasm = () => {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const calculate = async () => {
      const wasm = await loadWasmModule('/wasm/fibonacci.wasm')
      const t0 = performance.now()
      const value = wasm.fibonacci(30) // Run heavy task
      const t1 = performance.now()
      setResult({ value, time: (t1 - t0).toFixed(2) })
      setLoading(false)
    }

    calculate()
  }, [])

  return (
    <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>WASM Fibonacci</h2>
      {loading ? <p>Running WebAssembly...</p> : (
        <>
          <p>Result: <strong>{result.value}</strong></p>
          <p>Execution Time: <strong>{result.time} ms</strong></p>
        </>
      )}
    </div>
  )
}

export default FibonacciWasm
