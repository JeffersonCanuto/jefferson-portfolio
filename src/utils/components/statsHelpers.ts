import statsStrings from "@/strings/components/Stats";
import { StatsStrings } from "@/types/components/Stats";

const getStatsText = <
    L extends string,
    T extends keyof StatsStrings
>(
    language:L, 
    text:T 
):string => {
    return statsStrings[language.includes("en-us") ? "en" : "br"][text];
}

export default getStatsText;