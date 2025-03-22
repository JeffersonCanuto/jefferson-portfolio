import skillStrings from "@/strings/pages/Skills";
import { SkillStrings } from "@/types/pages/Skills";

const getSkillsFieldNames = <
    L extends string,
    F extends keyof SkillStrings
>(
    language: L,
    field: F
):string => {
    return skillStrings[language.includes("en-us") ? "en" : "br"][field];
}

export default getSkillsFieldNames;