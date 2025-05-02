"use client";

import React from "react";

import { useSelector } from "react-redux";

import {
    FaJs,
    FaHtml5,
    FaCss3,
    FaReact,
    FaNodeJs
} from "react-icons/fa";
import {
    SiTypescript,
    SiTailwindcss,
    SiNextdotjs,
    SiPython,
    SiDjango,
    SiFlask,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiLinux,
    SiHyperskill
} from "react-icons/si";

import { motion } from "framer-motion";

import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import { RootState } from "@/redux/store";
import { Competences, Competence } from "@/types/pages/Skills";
import getSkillsFieldNames from "@/utils/pages/skillsHelpers";

const Skills:React.FC = () => {
    const language = useSelector((state:RootState) => state.language.preferred);

    const competences:Competences<Competence> = {
        description: getSkillsFieldNames(language, "description"),
        skills: [
            {
                index: 1,
                icon: <FaJs />,
                name: "JavaScript"
            },
            {
                index: 2,
                icon: <SiTypescript />,
                name: "TypeScript"
            },
            {
                index: 3,
                icon: <FaHtml5 />,
                name: "HTML5"
            },
            {
                index: 4,
                icon: <FaCss3 />,
                name: "CSS3"
            },
            {
                index: 5,
                icon: <SiTailwindcss />,
                name: "Tailwind CSS"
            },
            {
                index: 6,
                icon: <FaReact />,
                name: "React"
            },
            {
                index: 7,
                icon: <SiNextdotjs />,
                name: "Next.js"
            },
            {
                index: 8,
                icon: <FaNodeJs />,
                name: "Node.js"
            },
            {
                index: 9,
                icon: <SiPython />,
                name: "Python"
            },
            {
                index: 10,
                icon: <SiDjango />,
                name: "Django REST"
            },
            {
                index: 11,
                icon: <SiFlask />,
                name: "Flask"
            },
            {
                index: 12,
                icon: <SiPostgresql />,
                name: "PostgreSQL"
            },
            {
                index: 13,
                icon: <SiDocker />,
                name: "Docker"
            },
            {
                index: 14,
                icon: <SiGit />,
                name: "Git"
            },
            {
                index: 15,
                icon: <SiLinux />,
                name: "Linux"
            }
        ],
        others: getSkillsFieldNames(language, "competences")
    };
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" }
            }}
        >
            <div className="-mt-7 container mx-auto">
                <div className="flex flex-col gap-[18px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <p className="w-full text-justify mx-auto xl:mx-0 cursor-default">{competences.description}</p>
                    </div>
                    <ul className="grid grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[18px]">
                        {competences.skills.map((item:Competence) => {
                            return (
                                <li key={item.index}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="cursor-default w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                    {item.icon}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent className="cursor-default">
                                                {item.name}
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </li>
                            )
                        })}  
                    </ul>
                    <div className="-mt-1 w-full text-[14px] text-white/60 cursor-default">
                        <div className="flex items-center">
                            <SiHyperskill className="mr-2 flex-shrink-0"/>
                            <p className="ml-1 text-justify">
                                {
                                    language.includes("en-us") ?
                                        "Competences"
                                    :
                                        "Competências"
                                }
                                :
                                <span className="ml-1">
                                    {competences.others}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Skills;