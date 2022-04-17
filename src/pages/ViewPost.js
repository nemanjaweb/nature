import React from "react";
import classes from "./ViewPost.module.css";
import Navbar from "../components/Navbar";
import forestImg from "../img/forest-img.png";
import like from "../img/like.png";
import dislike from "../img/dislike.svg";
import comment from "../img/comment.svg";
import avatar from "../img/avatar1.png";
import avatarTwo from "../img/avatar2.png";
import userGillana from "../img/gillana-user.jpg";
import userRandom from "../img/user-avatar.svg";

const ViewPost = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.viewPost}>
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
              <div className={classes.iconsWrapper}>
                <span>
                  <img src={like} alt="like" className={classes.icons} />
                  <span>125</span>
                </span>
                <span>
                  <img src={dislike} alt="like" className={classes.icons} />
                  <span className={classes.iconSpan}>8</span>
                </span>
                <span>
                  <img src={comment} alt="like" className={classes.icons} />
                  <span className={classes.iconSpan}>17</span>
                </span>
              </div>
              <div className={classes.description}>
                <span>Place name (Country)</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.postInfo}>
          <div className={classes.userInfo}>
            <img src={avatar} alt="avatar" />
            <div className={classes.userName}>
              <p>@john.brown12</p>
              <span>02/03/2022</span>
            </div>
          </div>
          <div className={classes.userComment}>
            <h2>The most beautiful forest I visited :D</h2>
          </div>
          <div className={classes.postIcons}>
            <span className={classes.green}>
              <img src={like} alt="like" />
              <p>125</p>
            </span>
            <span>
              <img src={dislike} alt="like" />
              <span>8</span>
            </span>
            <span>
              <img src={comment} alt="like" />
              <span>17</span>
            </span>
          </div>
          <div className={classes.writeComment}>
            <span>
              <img src={avatarTwo} alt="avatar-two" />
            </span>
            <p>Write a comment...</p>
            <div className={classes.publish}>
              <button>Publish</button>
            </div>
          </div>
          <div className={classes.postComments}>
            <div className={classes.commentInfo}>
              <span>
                <img src={userGillana} alt="comment-user-img" />
              </span>
              <div className={classes.postCommentInfo}>
                <h5>@gilanna1</h5>
                <span>02/03/2022</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  vel, diam in egestas enim vitae morbi.
                </p>
              </div>
            </div>
            <div className={classes.commentInfo}>
              <span>
                <img src={userRandom} alt="comment-user-img-2" />
              </span>
              <div className={classes.postCommentInfo}>
                <h5>@user</h5>

                <span>02/03/2022</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
