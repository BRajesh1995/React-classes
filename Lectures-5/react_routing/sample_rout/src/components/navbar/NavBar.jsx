import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          {" "}
          <Link to="/mentee/classroom/5/session/1">Class Room</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
