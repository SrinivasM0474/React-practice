import React from 'react'
import { useParams } from 'react-router-dom';
import { EmployeeApi } from './EmployeeData';

export default function SingleEmp() {
    const empId = useParams();
    //console.log("id",empId)
    const data = EmployeeApi.getById(empId.id)

  return (
    <div>
       <h3>SingleEmployee Details</h3> 
       <p>EmpName:  {data.name}</p>
       <p>EmpDesig:  {data.desig}</p>
       <p>EmpMobile: {data.mobile}</p>
        </div>
  )
}
