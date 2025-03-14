export type ProjectStrings = {
    first: {
        title: string;
        category: string;
        description: string;
    }
};

const projectStrings:Record<"en" | "br", ProjectStrings> = {
    en: {
        first: {
            title: "BT Real Estate",
            category: "Fullstack Project",
            description: "BT Real Estate is an app designed to streamline business in the real estate sector, by means of establishing a straight communication channel between clients - with \
                their different needs (location, price, area, rooms, etc) - and realtors who have properties available for sale from all across the USA."
        }
    },
    br: {
        first: {
            title: "BT Imobiliária",
            category: "Projeto Fullstack",
            description: "BT Imobiliária é um aplicativo projetado para otimizar os negócios no setor imobiliário, criando um canal direto de comunicação entre clientes - com \
                suas diversas necessidades (localidade, preço, área, cômodos, etc) - e corretores que possuem propriedades à venda em todo o território dos EUA."
        }
    }
};

export default projectStrings;