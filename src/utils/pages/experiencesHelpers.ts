import experienceStrings from "@/strings/pages/Experiences";
import { ExperienceStrings } from "@/types/pages/Experiences";

const getExperienceFieldNames = <
    L extends keyof Record<"en" | "br", ExperienceStrings>,
    I extends keyof Record<"en" | "br", ExperienceStrings>[L],
    F extends keyof Record<"en" | "br", ExperienceStrings>[L][I],
    S extends keyof Record<"en" | "br", ExperienceStrings>[L][I][F]
>(
    language: L,
    index: I,
    field: F,
    subfield: S
):Record<"en" | "br", ExperienceStrings>[L][I][F][S] => {
    return experienceStrings[language][index][field][subfield];
}

export default getExperienceFieldNames;