import React,{useState} from 'react'

export default function ReactEvents() {
    const [eventName, setEventName] =useState('');
  return (
    <div>
        <h3>ReactEvents</h3>
        <div style={{display:'flex',justifyContent:'space-around'}}>
        <h3 style={{border:`1px solid green`, width:'200px', textAlign:'center'}}>Enter name is:{eventName} </h3>
        </div>
        <button onClick={()=>setEventName("onClick")}>onClick</button>
        <button onMouseDown={()=>setEventName("onMouseDown")}>onMouseDown</button>
        <button onMouseUp={()=>setEventName("onMouseUp")}>onMouseUp</button>
        <button onKeyDown={()=>setEventName("onKeyDown")}>onKeyDown</button>
        <button onKeyUp={()=>setEventName("onKeyUp")}>onKeyUp</button>
        <button onMouseEnter={()=>setEventName("onMouseEnter")}>onMouseEnter</button>
        <button onMouseLeave={()=>setEventName("onMouseLeave")}>onMouseLeave</button>
    
        
        
       </div>
  )
}
