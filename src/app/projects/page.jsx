"use client";

import { motion } from "framer-motion"; 
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        index: 1,
        num: '01',
        category: 'backend',
        title: "BT Real Estate app",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        stack: [
            {
                index: 1,
                name: "Python" 
            },
            {
                index: 2,
                name: "Django" 
            }
        ],
        image: "/assets/work/thumb1.png",
        live: "",
        github: "https://github.com/JeffersonCanuto/Btre-App"
    },
    {
        index: 2,
        num: '02',
        category: 'Devops',
        title: "Banco do Brasil",
        description: "E issai",
        stack: [
            {
                index: 1,
                name: "JavaScript" 
            },
            {
                index: 2,
                name: "TypeScript" 
            }
        ],
        image: "/assets/work/thumb1.png",
        live: "",
        github: "https://github.com/JeffersonCanuto/Btre-App"
    }
]; 

function Projects() {
    const [ project, setProject ] = useState(projects[0]);

    const handleSlide = swiper => {
        // Get current slide index
        const currentIndex = swiper.activeIndex;

        console.log(currentIndex);
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
                        delay: 2.4, 
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
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* Project category */}
                            <h2 className="text-[42px] text-white font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            {/* Project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* Stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={item.index} className="text-xl text-accent ">
                                            {item.name}
                                            {index !== project.stack.length - 1  && ","} 
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* Border */}
                            <div className="border border-white/20"></div>
                            {/* Buttons */}
                            <div className="flex items-center gap-4">
                                {/* Live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* Github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30} 
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlide}
                        >
                            {projects.map(item => {
                                return (
                                    <SwiperSlide 
                                        key={item.index}
                                        className="w-full"
                                    >
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* Overlay */}
                                            <div></div>
                                            {/* Image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className="object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Projects;