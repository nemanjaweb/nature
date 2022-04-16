import React from "react";
import classes from "./BlockedCard.module.css";

const BlockedCard = () => {
  return (
    <div className={classes.blocked}>
      <div className={classes.blockedText}>
        <i class="fa-solid fa-circle-xmark"></i>
        <p>
          Sorry,<br></br> your profile is blocked. <br></br>Contact the admin
        </p>
      </div>
    </div>
  );
};

export default BlockedCard;
