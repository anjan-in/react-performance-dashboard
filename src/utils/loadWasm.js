export async function loadWasmModule(path) {
    const response = await fetch(path)
    const buffer = await response.arrayBuffer()
    const module = await WebAssembly.compile(buffer)
    const instance = await WebAssembly.instantiate(module)
    return instance.exports
}  