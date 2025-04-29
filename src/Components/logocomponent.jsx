import React from 'react';
import tiktok from '../Image/tiktok.png';
import Instagram from '../Image/insta.png';
import X from '../Image/xx.png';
import Styles from "../css/Lcomponent.module.css";

function LComponent() {
  return (
    <div className={Styles.imgcontainer}>
      <div className={Styles.socialicon}>
        <a href='https://www.tiktok.com/@learnreflectsession?is_from_webapp=1&sender_device=pc'>
          <img src={tiktok} alt="TikTok Logo" className={Styles.socialIcon} />
        </a>
      </div>
      <div className={Styles.socialicon}>
        <a href='https://www.instagram.com/learnreflects'>
          <img alt="Instagram" src={Instagram} className={Styles.socialIcon} />
        </a>
      </div>
      <div className={Styles.socialicon}>
        <a href='https://x.com/learnreflects?s=21'>
          <img src={X} alt="X Logo" className={Styles.socialIcon} />
        </a>
      </div>
    </div>
  );
}

export default LComponent;
