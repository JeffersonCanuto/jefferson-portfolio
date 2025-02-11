"use client";

import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

import { gitHubService } from "../services";

function Stats() {
    const [ ghubProjectsCount, setGhubProjectsCount ] = useState(0);
    const [ ghubCommitCount, setGhubCommitCount ]     = useState(0);
    const [ stats, setStats ]                         = useState([
        {
            value: 0,
            title: "Years of experience"
        },
        {
            value: 0,
            title: "Study/Work Technologies"
        },
        {
            value: 0,
            title: "Coding Projects (GitHub)"
        },
        {
            value: 0,
            title: "Code Commits (GitHub)"
        },
    ]);  

    useEffect(() => {
        (async function fetchData() {
            {/* Fetch projects count (Public and Private repositories) */}
            const userInfo = await (gitHubService().getGitHubUserInfo());
            const { publicRepos, privateRepos } = userInfo;
            
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
                    value: 5,
                    title: "Years of experience"
                },
                {
                    value: 15,
                    title: "Coding Technologies"
                },
                {
                    value: ghubProjectsCount,
                    title: "Coding Projects (GitHub)"
                },
                {
                    value: ghubCommitCount,
                    title: "Code Commits (GitHub)"
                }
            ]);
        }
    }, [ghubProjectsCount, ghubCommitCount]);

    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container max-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map(stat => {
                        return (
                            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start cursor-default" key={stat.title}>
                                <CountUp 
                                    end={stat.value} 
                                    duration={5} 
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p className={`${stat.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{stat.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Stats;