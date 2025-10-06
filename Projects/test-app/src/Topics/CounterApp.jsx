import React, { useState } from 'react'

const CounterApp = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if(count>0){

            setCount(count - 1);
        }else{
            alert("count cannot be negative");
        }
    }



  return (
    <div className='wrapper'>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <div className='btns'>
            <button onClick={decrement}>➖</button>
            <button onClick={increment}>➕</button>
        </div>
        <div className="btns">
            <button onClick={() => setCount(count+100)}>100 ➕</button>
            <button onClick={() => setCount(0)}>🔄</button>
        </div>
    </div>
  )
}

export default CounterApp   