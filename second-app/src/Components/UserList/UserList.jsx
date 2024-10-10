import "./UserList.css";

const UserList = () => {
  const users = [
    { id: 1, name: "Ashwani", age: 30 },
    { id: 2, name: "Rajesh", age: 23 },
    { id: 3, name: "Charan", age: 29 },
  ];
  return (
    <>
      <ul>
        {users.map((item) => {
          return (
            <li key={item.id} className="list-items">
              Welcome, {item.name} and your age is {item.age}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserList;
