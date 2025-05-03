import React, { useEffect, useRef, useMemo, useCallback } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import formatWhatsAppMessage from "@/utils/components/hireformHelpers";
import getHireFieldNames from "@/utils/pages/hireHelpers";

const regex = {
    name: /^[\p{L}'-]+$/u,
    title: /^[\p{L}\d\s'-]+$/u,
    message: /^(?!.*<[a-zA-Z]+.*>).+$/mu
};

const HireForm:React.FC<{ language: "en" | "br" }> = ({ language }) => {
    const isMounted = useRef<boolean>(false);

    const hireFormSchema = useMemo(() => z.object({
        firstName: z.string()
            .trim()
            .min(2, getHireFieldNames(language, "nameMinError"))
            .max(15, getHireFieldNames(language, "nameMaxError"))
            .regex(regex.name, getHireFieldNames(language, "wrongFormatError")),
        lastName: z.string()
            .trim()
            .min(2, getHireFieldNames(language, "nameMinError"))
            .max(15, getHireFieldNames(language, "nameMaxError"))
            .regex(regex.name, getHireFieldNames(language, "wrongFormatError")),
        jobTitle: z.string()
            .trim()
            .min(3, getHireFieldNames(language, "titleMinError"))
            .max(40, getHireFieldNames(language, "titleMaxError"))
            .regex(regex.title, getHireFieldNames(language, "wrongFormatError")),
        email: z.string()
            .trim()
            .email(getHireFieldNames(language, "wrongFormatError")),
        message: z.string()
            .trim()
            .min(2, getHireFieldNames(language, "nameMinError"))
            .max(2000, getHireFieldNames(language, "messageMaxError"))
            .regex(regex.message, getHireFieldNames(language, "wrongFormatError"))
    }), [language]);

    type HireFormSchema = z.infer<typeof hireFormSchema>;

    const { register , handleSubmit, formState: { errors }, reset, trigger } = useForm<HireFormSchema>({
        resolver: zodResolver(hireFormSchema)
    });

    const handleButtonClick = useCallback((data:HireFormSchema) => {
        // Reset input field values after form submission
        reset();

        const { firstName, lastName, jobTitle, email, message } = data;

        const textMessage = formatWhatsAppMessage(firstName, lastName, jobTitle, email, message);

        const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
        const encodedMessage = encodeURIComponent(textMessage);

        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    }, []);
    
    /* 
        Trigger form revalidation to change error language when pressing language
        button ONLY when error exists (condition is set at the dependency array)
    */
    useEffect(() => {
        if (isMounted.current) {
            trigger();
        } else {
            isMounted.current = true;
        }
    }, [Object.keys(errors).length && language]);

    return (
        <form className="flex flex-col gap-6 px-10 py-9 bg-[#27272c] rounded-xl">
            {/* Title and Description */}
            <h3 className="text-[20px] xl:text-2xl text-accent">
                {getHireFieldNames(language, "title")}
            </h3>
            <p className="text-[13px] xl:text-[14px] text-white/60 text-justify">
                {getHireFieldNames(language, "description")} {" "}
                <span className="text-accent">WhatsApp</span>!
            </p>
            {/* Input */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
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
                                className="text-[13px] xl:text-[14px]"
                                autoFocus={index === 0 ? true : false}
                            />
                            {
                                errors[fieldName] &&
                                    <p className="flex gap-2 text-red-500 mt-2">
                                        <span className="flex items-center">
                                            <FaCircleExclamation className="text-[9px] -mt-[1px] xl:mt-0 xl:text-[13px]" />
                                        </span>
                                        <span className="flex items-center">
                                            <span className="text-[8px] xl:text-[11px]">{errors[fieldName]?.message}</span>
                                        </span>
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
                    className={`${Object.keys(errors).length ? "h-[110px]" : "h-[200px]"} text-[13px] xl:text-[16px]`}
                />
                {
                    errors["message"] &&
                        <p className="flex gap-2 text-red-500 mt-2">
                            <FaCircleExclamation className="text-[9px] mt-[3px] xl:text-[13px] xl:mt-1" />
                            <span className="text-[8px] xl:text-[11px]">{errors["message"]?.message}</span>
                        </p>
                }
            </div>
            {/* Button */}
            <Button
                className={
                    `${language.includes("en") ? "max-w-[85px] xl:max-w-[112px]" : "max-w-[100px] xl:max-w-[128px]"} 
                        h-[40px] xl:h-[46px] mt-2 px-4 xl:px-6 text-[12px] xl:text-[14px] flex justify-between`
                }
                type="button"
                onClick={handleSubmit(handleButtonClick)}
            >
                {getHireFieldNames(language, "sendButton")}
                <FaWhatsapp className="text-[16px] xl:text-xl"/>
            </Button>
        </form>
    );
}

export default HireForm;