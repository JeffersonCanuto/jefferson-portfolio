const formatWhatsAppMessage = (
    firstName:string,
    lastName:string,
    jobTitle:string,
    email:string,
    message:string
):string => {
    const formattedMessage = `From: My Portfolio \nName: ${firstName} ${lastName} \
        \nTitle: ${jobTitle} \nemail: ${email} \n \n${message}`;
    
    return formattedMessage;
}

export default formatWhatsAppMessage;