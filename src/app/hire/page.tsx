"use client";

import React, { useRef, useCallback, MouseEvent } from "react";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import {
    FaWhatsapp,
    FaPhoneAlt,
    FaLinkedinIn,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import hireStrings from "@/strings/pages/Hire";
import { HireStrings, InfoItems } from "@/types/pages/Hire";
import { RootState } from "@/redux/store";

import Link from "next/link";

const getHireFieldNames = <
    L extends keyof Record<"en" | "br", HireStrings<string>>,
    F extends keyof Record<"en" | "br", HireStrings<string>>[L]
>(
    language:L,
    field: F
):Record<"en" | "br", HireStrings<string>>[L][F] => {
    return hireStrings[language][field];
} 

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

const Hire:React.FC = () => {
    const language = (useSelector((state:RootState) => state.language.preferred)) === "en-us" ? "en" : "br";

    const
        inputFirstNameRef = useRef<HTMLInputElement>(null),
        inputLastNameRef = useRef<HTMLInputElement>(null),
        inputJobTitleRef = useRef<HTMLInputElement>(null),
        inputEmailRef = useRef<HTMLInputElement>(null),
        textAreaMessageRef = useRef<HTMLTextAreaElement>(null);
    
    const infos:InfoItems[] = [
        {
            index: 1,
            icon: <FaLinkedinIn />,
            title: "LinkedIn",
            description: "https://www.linkedin.com/in/jefferson-canuto-aa3b46163/"
        },
        {
            index: 2,
            icon: <FaEnvelope />,
            title: "Email",
            description: "jeffersondscanuto@gmail.com"
        },
        {
            index: 3,
            icon: <FaPhoneAlt />,
            title: getHireFieldNames(language, "phoneTitle"),
            description: getHireFieldNames(language, "phoneName")
        },
        {
            index: 4,
            icon: <FaMapMarkerAlt />,
            title: getHireFieldNames(language, "addressTitle"),
            description: getHireFieldNames(language, "addressName")
        },
    ];

    const handleSendWhatsAppMessageButton = useCallback((event:MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const message = formatWhatsAppMessage(
            inputFirstNameRef.current?.value,
            inputLastNameRef.current?.value,
            inputJobTitleRef.current?.value,
            inputEmailRef.current?.value,
            textAreaMessageRef.current?.value
        );
        
        const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
        const encodedMessage = encodeURIComponent(message);

        window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0}}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
            className="-mt-8 xl:-mt-12 py-6"
        >
            <div className="container mx-auto cursor-default">
                <div className="flex flex-col xl:flex-row gap-[15px] xl:gap-[30px]">
                    {/* Form */}
                    <div className="xl:h-[54%] order-2 xl:order-none ">
                        <form className="flex flex-col gap-6 px-10 py-9 bg-[#27272c] rounded-xl">
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
                                onClick={handleSendWhatsAppMessageButton}
                            >
                                {getHireFieldNames(language, "sendButton")}
                                <FaWhatsapp className="text-[18px] xl:text-2xl"/>
                            </Button>
                        </form>
                    </div>
                    {/* Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {infos.map((info:InfoItems) => {
                                return (
                                    <li key={info.index} className="flex items-center gap-6">
                                        <div className="w-[62px] h-[62px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                                            <div className="text-[21px] xl:text-[28px]">
                                                {info.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[12px] xl:text-[16px] text-white/60">{info.title}</p>
                                            <h3 className="text-[12px] xl:text-xl hover:text-accent">
                                                {info.index === 1 ? (
                                                    <Link href={`${info.description}`} target="_blank">
                                                        {info.description}
                                                    </Link>
                                                ) : (
                                                    info.description
                                                )}
                                            </h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Hire;