import { HeaderStrings } from "@/types/components/Header";

const getHeaderFieldNames = <
    L extends string,
    H extends Record<"en" | "br", HeaderStrings>,
    T extends keyof HeaderStrings["navigation"]
>(
    language:L,
    headerStrings:H,
    target:T
):string => {
    return headerStrings[language.includes("en-us") ? "en" : "br"].navigation[target];
};

export default getHeaderFieldNames;