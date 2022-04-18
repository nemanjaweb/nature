import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import classes from "./NewPost.module.css";
import Navbar from "../components/Navbar";
import sharePost from "../img/share-post-vector.png";

const NewPost = () => {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };

  return (
    <div>
      <Navbar />
      <div className={classes.post}>
        <div className={classes.postWrapper}>
          <div className={classes.imgOne}></div>
          <div className={classes.imgTwo}></div>
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
            <input
              type="text"
              placeholder="Name"
              className={classes.inputOne}
            ></input>
            <input type="text" placeholder="Place"></input>
            <input type="text" placeholder="Name"></input>

            <Stack spacing={1} sx={{ width: 470 }}>
              <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Acessibility"
                    variant="standard"
                  />
                )}
              />
            </Stack>
            <Stack spacing={1} sx={{ width: 470 }}>
              <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Acessibility"
                    variant="standard"
                  />
                )}
              />
            </Stack>
            <input type="text" placeholder="Add a description..."></input>
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
