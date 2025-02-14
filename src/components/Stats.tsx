"use client";

import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

import { gitHubService, UserInfoItems } from "../services";

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
                    text: "Coding Projects (GitHub)"
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
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container max-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((stat:StatItems, index:number) => {
                        return (
                            <div className="flex-1 flex gap-3 items-center justify-center xl:justify-start cursor-default" key={stat.index}>
                                <CountUp 
                                    end={stat.value} 
                                    duration={5} 
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                {index === 0 && (
                                    <p className="relative right-2 text-4xl font-bold">+</p>
                                )}
                                <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-red/80`}>{stat.text}</p>                                
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Stats;