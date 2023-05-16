import React, { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // const data = await response.json()
    // setUsers(data)
    // const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    // setUserData(data.data);
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserData(data.data);
    } catch (err) {
      setError("Something went wrong!");
    }
  };
  return (
    <div>
      {error && <div>{error}</div>}
      {userData ? (
        <>
          {userData.map((obj, index) => {
            return <p key={index}>{obj.name}</p>;
          })}
        </>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default About;
