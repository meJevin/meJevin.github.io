import React, { useState, CSSProperties, useEffect } from 'react';

import ProjectModel from '../Models/ProjectModel';

import Project from './Project';

interface Props {
    projects: ProjectModel[];
    groupName: string;
}

const ProjectGroup: React.FC<Props> =  (props) => {

    const [projectGroupClass, setProjectGroupClass] = useState("project-group-content");
    const [projectGroupStyle, setProjectGroupStyle] = useState<CSSProperties>({
        maxHeight: "0px",
    });

    const [isButtonExpanded, setIsButtonExpanded] = useState(false);
    const [expandButtonClass, setExpandButtonClass] = useState("project-group-expand-btn");

    const handleExpandButtonClick = () => {
        if (!isButtonExpanded) {
            setIsButtonExpanded(true);
            setExpandButtonClass("project-group-expand-btn expanded");
            setProjectGroupClass("project-group-content show");
            setProjectGroupStyle({
                maxHeight: getExpandedHeight() + "px",
            });
            // Max height calculation is fake!
        }
        else {
            setIsButtonExpanded(false);
            setExpandButtonClass("project-group-expand-btn");
            setProjectGroupClass("project-group-content");
            setProjectGroupStyle({
                maxHeight: "0px",
            });
        }
    };

    const getExpandedHeight = (): number => {
        let finalContentHeight = 0;

        let content = document.getElementById(props.groupName);

        if (content) {
            let rowValues = document.defaultView?.getComputedStyle(content, "")
            .getPropertyValue("grid-template-rows")
            .split(" ");

            if (rowValues) {
                for (let j = 0; j < rowValues.length; ++j) {
                    finalContentHeight += parseInt(rowValues[j].replace("px", ""));
                }
            }
        }
        return finalContentHeight;
    }

    useEffect(() => {
        document.addEventListener("resize", handleResize);
    }, []);

    const handleResize = () => {
        if (isButtonExpanded) {
            setProjectGroupStyle({
                maxHeight: getExpandedHeight() + "px",
            });
        }
    };

    return (
        <div>
            <button className={expandButtonClass}
                    onClick={handleExpandButtonClick}>
                <h3>{props.groupName}</h3>
            </button>

            <div className={projectGroupClass} style={projectGroupStyle} id={props.groupName}>
                {props.projects.map((p) => {
                    return (
                        <Project project={p}/>
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectGroup;