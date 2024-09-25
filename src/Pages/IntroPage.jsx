import React from "react";
import "../css/Intro.css";
import Didrik from "../Image/1701865582325 (1)_RealESR_Gx4_Resize-100.jpg";
import { Link } from "react-router-dom";
import NavigationImage from "../Image/arrow.png";

function IntroPage() {
  return (
    <div className="container">
      <div className="extra-site top" />
      <div className="extra-site bottom" />

      <div className="Intro-Container">
        <div className="Intro-Name">
          <h1 className="Title">Didrik Nathaniel Lloyd Aasland Skjelbred</h1>
          <img alt="ProfilePitchure" className="ProfilePitchure" src={Didrik} />
          <div className="bio-Intro">
            <br />
            <p>
              "I am a 24-year-old developer from Norway with a passion for
              programming. I’m inspired by the endless possibilities of coding
              and love to explore new challenges. For me, this isn’t just a 9-5
              job—it's a hobby and a lifelong learning journey."
            </p>
          </div>
        </div>
        <div className="bottom-NavigationIcon">
          <Link to="Home">
            <ul>Click below to explore more about my work.</ul>
            <img
              alt="NavigationImage"
              className="NavigationImage"
              src={NavigationImage}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
