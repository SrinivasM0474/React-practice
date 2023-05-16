import React,{useContext} from 'react'
import { contextData } from './ReactHooks'
export default function Child(props) {
    const data = useContext(contextData)
    console.log('data2',props)
  return (
    <>
    <p><input type="checkbox" checked={data.completed} /> {data.title}</p>
    <button onClick={()=>props.callback()}>AddCount</button>
    </>
  

  )
}
