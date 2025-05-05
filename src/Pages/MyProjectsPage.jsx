import React from "react";
import ProjectCard from "../Components/ProjectCard";
import Styles from '../css/Projectpage.module.css';
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
import LR3 from '../Image/LR3.png';
import LR4 from '../Image/LR4.png';
import LR5 from '../Image/LR5.png';
import LR6 from '../Image/LR6.png';
import LR7 from '../Image/LR7.png';
import LR8 from '../Image/LR8.png';
import AL from '../Image/AL.png';
import blackjack from '../Image/blackjack.png';
import blackjack1 from '../Image/blackjack1.png';
import blackjack2 from '../Image/blackjack2.png';
import blackjack3 from '../Image/blackjack3.png';
import unet from '../Image/u-net-architecture.png';
import unet2 from '../Image/unet.png';
import crypto2 from '../Image/crypto.png';
import crypto3 from '../Image/crypto2.png';
import crypto4 from '../Image/crypto3.png';
import crypto5 from '../Image/crypto4.png';
import crypto6 from '../Image/crypto5.png';
import crypto7 from '../Image/crypto7.png';
import crypto8 from '../Image/crypto9.png';
import crypto10 from '../Image/crypto10.png';
import crypto11 from '../Image/crypto11.png';
import huggingface from '../Image/huggingface.png';
import huggingface1 from '../Image/huggingface2.png';
import huggingface2 from '../Image/huggingface3.png';
import huggingface3 from '../Image/huggingface4.png';
import kalkulator2 from '../Image/kalkulator2.png';
import kalkulator from '../Image/kalkulator.png';
import pokemon1 from '../Image/Pokemon1.png'
import pokemon2 from '../Image/pokemon2.png'
import pokemon3 from '../Image/pokemon3.png'
import pokemon4 from '../Image/pokemon4.png'
import pokemon5 from '../Image/pokemon5.png'
import pokemon6 from '../Image/pokemon6.png'
import pokemon7 from '../Image/pokemon7.png'
import pokemon8 from '../Image/pokemon8.png'
import pokemon9 from '../Image/pokemon9.png'
import pokemon10 from '../Image/pokemon10.png'
import financial from '../Image/financial.png'
import financial1 from '../Image/financial1.png'
import financial2 from '../Image/financial2.png'
function MyProjectsPage() {
  return (
    <div id="ProjectcardSection" >
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
        title="Microsoft Business Central 365 Dynamics"
        description="Developed and implemented customized AL code in Microsoft Dynamics 365 Business Central to meet client-specific needs in finance and logistics. The project included extending existing tables, creating new pages and reports, and integrating with external systems. Completed as part of my role at a consulting company."
        technologies={["AL"]}
        githublink="https://github.com/DidrikGetacademy/Microsoft-Business-Central-Dynamics-365"
        images={[
          AL,
        ]}
        />
        <ProjectCard
        title="BlackJack"
        description="Blackjack Console application (Player vs Dealer(bot))"
        technologies={["C#"]}
        githublink="https://github.com/DidrikGetacademy/BlackJack"
        images={[
          blackjack,
          blackjack1,
          blackjack2,
          blackjack3
        ]}
        />
        <ProjectCard
        title="U-NET - Vocal Isolation Model"
        description="implementation of a UNet-based model for audio source separation, focusing on isolating vocals from music tracks. It includes custom datasets, advanced loss functions (e.g., perceptual, STFT, and multi-scale losses), and support for MUSDB18 and DSD100 datasets. The project leverages PyTorch, integrates memory usage logg"
        technologies={["Python"]}
        githublink="https://github.com/DidrikGetacademy/UNet-Audio-seperation-Model"
        images={[
          unet,
          unet2
        ]}
        />
        <ProjectCard
        title="CryptoMarket-Advantage-GUI"
        description="GOD's eye in crypto version🚀 Ultimate Trading AI Suite – Sniperbot | Frontrunner | AI Agent | Wallet & Telegram Tracking"
        technologies={["Python"]}
        githublink="https://github.com/DidrikGetacademy/CryptoMarket-Advantage-GUI"
        images={[
          crypto2,
          crypto3,
          crypto4,
          crypto5,
          crypto6,
          crypto7,
          crypto8,
          crypto10,
          crypto11
        ]}
        />

        <ProjectCard
        title="HuggingFace AI-"
        description="this project is a basic calculator application built with Python and a graphical user interface (GUI) using the tkinter library. The calculator provides essential arithmetic operations such as addition, subtraction, multiplication, and division. The intuitive interface allows users to input numbers and perform calculations seamlessly."
        technologies={["python", "tkinter"]}
        githublink="https://github.com/DidrikGetacademy/Python-GUI-Calculator"
        images={[
          huggingface,
          huggingface1,
          huggingface2,
          huggingface3
        ]}
        />
      <ProjectCard
              title="Python-GUI-Calculator"
              description="this project is a basic calculator application built with Python and a graphical user interface (GUI) using the tkinter library. The calculator provides essential arithmetic operations such as addition, subtraction, multiplication, and division. The intuitive interface allows users to input numbers and perform calculations seamlessly."
              technologies={["python", "tkinter"]}
              githublink="https://github.com/DidrikGetacademy/Python-GUI-Calculator"
              images={[
                kalkulator,
                kalkulator2
              ]}
              />
        <ProjectCard
        title="Pokemon"
        description="Pokemon JS nettside, pokemon inventory, pokemon vs pokemon battle setup, attack damage & Health"
        technologies={["Javascript-Vanilla"]}
        githublink="https://github.com/DidrikGetacademy/Pokemon-JS-"
        images={[
          pokemon1,
          pokemon2,
          pokemon3,
          pokemon4,
          pokemon5,
          pokemon6,
          pokemon7,
          pokemon8,
          pokemon9,
          pokemon10
        ]}
        />


        <ProjectCard
        title="Financial System"
        description="FinanceSystem with a frontend(javascript) , backend(C#), created so user can have control over their own finance system"
        technologies={["Javascript-Vanilla", "C#"]}
        githublink="https://github.com/DidrikGetacademy/FinancialSystem-Project"
        images={[
          financial,
          financial1,
          financial2
        ]}
        />


        
      </div>
    </div>
  );
}
export default MyProjectsPage;
