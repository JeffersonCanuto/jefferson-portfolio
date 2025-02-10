"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import { SiHyperskill } from "react-icons/si";

const experience = {
    items: [
        {
            index: 1,
            description: "In 2019, I started my career as a Software Engineer working as a Fullstack Developer for Logica Sistemas de Informação EIRELI, which is \
            a small-sized company that provides services to the Telecom industry. As my primary attribution, I was in charge of designing and building entire \
            modules (for both server and client) of their main business product, a SaaS solution called Logica Flow. Broadly speaking, I had to maintain existing APIs designed to collect \
            internet data traffic (IPv4/IPv6 and CDN/Non-CDN) coming from different Internet Service Providers (ISPs), process them in the Backend and display \
            them in the Frontend into multiple Dashboards, which were composed of Charts, Graphs and Tables. I also designed microservices to perform periodical \
            data transfer between unit storages and VACUUM in some db tables and most importantly, a service to collect all the post-processed data traffic from \
            each target company and generate a custom report document in .pdf format for each client (ISP). This way, they could efficiently visualize and monitor \
            their own data traffic on a real-time basis, in addition to requesting periodical reports.",
            company: "LOGICA SISTEMAS DE INFORMAÇÃO EIRELI",
            position: "Fullstack Developer",
            duration: "Aug/2019 - Nov/2020",
            attributions: [
                {
                    index: 1,
                    title: "Implementation of multiple Dashboards to monitor IPv4/IPv6 data traffic from CDN distributors."
                },
                {
                    index: 2,
                    title: "Implementation of APIs designed to collect and process IPv4/IPv6 data traffic from CDN distributors."
                },
                {
                    index: 3,
                    title: "Implementation of Microservices to perform periodical data transfer and VACUUM in some specific Database tables."
                },
                {
                    index: 4,
                    title: "Implementation of a full feature (backend/frontend) to generate periodical reports from IPv4/IPv6 data traffic."
                },
                {
                    index: 5,
                    title: "Implementation of other full features (backend/frontend) for the company's primary SaaS solution called Logica Flow."
                },
                {
                    index: 6,
                    title: "Skills: JavaScript | HTML5 | CSS3 | React.js | Chart.js | Redux | Python | Django REST | PostgreSQL | Docker | Git | Linux"
                }
            ]
        },
        {
            index: 2,
            description: "In 2021, I joined Sidia as a Frontend Software Engineer working with both Web and Android. FYI, Sidia is Samsung Electronics' R&D \
            center in Latin America. As my main attribution, I was the Principal Frontend Engineer, in charge of implementing and maintaining internal software \
            tools and also leading the Automation Team. Furthermore, I was responsible for conducting bugfixes for Samsung Android Native apps (Messages, Contacts, \
            Dialer, etc) and managing/implementing LATAM telephony operator requirements. In 2024, I got the opportunity to work as the Project Leader for the \
            implementation and delivery of STIR/Shaken and RCD solutions in Brazil from Samsung side. For this major project, I worked in a committee, composed \
            of representatives of all the major manufacturers (Google, Apple, Motorola, Positivo, etc), all Brazilian Telephony operators (TIM, Claro and Vivo) \
            and our main client (ANATEL), to discuss technical aspects, challenges and define an implementation roadmap for both solutions for the manufacturers \
            to follow, based upon unified requirements that the client came up with throughout our meetings and discussions.",
            company: "SIDIA INSTITUTO DE CIÊNCIA E TECNOLOGIA",
            position: "Frontend Engineer",
            duration: "Apr/2021 - Jun/2024",
            attributions: [
                {
                    index: 1,
                    title: "Principal Frontend Engineer and Technical Leader for the Automation Team (Tools: PLM Reporter, TRO.IA and PLMN/MVNO)."
                },
                {
                    index: 2,
                    title: "Project Leader for the implementation and delivery of STIR/Shaken and RCD solutions in Brazil from Samsung side."
                },
                {
                    index: 3,
                    title: "Bugfixes for Samsung Android native apps (Dialer, InCallUI, Contacts, Messages), including Android log analysis."
                },
                {
                    index: 4,
                    title: "Management and implementation of LATAM telephony operator requirements for Samsung Latin Products."
                },
                {
                    index: 5,
                    title: "Skills: JavaScript | TypeScript | HTML5 | CSS3 | React | Chart.js | Redux/ContextAPI | Material UI | Python | Django REST | PostgreSQL | Android (Java) | QuickBuild | Docker | Git | P4V | Swarm | Linux | Agile (Scrum/Kanban)"
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
                                    <li className={`${item.index === 1 && "mt-2"} bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1`}>
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