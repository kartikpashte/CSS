import React from 'react'

const Text = () => {
    const getName = () => {
        let name = document.getElementById('txt').value;
        document.getElementById('name').innerText = "Welcome " + name;
    }
  return (
    <div>
        <input type="text" placeholder='Enter your name' id='txt' />
        <button onClick={getName}>Submit</button>
        <h1 id='name'></h1>
    </div>
  )
}

export default Text
