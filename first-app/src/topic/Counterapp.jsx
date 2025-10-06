import React, { useState } from 'react'

const CounterApp = () => {
    const [exp,setExp] = useState("")
    const combineExp = (e)=>{
        setExp((pre)=>{
        
                return parseInt(pre+e.target.value)
        })
    }

    let firstExp;
    let secondExp;
    let currentOP;
    let ans =0;

    const performOperation = (e) =>{
        if(e.target.value == "-"){
            firstExp = exp
            console.log("FE:",firstExp);
            
            currentOP=e.target.value
            setExp("")

        }
    }

    const calculateExp = () =>{
        secondExp = exp
            console.log("sE:",secondExp);

     
            ans = parseInt(firstExp)-parseInt(secondExp) 
    
        setExp(ans)
        

    }

  return (
    <div className='wrapper'>
        <h1>Counter App</h1>
        <h2>{exp}</h2>
        <div className='btns'>
            <button value={"-"} onClick={performOperation}>➖</button>
            <button value={"+"} onClick={() => {}}>➕</button>
            <button value={"*"} onClick={() => {}}>✖</button>
            <button value={"/"} onClick={() => {}}>➗</button>
            <button value={"C"} onClick={() => setCount(0)}>Reset</button>
            <button onClick={calculateExp}>=</button>
        </div>
        <div className="btns">
            <button value={"9"} onClick={combineExp}>9</button>
            <button value={"8"} onClick={combineExp}>8</button>
            <button value={"7"} onClick={combineExp}>7</button>
            <button value={"6"} onClick={combineExp}>6</button>
            <button value={"5"} onClick={combineExp}>5</button>
            <button value={"4"} onClick={combineExp}>4</button>
            <button value={"3"} onClick={combineExp}>3</button>
            <button value={"2"} onClick={combineExp}>2</button>
            <button value={"1"} onClick={combineExp}>1</button>
            <button onClick={() => setCount("00")}>00</button>
            <button onClick={() => setCount(0)}>0</button>
            <button onClick={() => setCount(".")}>.</button>

        </div>
    </div>
  )
}

export default CounterApp   