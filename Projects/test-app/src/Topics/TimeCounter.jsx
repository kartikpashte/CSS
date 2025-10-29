import { useState, useEffect } from 'react';


function TimeCounter() {
  const [count, setCount] = useState(0);
  const [State, setState] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 5000);
  },[State]);

  return (
    <>
        <h1>I've rendered {count} times!</h1>
        <button onClick={() => setState(State+1)}>{State}</button>
    </>
);
}



export default TimeCounter;