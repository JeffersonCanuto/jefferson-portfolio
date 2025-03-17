import React, { useRef, useCallback } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { getHireFieldNames } from "@/app/hire/page";

import { FaWhatsapp } from "react-icons/fa";

const hireFormSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    jobTitle: z.string(),
    email: z.string(),
    message: z.string()
});

type HireFormSchema = z.infer<typeof hireFormSchema>;

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

const HireForm:React.FC<{ language: "en" | "br" }> = ({ language }) => {
    const hireFormRef = useRef<HTMLFormElement>(null);
    
    const { register , handleSubmit } = useForm<HireFormSchema>({
        resolver: zodResolver(hireFormSchema)
    });

    const handleButtonClick = useCallback((data:HireFormSchema) => {
        const { firstName, lastName, jobTitle, email, message } = data;

        const textMessage = formatWhatsAppMessage(firstName, lastName, jobTitle, email, message);

        /* Reset input field values after form submission */
        if (hireFormRef.current) hireFormRef.current.reset();

        const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
        const encodedMessage = encodeURIComponent(textMessage);

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
                        {...register(
                            index === 0 ?
                                "firstName"
                            : index === 1 ?
                                "lastName"
                            : index === 2 ?
                                "jobTitle"
                            :
                                "email"
                        )}
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
                {...register("message")}
                placeholder={getHireFieldNames(language, "messageHolder")}
                className="h-[200px] text-[13px] xl:text-[16px]"
            />
            {/* Button */}
            <Button
                className={
                    `${language.includes("en") ? "max-w-[90px] xl:max-w-[120px]" : "max-w-[105px] xl:max-w-[140px]"} 
                        h-[42px] xl:h-[48px] mt-2 px-4 xl:px-6 text-[13px] xl:text-[16px] flex justify-between`
                }
                type="button"
                onClick={handleSubmit(handleButtonClick)}
            >
                {getHireFieldNames(language, "sendButton")}
                <FaWhatsapp className="text-[18px] xl:text-2xl"/>
            </Button>
        </form>
    );
}

export default HireForm;