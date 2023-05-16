import React from 'react'
import { EmployeeApi } from './EmployeeData';
import { Link } from 'react-router-dom';

export default function Employee() {
  const data = EmployeeApi.all();
  return (
   <div>
    <h3>EmpDetails</h3>
    
      {
        data?.length > 0 && data.map(item =>{
          return(
      
             <div key={item.id}>
             <Link to={`/employee/${item.id}`}> <span>{item.id} &nbsp; &nbsp;</span> </Link>
              <span>{item.name}</span> 
             </div>
          )
        })
      }
   </div>

  )
}
