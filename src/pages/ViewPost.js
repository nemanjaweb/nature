import React from "react";
import classes from "./ViewPost.module.css";
import Navbar from "../components/Navbar";
import forestImg from "../img/forest-img.png";
import like from "../img/like.png";
import dislike from "../img/dislike.svg";
import comment from "../img/comment.svg";

const ViewPost = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.Wrapper}>
        <div className={classes.btnWrapper}>
          <button className={classes.passenger}>
            Accessibility: By passenger car
          </button>
          <button className={classes.picnic}>Type: Picnic area</button>
        </div>
        <div className={classes.postImg}>
          <img src={forestImg} alt="post-img" />
          <div className={classes.blurImg}>
            <div>
              <span>
                <img src={like} alt="like" className={classes.icons} />
                <span>125</span>
              </span>
            </div>
            <div>
              <span>Place name (Country)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
