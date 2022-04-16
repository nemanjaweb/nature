import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
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

        <div className={classes.radio}>
          <div>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <div className={classes.active}>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="User"
                  />
                  <FormControlLabel
                    className={classes.admin}
                    value="male"
                    control={<Radio />}
                    label="Admin"
                  />
                </div>
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div>
          <button className={classes.signbtn}>Sign Up</button>
        </div>
        <div className={classes.greenline}>
          <span></span>
        </div>
        <div className={classes.noacc}>
          <p>
            Already have account?
            <span>
              <b>Login!</b>
            </span>{" "}
          </p>
        </div>
      </label>
    </section>
  );
};

export default Register;
