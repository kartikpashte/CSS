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
            <label htmlFor="uname"></label>
            <input onChange={change} value={name} type="text" id='uname' placeholder='Enter Name' />
            <br />

            <input onClick={count} type="submit" value={"count"} />
            <p>number of letters writen is {letter}</p>
        </form>
    </div>
  )
}

export default Form     