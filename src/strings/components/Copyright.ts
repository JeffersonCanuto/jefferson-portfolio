interface CopyrightStringItems {
    en: {
        text: string;
        version: string;
    };
    br: {
        text: string;
        version: string;
    };
};

const CopyrightStrings:CopyrightStringItems = {
    en: {
        text: "All rights reserved",
        version: "Version"
    },
    br: {
        text: "Todos os direitos reservados",
        version: "Versão"
    }
};

export default CopyrightStrings;