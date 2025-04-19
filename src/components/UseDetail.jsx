import React, { useEffect, useState } from "react";

const UserDetail = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>User List</h2>
      <ul>
        <li></li>
      </ul>
    </>
  );
};

export default UserDetail;
