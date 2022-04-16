import React from "react";
import classes from "./Register.module.css";
const Register = () => {
  return (
    <section className={classes.druga}>
      <div className={classes.register}>
        <div className={classes.logo}>
          <i class="fa-solid fa-leaf"></i>
          <p>Nature</p>
        </div>
      </div>
      <div className={classes.title}>
        <h1>
          Create new account<span>.</span>
        </h1>
      </div>
      <label>
        <div className={classes.firstname}>
          <input type="text" placeholder="First Name" />
          <input
            type="text"
            placeholder="Last Name"
            className={classes.lastname}
          />
        </div>

        <div className={classes.username}>
          <input type="text" placeholder="Username" />
        </div>
        <div className={classes.username}>
          <input type="email" placeholder="Email" />
        </div>
        <div className={classes.username}>
          <input type="password" placeholder="Password" />
        </div>
        <div className={classes.username}>
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className={classes.username}>
          <input type="text" placeholder="Date of Birth" />
        </div>

        <div></div>
      </label>
    </section>
  );
};

export default Register;
