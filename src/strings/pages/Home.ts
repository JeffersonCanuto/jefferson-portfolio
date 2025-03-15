import { HomeStrings } from "@/types/pages/Home";

const homeStrings:Record<"en" | "br", HomeStrings> = {
    en: {
        title: "Software Engineer",
        introduction: "I am a Frontend/Fullstack Software Engineer quite experienced in designing and building \
            web apps for many purposes and using different technologies. Feel free to explore the other sections to \
            learn more about my education, experiences, skills, projects and about me as well, or even reach out to \
            me through one of my social media channels below",
        openButton: "Open Resume" ,
        downloadButton: "Download Resume",
        socialMedia: "Social Media"
    },
    br: {
        title: "Engenheiro de Software",
        introduction: "Eu sou um Engenheiro de Software Frontend/Fullstack, com vasta experiência em projetar \
            e construir aplicações web para muitos propósitos e utilizando várias tecnologias. Sinta-se à vontade \
            para explorar as outras seções, para saber mais sobre a minha educação, experiências, habilidades, projetos \
            e sobre mim, ou entrar em contato comigo através das redes sociais abaixo",
        openButton: "Abrir Curriculo" ,
        downloadButton: "Baixar Curriculo",
        socialMedia: "Redes Sociais"
    }
};

export default homeStrings;