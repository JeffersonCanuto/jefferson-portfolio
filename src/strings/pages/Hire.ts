export type HireStringItems<T> = {
    en: {
        title: T;
        description: T;
        inputHolderFirstName: T;
        inputHolderLastname: T;
        inputHolderJobTitle: T;
        messageHolder: T
        sendButton: T;
        phoneTitle: T;
        phoneName: T;
        addressTitle: T;
        addressName: T;
    };
    br: {
        title: T;
        description: T;
        inputHolderFirstName: T;
        inputHolderLastname: T;
        inputHolderJobTitle: T;
        messageHolder: T
        sendButton: T;
        phoneTitle: T;
        phoneName: T;
        addressTitle: T;
        addressName: T;
    }
};

const HireStrings:HireStringItems<string> = {
    en: {
        title: "Let's work together!",
        description: "Do you want me to join you in enhancing end user experience by designing and also \
            building impactful, innovative and multifunctional apps? Let's have a proper chat over WhatsApp.",
        inputHolderFirstName: "First name",
        inputHolderLastname: "Last name",
        inputHolderJobTitle: "Job title",
        messageHolder: "Type your message here...",
        sendButton: "Send",
        phoneTitle: "Phone",
        phoneName: "+5592982818369",
        addressTitle: "Address",
        addressName: "833 Ana C B Dias Street, No. 2. Salvador - BA, Brazil"
    },
    br: {
        title: "Vamos trabalhar juntos!",
        description: "Você quer que eu me junte a você para melhorar a experiência de usuários, projetando \
            e construindo aplicações impactantes, inovadoras e multifuncionais? Vamos conversar pelo WhatsApp.",
        inputHolderFirstName: "Primeiro nome",
        inputHolderLastname: "Último nome",
        inputHolderJobTitle: "Cargo",
        messageHolder: "Escreva sua mensagem aqui...",
        sendButton: "Enviar",
        phoneTitle: "Telefone",
        phoneName: "(92)98281-8369",
        addressTitle: "Endereço",
        addressName: "Rua Ana C B Dias, 833, Casa 2. Lauro de Freitas - BA, Brasil"
    }
};

export default HireStrings;