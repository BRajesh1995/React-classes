import { useState } from "react";
import NavBar from "./navbar/NavBar";
import Routing from "../routes/Routing";

function App() {
  return (
    <>
      {/* <h1>App is Loading..</h1> */}
      <NavBar />
      <Routing />
    </>
  );
}

export default App;
