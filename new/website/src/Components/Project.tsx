import React, { useState } from 'react';

import ProjectModel from '../Models/ProjectModel';

interface Props {
    project: ProjectModel;
}

const Project: React.FC<Props> = (props) => {

    const [descriptionClass, setDescriptionClass] = useState("item-description");
    const [infoButtonClass, setInfoButtonClass] = useState("info-icon");

    const handleMouseEnter = () => {
        setInfoButtonClass("info-icon revealed");
    };
    const handleMouseLeave = () => {
        setInfoButtonClass("info-icon");
    };


    const handleInfoButtonMouseEnter = () => {
        setDescriptionClass("item-description show");
        setInfoButtonClass("info-icon revealed show");
    };
    const handleInfoButtonMouseLeave = () => {
        setDescriptionClass("item-description");
        setInfoButtonClass("info-icon revealed");
    };


    return (
        <div className="item"
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
            <div className={descriptionClass}>
                <h3>{props.project.description}</h3>
            </div>
            <div className={infoButtonClass}
                 onMouseEnter={handleInfoButtonMouseEnter}
                 onMouseLeave={handleInfoButtonMouseLeave}>
                <i className="fas fa-info" aria-hidden="true"></i>
            </div>
            <div className="item-name-container">
                <a href={props.project.projectLink} target="_blank" className="btn-dark">
                    <i className="fab fa-github" aria-hidden="true"></i>
                    <div className="project-name-text">{props.project.projectName}</div>
                </a>
            </div>
            <div className="tag-container">
                {props.project.tags.map(p => {
                    return (
                        <div className="item-tag">
                            <h3>{p}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default Project;