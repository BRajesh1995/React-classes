import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutus/AboutUs";
import ClassRoom from "../pages/classroom/ClassRoom";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/classroom" element={<ClassRoom />} />
      </Routes>
    </>
  );
};

export default Routing;
