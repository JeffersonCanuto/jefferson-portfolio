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

const skills = {
    description: "I have been working as a Software Engineer/Fullstack Developer over the past 5 years using technologies such as JavaScript, HTML5, CSS3, \
    ReactJS, Python, Django REST, PostgreSQL, Docker, Git and Linux. During the last year, I have been investing quite a while in learning new technologies, such \
    as TypeScript, Tailwind CSS, Next.js and Node.js, so that I can merge them to my background.",
    primary: [
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
    secondary: [
        {
            index: 1,
            name: "OOP"
        },
        {
            index: 2,
            name: "|"
        },
        {
            index: 3,
            name: "SOLID"
        },
        {
            index: 4,
            name: "|"
        },
        {
            index: 5,
            name: "Unit testing (Jest/RTL)"
        },
        {
            index: 6,
            name: "|"
        },
        {
            index: 7,
            name: "Agile (Scrum/Kanban/Scrumban)"
        },
        {
            index: 8,
            name: "|"
        },
        {
            index: 9,
            name: "Communication"
        },
        {
            index: 10,
            name: "|"
        },
        {
            index: 11,
            name: "Technical Leadership"
        },
        {
            index: 12,
            name: "|"
        },
        {
            index: 13,
            name: "Code Review"
        }
    ]
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
                        <p className="w-full mx-auto xl:mx-0 cursor-default">{skills.description}</p>
                    </div>
                    <ul className="grid grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[30px]">
                        {skills.primary.map(item => {
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
                    <div className="md:flex text-white/60 w-full cursor-default">
                        <SiHyperskill className="mr-2 mt-2"/>
                        Competences: 
                        {skills.secondary.map(competence => {
                            return (
                                <span key={competence.index} className="ml-1">
                                    {competence.name}
                                </span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Skills;