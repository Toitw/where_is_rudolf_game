import { useState } from 'react'
import HomePage from './assets/HomePage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomePage />
      {/* Other routes or components */}
    </div>
  )
}

export default App
