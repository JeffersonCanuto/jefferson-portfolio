"use client";

import React, { ReactNode } from "react";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import { FaWhatsapp, FaPhoneAlt, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { RootState } from "@/redux/store";

import Link from "next/link";

import HireStrings, { HireStringItems } from "@/strings/pages/Hire";

interface InfoItems {
    index: number;
    icon: ReactNode;
    title: string;
    description: string;
};

const getHireFieldNames = <
    L extends keyof HireStringItems<string>,
    F extends keyof HireStringItems<string>[L]
>(
    language:L,
    field: F
):HireStringItems<string>[L][F] => {
    return HireStrings[language][field];
} 

const Hire:React.FC = () => {
    const language = (useSelector((state:RootState) => state.language.preferred)) === "en-us" ? "en" : "br";
    
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
            className="py-6"
        >
            <div className="container mx-auto cursor-default">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Form */}
                    <div className="xl:h-[54%] order-2 xl:order-none ">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">
                                {getHireFieldNames(language, "title")}
                            </h3>
                            <p className="text-white/60 text-justify">
                                {getHireFieldNames(language, "description")}
                            </p>
                            {/* Input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstName" placeholder={getHireFieldNames(language, "inputHolderFirstName")} />
                                <Input type="lastName" placeholder={getHireFieldNames(language, "inputHolderLastname")} />
                                <Input type="jobTitle" placeholder={getHireFieldNames(language, "inputHolderJobTitle")} />
                                <Input type="email" placeholder="Email"/>
                            </div>
                            {/* Textarea */}
                            <Textarea className="h-[200px]" placeholder={getHireFieldNames(language, "messageHolder")} />
                            {/* Button */}
                            <Button size="md" className={`${language.includes("en") ? "max-w-[120px]" : "max-w-[140px]"} flex justify-between`}>
                                {getHireFieldNames(language, "sendButton")}
                                <FaWhatsapp className="text-2xl text-[#000]"/>
                            </Button>
                        </form>
                    </div>
                    {/* Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {infos.map((info:InfoItems) => {
                                return (
                                    <li key={info.index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                                            <div className="text-[28px]">
                                                {info.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{info.title}</p>
                                            <h3 className="text-xl hover:text-accent">
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