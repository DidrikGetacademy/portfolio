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
          "../Image/ProjectCard images/register.png",
          "../Image/ProjectCard images/keycode.png",
          "../Image/ProjectCard images/activationkeyconnectedtouser.png",
          "../Image/ProjectCard images/registrationdatabase.png",
          "../Image/ProjectCard images/activationwindow.png",
          "../Image/ProjectCard images/Aktiveringsnøkkel.png",
          "../Image/ProjectCard images//appdata encryption.png",
          "../Image/ProjectCard images/appdatafolder.png",
          "../Image/ProjectCard images/brukerprofil.png",
          "../Image/ProjectCard images/database activationkey.png",
          "../Image/ProjectCard images/login.png",
          "../Image/ProjectCard images/registration.png",
          "../Image/ProjectCard images/secret_key_appdata.png",
          "../Image/ProjectCard images/ToolWindow.png",
          "../Image/ProjectCard images/usersactivation.png",
          "../Image/ProjectCard images/valid key activation.png",
          "../Image/ProjectCard images/VideoEnchancer.png",
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
