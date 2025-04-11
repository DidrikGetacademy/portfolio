import React, { useState } from "react";
import Styles from '../css/ProjectCard.module.css'

function ProjectCard({title, description, technologies, images , githublink}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleprev = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length -1 : prevIndex - 1
        );
    };

    const handlenext = () => {
        setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length -1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={Styles.card}>
        <div className={Styles.carousel}>
        <a href={images[currentImageIndex]} target="_blank" rel="noopener noreferrer">
        <img 
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex}`}
            className={Styles.image}
        />
        </a>
        {images.length > 1 && (
            <>
             <button className={Styles.prev} onClick={handleprev}>
              ◀
            </button>
            <button className={Styles.next} onClick={handlenext}>
              ▶
            </button>
            </>
        )}
        </div>
        <div className={Styles.content}>
            <h3 className={Styles.title}>{title}</h3>
            <p className={Styles.description}>{description}</p>
            <div className={Styles.techlist}>
                {technologies.map((tech, index) => (
                    <span key={index} className={Styles.tech}>
                        {tech}
                        </span>
                ))}
            </div>
            <a href={githublink} target="_blank" rel="noopener noreferrer" className={Styles.link}
            >View on GitHub
            </a>
        </div>
        </div>
    )
}
export default ProjectCard