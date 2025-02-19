"use client";

import React, { ReactNode } from "react";

import {
    FaJs,
    FaHtml5,
    FaCss3,
    FaReact,
    FaNodeJs
} from "react-icons/fa";
import { 
    SiExpress,
    SiTailwindcss,
    SiNextdotjs,
    SiTypescript,
    SiPython,
    SiDjango,
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

type Competence = {
    index: number;
    icon: ReactNode;
    name: string;
};

type CompetenceItems<T> = {
    description: string;
    skills: T[];
    others: string;
};

const competences:CompetenceItems<Competence> = {
    description: "I have been working as a Frontend/Fullstack Engineer over the past 5 years using technologies such as JavaScript, TypeScript, HTML5, CSS3, React, \
    Python, Django REST, PostgreSQL, Docker, Git and Linux. Since the last year, I have been investing quite a while in learning new technologies, such as Tailwind CSS, \
    Next.js and Node.js, so that I can add them to my background.",
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
            icon: <SiExpress />,
            name: "Express"
        },
        {
            index: 10,
            icon: <SiPython />,
            name: "Python"
        },
        {
            index: 11,
            icon: <SiDjango />,
            name: "Django REST"
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
    others: "OOP/SOLID Principles | Unit testing (Jest/RTL) | Agile (Scrum/Kanban) | Technical Leadership | Code Review | English (C1)"
};

const Skills:React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" }
            }}
        >
            <div className="-mt-3 container mx-auto">
                <div className="flex flex-col gap-[21px]">
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
                    <div className="w-full grid grid-cols-1 gap-4 text-white/60 cursor-default">
                        <div className="flex">
                            <SiHyperskill className="mr-2 mt-2"/>
                            <p className="ml-1 text-justify">
                                Competences:
                                <span className="ml-1 text-[15px]">
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