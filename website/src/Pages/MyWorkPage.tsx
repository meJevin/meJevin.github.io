import React, { useEffect, useState } from "react";

import ProjectModel from './../Models/ProjectModel';
import { getProjects } from '../Models/Data';

import ProjectGroup from './../Components/ProjectGroup';

const MyWorkPage: React.FC = () => {

    const [groupedProjects, setGroupedProjects] = useState<Map<string, ProjectModel[]>>(
        new Map<string, ProjectModel[]>()
    );

    useEffect(() => {
        document.title = "My Work";

        // This is static for now, but if I decide to make this fetch data from
        // some backend this is here :)
        const fetchProjects = async () => {
            var result = await getProjects();

            setGroupedProjects(splitProjectsIntoGroups(result));
        };

        fetchProjects();
    }, []);

    const splitProjectsIntoGroups = (projects: ProjectModel[]): Map<string, ProjectModel[]> => {
        let projectsMap = new Map<string, ProjectModel[]>();

        projects.forEach((item) => {
            const key = item.categoryName;
            const collection = projectsMap.get(key);

            if (!collection) {
                projectsMap.set(key, [item]);
            }
            else {
                collection.push(item);
            }
        });

        return projectsMap;
    }

    const groupedProjectToJSXs = () => {
        let resultJSXs: JSX.Element[] = [];

        groupedProjects.forEach((item, key) => {
            resultJSXs.push((
                <ProjectGroup groupName={key} projects={item}/>
            ));
        });

        return resultJSXs;
    };

    return (
        <main id="work">
            <h1 className="lg-heading">
                My&nbsp;
                <span className="text-secondary">Work</span>
            </h1>

            <h2 className="sm-heading">
                Check out some of my projects in different programming languages!
            </h2>

            <div className="projects">
                <div className="project-group">
                    {groupedProjectToJSXs()}
                </div>
            </div>
        </main>
    )
};

export default MyWorkPage;