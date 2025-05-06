import React, { useState } from "react";
import Styles from "../css/Intro.module.css";
import Didrik from "../Image/1701865582325 (1)_RealESR_Gx4_Resize-100.jpg";
import NavigationImage from "../Image/Arrow2.png";
import LComponent from '../Components/logocomponent'
import { useNavigate } from "react-router-dom";
function IntroPage() {
  const [fadeOut,setFadeout] = useState(false);
  const  navigate = useNavigate();
  const handleScroll = () => {
    setFadeout(true);

   setTimeout(() => {
    navigate('/MyProjectsPage')
   },500); 
  }; 



  return (
    <div className={Styles.container}>
      <div className={`${Styles["Intro-Container"]} ${fadeOut ? Styles.fadeOut : ""}`}>
        <div className={Styles["Intro-Name"]}>
          <h2 className={Styles.Headline}>👨‍💻 Full-Stack Developer | AI & Automation Enthusiast</h2>
          <h1 className={Styles.Title}>Didrik Nathaniel Lloyd Aasland Skjelbred</h1>
          <p className={Styles.Subline}>JavaScript • React • Python • C# • AI/ML • SQL</p>
          <LComponent/>
          <img alt="ProfilePicture" className={Styles.ProfilePitchure} src={Didrik} />
          <div className={Styles["bio-Intro"]}>
            <p className={Styles["Pbio"]}>
              I'm a 24-year-old developer from Norway with a deep passion for programming and technology
            </p>
            <ul className={Styles.ulbio}>
            <li>Focused on becoming a full-stack developer</li>
            <li>Learning by building real projects</li>
            <li>2 years of hands-on experience</li>
            <li className={Styles.techItem}>JavaScript</li>
            <li className={Styles.techItem}>Python</li>
            <li className={Styles.techItem}>AI Agents</li>
            <li className={Styles.techItem}>AL – Business Central</li>
            <li className={Styles.techItem}>C#</li>
            <li className={Styles.techItem}>SQL</li>
            <li className={Styles.techItem}>React</li>
          </ul>
          </div>
          <div className={Styles.introbuttoncontainer}>
            <button className={Styles.ContactBtn} onClick={() => navigate('/Contact')}>
              📬 Contact Me
            </button>
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
