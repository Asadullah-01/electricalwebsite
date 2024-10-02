import React from 'react';
import "../Skill/Skill.css";
import { FaUnity } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

import { FaGamepad } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";

const skill= ()=>{

    const skills = [
        { name: 'C#', description: 'Programming language used for game development and software development.',icon: <FaGamepad/> },
        { name: 'Unity 2D/3D', description: 'A cross-platform game engine for building 2D and 3D games.',icon:<FaUnity/> },
        { name: 'Graphic Design', description: 'Creating visual content using tools like Photoshop and Illustrator.',icon:<SiAdobephotoshop/> },
        { name: 'Game Development', description: 'Designing and developing interactive video games for different platforms.',icon:<FaGamepad/> },
        { name: 'Figma', description: 'A software for creating stunning UI and designs.',icon:<IoLogoFigma/> }
    ];

    return (
        <div className="skills-container" data-aos="fade-up">
            <h2>My Skills</h2>
            <hr/>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-box" data-aos="fade-up">
                        <div className="skill-icon">{skill.icon}</div>
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default skill;