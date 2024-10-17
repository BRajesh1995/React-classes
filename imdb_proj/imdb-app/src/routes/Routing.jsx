import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import FavList from "../pages/favList/FavList";
import WatchList from "../pages/watchList/WatchList";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import PageNotFound from "../pages/pageNotFound/PageNotFound";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {" "}
      </Route>
      <Route path="/favList" element={<FavList />}>
        {" "}
      </Route>
      <Route path="/watchList" element={<WatchList />}>
        {" "}
      </Route>
      <Route path="/contact" element={<Contact />}>
        {" "}
      </Route>
      <Route path="/about" element={<About />}>
        {" "}
      </Route>
      <Route path="*" element={<PageNotFound />}>
        {" "}
      </Route>
    </Routes>
  );
};

export default Routing;
