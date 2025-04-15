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
          "/portfolio/Image/ProjectCard-images/register.png",
          "/portfolio/Image/ProjectCard-images/keycode.png",
          "/portfolio/Image/ProjectCard-images/activationkeyconnectedtouser.png",
          "/portfolio/Image/ProjectCard-images/registrationdatabase.png",
          "/portfolio/Image/ProjectCard-images/activationwindow.png",
          "/portfolio/Image/ProjectCard-images/aktiveringsnøkkel.png",
          "/portfolio/Image/ProjectCard-images//appdataencryption.png",
          "/portfolio/Image/ProjectCard-images/appdatafolder.png",
          "/portfolio/Image/ProjectCard-images/brukerprofil.png",
          "/portfolio/Image/ProjectCard-images/databaseactivationkey.png",
          "/portfolio/Image/ProjectCard-images/login.png",
          "/portfolio/Image/ProjectCard-images/registration.png",
          "/portfolio/Image/ProjectCard-images/secret_key_appdata.png",
          "/portfolio/Image/ProjectCard-images/toolwindow.png",
          "/portfolio/Image/ProjectCard-images/usersactivation.png",
          "/portfolio/Image/ProjectCard-images/validkeyactivation.png",
          "/portfolio/Image/ProjectCard-images/videoEnchancer.png",
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
