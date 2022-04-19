import React from "react";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import avatar1 from "../img/avatar1.png";
import avatar2 from "../img/avatar2.png";
import forest from "../img/forest-img.png";
import mountain from "../img/mountain-img.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Posts
        name="@john.brown12"
        descriptionOne="Accessibility: By passenger car"
        descriptionTwo="Type: Picnic area"
        comment="The beautiful forest I visited :D"
        place="Place name (Place)"
        avatar={avatar1}
        image={forest}
      />
      <Posts
        name="@user"
        descriptionOne="Accessibility:  It is not possible to come by vehicle"
        descriptionTwo="Type:  Mountain trail"
        comment="The beautiful mountain I visited :D"
        place="Place name (Country)"
        avatar={avatar2}
        image={mountain}
      />
    </div>
  );
};

export default Home;
