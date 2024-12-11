"use client";

import { motion } from "framer-motion";

const about = {
    description: "I am a tech enthusiast who seeks to delve deeper into the tech world, as I keep strengthening myself on a daily basis in terms of both professional \
    and personal capacities. I wish to keep working as a Software Engineer in new, big, challenging and impactful projects, in a Frontend or even a Fullstack position. \
    In addition, I truly cherish working with an engaged, focused and plural team, always aiming at growing together as a team, based upon the definition of goals/achievements \
    and continuous exchange of experience. When it comes to spare time, I would say that I quite fancy watching movies/series, listening to good music and specially \
    hanging out with friends (grab a beer at a bar, talk about any random topic and laugh hard). On the other hand, I also enjoy seeing curiosities on YT about the \
    technologies that I am most interested in and learn a thing or two.",
    avatar: "/assets/others/avatar.jpg",
    infos: [
        {
            index: 1,
            name: "Name",
            value: "Jefferson Canuto"
        },
        {
            index: 2,
            name: "Nationality",
            value: "Brazilian"
        },
        {
            index: 3,
            name: "Title",
            value: "Software Engineer"
        },
        {
            index: 4,
            name: "Experience",
            value: "5+ Years"
        },
        {
            index: 5,
            name: "Phone",
            value: "+5592982818369"
        },
        {
            index: 6,
            name: "Email",
            value: "jeffersondscanuto@gmail.com"
        },
        {
            index: 7,
            name: "First Language",
            value: "Portuguese"
        },
        {
            index: 8,
            name: "Other Languages",
            value: "English"
        }
    ]
};

function About() {
    return (
        <motion.div
            initial = {{ opacity: 0 }}
            animate = {{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-[40px] cursor-default">
                    <p className="w-full text-white/60 text-justify mx-auto xl:mx-0">{about.description}</p>
                    <div className="w-full flex justify-start gap-10">
                        <figure id="avatar">
                            <img src={`${about.avatar}`} width="320" alt="avatar" />
                        </figure>
                        <ul className="grid grid-cols-1 text-[15px] xl:grid-cols-2 gap-y-6 max-w-[900px] max-auto xl:mx-0">
                            {about.infos.map(item => {
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