"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import { SiHyperskill } from "react-icons/si";

const experience = {
    items: [
        {
            index: 1,
            description: "In 2019, I started my career as a Fullstack Developer working at Logica, which is a small-sized company that provides services to the Telecommunications \
            industry. As my primary attribution, I was in charge of designing and building entire modules (Backend and Frontend) of their main business product, a SaaS called Logica Flow. \
            Broadly speaking, I had to maintain existing APIs designed to collect internet data traffic (IPv4/IPv6 and CDN/Non-CDN) coming from different Internet Service Providers (ISPs), \
            process/format them and display the post-processed/formatted data into Dashboards, by means of Charts, Graphs and Tables. This way, all the clients (ISPs) could efficiently visualize \
            and monitor their own data traffic on a real-time basis, in addition to requesting customized periodical reports, based upon their own processed traffic data.",
            company: "LOGICA SISTEMAS DE INFORMAÇÃO EIRELI",
            position: "Fullstack Developer",
            duration: "Aug/2019 - Nov/2020",
            attributions: [
                {
                    index: 1,
                    title: "Development of Dashboards to monitor IPv4 and IPv6 data traffic collected from CDN distributors."
                },
                {
                    index: 2,
                    title: "Maintenance of APIs designed to collect IPv4 and IPv6 data traffic from CDN distributors."
                },
                {
                    index: 3,
                    title: "Implementation of Microservices to perform periodical data transfer between different storage units."
                },
                {
                    index: 4,
                    title: "Implementation of Microservices to perform periodical VACUUM in determined database tables."
                },
                {
                    index: 5,
                    title: "Implementation of a full Feature to generate periodical reports from IPv4 and IPv6 data traffic from CDN distributors."
                },
                {
                    index: 6,
                    title: "Skills: JavaScript | HTML5 | CSS3 | ReactJS | Python | Django REST | PostgreSQL | Git | Docker | Linux"
                }
            ]
        },
        {
            index: 2,
            description: "In 2021, I joined Sidia as a Software Engineer working with both Web and Android. FYI, Sidia is Samsung Electronics' R&D center in Latin America. As my main \
            attributions, I was in charge of conducting bugfixes for Samsung Android Native apps (Messages, Contacts, Dialer, etc), managing and implementing LATAM telephony \
            operator requirements and leading (and coding as well) in a squad responsible for automation tools. In 2023, I got the opportunity to work as the Project Leader for \
            the delivery of STIR/Shaken and RCD solutions in Brazil from Samsung side. For this major project, I worked alongside representatives of other manufacturers (Google, Apple, Motorola, \
            Positivo, etc), all Brazilian telecom operators (TIM, Claro and Vivo) and our main client (ANATEL - Brazilian Telecom Regulatory Agency) to deliver both solutions with unified requirements \
            between manufacturers and the operators.",
            company: "SIDIA INSTITUTO DE CIÊNCIA E TECNOLOGIA",
            position: "Software Engineer",
            duration: "Apr/2021 - Jun/2024",
            attributions: [
                {
                    index: 1,
                    title: "Bugfixes, including Android log analysis from App to Framework layer, for Samsung Latin Products."
                },
                {
                    index: 2,
                    title: "Management and implementation of LATAM operator requirements for Samsung Latin Products."
                },
                {
                    index: 3,
                    title: "Project Leader for the delivery of STIR/Shaken and RCD solutions in Brazil from Samsung side."
                },
                {
                    index: 4,
                    title: "Technical Leader and Fullstack Developer on Automation Team (Products: PLM Reporter, TRO.IA and PLMN/MVNO)."
                },
                {
                    index: 5,
                    title: "Skills: JavaScript | HTML5 | CSS3 | ReactJS | Redux/ContextAPI | MaterialUI | Python | Django | PostgreSQL | RabbitMQ/Celery | Android (Java) | QuickBuild | Docker | Git | P4V | Swarm | Linux | Agile (Scrum/Kanban)"
                }
            ]
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
        >
            <div className="container mx-auto">
                <ScrollArea className="h-[80vh] pr-5">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map(item => {
                            return (
                                <div className="grid gap-10 cursor-default" key={item.index}>
                                    <span className="text-[15px] text-justify">{item.description}</span>
                                    <li className={`${item.index === 1 && "mt-2 "} bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1`}>
                                        <h3 className="text-accent text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                        <p className="text-[14px] min-w-[60px] min-h-[60px] text-center lg:text-left">{item.company}</p>
                                        <div className="flex items-center gap-3">
                                            {/* Dot */}
                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                            <p className="text-white/60">{item.duration}</p>
                                        </div>
                                    </li>
                                    <div className="grid grid-cols-1 gap-4">
                                        {item.attributions.map(attribution => {
                                            return (
                                                <p 
                                                    key={attribution.index} 
                                                    className={
                                                        `${attribution.index !== item.attributions.length ? "text-white/60" : "text-accent mt-3 border-b border-b-gray-600 pb-5 ml-1"} \
                                                        flex text-[14px] text-justify`
                                                    }
                                                >
                                                    <SiHyperskill className="w-[40px] mr-3 mt-2" />
                                                    {attribution.title}
                                                </p>
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