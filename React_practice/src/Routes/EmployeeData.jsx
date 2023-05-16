import React from "react";
import { useParams } from "react-router-dom";
import { EmployeeApi } from "./empData";
import { Link } from "react-router-dom";

function EmployeeData() {
  const empId = useParams();
  const data = EmployeeApi.getById(empId.id);
  // console.log(data)
  return (
    <div>
      <button>
        <Link to={"/"}>BACK</Link>
      </button>
      <p>Name: {data.name}</p>
      <p>Designamtion: {data.desig}</p>
      <p>Mobile: {data.mobile}</p>
    </div>
  );
}

export default EmployeeData;
