import React,{useState,useEffect} from 'react'

export default function Count() {
    const [count, setCount] =useState(0)
    
    useEffect(()=>{
     if(count === 3){
      throw new Error
     }
    },[count])
  return (
    <div>
        <h1>Count Number : {count}</h1>
    <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
    
  )
}
