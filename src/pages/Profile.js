import React from "react";
import classes from "./Profile.module.css";
import Navbar from "../components/Navbar";
import cover from "../img/cover.png";
import profileAvatar from "../img/profile-avatar.png";
import Posts from "../components/Posts";
const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.profile}>
        <div className={classes.userPictures}>
          <img src={cover} alt="cover-img" />
          <div className={classes.avatar}>
            <img src={profileAvatar} alt="profile-img" />
          </div>
        </div>
        <div className={classes.userInf}>
          <p>John Brown</p>
          <span>@john.brown12</span>
        </div>
        <div className={classes.userWrapper}>
          <div className={classes.userWrapperLeft}></div>
          <div className={classes.userWrapperRight}></div>
        </div>
        <Posts />
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
