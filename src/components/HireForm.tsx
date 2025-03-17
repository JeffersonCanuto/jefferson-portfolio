import React, { useRef, useCallback, MouseEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { getHireFieldNames } from "@/app/hire/page";

import { FaWhatsapp } from "react-icons/fa";

const formatWhatsAppMessage = (
    firstName:string | undefined,
    lastName:string | undefined,
    jobTitle:string | undefined,
    email:string | undefined,
    message:string | undefined
):string => {
    const formattedMessage = `From: My Portfolio \nName: ${firstName} ${lastName} \
        \nTitle: ${jobTitle} \nemail: ${email} \n \n${message}`;
    
    return formattedMessage;
}

const HireForm:React.FC<{ language: "en" | "br" }> = ({ language }) => {
    const
        inputFirstNameRef = useRef<HTMLInputElement>(null),
        inputLastNameRef = useRef<HTMLInputElement>(null),
        inputJobTitleRef = useRef<HTMLInputElement>(null),
        inputEmailRef = useRef<HTMLInputElement>(null),
        textAreaMessageRef = useRef<HTMLTextAreaElement>(null),
        hireFormRef = useRef<HTMLFormElement>(null);

    const handleButtonClick = useCallback((event:MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const message = formatWhatsAppMessage(
            inputFirstNameRef.current?.value,
            inputLastNameRef.current?.value,
            inputJobTitleRef.current?.value,
            inputEmailRef.current?.value,
            textAreaMessageRef.current?.value
        );

        /* Reset input field values after form submission */
        if (hireFormRef.current) hireFormRef.current.reset();

        const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
        const encodedMessage = encodeURIComponent(message);

        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    }, []);

    return (
        <form
            className="flex flex-col gap-6 px-10 py-9 bg-[#27272c] rounded-xl"
            ref={hireFormRef}
        >
            {/* Title and Description */}
            <h3 className="text-[20px] xl:text-3xl text-accent">
                {getHireFieldNames(language, "title")}
            </h3>
            <p className="text-[13px] md:text-[16px] text-white/60 text-justify">
                {getHireFieldNames(language, "description")}
            </p>
            {/* Input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(4)].map((_:undefined, index:number) => (
                    <Input
                        key={index}
                        ref={
                            index === 0 ?
                                inputFirstNameRef
                            : index === 1 ?
                                inputLastNameRef
                            : index === 2 ?
                                inputJobTitleRef
                            : index === 3 ?
                                inputEmailRef
                            :
                                undefined
                        }
                        type={
                            index === 0 ?
                                "firstName"
                            : index === 1 ?
                                "lastName"
                            : index === 2 ?
                                "jobTitle"
                            : index === 3 ?
                                "email"
                            :
                                ""
                        }
                        placeholder={
                            index === 0 ?
                                getHireFieldNames(language, "inputHolderFirstName")
                            : index === 1 ?
                                getHireFieldNames(language, "inputHolderLastname")
                            : index === 2 ?
                                getHireFieldNames(language, "inputHolderJobTitle")
                            : index === 3 ?
                                getHireFieldNames(language, "inputHolderEmail")
                            :
                                ""
                        }
                        className="text-[13px] xl:text-[16px]"
                    />
                ))}
            </div>
            {/* Textarea */}
            <Textarea
                placeholder={getHireFieldNames(language, "messageHolder")}
                ref={textAreaMessageRef}
                className="h-[200px] text-[13px] xl:text-[16px]"
            />
            {/* Button */}
            <Button
                className={
                    `${language.includes("en") ? "max-w-[90px] xl:max-w-[120px]" : "max-w-[105px] xl:max-w-[140px]"} 
                        h-[42px] xl:h-[48px] mt-2 px-4 xl:px-6 text-[13px] xl:text-[16px] flex justify-between`
                }
                type="button"
                onClick={handleButtonClick}
            >
                {getHireFieldNames(language, "sendButton")}
                <FaWhatsapp className="text-[18px] xl:text-2xl"/>
            </Button>
        </form>
    );
}

export default HireForm;