import React from "react";

const User = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>User List</h1>
      <ul className="user-list-items">
        {data &&
          !!data.length &&
          data.map((item) => {
            return (
              <>
                <li className="user-list-item" key={item.id}>
                  {item.name}
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
};

export default User;
