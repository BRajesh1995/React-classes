import { useEffect, useState } from "react";
import "./userDetails.css";

const UserDetail = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>User List</h2>
      <ul className="user-list-items">
        {data &&
          !!data.length &&
          data.map((item) => {
            return (
              <li className="user-list-item" key={item.id}>
                {item.name}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default UserDetail;
