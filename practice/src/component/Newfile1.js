import React from 'react'
import { useState } from 'react';

 function Newfile1() {
    const [counter, setCounter] = useState(0);
    const onHandleClick = ()=>{
        setInterval(()=>{
      setCounter(counter+1);
        
        }, 5000);
    }
    
  return (
    <div>
        <h1>Counter{counter}</h1>
        <button onClick={onHandleClick}>Increment</button>
      
    </div>
  )
};
export default Newfile1
