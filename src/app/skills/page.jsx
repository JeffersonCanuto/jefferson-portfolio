"use client";

import { FaJs, FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";

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

import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";

const competences = {
    description: "I have been working as a Front-end/Fullstack Engineer over the past 5 years using technologies such as JavaScript, HTML5, CSS3, React.js, \
    Python, Django REST, PostgreSQL, Docker, Git and Linux. During the last year, I have been investing quite a while in learning new technologies, such as \
    TypeScript, Tailwind CSS, Next.js and Node.js, so that I can add them to my background.",
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
            name: "Django"
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
    others: "OOP/SOLID Principles | Unit testing (Jest/RTL) | Technical Leadership | Code Review | Agile (Scrum/Kanban) | English"
};

function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-[21px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <p className="w-full text-justify mx-auto xl:mx-0 cursor-default">{competences.description}</p>
                    </div>
                    <ul className="grid grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[30px]">
                        {competences.skills.map(item => {
                            return (
                                <li key={item.index}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                    {item.icon}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{item.name}</p>
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