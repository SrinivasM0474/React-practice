import React from 'react'
//import { useNavigate } from 'react-router-dom';

export default function Fallback() {
    const goBack =()=>{
       window.location.href="/"
    }
  return (
    <div>
        <h1>Something went wrong.</h1>
        <button onClick={()=>goBack()}>back to home</button>
        </div>
  )
}
