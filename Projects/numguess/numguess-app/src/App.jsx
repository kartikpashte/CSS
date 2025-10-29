import { useState } from 'react'
import Numguess from './Numguess.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Numguess/>
    </>
  )
}

export default App
