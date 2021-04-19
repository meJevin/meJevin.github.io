import ProjectModel from './ProjectModel';

export const getProjects = async (): Promise<ProjectModel[]> => {
    let result: ProjectModel[] = [];

    for (let i = 0; i < 10; ++i) {
        result.push({
            categoryName: 'Category1',
            projectName: 'Name',
            description: 'Descriptions',
            projectLink: 'Project Link',
            tags: [
               'Tag1',
               'Tag2',
               'Tag3',
               'Tag4',
            ],
       });
    }

    for (let i = 0; i < 5; ++i) {
        result.push({
            categoryName: 'Category2',
            projectName: 'Name',
            description: 'Descriptions',
            projectLink: 'Project Link',
            tags: [
               'Tag1',
               'Tag2',
               'Tag3',
               'Tag4',
            ],
       });
    }

    for (let i = 0; i < 7; ++i) {
        result.push({
            categoryName: 'Category3',
            projectName: 'Name',
            description: 'Descriptions',
            projectLink: 'Project Link',
            tags: [
               'Tag1',
               'Tag2',
               'Tag3',
               'Tag4',
            ],
       });
    }

    return result;
};