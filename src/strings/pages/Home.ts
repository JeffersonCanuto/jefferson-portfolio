interface HomeStringItems {
    en: {
        title:string;
        introduction:string;
        openButton:string;
        downloadButton: string;
        socialMedia: string;
    };
    br: {
        title:string;
        introduction:string;
        openButton:string;
        downloadButton:string;
        socialMedia: string;
    };
};

const HomeStrings:HomeStringItems = {
    en: {
        title: "Software Engineer",
        introduction: "I am a Frontend/Fullstack Engineer with extensive experience in designing and building \
        web applications for many purposes and using different technologies. Feel free to explore the other \
        sections to learn more about my education, experiences, skills, projects and about me as well, or even \
        reach out to me through one of my social media channels below",
        openButton: "Open Resume" ,
        downloadButton: "Download Resume",
        socialMedia: "Social Media"
    },
    br: {
        title: "Engenheiro de Software",
        introduction: "Sou um Engenheiro Frontend/Fullstack, com vasta experiência em projetar e construir \
        aplicações web para muitos propósitos e utilizando várias tecnologias. Sinta-se à vontade para \
        explorar as outras seções, para saber mais sobre a minha educação, experiências, habilidades,  \
        projetos e sobre mim, ou até mesmo entrar em contato comigo através das redes sociais abaixo",
        openButton: "Abrir Curriculo" ,
        downloadButton: "Baixar Curriculo",
        socialMedia: "Redes Sociais"
    }
};

export default HomeStrings;