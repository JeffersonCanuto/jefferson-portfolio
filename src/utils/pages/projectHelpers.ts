import projectStrings from "@/strings/pages/Projects";
import { ProjectStrings } from "@/types/pages/Projects";

const getProjectsFieldNames = <
    L extends string,
    F extends keyof ProjectStrings,
    T extends keyof ProjectStrings["first"]
>(
    language: L,
    field: F,
    type: T
):string => {
    return projectStrings[language.includes("en-us") ? "en" : "br"][field][type];
}

export default getProjectsFieldNames;