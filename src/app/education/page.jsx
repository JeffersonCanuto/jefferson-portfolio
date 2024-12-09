"use client";

import { FaGraduationCap } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

import { Button } from "@/components/ui/button";

import Image from "next/image";
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

const certifications = [
    {
        index: 1, 
        title: "EF SET 72/100 (C2 Proficient)",
        school: "EF SET",
        icon: "/assets/logos/efset.svg",
        issuance: "Issued in Jun. 2024",
        credential: "https://cert.efset.org/y5Vos2",
        competences: [
            {
                index: 1,
                name: "English"
            }
        ]
    },
    {
        index: 2, 
        title: "Python Django Dev To Deployment",
        school: "Udemy",
        icon: "/assets/logos/udemy.svg",
        issuance: "Issued in Sept. 2024",
        credential: "https://www.udemy.com/certificate/UC-3f85dfa1-3b48-4c65-b6b7-017fa6c55ae4/",
        competences: [
            {
                index: 1,
                name: "Python"
            },
            {
                index: 2,
                name: "|"
            },
            {
                index: 3,
                name: "Django"
            }
        ]
    },
    {
        index: 3, 
        title: "Agile Fundamentals: Scrum & Kanban",
        school: "Udemy",
        icon: "/assets/logos/udemy.svg",
        issuance: "Issued in Oct. 2024",
        credential: "https://www.udemy.com/certificate/UC-da696552-b9f8-4a2e-90b6-456dadcb7191/",
        competences: [
            {
                index: 1,
                name: "Scrum"
            },
            {
                index: 2,
                name: "|"
            },
            {
                index: 3,
                name: "Kanban"
            },
            {
                index: 4,
                name: "|"
            },
            {
                index: 5,
                name: "Scrumban"
            }
        ]
    }
];

function Education() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-start py-12 xl:py-0">
            <div className="container mx-auto">
                <h3 className="w-full h-[70px] flex justify-center text-2xl text-accent">DEGREES</h3>
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
            <br />
            <div className="container mx-auto">
                <h3 className="w-full flex justify-center text-2xl text-accent mt-4">CERTIFICATIONS</h3>
                <motion.div 
                    initial={{ opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-[60px]"
                >
                    {certifications.map(certification => {
                        return (
                            <div key={certification.index} className="flex flex-row justify-between mt-12 pb-4 border-b border-b-gray-600">
                                <div className="grid grid-cols-1 gap-2">
                                    <h4 className="text-[14px] font-bold">{certification.title}</h4>
                                    <p className="text-white/60">{certification.school}</p>
                                    <p className="text-white/60">{certification.issuance}</p>
                                    <div className=" text-[15px] flex flex-row">
                                        <span className="text-white/60 mr-2">Skills:</span>
                                        <div className="flex justify-between items-end">
                                            {certification.competences.map(competence => {
                                                return (
                                                    <span key={competence.index}>
                                                        {
                                                            competence.name === "|" ? 
                                                                <span className="text-accent mx-1">|</span> 
                                                            : 
                                                                competence.name
                                                        }
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1">
                                    <figure className="flex items-end">
                                        <Image
                                            src={certification.icon}
                                            height={100}
                                            width={75}
                                            alt="certification-icon"
                                        />
                                    </figure>
                                    <a href={`${certification.credential}`} target="_blank" className="flex justify-center items-center">
                                        <Button size="sm">
                                            Open
                                            <FiExternalLink className="ml-1" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default Education;