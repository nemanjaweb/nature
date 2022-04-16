import React from "react";
import classes from "./Posts.module.css";
const Posts = () => {
  return (
    <div className={classes.nesto}>
      <div className={classes.post}>
        <div className={classes.personal}>
          <img
            className={classes.avatar}
            src="https://s3-alpha-sig.figma.com/img/89b5/9b58/8fe9f9917b4efce5b928a60d5e55e4d4?Expires=1650844800&Signature=FD4XFzzD6wNyM~9Keml~-3TtAcjamyyeStzp-ncoQCUmnb6ZFk~Jq1kcm~0OyBnrsiLW-KQxWsBWT68YOJR7~IQQxkB9Ravjda--GmnaIcRwvtd05G1tUioP~B46GvL6RzA53Rtc50eCA1UZnA4IA5oR~Nw6LWq1mR~4PDfWwV7B1Em3znpHQ7~r~IgzX09CHV1DGEiiwNrS-cI2xLs-4SeI1Q9LU5nM3-NSSZ2gykccOVV0ZAfF7EECRofZggR7BbOX8aSz4J766QCBSRaP-wrLTklqKmrwO1AC8Mct1qDIdX7mxK78z6MXMI9tCALrNiCOeOpKQd6taY3YX~eelA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="avatar"
          ></img>
          <div>
            <p>@john.brown12</p>
            <div className={classes.accessibility}>
              <div className={classes.passenger}>
                <p>Accessibility: By passenger car</p>
              </div>
              <div className={classes.picnic}>
                <p>Type: Picnic area</p>
              </div>
            </div>
            <div className={classes.date}>02/03/2022</div>
            <div className={classes.postTitle}>
              <p>The beautiful forest I visited :D</p>
            </div>
          </div>
        </div>

        <div>
          <img
            className={classes.postImg}
            src="https://s3-alpha-sig.figma.com/img/fa3a/c523/10e9567f20bddddfd28b29f1fb9136a7?Expires=1650844800&Signature=FhCCUxwjjwTdJKCTBMwN-3KcHeLv1hu1z13eM-Y5KHl2nrRjcDE7mrEYYLS~eTYY7OEcyacS~4qBjRBi9d6RGZua0tR~P8L4EBvnBnBbcsatPsdc4LYVZt3DoQt5Nus-vyF69X-~yACudhVOKahNzkvlQfKiBpVOiD0rblVYqrIkz5ZFD0d2X8N1~kd8AT0ac4iEToJKG52nSde9nzbAVMzYNHOL9UEHzNnl6vUrPVTBsaLhk0NYTjiyAUfStWD9K6s26JXjI65STOMcX32dWavN8GTGoDvo4cbvPSB3G1x~F835B7mO7WI2o~~hkmFMsUY6CoMGmqGHqGW5rLIkOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="post"
          ></img>
        </div>
        <div className={classes.repost}>
          <i class="fa-solid fa-thumbs-up"></i>{" "}
          <span className={classes.hulk}>125</span>
          <i class="fa-solid fa-thumbs-down"></i> <span>8</span>
          <i class="fa-solid fa-message"></i> <span>17</span>
          <div className={classes.place}>Place name (Place) </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
