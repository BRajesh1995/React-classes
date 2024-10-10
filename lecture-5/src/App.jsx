import React from "react";
import UserDetails from "./component/UserDetails";
import "./App.css";
import User from "./component/User";
import AutoCounter from "./component/AutoCounter";

const App = () => {
  return (
    <>
      <UserDetails />
      {/* <User /> */}
      <AutoCounter />
    </>
  );
};

export default App;
