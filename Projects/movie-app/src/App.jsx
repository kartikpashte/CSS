import { useState } from 'react'
import viteLogo from '/vite.svg'
import Movie from './Movie'
import './style.css'

function App() {
  return (
    <>
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={viteLogo} alt="Logo" />
        </div>

        <form className="search-box">
          <input type="text" name="query" placeholder="Search..." />
          <button type="submit">🔍</button>
        </form>

        <div className="links">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main className="main">
        <h1>Welcome to Movie App</h1>
        <div className="wrapper">
          <Movie />

        </div>
      </main>
    </div>
    </>
  )
}

export default App
