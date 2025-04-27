import React from "react";
import ProjectCard from "../Components/ProjectCard";
import Styles from '../css/ProjectCard.module.css';
import register from "../Image/registration.png";
import keycode from "../Image/keycode.png";
import activationkeyconnectedtouser from "../Image/activationkeyconnectedtouser.png";
import registrationdatabase from "../Image/registrationdatabase.png";
import activationwindow from "../Image/activationwindow.png";
import aktiveringsnøkkel from "../Image/aktiveringsnøkkel.png";
import appdataencryption from "../Image/appdataencryption.png";
import appdatafolder from "../Image/appdatafolder.png";
import brukerprofil from "../Image/brukerprofil.png";
import databaseactivationkey from "../Image/databaseactivationkey.png";
import login from "../Image/login.png";
import registration from "../Image/registration.png";
import secret_key_appdata from "../Image/secret_key_appdata.png";
import toolwindow from "../Image/toolwindow.png";
import usersactivation from "../Image/usersactivation.png";
import validkeyactivation from "../Image/validkeyactivation.png";
import videoenchancer from "../Image/videoenchancer.png";
import moviespin1 from '../Image/moviespin1.png';
import moviespin3 from '../Image/moviespin3.png';
import moviespin4 from '../Image/moviespin4.png';
import moviespin5 from '../Image/moviespin5.png';
import moviespinruller from '../Image/moviespinruller.png';
import generator from '../Image/generator.png';
import frontpage from '../Image/frontpage.png';
import LR1 from '../Image/LR1.png';
import LR2 from '../Image/LR2.png';
import LR3 from '../Image/LR3.PNG';
import LR4 from '../Image/LR4.PNG';
import LR5 from '../Image/LR5.png';
import LR6 from '../Image/LR6.png';
import LR7 from '../Image/LR7.png';
import LR8 from '../Image/LR8.png';

function MyProjectsPage() {


  return (
    <div id="Work-Section" >
      <div className={Styles["projects-grid"]}>
        <ProjectCard
        title="LearnReflects Enchancer Software"
        description="An all-in-one desktop application powered by AI and machine learning. Features include video and image upscaling, audio denoising, vocal isolation, YouTube downloading, and AI-agent communication. It also supports user registration and authentication, subscription management, and seamless integration with a database via API. Built with a custom Tkinter GUI for an intuitive user experience."
        technologies={["Python","Php"]}
        githublink="https://github.com/DidrikGetacademy/VideoEnchancer-GUI-Software"
        images={[
          toolwindow,
          register,
          keycode,
          activationkeyconnectedtouser,
          registrationdatabase,
          activationwindow,
          aktiveringsnøkkel,
          appdataencryption,
          appdatafolder,
          brukerprofil,
          databaseactivationkey,
          login,
          registration,
          secret_key_appdata,
          usersactivation,
          validkeyactivation,
          videoenchancer
        ]}
        
        />
        <ProjectCard
        title="LearnReflect Self Improvement System"
        description="Learnreflect is a project currently in development, aimed at creating a user-centered system focused on self-improvement and personal development. It will offer tools such as a chatbot that acts as a motivational assistant, supporting users on their self-development journey.
                    Users will have access to a customized personal system, including a personalized assistant capable of performing tasks within its environment and serving as a smart, responsive aide.
                    The platform will also feature a community shop, various AI-powered tools, and additional resources to support growth and learning."
        technologies={["Javascript/React, Php, Express"]}
        githublink="https://github.com/DidrikGetacademy/LearnReflect-Project"
        website="https://learnreflects.com/"
        images={[
          LR1,
          LR2,
          LR3,
          LR4,
          LR5,
          LR6,
          LR7,
          LR8,


        ]}
        />
        <ProjectCard
        title="MovieSpin"
        description="A website built to make it easier to find movies and series to watch, with the ability to store them in your account. Features include account creation, user login, backend support, and a wheel to spin for a random movie suggestion."
        technologies={["Vanilla/Javascript, Express Backend"]}
        githublink="https://github.com/DidrikGetacademy/MovieSpin-Project"
        website="https://didrikgetacademy.github.io/MovieSpin-Project/"
        images={[
          frontpage,
          moviespin1,
          moviespin3,
          moviespin4,
          moviespin5,
          moviespinruller,
          generator,
        ]}
        />
        <ProjectCard
        title="U-NET - Vocal Isolation Model"
        description=""
        technologies={["Python"]}
        githublink=""
        images={[
        ]}
        />
       
      

      </div>
    </div>
  );
}
export default MyProjectsPage;
