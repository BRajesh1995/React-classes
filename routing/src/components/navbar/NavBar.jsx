import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          {" "}
          <Link to="/classroom">Class Room</Link>
        </li>
        <li>
          {" "}
          <Link to="/aboutus">About US</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
