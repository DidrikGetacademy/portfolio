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
          toolwindow,
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
        ]}
        />
        <ProjectCard
        title="MovieSpin"
        description=""
        technologies={["Vanilla/Javascript, Express Backend"]}
        githublink="https://github.com/DidrikGetacademy/MovieSpin-Project"
        website="https://didrikgetacademy.github.io/MovieSpin-Project/"
        images={[
        ]}
        />
      

      </div>
    </div>
  );
}
export default MyProjectsPage;
