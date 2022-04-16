import React from "react";
import classes from "./Login.module.css";

const LogIn = () => {
  return (
    <section className={classes.prva}>
      <div className={classes.login}>
        <div className={classes.logo}>
          <i class="fa-solid fa-leaf"></i>
          <p>Nature</p>
        </div>
      </div>
      <div className={classes.title}>
        <h1>
          Log in to your account<span>.</span>
        </h1>
      </div>
      <div className={classes.username}>
        <input type="text" placeholder="Username" />
      </div>
      <div className={classes.username}>
        <p>Password</p>
        <label>
          <input type="password" placeholder="***************" />
        </label>
      </div>
      <div className={classes.forgot}>
        <p>Forgot Password?</p>
      </div>

      <div>
        <button className={classes.logbtn}>Log in</button>
      </div>
      <div className={classes.greenline}>
        <span></span>
      </div>

      <div className={classes.noacc}>
        <p>
          Dont have an account?
          <span>
            <b>Register!</b>
          </span>{" "}
        </p>
      </div>
    </section>
  );
};

export default LogIn;
