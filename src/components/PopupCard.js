import React from "react";
import { Link } from "react-router-dom";
import classes from "./PopupCard.module.css";
import questionMark from "../img/upitnik.png";
import xClose from "../img/iks-vector.png";
const PopupCard = () => {
  return (
    <div className={classes.blocked}>
      <div className={classes.close}>
        <Link to="/home">
          <img src={xClose} alt="close-X" />
        </Link>
      </div>

      <div className={classes.blockedText}>
        <img src={questionMark} alt="question-mark" />
        <p>
          Are you sure you want to<br></br> log out?
        </p>
        <Link to="/home">
          <button className={classes.grayBtn}>No</button>
        </Link>
        <Link to="/">
          <button className={classes.greenBtn}>Yes</button>
        </Link>
      </div>
    </div>
  );
};

export default PopupCard;
