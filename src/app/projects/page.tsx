"use client";

import React, { useState, ReactNode } from "react";

import {
    SiPython,
    SiDjango,
    SiPostgresql,
    SiJinja,
    SiDocker
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";

import { motion } from "framer-motion";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Link from "next/link";
import Image from "next/image";

type StackItems = {
    index: number;
    name: string;
    icon: ReactNode;
};

type ProjectItems<T, U> = {
    index: number;
    num: T;
    category: T;
    type: T;
    title: T;
    description: T;
    stack: U[],
    image: T;
    github: T;
};

const projects:ProjectItems<string,StackItems>[] = [
    {
        index: 1,
        num: '01',
        category: 'fullstack',
        type: 'SSR',
        title: "BT Real Estate",
        description: "BT Real Estate is a business app designed to be a platform that can connect customers having their needs and realtors who hold properties available \
        for sale in all across the USA.",
        stack: [
            {
                index: 1,
                name: "Python",
                icon: <SiPython />
            },
            {
                index: 2,
                name: "Django",
                icon: <SiDjango />
            },
            {
                index: 3,
                name: "Jinja",
                icon: <SiJinja />
            },
            {
                index: 4,
                name: "PostgreSQL",
                icon: <SiPostgresql />
            },
            {
                index: 5,
                name: "Docker",
                icon: <SiDocker />
            }
        ],
        image: "/assets/projects/btreapp.png",
        github: "https://github.com/JeffersonCanuto/Btre-App"
    }
];

const Projects:React.FC = () => {
    const [ project, setProject ] = useState<ProjectItems<string,StackItems>>(projects[0]);

    const handleSlide = (swiper:SwiperType) => {
        // Get current slide index
        const currentIndex = swiper.activeIndex;
        
        // Update project state based on current slide index
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section 
            initial={{ opacity: 0 }} 
            animate={
                { 
                    opacity: 1, 
                    transition: { 
                        delay: 2, 
                        duration: 0.4, 
                        ease: "easeIn"
                    }
                }
            }
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* Outline number */}
                            <div className="flex flex-row gap-3">
                                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                    {project.num}
                                </div>
                                <div className="w-full text-4xl font-extrabold flex justify-center items-center">
                                    {project.title}
                                </div>
                            </div>
                            {/* Project category */}
                            <h2 className="text-[35px] text-white font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">{project.category} project {`(${project.type})`}</h2>
                            {/* Project description */}
                            <p className="text-white/60 text-justify">{project.description}</p>
                            {/* Stack */}
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4 text-[16px] md:text-xl text-white/60">
                                    Technologies:
                                    {project.stack.map((item:StackItems) => {
                                        return (
                                            <TooltipProvider key={item.index}>
                                                <Tooltip>
                                                    <TooltipTrigger className="cursor-default hover:text-accent">
                                                        {item.icon}
                                                    </TooltipTrigger>
                                                    <TooltipContent className="cursor-default">
                                                        {item.name}
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        )
                                    })}
                                </div>
                                {/* Github project button */}
                                <>
                                    <Link href={project.github} target="_blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-white text-xl md:text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>GitHub</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                </>
                            </div>
                            {/* Border */}
                            <div className="border border-white/20"></div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30} 
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlide}
                        >
                            {projects.map((item:ProjectItems<string,StackItems>) => {
                                return (
                                    <SwiperSlide 
                                        key={item.index}
                                        className="w-full"
                                    >
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* Overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* Image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={item.image}
                                                    fill
                                                    className="object-cover"
                                                    alt="project-image"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* Slider buttons */}
                            {projects.length > 1 && 
                                <WorkSliderBtns 
                                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                />
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Projects;