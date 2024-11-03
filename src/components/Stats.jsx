"use client";

import CountUp from "react-countup";

const stats = [
    {
        value: 5,
        title: "Years of experience"
    },
    {
        value: 10,
        title: "GitHub Projects (Public)"
    },
    {
        value: 8,
        title: "Code Commits (GitHub)"
    },

];

function Stats() {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container max-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map(stat => {
                        return (
                            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={stat.title}>
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