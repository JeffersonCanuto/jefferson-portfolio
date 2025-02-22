export interface StatsStringItems {
    en: {
        experience:string;
        technologies:string;
        projects:string;
        commits:string;
    };
    br: {
        experience:string;
        technologies:string;
        projects:string;
        commits:string;
    };
}
 
const StatsStrings:StatsStringItems = {
    en: {
        experience: "Years of Experience",
        technologies: "Software Technologies",
        projects: "Code Projects (GitHub)",
        commits: "Code Commits (GitHub)"
    },
    br: {
        experience: "Anos de Experiência",
        technologies: "Tecnologias de Software",
        projects: "Projetos de Código (GitHub)",
        commits: "Commits de Código (GitHub)"
    }
};

export default StatsStrings;