import React from 'react'
import { useState } from 'react'
const MultiForm = () => {

    const [Input,setInput] = useState("");
   

  const change = (e)=>{
    let name  = e.target.name;
    let val = e.target.value;
    console.log(name ," : ", val);
    setInput(data =>({...data, [name]:val}))
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`First Name is ${Input.fname} and Last Name is ${Input.lname}`);

    

  }

  return (
    <div>
        <form>
            <label htmlFor="">First Name:</label>
            <br/> 
            <input onChange={change} value={Input.fname} type="text" name='fname' placeholder='Enter First Name' />
            <br/>  
            <label htmlFor="">Last Name:</label>
            <br/> 
            <input onChange={change} value={Input.lname} type="text" name='lname' placeholder='Enter Last Name' />
            <br />

            <input onClick={handleSubmit} type="submit"  />
        </form>
    </div>
  )
}

export default MultiForm     