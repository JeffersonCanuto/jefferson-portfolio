import React, { useRef, useCallback } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { getHireFieldNames } from "@/app/hire/page";

import { FaWhatsapp } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";

const regex = {
    name: /^[\p{L}'-]+$/u,
    title: /^[\p{L}\d\s'-]+$/u,
    message: /^(?!.*<[a-zA-Z]+.*>).+$/mu
};

const hireFormSchema = z.object({
    firstName: z.string()
        .trim()
        .min(2, "It must be at least 2 characters long")
        .max(15, "It cannot exceed 15 characters")
        .regex(regex.name, "Wrong format"),
    lastName: z.string()
        .trim()
        .min(2, "It must be at least 2 characters long")
        .max(15, "It cannot exceed 15 characters")
        .regex(regex.name, "Wrog format"),
    jobTitle: z.string()
        .trim()
        .min(3, "It must be at least 3 characters long")
        .max(40, "It cannot exceed 40 characters")
        .regex(regex.title, "Wrong format"),
    email: z.string()
        .trim()
        .email("Invalid email format"),
    message: z.string()
        .trim()
        .min(2, "It must be at least 2 characters long")
        .max(2000, "It cannot exceed 2000 characters")
        .regex(regex.message, "Wrong format" )
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

    const { register , handleSubmit, formState: { errors } } = useForm<HireFormSchema>({
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
                {[...Array(4)].map((_:undefined, index:number) => {
                    const fieldName = 
                        index === 0 ? 
                            "firstName"
                        : index === 1 ?
                            "lastName"
                        : index === 2 ?
                            "jobTitle"
                        :
                            "email";
                    
                    return (
                        <div key={index} className="flex flex-col">
                            <Input
                                {...register(fieldName, { required: 'This is a required field' })}
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
                            {
                                errors[fieldName] &&
                                    <p className="flex gap-2 text-red-500 mt-2">
                                        <FaCircleExclamation className="text-[8px] xl:text-[13px] mt-1" />
                                        <span className="text-[8px] xl:text-[11px]">{errors[fieldName]?.message}</span>
                                    </p>
                            }
                        </div>
                    );
                })}
            </div>
            {/* Textarea */}
            <div>
                <Textarea
                    {...register("message", { required: 'This is a required field' })}
                    placeholder={getHireFieldNames(language, "messageHolder")}
                    className="h-[200px] text-[13px] xl:text-[16px]"
                />
                {
                    errors["message"] &&
                        <p className="flex gap-2 text-red-500 mt-2">
                            <FaCircleExclamation className="text-[8px] xl:text-[13px] mt-1" />
                            <span className="text-[8px] xl:text-[11px]">{errors["message"]?.message}</span>
                        </p>
                }
            </div>
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