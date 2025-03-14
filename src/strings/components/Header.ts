
export type HeaderStrings = {
    language: string;
    navigation: {
        home: string;
        education: string;
        experiences: string;
        skills: string;
        projects: string;
        about: string;
    };
};

const headerStrings:Record<"en" | "br", HeaderStrings> = {
    en: {
        language: "Languages",
        navigation: {
            home: "Home",
            education: "Education",
            experiences: "Experiences",
            skills: "Skills",
            projects: "Projects",
            about: "About me"
        }
    },
    br: {
        language: "Idiomas",
        navigation: {
            home: "Início",
            education: "Educação",
            experiences: "Experiências",
            skills: "Habilidades",
            projects: "Projetos",
            about: "Sobre mim"
        }
    }
};

export default headerStrings;