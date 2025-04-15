import React from "react";
import ProjectCard from "../Components/ProjectCard";
import Styles from '../css/ProjectCard.module.css'

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
          `${process.env.PUBLIC_URL}/Image/register.png`,
          `${process.env.PUBLIC_URL}/Image/keycode.png`,
          `${process.env.PUBLIC_URL}/Image/activationkeyconnectedtouser.png`,
          `${process.env.PUBLIC_URL}/Image/registrationdatabase.png`,
          `${process.env.PUBLIC_URL}/Image/activationwindow.png`,
          `${process.env.PUBLIC_URL}/Image/aktiveringsnøkkel.png`,
          `${process.env.PUBLIC_URL}/Image/appdataencryption.png`,
          `${process.env.PUBLIC_URL}/Image/appdatafolder.png`,
          `${process.env.PUBLIC_URL}/Image/brukerprofil.png`,
          `${process.env.PUBLIC_URL}/Image/databaseactivationkey.png`,
          `${process.env.PUBLIC_URL}/Image/login.png`,
          `${process.env.PUBLIC_URL}/Image/registration.png`,
          `${process.env.PUBLIC_URL}/Image/secret_key_appdata.png`,
          `${process.env.PUBLIC_URL}/Image/toolwindow.png`,
          `${process.env.PUBLIC_URL}/Image/usersactivation.png`,
          `${process.env.PUBLIC_URL}/Image/validkeyactivation.png`,
          `${process.env.PUBLIC_URL}/Image/videoenchancer.png`
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
