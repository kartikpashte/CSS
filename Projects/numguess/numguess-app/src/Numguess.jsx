import React, { useState } from 'react'

const Numgame = () => {

    let [from, setFrom] = useState(0);
    let [to, setTo] = useState(100);
    let [attempts, setAttempts] = useState(5);
    const [number, setNumber] = useState(Math.floor(Math.random() * (to)) + 1);
    console.log(number);

    const [guess, setGuess] = useState();
    const [result, setResult] = useState("");
    const checkGuess = () => {
        if (attempts <= 0) {
            setResult("😞 No attempts left! Please reset the game.");
            return;
        }
        setAttempts(prev => prev - 1);
        if (guess == number) {
            setResult("✅ You guessed it right!");
        } else if (number > guess) {
            setResult("⬇️ Too low! Try again.");
        } else if (guess < from || guess > to) {
            setResult(`⚠️ Please enter a number between ${from} and ${to}.`);
        }
        else if (isNaN(guess)) {
            setResult("❌ this is not a number");
        }
        else {
            setResult("⬆️ Too high! Try again.");
        }
    }
    const resetGame = () => {
        setNumber(Math.floor(Math.random() * (to - from + 1)) + parseInt(from));
        setGuess("");
        setResult("");
        setAttempts(5);
    }
    return (<>
        <h1 className='heading'>Number Guessing Game</h1>
        
        <div className='warpper'>
            <h1>Attempts Remaining : {attempts} </h1>
            <main>
                <span>Start From</span>
                <input value={from} onChange={(e) => { setFrom(e.target.value) }} type="text" placeholder="From" />
                <span>To</span>
                <input value={to} onChange={(e) => { setTo(e.target.value) }} type="text" placeholder="To" />
            </main>
            <input value={guess} onChange={(e) => { setGuess(e.target.value) }} type="text" />
            <button onClick={checkGuess}>Guess</button>
            <button onClick={resetGame}>Reset</button>
            <h2 id='result'>{result}</h2>
        </div>

        <div className='Instructions'>
            <h3>Instructions:</h3>
            <ul>
                <li>Set the range by specifying 'From' and 'To' values.</li>
                <li>Enter your guess in the input field.</li>
                <li>Click 'Guess' to check your answer.</li>
                <li>You have 5 attempts to guess the correct number.</li>
                <li>Click 'Reset' to start a new game.</li>
            </ul>
        </div>
    </>
    )
}

export default Numgame