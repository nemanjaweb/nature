import React from "react";
import classes from "./PopupCard.module.css";
import questionMark from "../img/upitnik.png";
import xClose from "../img/iks-vector.png";
const PopupCard = () => {
  return (
    <div className={classes.blocked}>
      <div className={classes.close}>
        <img src={xClose} alt="close-X" />
      </div>
      <div className={classes.blockedText}>
        <img src={questionMark} alt="question-mark" />
        <p>
          Are you sure you want to<br></br> log out?
        </p>
        <button className={classes.grayBtn}>No</button>
        <button className={classes.greenBtn}>Yes</button>
      </div>
    </div>
  );
};

export default PopupCard;
