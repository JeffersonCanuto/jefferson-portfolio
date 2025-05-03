"use client";

import React from "react";

import { useSelector } from "react-redux";

import {
    FaLinkedinIn,
    FaGithub,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt
} from "react-icons/fa";

import { motion } from "framer-motion";

import HireForm from "@/components/HireForm";
import { RootState } from "@/redux/store";
import { InfoItems } from "@/types/pages/Hire";
import getHireFieldNames from "@/utils/pages/hireHelpers";

import Link from "next/link";

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
            icon: <FaGithub />,
            title: "GitHub",
            description: "https://github.com/JeffersonCanuto"
        },
        {
            index: 3,
            icon: <FaEnvelope />,
            title: "Email",
            description: "jeffersondscanuto@gmail.com"
        },
        {
            index: 4,
            icon: <FaPhoneAlt />,
            title: getHireFieldNames(language, "phoneTitle"),
            description: getHireFieldNames(language, "phoneName")
        },
        {
            index: 5,
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
            className="-mt-8 xl:-mt-12 py-6"
        >
            <div className="container mx-auto cursor-default">
                <div className="flex flex-col xl:flex-row gap-[15px] xl:gap-[30px]">
                    {/* Form */}
                    <div className="xl:h-[54%] order-2 xl:order-none ">
                        <HireForm language={language} />
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
                                            <h3 className="text-[12px] xl:text-xl">
                                                {[1, 2].includes(info.index) ? (
                                                    <Link href={`${info.description}`} className="hover:text-accent" target="_blank">
                                                        {info.description}
                                                    </Link>
                                                ):(
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