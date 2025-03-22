import hireStrings from "@/strings/pages/Hire";
import { HireStrings } from "@/types/pages/Hire";

export const getHireFieldNames = <
    L extends keyof Record<"en" | "br", HireStrings<string>>,
    F extends keyof Record<"en" | "br", HireStrings<string>>[L]
>(
    language:L,
    field: F
):Record<"en" | "br", HireStrings<string>>[L][F] => {
    return hireStrings[language][field];
}

export default getHireFieldNames;