import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Search from "../users/Search";
import User from "../users/User";

const Home = () => {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/user/:id" element={<User />} />
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default Home;
