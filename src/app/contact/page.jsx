"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const infos = [
    {
        index: 1,
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+55 (92) 98281-8369"
    },
    {
        index: 2,
        icon: <FaEnvelope />,
        title: "E-mail",
        description: "jeffersondscanuto@gmail.com"
    },
    {
        index: 3,
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "112 Jose Prado Montoro Street, Ap 53. Sao Paulo, SP, Brazil"
    },
];

function Contact() {
    return (
        <motion.section
            initial={{ opacity: 0}}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Form */}
                    <div className="xl:h-[54%] order-2 xl:order-none ">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                            {/* Input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstName" placeholder="First name"/>
                                <Input type="lastName" placeholder="Last name"/>
                                <Input type="email" placeholder="E-mail"/>
                                <Input type="phone" placeholder="Phone number"/>
                            </div>
                            {/* Textarea */}
                            <Textarea className="h-[200px]" placeholder="Type your message here..."/>
                            {/* Button */}
                            <Button size="md" className="max-w-40">Send message</Button>
                        </form>
                    </div>
                    {/* Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {infos.map(info => {
                                return (
                                    <li key={info.index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                                            <div className="text-[28px]">
                                                {info.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{info.title}</p>
                                            <h3 className="text-xl">{info.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;