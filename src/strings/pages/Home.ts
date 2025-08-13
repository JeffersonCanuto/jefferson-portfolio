import { HomeStrings } from "@/types/pages/Home";

const homeStrings:Record<"en" | "br", HomeStrings> = {
    en: {
        title: "Software Engineer",
        introduction: "I am a Software Engineer with 5+ years of experience designing, building, deploying and also maintaining \
            reliable, scalable and flexible web applications. I have worked with many different technologies throughout my career, \
            always aiming at leveraging them to deliver software solutions that can transform lives and businesses. Feel free \
            to look around to learn more about me",
        openButton: "Open Resume" ,
        downloadButton: "Download Resume",
        socialMedia: "Social Media"
    },
    br: {
        title: "Engenheiro de Software",
        introduction: "Eu sou um Engenheiro de Software com 5+ anos de experiência projetando, construindo, implantando e mantendo \
            aplicações web confiáveis, escaláveis e flexíveis. Ao longo da minha carreira, trabalhei com diversas tecnologias, sempre \
            visando utilizá-las para entregar soluções de software que possam transformar vidas e negócios. Fique à vontade para \
            explorar e saber mais",
        openButton: "Abrir Curriculo" ,
        downloadButton: "Baixar Curriculo",
        socialMedia: "Redes Sociais"
    }
};

export default homeStrings;