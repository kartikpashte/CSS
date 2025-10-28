import React, { useState } from 'react'

const Numgame = () => {
    
    let [from , setFrom] = useState(0);
    let [to , setTo] = useState(100);
    let [attempts , setAttempts] = useState(5);
    const [number , setNumber] = useState(Math.floor(Math.random()*10)+1);
    console.log(number);
    
    const [guess , setGuess] = useState();
    const [result , setResult] = useState("");
const checkGuess = ()=>{
    if(attempts <=0){
        setResult("No attempts left! Please reset the game.");
        return;
    }
    attempts--;
    setAttempts(attempts);
    if(guess == number){
        setResult("You guessed it right!");
    }else if(number > guess){
        setResult("Too low! Try again.");
    }else if(guess < 1 || guess > 10){
        setResult("Please enter a number between 1 and 10.");
    }else if(isNaN(guess)){
        setResult("this is not a number");
    }
    else{
        setResult("Too high! Try again.");
    }
}
const resetGame = ()=>{
    setNumber(Math.floor(Math.random() * (to - from + 1)) + parseInt(from));
    setGuess("");
    setResult("");
       setAttempts(5);
}
  return (
    <div className='warpper'>
        <h1>Attempts Remaining:{attempts} </h1>
        <main>
        <span>Start From</span>
        <input value={from} onChange={(e)=>{setFrom(e.target.value)}} type="text" placeholder="From"/>
        <span>To</span>
        <input value={to} onChange={(e)=>{setTo(e.target.value)}} type="text" placeholder="To"/>
        </main>
         <input value={guess} onChange={(e)=>{setGuess(e.target.value)}} type="text" />
         <button onClick={checkGuess}>Guess</button>
         <button onClick={resetGame}>Reset</button>
         <h2 id='result'>{result}</h2>
    </div>
  )
}

export default Numgame