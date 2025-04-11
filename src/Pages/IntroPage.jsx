import React from "react";
import Styles from  "../css/Intro.module.css";
import Didrik from "../Image/1701865582325 (1)_RealESR_Gx4_Resize-100.jpg";
import { useState } from "react";
import NavigationImage from "../Image/Arrow2.png";
import MyProjectsPage from "./MyProjectsPage";
function IntroPage() {
  const [sectionVisible, setSectionVisible] = useState(false);
  
  const handleScroll = () => {
    const targetSection = document.getElementById("Work-Section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setSectionVisible(true);
    }
  }

  const handleScrollUp = () => {
    setSectionVisible(false);
    const introContainer = document.querySelector(`.${Styles["Intro-Container"]}`);
    if (introContainer) {
      introContainer.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleScrollToPage3 = () => {
    // Add logic for scrolling to page 3 here
    console.log("Scrolling to page 3");
  };

  return (
    <div className={Styles.container}>
      <div className={`${Styles["extra-site"]} ${Styles.top}`} />
      <div className={`${Styles["extra-site"]} ${Styles.bottom}`} />

      <div className={Styles["Intro-Container"]}>
        <div className={Styles["Intro-Name"]}>
          <h1 className={Styles.Title}>Didrik Nathaniel Lloyd Aasland Skjelbred</h1>
          <img alt="ProfilePicture" className={Styles.ProfilePitchure} src={Didrik} />

          <div className={Styles["bio-Intro"]}>
            <br />
            <p>
              "I am a 24-year-old developer from Norway with a passion for
              programming. I'm inspired by the endless possibilities of coding
              and love to explore new challenges. For me, this isn't just a 9-5
              job—it's a hobby and a lifelong learning journey."
            </p>
          </div>
        </div>
        <div className={Styles["bottom-NavigationIcon"]}>
          {!sectionVisible && (
            <img
              alt="NavigationImage"
              className={Styles.NavigationImage}
              src={NavigationImage}
              onClick={handleScroll}
            />
          )}
        </div>
      </div>

      <div id="Work-Section" className={`${Styles["work-Section"]} ${sectionVisible ? Styles.visible : ""}`}>
        <div className={Styles["work-Content"]}>
          <h2 className={Styles["h1-WorkSection"]}>My Projects</h2>
          {sectionVisible && (
            <>
            <MyProjectsPage/>
              <img
                alt="Scroll Up"
                className={`${Styles.NavigationImage} ${Styles.topButton}`}
                src={NavigationImage}
                onClick={handleScrollUp}
              />
              <img
                alt="Scroll Down"
                className={`${Styles.NavigationImage} ${Styles.bottomButton}`}
                src={NavigationImage}
                onClick={handleScrollToPage3}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default IntroPage;