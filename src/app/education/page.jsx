"use client";

import { FaGraduationCap } from "react-icons/fa6";
import Link from "next/link";

import { motion } from "framer-motion";

const education = [
    {
        index: "01",
        course: "Baccalaureate in Science and Technology",
        university: "Federal University of Rio Grande do Norte",
        start: "January/2013",
        end: "July/2017"
    },
    {
        index: "02",
        course: "Baccalaureate in Telecommunications Engineering",
        university: "Federal University of Rio Grande do Norte",
        start: "August/2017",
        end: "Unfinished"
    }
]

function Education() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0}} 
                    animate={{ 
                        opacity: 1, 
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {education.map(ed => {
                        return (
                            <div className="flex flex-1 flex-col justify-center gap-6 group cursor-default" key={ed.course}>
                                {/* Top */} 
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{ed.index}</div>
                                    <div className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center">
                                        <FaGraduationCap className="text-primary text-3xl "/>
                                    </div>
                                </div>
                                {/* Course */}
                                <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{ed.course}</h2>
                                {/* University */}
                                <p className="font-bold text-white group-hover:text-accent transition-all duration-500">{ed.university}</p>
                                {/* Start and End dates */}
                                <p className="text-white/60 flex justify-between items-start">
                                    <span>Start: {ed.start}</span>
                                    <span>End: {ed.end}</span>
                                </p>
                                {/* Border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default Education;