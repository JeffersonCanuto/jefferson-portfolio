type DisclaimerStrings = {
    text: string;
    version: string;
};

const disclaimerStrings:Record<"en" | "br", DisclaimerStrings> = {
    en: {
        text: "All rights reserved",
        version: "Version"
    },
    br: {
        text: "Todos os direitos reservados",
        version: "Versão"
    }
};

export default disclaimerStrings;