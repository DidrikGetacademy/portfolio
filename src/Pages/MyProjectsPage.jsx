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
        images={[
          "../Image/ProjectCard images/firstPage.png",
          "../Image/ProjectCard images/activation_key appdata.png",
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
        description=""
        technologies={["Javascript/React, Php, Express"]}
        images={[
        ]}
        />
      

      </div>
    </div>
  );
}
export default MyProjectsPage;
