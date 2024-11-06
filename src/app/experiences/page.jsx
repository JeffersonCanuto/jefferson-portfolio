"use client";

import { FaJs, FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

{/* About data */}
const data = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Jefferson Canuto"
        },
        {
            fieldName: "Phone",
            fieldValue: "+55(92)98281-8369"
        },
        {
            fieldName: "Experience",
            fieldValue: "5+ Years"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Brazilian"
        },
        {
            fieldName: "Email",
            fieldValue: "jeffersondscanuto@gmail.com"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Portuguese"
        }
    ]
};

{/* Experience data*/}
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    items: [
        {
            company: "LÓGICA SISTEMAS DE INFORMAÇÃO EIRELI",
            position: "Fullstack Developer",
            duration: "Aug/2019 - Nov/2020"
        },
        {
            company: "SIDIA INSTITUTO DE CIÊNCIA E TECNOLOGIA",
            position: "Software Engineer",
            duration: "Apr/2021 - Jun/2024"
        }
    ]
};

{/* Education data*/}
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    items: [
        {
            company: "Lógica Sistemas de Informação Eireli",
            position: "Fullstack Developer",
            duration: "Aug/2019 ~ Nov/2020",
            activity: "Internship"
        },
        {
            company: "Sidia Instituto de Ciência e Tecnologia",
            position: "Junior Software Engineer",
            duration: "Apr/2021 ~ Mar/2023",
            activity: "Full-time job"
        },
        {
            company: "Sidia Instituto de Ciência e Tecnologia",
            position: "Middle Software Engineer",
            duration: "Mar/2023 ~ Jun/2024",
            activity: "Full-time job"
        }
    ]
};

{/* Skills data */}
const skills = {
    title: "My Skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    skillList: [
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaHtml5 />,
            name: "html5"
        },
        {
            icon: <FaCss3 />,
            name: "css3"
        },
        {
            icon: <FaReact />,
            name: "react.js"
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css"
        },
        {
            icon: <FaNodeJs />,
            name: "node.js"
        },
        {
            icon: <SiExpress />,
            name: "express.js"
        },
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
                        <TabsTrigger value="education">Education</TabsTrigger>
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
                                                <li key={item.position} className="bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
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
                        {/* Education */}
                        <TabsContent value="education" className="w-full">Education</TabsContent>
                        {/* Skills */}
                        <TabsContent value="skills" className="w-full">Skills</TabsContent>
                        {/* About */}
                        <TabsContent value="about" className="w-full">About me</TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

export default Experiences;