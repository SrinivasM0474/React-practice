import React, { useEffect, useState } from 'react'

function Contact() {
  const[count, setCount] = useState(0);
  useEffect(()=>{
    if(count === 3){
      throw new Error('crashed')
    }
  },[count])
  return (
    <>
    <h3>Error Boundary</h3>
    <div>Count {count}</div>
    <button onClick={()=>{setCount(count+1)}}>click</button>
    </>

  )
}

export default Contact