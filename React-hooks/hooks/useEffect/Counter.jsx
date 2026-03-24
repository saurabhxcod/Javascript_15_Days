import React, { useEffect, useState } from 'react'

const Counter2 = () => {
    const [counter, setcounter] = useState(0)
    useEffect(() => {
      console.log('useEffect called');  
      document.title=counter;
    }, [counter]) //dependency array
    

  return (
    <>
        <h1>{counter}</h1>
        <button onClick={()=>setcounter(counter+1)}>Increase</button>
        <button onClick={()=>setcounter(counter-1)}>Decrease</button>
    </>
  )
}

export default Counter2;