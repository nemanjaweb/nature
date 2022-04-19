import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import logoLeaf from "../img/logo.png";
import logOut from "../img/logout-vector.png";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={logoLeaf} alt="logo" className={classes.logo} />
        </Link>
        <p>Nature</p>
      </div>
      <div className={classes.navbtn}>
        <Link to="/new-post">
          <button className={classes.addnew}>
            <span>+</span>Add New
          </button>
        </Link>
        <Link to="/home/popup">
          <button className={classes.logout}>
            <span>
              <img src={logOut} alt="log-out" />
            </span>
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
