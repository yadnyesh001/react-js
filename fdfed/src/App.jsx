import { useState } from 'react'
import FoodCart from './components/FoodCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <FoodCart />
      </div>
    </>
  )
}

export default App
