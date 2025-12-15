import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router";
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />

      <Routes>
        <Route index element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  )
}

export default App
