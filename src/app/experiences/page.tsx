"use client";

import React, { Fragment } from "react";

import { useSelector } from "react-redux";

import { SiHyperskill } from "react-icons/si";
import { IoOpenOutline } from "react-icons/io5";

import { motion } from "framer-motion";

import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RootState } from "@/redux/store";
import ExperienceStrings, { ExperienceStringItems } from "@/strings/pages/Experiences";

import Link from "next/link";

type ExperienceItems<T> = {
    index: number;
    description: T;
    company: T;
    website: T;
    position: T;
    location: T;
    regime: T;
    duration: T;
    attributions: { index: number; title: T }[];
};

const getExperienceFieldNames = <
    L extends keyof ExperienceStringItems,
    I extends keyof ExperienceStringItems[L],
    F extends keyof ExperienceStringItems[L][I],
    S extends keyof ExperienceStringItems[L][I][F]
>(
    language: L,
    index: I,
    field: F,
    subfield: S
): ExperienceStringItems[L][I][F][S] => {
    return ExperienceStrings[language][index][field][subfield];
};

const Experiences:React.FC = () => {
    const language = (useSelector((state:RootState) => state.language.preferred)).includes("en-us") ? "en" : "br";

    const experience:{items: ExperienceItems<string>[]} = {
        items: [
            {
                index: 1,
                description: getExperienceFieldNames(language, "first", "description", "title"),
                company: "LOGICA SISTEMAS DE INFORMACAO EIRELI",
                website: "https://novaintranet.logicasistemas.com.br/",
                position: getExperienceFieldNames(language, "first", "card", "position"),
                location: getExperienceFieldNames(language, "first", "card", "location"),
                regime: getExperienceFieldNames(language, "first", "card", "regime"),
                duration: getExperienceFieldNames(language, "first", "card", "duration"),
                attributions: [
                    {
                        index: 1,
                        title: getExperienceFieldNames(language, "first", "attributions", "first")
                    },
                    {
                        index: 2,
                        title: getExperienceFieldNames(language, "first", "attributions", "second")
                    },
                    {
                        index: 3,
                        title: getExperienceFieldNames(language, "first", "attributions", "third")
                    },
                    {
                        index: 4,
                        title: getExperienceFieldNames(language, "first", "attributions", "fourth")
                    },
                    {
                        index: 5,
                        title: getExperienceFieldNames(language, "first", "attributions", "fifth")
                    },
                    {
                        index: 6,
                        title: getExperienceFieldNames(language, "first", "attributions", "sixth")
                    }
                ]
            },
            {
                index: 2,
                description: getExperienceFieldNames(language, "second", "description", "title"),
                company: "SIDIA INSTITUTO DE CIENCIA E TECNOLOGIA",
                website: "https://sidia.com/",
                position: getExperienceFieldNames(language, "second", "card", "position"),
                location: getExperienceFieldNames(language, "second", "card", "location"),
                regime: getExperienceFieldNames(language, "second", "card", "regime"),
                duration: getExperienceFieldNames(language, "second", "card", "duration"),
                attributions: [
                    {
                        index: 1,
                        title: getExperienceFieldNames(language, "second", "attributions", "first")
                    },
                    {
                        index: 2,
                        title: getExperienceFieldNames(language, "second", "attributions", "second")
                    },
                    {
                        index: 3,
                        title: getExperienceFieldNames(language, "second", "attributions", "third")
                    },
                    {
                        index: 4,
                        title: getExperienceFieldNames(language, "second", "attributions", "fourth")
                    },
                    {
                        index: 5,
                        title: getExperienceFieldNames(language, "second", "attributions", "fifth")
                    }
                ]
            }
        ]
    };

    return (
        <motion.div
            initial={{ opacity: 0 }} 
            animate={{
                opacity: 1,
                transition: { delay: 2,  duration: 0.4, ease: "easeIn" }
            }}
        >
            <div className="-mt-6 container mx-auto">
                <ScrollArea className="h-[80vh] pr-3">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item:ExperienceItems<string>) => {
                            return (
                                <div className="grid gap-10 cursor-default" key={item.index}>
                                    <span className="text-[15px] text-justify">{item.description}</span>
                                    <li className={`${item.index === 1 && language.includes("en") ? "-mt-2" : item.index === 1 && language.includes("br") ? "-mt-5" : ""} bg-[#232329] h-[235px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1`}>
                                        <h3 className="text-accent text-xl max-w-[400px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                        <div className="flex flex-col mb-5">
                                            <p className="text-[14px] min-w-[60px] min-h-[15px] text-center lg:text-left">{item.company}</p>
                                            <p 
                                                className={`max-h-screen ${language.includes("en") ? "xl:max-w-[220px]" : "xl:max-w-[240px]"} flex justify-center xl:justify-between gap-4 xl:gap-0 text-[13px] text-white/60`}
                                            >
                                                <span>{item.location}</span>
                                                <span className="text-accent text-[13px]">|</span>
                                                <span>{item.regime}</span>
                                            </p>
                                        </div>
                                        <div className="w-full flex sm:justify-center sm:gap-6 xl:justify-between">
                                            <div className="flex items-center gap-3">
                                                {/* Dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.duration}</p>
                                            </div>
                                            <Link href={item.website} target="_blank" className="relative left-3 bottom-1">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                                            <IoOpenOutline className="text-white text-[16px] group-hover:text-accent" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            Website
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </Link>
                                        </div>
                                    </li>
                                    <div className={`relative  ${item.index === 2 && language.includes("en") ? "top-1" : item.index === 2 && language.includes("br") ? "top-5" : ""} grid grid-cols-1 gap-4`}>
                                        {item.attributions.map((attribution:{index:number; title:string}) => {
                                            return (
                                                <Fragment key={attribution.index}>
                                                    <div 
                                                        className={
                                                            `${attribution.index !== item.attributions.length ? 
                                                                "text-white/60"
                                                            : 
                                                                "text-accent"
                                                            }
                                                                flex text-[14px] text-justify`
                                                        }
                                                    >
                                                        <SiHyperskill className="text-[13px] mr-3 mt-2 flex-shrink-0" />
                                                        <p>  
                                                            {attribution.title}
                                                        </p>
                                                    </div>
                                                    {attribution.index === item.attributions.length ? (
                                                        <div className={`border-b border-b-gray-600 relative ${item.index === 1 && language.includes("en") ? "top-1" : item.index === 1 && language.includes("br") ? "top-5" : ""}`}></div>
                                                    ):
                                                        <></>
                                                    }
                                                    
                                                </Fragment>
                                            )
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </ul> 
                </ScrollArea>
            </div>
        </motion.div>
    );
}

export default Experiences;