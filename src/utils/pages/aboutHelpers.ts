import aboutStrings from "@/strings/pages/About";
import { AboutStrings } from "@/types/pages/About";

const getAboutFieldNames = <
    L extends keyof Record<"en" | "br", AboutStrings>, 
    F extends keyof Record<"en" | "br", AboutStrings>[L],
    I extends keyof Record<"en" | "br", AboutStrings>[L][F]
>(
    language: L,
    field: F,
    index: I
):Record<"en" | "br", AboutStrings>[L][F][I] => {
    return aboutStrings[language][field][index];
}

export default getAboutFieldNames;