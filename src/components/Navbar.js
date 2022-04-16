import React from "react";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <i class="fa-solid fa-leaf"></i>
        <p>Nature</p>
      </div>
      <div className={classes.navbtn}>
        <button className={classes.addnew}>
          <span>+</span>Add New
        </button>
        <button className={classes.logout}>
          <span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </span>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
