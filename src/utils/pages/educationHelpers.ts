import educationStrings from "@/strings/pages/Education";
import { EducationStrings } from "@/types/pages/Education";

const getDegreeFieldNames = <
    L extends string,
    I extends keyof EducationStrings["degrees"],
    F extends keyof EducationStrings["degrees"]["first" | "second"]
>(
    language:L,
    index: I,
    field: F
):string => {
    return educationStrings[language.includes("en-us") ? "en" : "br"]["degrees"][index][field];
}

export default getDegreeFieldNames;