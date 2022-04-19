import React, { useState } from "react";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import classes from "./Register.module.css";
import logoLeaf from "../img/logo.png";

const Register = () => {
  const [value, setValue] = useState(null);
  const color = "#fff";

  return (
    <section className={classes.registerWrapper}>
      <div className={classes.register}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logoLeaf} alt="logo" />
          </Link>

          <p>Nature</p>
        </div>
      </div>
      <div className={classes.title}>
        <h1>
          Create new account<span>.</span>
        </h1>
      </div>

      <div className={classes.firstname}>
        <input type="text" placeholder="First Name" />
        <input
          type="text"
          placeholder="Last Name"
          className={classes.lastname}
        />
      </div>
      <div className={classes.fromWrapper}>
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
        <div className={classes.birth}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of birth"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  // fullWidth
                  sx={{
                    width: "100%",
                    svg: { color },
                    input: { color },
                    label: { color },
                    border: "none",
                  }}
                />
              )}
            />
          </LocalizationProvider>
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
        <div className={classes.sign}>
          <button className={classes.signbtn}>Sign Up</button>
        </div>

        <div className={classes.noacc}>
          <p>
            Already have account?
            <span>
              <Link to="/" className={classes.login}>
                <b>Login!</b>
              </Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
