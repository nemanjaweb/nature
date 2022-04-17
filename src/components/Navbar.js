import React from "react";
import classes from "./Navbar.module.css";
import logoLeaf from "../img/logo.png";
import logOut from "../img/logout-vector.png";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logoLeaf} alt="logo" />
        <p>Nature</p>
      </div>
      <div className={classes.navbtn}>
        <button className={classes.addnew}>
          <span>+</span>Add New
        </button>
        <button className={classes.logout}>
          <span>
            <img src={logOut} alt="log-out" />
          </span>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
