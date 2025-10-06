import React from 'react'
import { useState } from 'react'
const Form = () => {

    const [name,setName] = useState("");
    const [letter,setLetter] = useState(0);

    const change = (e) => {
        e.preventDefault();
        setName(e.target.value);

    }

  const count = (e) => {
        e.preventDefault();

    setLetter(name.length);
  }

  return (
    <div>
        <form>
            <label htmlFor="uname">Your Name:</label>
            <input onChange={change} value={name} type="text" id='uname' placeholder='Enter Name' />
            <br />

            <input onClick={count} type="submit" value={"count"} />
            <h2>number of letters writen is {letter}</h2>
        </form>
    </div>
  )
}

export default Form     