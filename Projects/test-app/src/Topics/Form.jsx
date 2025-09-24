import React from 'react'
import { useState } from 'react'
const Form = () => {

    const [name,setName] = useState("");
    const change = (e) => {
        e.preventDefault();
        setName(e.target.value);

    }

  return (
    <div>
        <form>
            <label htmlFor="uname"></label>
            <input onChange={change} value={name} type="text" id='uname' placeholder='Enter Name' />
            <br />

            <input onClick={change} type="submit" value="Send" />
        </form>
    </div>
  )
}

export default Form     