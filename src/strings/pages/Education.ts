import { EducationStrings } from "@/types/pages/Education";

const educationStrings:Record<"en" | "br", EducationStrings> = {
    en: {
        degrees: {
            first: {
                name: "Science and Technology (BSc)",
                start: "January/2013",
                end: "July/2017"
            },
            second: {
                name: "Telecommunications Engineering (BEng)",
                start: "July/2017",
                end: "Unfinished"
            }
        }
    },
    br: {
        degrees: {
            first: {
                name: "Ciências e Tecnologia (Bacharelado)",
                start: "Janeiro/2013",
                end: "Julho/2017"
            },
            second: {
                name: "Engenharia de Telecomunicações (Bacharelado)",
                start: "Julho/2017",
                end: "Incompleto"
            }
        }
    }
};

export default educationStrings;