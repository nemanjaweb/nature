import React from "react";
import classes from "./Home.module.css";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Posts />
    </div>
  );
};

export default Home;
