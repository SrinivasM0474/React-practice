import React,{Fragment, useState, useEffect, createContext, useCallback, useMemo} from 'react';
import Child from './Child';
import axios from 'axios';
export const contextData = createContext();
export default function ReactHooks() {
    const [userID, setUserID] = useState(1);
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    const URL = process.env.REACT_APP_API_URL
    useEffect(()=>{
        if(userID == null || userID == ' '){
         return;
        }
        axios.get(URL+`${userID}`).then(res=>setUsers(res.data))
        if(count === 3){
         throw new Error("component crushed")
        }
    },[userID,count])
   const countData = useMemo(()=>count,[count]);
   const countFun = ()=>{
       setCount(count+1)
   }
   const callbackCount = useCallback(()=>countFun(),[count])
  return (
    <Fragment>
        <contextData.Provider value={users}>
    <div>ReactHooks</div>
    <div>
    <label>Id</label>
    <input defaultValue={userID} type='number' onChange ={e=>setUserID(e.target.value)}/>
    </div>
    <p>Count : {countData}</p>
    {/* <button onClick={countFun}>AddCount</button> */}
    <Child callback ={callbackCount}/>
   
    </contextData.Provider>
    </Fragment>

    
  )
}
