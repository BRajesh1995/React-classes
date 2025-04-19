import React, { useEffect, useState } from "react";

const User = () => {
  const [data, setData] = useState(null); // Store fetched user data
  const [userId, setUserId] = useState(null); // State to track the current user ID
  const [inputId, setInputId] = useState(""); // State to track user input

  // Function to fetch user data based on userId
  const fetchData = async (userId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch user data when userId changes
  useEffect(() => {
    fetchData(userId);
  }, [userId]);

  // Handle input change
  const handleInputChange = (e) => {
    setInputId(e.target.value);
  };

  // Handle button click to update userId state
  const handleFetchUser = () => {
    if (inputId) {
      setUserId(inputId);
      setInputId(""); // Clear the input field after fetching
    }
  };

  return (
    <>
      <h1>Single User Details</h1>

      <div>
        <input
          type="number"
          placeholder="Enter User ID"
          value={inputId}
          onChange={handleInputChange}
        />
        <button onClick={handleFetchUser}>Fetch User</button>
      </div>

      <ul className="user-list-items">
        {data ? (
          <>
            <li className="user-list-item" key={data.id}>
              <strong>Name:</strong> {data.name}
            </li>
            <li className="user-list-item" key={`${data.id}-email`}>
              <strong>Email:</strong> {data.email}
            </li>
            <li className="user-list-item" key={`${data.id}-phone`}>
              <strong>Phone No:</strong> {data.phone}
            </li>
          </>
        ) : (
          <li>No user data available</li>
        )}
      </ul>
    </>
  );
};

export default User;
