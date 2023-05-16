import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function About() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const navigate = useNavigate();
  const fetchData = async () => {
    // fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
    // .then(resp=>{
    //   setUserData(resp);
    // })
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUserData(data.data);
    navigate("/");
  };
  return (
    <div>
      {userData.map((obj, index) => {
        return <p key={index}>{obj.name}</p>;
      })}
    </div>
  );
}

export default About;
