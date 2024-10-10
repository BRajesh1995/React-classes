import UserList from "./UserList/UserList";
import User from "./user/User";

const App = () => {
  const isUserLoggedIn = false;
  return (
    <>
      {/* <User username="Rajesh" age={29} />
      <User username="Charan" age={30} />
      <User username="Venu" age={28} />
      <User username="Naresh" age={28} /> */}

      {isUserLoggedIn ? <User username="Rajesh" age={29} /> : <UserList />}
    </>
  );
};

export default App;
