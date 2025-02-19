"use client";

import React from "react";

import { SiHyperskill } from "react-icons/si";
import { IoOpenOutline } from "react-icons/io5";

import { motion } from "framer-motion";

import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import Link from "next/link";

type ExperienceItems<T> = {
    index: number;
    description: T;
    company: T;
    website: T;
    position: T;
    location: T;
    regime: T;
    duration: T;
    attributions: { index: number; title: T }[];
};

const experience:{items: ExperienceItems<string>[]} = {
    items: [
        {
            index: 1,
            description: "In 2019, I started my career as a Software Engineer working as a Frontend Developer for LOGICA SISTEMAS DE INFORMACAO EIRELI, which is a small-sized \
                company that provides services for the Telecom industry. As my main attributions, I was in charge of designing, building and maintaining entire modules \
                (Frontend and Backend) of their main business product, a SaaS solution called Logica Flow. Broadly speaking, I was responsible for maintaining existing \
                APIs designed to collect internet data traffic (IPv4/IPv6 and CDN/Non-CDN) coming from different Internet Service Providers (ISPs), process them in the \
                Backend and display them in the Frontend by building multiple Dashboards - containing multiple Charts, Graphs and Tables. Furthermore, I was responsible \
                for designing, building and maintaining microservices to perform periodical data transfer between storage units and VACUUM in some db tables. At last, I \
                was in charge of designing, building and maintaining a full feature that was meant to generate custom PDF report documents periodically for each client \
                (ISP) based upon their own data traffic, enabling efficient and precise data monitoring, analysis and visualization in a real-time basis.",
            company: "LOGICA SISTEMAS DE INFORMACAO EIRELI",
            website: "https://novaintranet.logicasistemas.com.br/",
            position: "Frontend Developer (Web)",
            location: "Natal, RN, Brazil",
            regime: "On-Site",
            duration: "Aug/2019 - Nov/2020",
            attributions: [
                {
                    index: 1,
                    title: "Implementation of multiple Dashboards to monitor IPv4/IPv6 and CDN/Non-CDN data traffic coming from different ISPs."
                },
                {
                    index: 2,
                    title: "Implementation of APIs designed to collect and process IPv4/IPv6 and CDN/Non-CDN data traffic coming from different ISPs."
                },
                {
                    index: 3,
                    title: "Implementation of Microservices to perform periodical data transfer between unit storages and VACUUM in some specific Database tables."
                },
                {
                    index: 4,
                    title: "Implementation of a full feature (Frontend and Backend) to generate automatic reports from IPv4/IPv6 and CDN/Non-CDN data traffic."
                },
                {
                    index: 5,
                    title: "Implementation of other full features (Frontend and Backend) for the company's primary SaaS solution called Logica Flow."
                },
                {
                    index: 6,
                    title: "Skills: JavaScript | HTML5 | CSS3 | React.js | Chart.js | Redux | Python | Django REST | PostgreSQL | Docker | Git | Linux"
                }
            ]
        },
        {
            index: 2,
            description: "In 2021, I joined SIDIA (Samsung Electronics' R&D center in Latin America) as a Frontend Software Engineer, working with both Web and Android. As my \
                main attribution, I was the Principal Frontend Engineer and Technical Leader for the Automation Team, responsible for designing, building and maintaining \
                internal software tools (TRO.IA, PLMN and PLM Reporter). Furthermore, I was responsible for conducting bugfixes for Samsung Android Native apps (Dialer, \
                InCallUI, Contacts, Messages, etc) and managing and implementing LATAM telephony operator requirements. In 2024, I started working as the Project Leader \
                for the delivery of STIR/Shaken and RCD solutions in Brazil from Samsung side. For this major project, I worked alongside representatives of other leading \
                manufacturers (Google, Apple, Motorola, Positivo, etc), Brazilian telephony operators (TIM, Claro and Vivo) and client (ANATEL), to discuss all technical \
                features and challenges. On the other hand, I was also in charge of intermediating the discussions between client (Brazil) and Samsung part (UX and Dev teams \
                and Product Owners in HQ), assist with the trials after each deliverable iteration and analyze Android logs and debug the code whenever needed.",
            company: "SIDIA INSTITUTO DE CIENCIA E TECNOLOGIA",
            website: "https://sidia.com/",
            position: "Frontend Engineer (Web/Android)",
            location: "Manaus, AM, Brazil",
            regime: "On-Site",
            duration: "Apr/2021 - Jun/2024",
            attributions: [
                {
                    index: 1,
                    title: "Principal Frontend Engineer and Technical Leader for the Automation Team (Tools: PLM Reporter, TRO.IA and PLMN/MVNO)."
                },
                {
                    index: 2,
                    title: "Frontend Engineer responsible for designing PLM Reporter tool from scratch and implementing client main pages and features (Login page with \
                        JWT Auth, Dashboards page with multiple Graphs, Charts and Tables, Statistics page, Load .xml files, User profile, etc)."
                },
                {
                    index: 3,
                    title: "Project Leader for the implementation and delivery of STIR/Shaken and RCD solutions in Brazil, representing Samsung side."
                },
                {
                    index: 4,
                    title: "Bugfixes for Samsung Android native apps (Dialer, InCallUI, Contacts, Messages), including Android log analysis."
                },
                {
                    index: 5,
                    title: "Skills: JavaScript | TypeScript | HTML5 | CSS3 | React | Chart.js | Redux/ContextAPI | Material UI | Python | Django REST | PostgreSQL | \
                        Android (Java) | QuickBuild | Docker | Git | P4V | Swarm | Linux | Agile (Scrum/Kanban)"
                }
            ]
        }
    ]
};

const Experiences:React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }} 
            animate={{
                opacity: 1, 
                transition: { delay: 2,  duration: 0.4, ease: "easeIn" }
            }}
        >
            <div className="-mt-6 container mx-auto">
                <ScrollArea className="h-[80vh] pr-3">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item:ExperienceItems<string>) => {
                            return (
                                <div className="grid gap-10 cursor-default" key={item.index}>
                                    <span className="text-[15px] text-justify">{item.description}</span>
                                    <li className={`${item.index === 1 && "-mt-5"} bg-[#232329] h-[235px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1`}>
                                        <h3 className="text-accent text-xl max-w-[400px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                        <div className="flex flex-col mb-5">
                                            <p className="text-[14px] min-w-[60px] min-h-[15px] text-center lg:text-left">{item.company}</p>
                                            <p className="max-h-screen xl:max-w-[225px] flex justify-center xl:justify-between gap-4 xl:gap-0 text-[13px] text-white/60">
                                                <span>{item.location}</span>
                                                <span className="w-[5px] h-[5px] rounded-full bg-accent mt-[10px]"></span>
                                                <span>{item.regime}</span>
                                            </p>
                                        </div>
                                        <div className="w-full flex sm:justify-center sm:gap-6 xl:justify-between">
                                            <div className="flex items-center gap-3">
                                                {/* Dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.duration}</p>
                                            </div>
                                            <Link href={item.website} target="_blank" className="relative left-3 bottom-1">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                                            <IoOpenOutline className="text-white text-[16px] group-hover:text-accent" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            Website
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </Link>
                                        </div>
                                    </li>
                                    <div className={`${item.index === 2 && "relative top-4"} grid grid-cols-1 gap-4`}>
                                        {item.attributions.map((attribution:{index:number; title:string}) => {
                                            return (
                                                <>
                                                    <div 
                                                        key={attribution.index} 
                                                        className={
                                                            `${attribution.index !== item.attributions.length ? 
                                                                "text-white/60"
                                                            : 
                                                                "text-accent"
                                                            }
                                                                flex text-[14px] text-justify`
                                                        }
                                                    >
                                                        <SiHyperskill className="text-[13px] mr-3 mt-2 flex-shrink-0" />
                                                        <p>  
                                                            {attribution.title}
                                                        </p>
                                                    </div>
                                                    {attribution.index === item.attributions.length ? (
                                                        <div className={`border-b border-b-gray-600 ${item.index === 1 && "relative top-4"}`}></div>
                                                    ):
                                                        <></>
                                                    }
                                                    
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </ul> 
                </ScrollArea>
            </div>
        </motion.div>
    );
}

export default Experiences;