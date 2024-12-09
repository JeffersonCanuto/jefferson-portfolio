"use client";

import React, { useState, useEffect } from "react";

import CountUp from "react-countup";
import { getGitHubUserInfo, getGitHubCommitInfo } from "../services";

function Stats() {
    let stats = [];

    const [ ghubProjectsCount, setGhubProjectsCount ] = useState(0);
    const [ ghubCommitCount, setGhubCommitCount ]     = useState(0);

    useEffect(() => {
        (async function fetchData() {
            {/* Fetch projects count (Public and Private repositories) */}
            const userInfo = (await getGitHubUserInfo()) || 0;
            const 
                publicReposCount = parseInt(userInfo !== 0 ? userInfo.public_repos : userInfo),
                privateReposCount = parseInt(userInfo !== 0 ? userInfo.total_private_repos : userInfo)
            
            setGhubProjectsCount(publicReposCount + privateReposCount);
            
            {/* Fetch commits count (Public and Private repositories) */}
            const commits = (await getGitHubCommitInfo()) || 0;

            setGhubCommitCount(commits !== 0 ? commits.reduce((acc, count) => acc + count, 0) : commits);
        })()
    }, []);

    if (ghubProjectsCount && ghubCommitCount) {
        stats = [
            {
                value: 5,
                title: "Years of experience"
            },
            {
                value: 12,
                title: "Programming Technologies"
            },
            {
                value: ghubProjectsCount,
                title: "Coding Projects (GitHub)"
            },
            {
                value: ghubCommitCount,
                title: "Code Commits (GitHub)"
            },
        ];
    }

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