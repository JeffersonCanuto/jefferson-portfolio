import { HireStrings } from "@/types/pages/Hire";

const hireStrings:Record<"en" | "br", HireStrings<string>> = {
    en: {
        title: "Let's work together!",
        description: "Do you want me to join you in enhancing end user experience by helping you to design, \
            build and deploy new, big, impactful, innovative and also multifunctional apps? Let's have a proper \
            chat over",
        inputHolderFirstName: "First name",
        inputHolderLastname: "Last name",
        inputHolderJobTitle: "Job title",
        inputHolderEmail: "Email",
        messageHolder: "Type your message here...",
        sendButton: "Send",
        phoneTitle: "Phone",
        phoneName: "+5592982818369",
        addressTitle: "Address",
        addressName: "833 Ana C B Dias Street, No. 2. Salvador - BA, Brazil",
        nameMinError: "It must be at least 2 characters long",
        nameMaxError: "It cannot exceed 15 characters",
        titleMinError: "It must be at least 3 characters long",
        titleMaxError: "It cannot exceed 40 characters",
        messageMaxError: "It cannot exceed 2000 characters",
        wrongFormatError: "Wrong format"
    },
    br: {
        title: "Vamos trabalhar juntos!",
        description: "Você quer que eu me junte a você para melhorar a experiência de usuários, projetando \
            e construindo aplicações impactantes, inovadoras e multifuncionais? Vamos conversar pelo WhatsApp.",
        inputHolderFirstName: "Primeiro nome",
        inputHolderLastname: "Último nome",
        inputHolderJobTitle: "Cargo",
        inputHolderEmail: "Email",
        messageHolder: "Escreva sua mensagem aqui...",
        sendButton: "Enviar",
        phoneTitle: "Telefone",
        phoneName: "(92)98281-8369",
        addressTitle: "Endereço",
        addressName: "Rua Ana C B Dias, 833, Casa 2. Salvador - BA, Brasil",
        nameMinError: "Deve possuir pelo menos 2 caracteres",
        nameMaxError: "Não pode exceder 15 caracteres",
        titleMinError: "Deve possuir pelo menos 3 caracteres",
        titleMaxError: "Não pode exceder 40 caracteres",
        messageMaxError: "Não pode exceder 2000 caracteres",
        wrongFormatError: "Formato inválido"
    }
};

export default hireStrings;