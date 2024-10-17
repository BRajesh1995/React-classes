import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "FavList",
      path: "/favList",
    },
    {
      title: "Watch List",
      path: "/watchList",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
    {
      title: "About",
      path: "/about",
    },
  ];

  return (
    <>
      <header>
        <div className="logo">IMDB APP</div>
        <nav>
          <ul>
            {links &&
              links.map((item) => {
                return (
                  <>
                    <li key={item.path}>
                      <NavLink
                        className={({ isActive }) => {
                          return isActive ? "text-sky" : "text";
                        }}
                        to={item.path}
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  </>
                );
              })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
