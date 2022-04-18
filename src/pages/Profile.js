import React from "react";
import classes from "./Profile.module.css";
import Navbar from "../components/Navbar";
import cover from "../img/cover.png";
import avatar1 from "../img/avatar1.png";
import profileAvatar from "../img/profile-avatar.png";
import forest from "../img/forest-img.png";
import Posts from "../components/Posts";
import email from "../img/mail.png";
import user from "../img/user-vector.png";
import calendar from "../img/calendar2.png";
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
          <div className={classes.userWrapperLeft}>
            <h5>User information</h5>
            <div className={classes.leftWrapperInfo}>
              <img src={email} alt="email-icon" />
              <p>john.brown@gmail.com</p>
            </div>
            <div className={classes.leftWrapperInfo}>
              <img src={user} alt="user-icon" />
              <p>User</p>
            </div>
            <div className={classes.leftWrapperInfo}>
              <img src={calendar} alt="calendar-icon" />
              <p>12/06/1992</p>
            </div>
          </div>
          <div className={classes.userWrapperRight}>
            <div className={classes.rightContent}>
              <p>21</p>
              <span>Publications</span>
            </div>
            <div className={classes.rightContent}>
              <p>321</p>
              <span>Reactions</span>
            </div>
            <div className={classes.rightContent}>
              <p>115</p>
              <span>Comments</span>
            </div>
          </div>
        </div>
        <Posts
          descriptionOne="Accessibility: By passenger car"
          descriptionTwo="Type: Picnic area"
          avatar={avatar1}
          image={forest}
        />
        <Posts
          descriptionOne="Accessibility: By passenger car"
          descriptionTwo="Type: Picnic area"
          avatar={avatar1}
          image={forest}
        />
      </div>
    </div>
  );
};

export default Profile;
