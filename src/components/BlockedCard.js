import React from "react";
import classes from "./BlockedCard.module.css";
import xSmile from "../img/x-smiley.png";

const BlockedCard = () => {
  return (
    <div className={classes.blocked}>
      <div className={classes.blockedText}>
        <img src={xSmile} alt="bad-smile" />
        <p>
          Sorry,<br></br> your profile is blocked. <br></br>Contact the admin
        </p>
      </div>
    </div>
  );
};

export default BlockedCard;
