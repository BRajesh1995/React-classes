import { useEffect, useState } from "react";

const User = () => {
  const [data, setData] = useState(null);
  const [userId, setUserId] = useState(3);

  const fetchData = async (userId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(userId);
  }, [userId]);

  return (
    <>
      <h2>A single user Details</h2>
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

export default User;
