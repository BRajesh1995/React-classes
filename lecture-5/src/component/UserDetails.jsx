import React, { useEffect, useState } from "react";
import "./userDetails.css";
const UserDetails = () => {
  const [data, setData] = useState(null);
  const [userId, setUserId] = useState(1);

  const fetchData = async (userId) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(userId);
  }, [userId]);
  return (
    <>
      <h1>User List</h1>
      <ul className="user-list-items">
        {data && (
          <li className="user-list-item" key={data.id}>
            {data.name} - {data.email}
          </li>
        )}
      </ul>
    </>
  );
};

export default UserDetails;
