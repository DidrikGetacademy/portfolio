import React from "react";
import Styles from "../css/Intro.module.css";
import Didrik from "../Image/1701865582325 (1)_RealESR_Gx4_Resize-100.jpg";
import NavigationImage from "../Image/Arrow2.png";
import LComponent from '../Components/logocomponent'
import { useNavigate } from "react-router-dom";
function IntroPage() {
  const  navigate = useNavigate();
  const handleScroll = () => {
    navigate('/MyProjectsPage')
  };



  return (
    <div className={Styles.container}>
      <div className={`${Styles["Intro-Container"]}`}>
        <div className={Styles["Intro-Name"]}>
          <h1 className={Styles.Title}>Didrik Nathaniel Lloyd Aasland Skjelbred</h1>
      <LComponent/>
          <img alt="ProfilePicture" className={Styles.ProfilePitchure} src={Didrik} />
          <div className={Styles["bio-Intro"]}>
            <p className={Styles["Pbio"]}>
              I'm a 24-year-old developer from Norway with a deep passion for programming and technology...
            </p>
          </div>
        </div>
        <div className={Styles["bottom-NavigationIcon"]}>
          <img
            alt="NavigationImage"
            className={Styles.NavigationImage}
            src={NavigationImage}
            onClick={handleScroll}
          />
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
