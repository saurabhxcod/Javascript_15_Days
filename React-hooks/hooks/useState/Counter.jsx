import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0);

    const Increment=()=>{
        setCount(count+1);
    }
    const Decrement=()=>{
        setCount(count-1);
    }
  return (
    <>  
    <h1 style={{textAlign:'center'}}>Counter</h1>
    <h2>{count}</h2>
    <button onClick={Increment}>Increase</button>
    <button onClick={Decrement}>Decrease</button>
    </>
  )
}

export default Counter;
