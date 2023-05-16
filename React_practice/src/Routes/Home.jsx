import React from "react";
import { EmployeeApi } from "./empData";
import { Link } from "react-router-dom";
export default function Home() {
  const data = EmployeeApi.all();
  // console.log(data);
  return (
    <div>
      {data.map((emp, index) => {
        return <p key={index}><Link to={`/employee/${emp.id}`}><span>{emp.id}</span></Link>{emp.name}</p>;
      })}
    </div>
  );
}
