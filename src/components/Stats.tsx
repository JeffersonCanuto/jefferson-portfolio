"use client";

import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

import { motion } from "framer-motion";

import { gitHubService, UserInfoItems } from "../services";

import Link from "next/link";

interface StatItems {
    index: number;
    value: number;
    text: string;
};

const Stats:React.FC = () => {
    const [ ghubProjectsCount, setGhubProjectsCount ] = useState<number>(0);
    const [ ghubCommitCount, setGhubCommitCount ]     = useState<number>(0);
    const [ stats, setStats ]                         = useState<StatItems[]>([
        {
            index: 1,
            value: 0,
            text: "Years of experience"
        },
        {
            index: 2,
            value: 0,
            text: "Study/Work Technologies"
        },
        {
            index: 3,
            value: 0,
            text: "Coding Projects (GitHub)"
        },
        {
            index: 4,
            value: 0,
            text: "Code Commits (GitHub)"
        },
    ]);  

    useEffect(() => {
        (async function fetchData() {
            {/* Fetch projects count (Public and Private repositories) */}
            const userInfo = await (gitHubService().getGitHubUserInfo());
            const { publicRepos, privateRepos } = userInfo as UserInfoItems;

            setGhubProjectsCount(publicRepos + privateRepos);
            
            {/* Fetch commits count (Public and Private repositories) */}
            const commits = await (gitHubService().getGitHubCommitInfo());

            setGhubCommitCount(commits.reduce((acc, count) => acc + count, 0));
        })();
    }, []);

    useEffect(() => {
        if (ghubProjectsCount && ghubCommitCount) {
            setStats([ 
                {
                    index: 1,
                    value: 5,
                    text: "Years of Experience"
                },
                {
                    index: 2,
                    value: 15,
                    text: "Coding Technologies"
                },
                {
                    index: 3,
                    value: ghubProjectsCount,
                    text: "Code Projects (GitHub)"
                },
                {
                    index: 4,
                    value: ghubCommitCount,
                    text: "Code Commits (GitHub)"
                }
            ]);
        }
    }, [ghubProjectsCount, ghubCommitCount]);

    return (
        <section className="relative bottom-8 pt-12 mb-[-15] xl:pt-0">
            <div className="container max-auto">
                <div className="grid grid-cols-2 xl:flex xl:flex-wrap gap-10 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((stat:StatItems, index:number) => {
                        return (
                            <div className="flex flex-1 gap-4 justify-center items-center xl:justify-start cursor-default" key={stat.index}>
                                <div className="group">
                                    <Link
                                        href={ index === 0 ? "/experiences" : index === 1 ? "/skills" : index === 2 ? "https://github.com/JeffersonCanuto?tab=repositories" : index === 3 ? "https://github.com/JeffersonCanuto" : "" }
                                        target={ index === 2 || index == 3 ? "_blank" : "" }
                                        className="group-hover:text-accent transition-all duration-500"
                                    >
                                        <motion.div
                                            initial = {{ opacity: 0 }}
                                            animate = {{
                                                opacity: 1,
                                                transition: { delay: 2, duration: 0.4, ease: "easeIn" }
                                            }}
                                            className="flex justify-between"
                                        >
                                            <CountUp
                                                end={stat.value}
                                                duration={5}
                                                delay={2}
                                                className="text-3xl xl:text-6xl font-extrabold"
                                            />
                                            { index === 0 && <p className="relative left-1 text-xl top-1 xl:text-4xl xl:top-2 font-bold">+</p> }
                                            <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} flex flex-col xl:flex-row justify-center leading-snug text-white/80 relative left-5 xl:top-2 xl:left-6 text-[13px] xl:text-[16px] group-hover:text-accent transition-all duration-500`}>{stat.text}</p>
                                        </motion.div>
                                    </Link>
                                </div>                   
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Stats;