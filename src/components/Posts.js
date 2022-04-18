import React from "react";
import classes from "./Posts.module.css";
const Posts = (props) => {
  return (
    <div className={classes.postWrapper}>
      <div className={classes.post}>
        <div className={classes.personal}>
          <img className={classes.avatar} src={props.avatar} alt="avatar"></img>
          <div>
            <p>{props.name}</p>
            <div className={classes.accessibility}>
              <div className={classes.passenger}>
                <p>{props.descriptionOne}</p>
              </div>
              <div className={classes.picnic}>
                <p>{props.descriptionTwo}</p>
              </div>
            </div>
            <div className={classes.date}>02/03/2022</div>
            <div className={classes.postTitle}>
              <p>{props.comment}</p>
            </div>
          </div>
        </div>

        <div>
          <img className={classes.postImg} src={props.image} alt="post"></img>
        </div>
        <div className={classes.repost}>
          <i class="fa-solid fa-thumbs-up"></i>{" "}
          <span className={classes.hulk}>125</span>
          <i class="fa-solid fa-thumbs-down"></i> <span>8</span>
          <i class="fa-solid fa-message"></i> <span>17</span>
          <div className={classes.place}>{props.place} </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
