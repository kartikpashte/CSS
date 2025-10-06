// import Home from "./Home.jsx";
// import About from "./About.jsx";
// import Contact from "./Contact.jsx";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Movie from "./Movie"
// import './style.css'
// import Form from './topic/Form'
import Counterapp from './topic/Counterapp.jsx'
// import './App.css'
import './index.css'
import Button from './topic/Button.jsx'
import Calc from './topic/Calc.jsx'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <body>
//     <nav class="navbar">
//         <div class="logo">
//             <img src={viteLogo}
//                 alt="Logo"></img>
//         </div>

//         <form class="search-box">
//             <input type="text" name="query" placeholder="Search..."></input>
//             <button type="submit">🔍</button>
//         </form>

//         <div class="links">
//             <ul>
//                 <li><a href="">Home</a></li>
//                 <li><a href="">Projects</a></li>
//                 <li><a href="">About</a></li>
//                 <li><a href="">Contact</a></li>
//             </ul>
//         </div>
//     </nav>

//     <div className="main">
//         <h1>Welcome to Movie App</h1>
//         <div className="wrapper">
//         <Movie />
//       </div>
//         {/* <div className="card"><img src={viteLogo}alt="Logo"></img></div> */}

//     </div>

// </body>

//     </>
//   )
// }

function App() {

  return (
    <>
    {/* <Form/> */}
    {/* <Button/> */}
    {/* <Counterapp/> */}
    {<Calc/>}
    </>
  )
}

export default App
