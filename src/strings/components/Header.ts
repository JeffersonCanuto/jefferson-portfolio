
export interface HeaderStringItems {
    en: {
        language: string;
        navigation: {
            home: string;
            education: string;
            experiences: string;
            skills: string;
            projects: string;
            about: string;
            hire: string;
        };
    };
    br: {
        language: string;
        navigation: {
            home: string;
            education: string;
            experiences: string;
            skills: string;
            projects: string;
            about: string;
            hire: string;
        };
    };
};

const HeaderStrings:HeaderStringItems = {
    en: {
        language: "Languages",
        navigation: {
            home: "Home",
            education: "Education",
            experiences: "Experiences",
            skills: "Skills",
            projects: "Projects",
            about: "About me",
            hire: "Hire"
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
            about: "Sobre mim",
            hire: "Contratar"
        }
    }
};

export default HeaderStrings;