import React, { useEffect, useState } from "react";
import Styles from "../css/Intro.module.css";
import Didrik from "../Image/1111.png";
import NavigationImage from "../Image/Arrow.png";
import LComponent from '../Components/logocomponent'
import { useNavigate } from "react-router-dom";
import { useAnimate, stagger } from "framer-motion";

function IntroPage() {
  const [scopetech, animateTech] = useAnimate();
  const [scopeabout, animateabout] = useAnimate();
  const [userMessage, setUserMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('')


useEffect(() => {
  animateTech([
    ["#techList", { opacity: 1 }],
    [
    "#techList p",
      { x: [-30, 0], opacity: [0, 1] },
      { delay: stagger(0.2), easing: "ease-out", duration: 0.5 },
    ],
  ]);
}, [animateTech]);


useEffect(() => {
  
  animateabout([
    ["#introlist", {opacity: 1}],
        [
      "#introlist p",
        { y: [10, 0], opacity: [0, 1] },
      { delay: stagger(0.2, { startDelay: 0.1 }), duration: 0.5, easing: "ease-out" },
    ],
    [
    "#introlist li",
      { x: [-30, 0], opacity: [0, 1] },
      { delay: stagger(0.2), easing: "ease-out", duration: 0.5 },
    ]

  ]);
}, [animateabout]);

  const [fadeOut, setFadeout] = useState(false);
  const navigate = useNavigate();
  const handleScroll = () => {
    setFadeout(true);
    setTimeout(() => {
      navigate('/MyProjectsPage')
    }, 500);
  };

  async function sendmessage() {
    console.log("🔁 sendmessage() called");

    try{

      console.log("message sent to gradio:", userMessage)
      const response = await fetch('https://didrikSkjelbred-chatbot-api.hf.space/run/predict', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ data: [userMessage] })
      });
      if (!response.ok){
        throw new Error('Network response was not ok')
      }
      
      
      const data = await response.json();
      
      console.log("response recieved: ", data.data[0])
      setResponseMessage(data.data[0])
      
    } catch (error) {
      console.error("error sending message: ", error);
      setResponseMessage("❌ Something went wrong. Please try again.")
    }
  }




  return (
    
    <div className={`${Styles["Intro-Container"]} ${fadeOut ? Styles.fadeOut : ""}`}>
      <div className={Styles.headlineWrapper}>
        <h1 className={Styles.Headline}>👨‍💻 Full-Stack Developer | AI & Automation Enthusiast🤖</h1>
        <p className={Styles.HeadlineSub}>Trykk for å se Mine prosjekter</p>
          <img
            alt="NavigationImage"
            className={Styles.NavigationImage}
            src={NavigationImage}
            onClick={handleScroll}
          />
  
      </div>

      <div className={Styles.ProfileSection}>
        <h1 className={Styles.Title}>Didrik Nathaniel Lloyd Aasland Skjelbred</h1>
        <img alt="ProfilePicture" className={Styles.ProfilePitchure} src={Didrik} />
        <p className={Styles["Pbio"]}>
         Jeg er en 24 år gammel utvikler fra Norge med en dyp lidenskap for programmering og teknologi
          
        </p>
        <div className={Styles["contentarea"]}>
          <h2>Follow me on Socials</h2>
          <LComponent />
        </div>
           <div className={Styles.introbuttoncontainer}>
          <button className={Styles.ContactBtn} onClick={() => navigate('/Contact')}>
            📬 Contact Me
          </button>
        </div>
      </div>

<div ref={scopetech}>
  <div className={`${Styles.IntroBio} ${Styles["zoom-on-hover"]}`} id="techList">
    <h2>Mine programmering språk ferdigheter</h2>
    <p className={Styles.techItem}>JavaScript</p>
    <p className={Styles.techItem}>Python</p>
    <p className={Styles.techItem}>AI Agents</p>
    <p className={Styles.techItem}>AL – Business Central</p>
    <p className={Styles.techItem}>C#</p>
    <p className={Styles.techItem}>SQL</p>
    <p className={Styles.techItem}>React</p>
  </div>
</div>

<div className={Styles.chatbotContainer}>
  <div className={Styles.chatbox}>
  <pre id="responseBox">ChatBot: {responseMessage}</pre>
  <pre id="usermessage">User: {userMessage}</pre>

  </div>
  <input value={userMessage}
   onChange={(e) => setUserMessage(e.target.value)}
   placeholder="Ask Ai Agent Something..."
  />
  <button  onClick={sendmessage}>Send Message</button>
</div>



     <div ref={scopeabout} className={`${Styles.aboutme} ${Styles["zoom-on-hover"]}`} id="introlist">
        <h2>Les litt om meg</h2>
    <p>
      Jeg er en gutt på 24 år som har teknologi som min store lidenskap. Jeg har gått på Get Academy, og har i tillegg tatt flere digitale kurs for å lære mest mulig.
    </p>
  
    <p>
      Som person er jeg nysgjerrig på nye ting og lærevillig. Jeg liker å jobbe sammen med andre for å finne de beste løsningene, men også å jobbe selvstendig.
    </p>
  
    <p>
      Siden det blir mange timer foran PC, holder jeg meg i form med å trene på helsestudio noen dager i uken.
    </p>
    <h3>Min kunnskap ligger innenfor:</h3>
    <ul>
      <li>AL-programmeringsspråk for Microsoft Dynamics 365 Business Central</li>
      <li>Vanilla JavaScript (frontend)</li>
      <li>React (JavaScript-rammeverk)</li>
      <li>Node.js</li>
      <li>Express (backend): API, innlogging og registrering</li>
      <li>Azure: database- og serverintegrasjon</li>
      <li>C# (konsollspill, brukersystem)</li>
      <li>Python: API, AI (U-Net, Transformer), distribusjon</li>
      <li>Hugging Face, Transformers, TensorFlow, PyTorch</li>
      <li>Kjennskap til PHP og Vue</li>
    </ul>
      </div>


    </div>


  );
}

export default IntroPage;
