import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-center text-gray-900">
            Vite + React + TypeScript + Tailwind
          </h1>
          <p className="mt-4 text-center text-gray-600">
            Edit <code className="font-mono bg-gray-100 p-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
