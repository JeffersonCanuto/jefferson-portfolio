"use client";

import { FaJs, FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiPython, SiDjango, SiDocker, SiGit } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

{/* Experience data*/}
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    items: [
        {
            index: 1,
            company: "LÓGICA SISTEMAS DE INFORMAÇÃO EIRELI",
            position: "Fullstack Developer",
            duration: "Aug/2019 - Nov/2020"
        },
        {
            index: 2,
            company: "SIDIA INSTITUTO DE CIÊNCIA E TECNOLOGIA",
            position: "Software Engineer",
            duration: "Apr/2021 - Jun/2024"
        }
    ]
};

{/* Skills data */}
const skill = {
    title: "My Skills",
    description: "I have been working as a Software Engineer/Fullstack Developer over the past 5 years using the technologies I highlighted below. As my last work experience, I worked for Samsung Electronics as \
    a Software Engineer (Web/Android) and I also got to work as a Project Leader/Technical Leader for a few projects running in Samsung LATAM branch.",
    skillList: [
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
            name: "Django"
        },
        {
            index: 11,
            icon: <SiDocker />,
            name: "Docker"
        },
        {
            index: 12,
            icon: <SiGit />,
            name: "Git"
        }
    ]
};

{/* About data */}
const about = {
    title: "About me",
    description: "I am keen to have the opportunity of working collaboratively in brand new, large scale and challenging projects within Web Development area, \
    as Frontend or even Fullstack. I expect to be able to conduct my daily tasks in a workplace with an extrovert, focused and plural team, always aiming \
    at enhancing both personal and professional capacities, based upon the definition of goals, proper solution delivery and continuous exchange of experience",
    info: [
        {
            index: 1,
            fieldName: "Name",
            fieldValue: "Jefferson Canuto"
        },
        {
            index: 2,
            fieldName: "Phone",
            fieldValue: "+55(92)98281-8369"
        },
        {
            index: 3,
            fieldName: "Experience",
            fieldValue: "5+ Years"
        },
        {
            index: 4,
            fieldName: "Nationality",
            fieldValue: "Brazilian"
        },
        {
            index: 5,
            fieldName: "Email",
            fieldValue: "jeffersondscanuto@gmail.com"
        },
        {
            index: 6,
            fieldName: "Languages",
            fieldValue: "English, Portuguese"
        }
    ]
};

function Experiences() {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ 
                opacity: 1, 
                transition: { delay: 2.4,  duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex items-center justify-center py:12 xl:py-0 "
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* Content */}
                    <div className="min-h-[70vh] w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map(item => {
                                            return (
                                                <li key={item.index} className="bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <h3 className="text-accent text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <p className="text-[13px] min-w-[60px] min-h-[60px] text-center lg:text-left">{item.company}</p>
                                                    <div className="flex items-center gap-3">
                                                        {/* Dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.duration}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul> 
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skill.title}</h3>
                                    <p className="w-full     text-white/60 mx-auto xl:mx-0">{skill.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skill.skillList.map(item => {
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
                            </div>
                        </TabsContent>
                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="w-full text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[900px] max-auto xl:mx-0">
                                    {about.info.map(item => {
                                        return (
                                            <li key={item.index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

export default Experiences;