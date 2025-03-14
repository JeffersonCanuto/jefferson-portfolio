export type StatsStrings = {
    experience:string;
    technologies:string;
    projects:string;
    commits:string;
};

const statsStrings:Record<"en" | "br", StatsStrings> = {
    en: {
        experience: "Years of Experience",
        technologies: "Learned Technologies",
        projects: "Code Projects (GitHub)",
        commits: "Code Commits (GitHub)"
    },
    br: {
        experience: "Anos de Experiência",
        technologies: "Tecnologias Aprendidas",
        projects: "Projetos de Código (GitHub)",
        commits: "Commits de Código (GitHub)"
    }
};

export default statsStrings;