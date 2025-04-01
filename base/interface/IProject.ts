export interface IProject {
    image: string;
    title: string;
    link: string;
    projectType: string;
    category: string;
    coverimage: {url : string}
    industry: string;
    platform: string;
    slug: string
}

export interface IProjectData {
    projects: IProject[]
}