import React from 'react';
import tiktok from '../Image/tiktok.png';
import Instagram from '../Image/insta.png';
import X from '../Image/xx.png';
import youtube from '../Image/youtube.png'
import Styles from "../css/Lcomponent.module.css";

function LComponent() {
  return (
    <div className={Styles.imgcontainer}>
      <div className={Styles.socialicon}>
        <a href='https://www.tiktok.com/@motivationlearnreflect'>
          <img src={tiktok} alt="TikTok Logo" className={Styles.socialIcon} />
        </a>
      </div>
      <div className={Styles.socialicon}>
        <a href='https://www.instagram.com/learnreflects/'>
          <img alt="Instagram" src={Instagram} className={Styles.socialIcon} />
        </a>
      </div>
      <div className={Styles.socialicon}>
        <a href='https://x.com/LearnReflects'>
          <img src={X} alt="X Logo" className={Styles.socialIcon} />
        </a>
      </div>
      <div className={Styles.socialicon}>
        <a href='https://www.youtube.com/@MotivationReflectSession'>
          <img src={youtube} alt="youtube" className={Styles.socialIcon} />
        </a>
      </div>
    </div>
  );
}

export default LComponent;
