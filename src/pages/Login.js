import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import logoLeaf from "../img/logo.png";
import eye from "../img/eye.png";

const LogIn = () => {
  const [visible, setVisible] = useState("password");

  const changeView = () => {
    setVisible(visible === "password" ? "text" : "password");
  };

  return (
    <section className={classes.loginWrapper}>
      <div className={classes.login}>
        <div className={classes.logo}>
          <img src={logoLeaf} alt="logo" />
          <p>Nature</p>
        </div>
      </div>
      <div className={classes.title}>
        <h1>
          Log in to your account<span>.</span>
        </h1>
      </div>
      <div className={classes.formWrapper}>
        <input
          type="text"
          placeholder="Username"
          className={classes.username}
        />
        <div className={classes.passwordWrapper}>
          <label className={classes.passwordLabel}>Password</label>
          <input
            type={visible}
            placeholder="***************"
            className={classes.password}
          />
          <img src={eye} alt="eye-icon" onClick={() => changeView()} />
        </div>

        <div className={classes.forgot}>
          <p>Forgot Password?</p>
        </div>
        <div>
          <Link to="/home">
            <button className={classes.logbtn}>Log in</button>
          </Link>
        </div>
      </div>
      <div className={classes.noacc}>
        <p>
          Dont have an account?
          <span>
            <Link to="/register" className={classes.register}>
              <b>Register!</b>
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default LogIn;
