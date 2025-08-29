// import Home from "./Home.jsx";
// import About from "./About.jsx";
// import Contact from "./Contact.jsx";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
    <nav class="navbar">
        <div class="logo">
            <img src={viteLogo}
                alt="Logo"></img>
        </div>

        <form class="search-box">
            <input type="text" name="query" placeholder="Search..."></input>
            <button type="submit">🔍</button>
        </form>

        <div class="links">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </nav>

</body>
    </>
  )
}

export default App
