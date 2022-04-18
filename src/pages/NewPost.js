import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import classes from "./NewPost.module.css";
import Navbar from "../components/Navbar";
import sharePost from "../img/share-post-vector.png";
import Input from "@mui/material/Input";
import waterFall from "../img/waterfallBlur.svg";
import mountain from "../img/mountainTrailBlur.svg";

const NewPost = () => {
  const ariaLabel = { "aria-label": "description" };
  const currencies = [
    {
      value: "USD",
      label: "By passenger car",
    },
    {
      value: "EUR",
      label: "Off-road vehicle",
    },
    {
      value: "BTC",
      label: "It is not possible to come by vehicle",
    },
  ];
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className={classes.post}>
        <div className={classes.postWrapper}>
          <div className={classes.imgWrapper}>
            <div className={classes.imgOne}></div>
            <div className={classes.imgTwo}></div>
            <img
              className={classes.waterfallIcon}
              src={waterFall}
              alt="waterfall-img"
            />
            <img
              className={classes.mountainIcon}
              src={mountain}
              alt="mountain-img"
            />
          </div>

          <span>Share your new post</span>
          <div className={classes.sharePostBtn}>
            <img src={sharePost} alt="share-post-btn" />
          </div>
        </div>

        <div className={classes.postInputWrapper}>
          <h1>
            Add new post<span>.</span>
          </h1>
          <div className={classes.postInput}>
            <Input
              className={classes.dropInput}
              placeholder="Name"
              inputProps={ariaLabel}
              color="success"
              fullWidth
            />
            <Input
              className={classes.dropInput}
              placeholder="Place"
              inputProps={ariaLabel}
              color="success"
              fullWidth
            />
            <TextField
              className={classes.dropInput}
              id="standard-select-currency"
              select
              label="Accessibility"
              value={currency}
              color="success"
              onChange={handleChange}
              variant="standard"
              fullWidth
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.dropInput}
              id="standard-select-currency"
              select
              label="Type"
              value={currency}
              onChange={handleChange}
              variant="standard"
              color="success"
              fullWidth
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Input
              className={classes.dropInput}
              placeholder="Add a description..."
              inputProps={ariaLabel}
              color="success"
              fullWidth
            />

            <div className={classes.postBtn}>
              <button className={classes.greenBtn}>Publish</button>
              <button>Discard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const top100Films = [
  { title: "By passenger car" },
  { title: "Off-road vehicle" },
  { title: "It is not possible to come by vehicle" },
];

export default NewPost;
