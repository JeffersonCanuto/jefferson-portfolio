"use client";

import React from "react";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { AboutItems, InfoItems } from "@/types/pages/About";
import getAboutFieldNames from "@/utils/pages/aboutHelpers";

import { motion } from "framer-motion";

const About = () => {
    const language = (useSelector((state:RootState) => state.language.preferred)).includes("en-us") ? "en" : "br";

    const about:AboutItems<string> = {
        description: getAboutFieldNames(language, "description", "text"),
        avatar: "/assets/others/avatar.jpg",
        infos: [
            {
                index: 1,
                name: getAboutFieldNames(language, "labels", "first"),
                value: getAboutFieldNames(language, "values", "first")
            },
            {
                index: 2,
                name: getAboutFieldNames(language, "labels", "second"),
                value: getAboutFieldNames(language, "values", "second")
            },
            {
                index: 3,
                name: getAboutFieldNames(language, "labels", "third"),
                value: getAboutFieldNames(language, "values", "third")
            },
            {
                index: 4,
                name: getAboutFieldNames(language, "labels", "fourth"),
                value: getAboutFieldNames(language, "values", "fourth")
            },
            {
                index: 5,
                name: getAboutFieldNames(language, "labels", "fifth"),
                value: getAboutFieldNames(language, "values", "fifth")
            },
            {
                index: 6,
                name: getAboutFieldNames(language, "labels", "sixth"),
                value: getAboutFieldNames(language, "values", "sixth")
            },
            {
                index: 7,
                name: getAboutFieldNames(language, "labels", "seventh"),
                value: getAboutFieldNames(language, "values", "seventh")
            },
            {
                index: 8,
                name: getAboutFieldNames(language, "labels", "eighth"),
                value: getAboutFieldNames(language, "values", "eighth")
            }
        ]
    };

    return (
        <motion.div
            initial = {{ opacity: 0 }}
            animate = {{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" }
            }}
        >
            <div className="mb-4 container mx-auto">
                <div className="flex flex-col gap-[40px] cursor-default">
                    <p className="w-full text-white/60 text-justify mx-auto xl:mx-0">{about.description}</p>
                    <div className="-mt-4 w-full grid grid-cols-1 md:flex md:justify-start gap-10">
                        <figure id="avatar" className="flex justify-center">
                            <img src={`${about.avatar}`} width="320" alt="avatar" />
                        </figure>
                        <ul className="grid grid-cols-1 text-[15px] xl:grid-cols-2 gap-y-6 max-w-[900px] max-auto xl:mx-0">
                            {about.infos.map((item:InfoItems<string>) => {
                                return (
                                    <li key={item.index} className="flex items-center justify-center xl:justify-start gap-4">
                                        <span className="text-white/60">{item.name}:</span>
                                        <span>{item.value}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;