import React from 'react'

export default function ChildTable(props) {
  return (
    <div className='table'>
        <div>
    <h3>Employee Data</h3>
    <table>
        <tr>
            <th>
                Name
            </th>
            <th>
                Email
            </th>
            <th>
                Mobile
            </th>
            <th>
                Address
            </th>
        </tr>
       {props.data.map((item,index)=>{
        return(<tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobileNumber}</td>
              <td>{item.address}</td>
        </tr>)
       })}
    </table>
    </div>
    </div>
    
  )
}
