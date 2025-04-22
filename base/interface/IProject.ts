export interface IProject {
    image: string;
    title: string;
    link: string;
    projectType: string;
    services?: string;
    timeline?: string;
    category: string;
    introImage: {url : string}
    industry: string;
    platform: string;
    slug: string
}

export interface IProjectData {
    projects: IProject[]
}