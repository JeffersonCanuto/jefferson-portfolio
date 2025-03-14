"use client";

import React from "react";

import { HeaderStrings } from "@/strings/components/Header";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkItems {
    index: number;
    name: string;
    path: string;
};

export const getNavFieldNames = <
    L extends string,
    H extends Record<"en" | "br", HeaderStrings>,
    T extends keyof HeaderStrings["navigation"]
>(
    language:L,
    headerStrings:H,
    target:T
):string => {
    return headerStrings[language.includes("en-us") ? "en" : "br"].navigation[target];
};

const Nav:React.FC<{ language: string; headerStrings:Record<"en" | "br", HeaderStrings> }> = ({ language, headerStrings}) => {
    const pathname = usePathname();
    
    const links:LinkItems[] = [
        {
            index: 1,
            name: getNavFieldNames(language, headerStrings, "home"),
            path: "/"
        },
        {
            index: 2,
            name: getNavFieldNames(language, headerStrings, "education"),
            path: "/education"
        },
        {
            index: 3,
            name: getNavFieldNames(language, headerStrings, "experiences"),
            path: "/experiences"
        },
        {
            index: 4,
            name: getNavFieldNames(language, headerStrings, "skills"),
            path: "/skills"
        },
        {
            index: 5,
            name: getNavFieldNames(language, headerStrings, "projects"),
            path: "/projects"
        },
        {
            index: 6,
            name: getNavFieldNames(language, headerStrings, "about"),
            path: "/about"
        }
    ];

    return (
        <nav className="flex gap-8">
            {links.map((link:LinkItems) => {
                return (
                    <Link 
                        href={link.path}
                        key={link.index}
                        className={`${link.path === pathname && 
                            "text-accent border-b-2 border-accent"} font-medium hover:text-accent transition-all`
                        }
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Nav;