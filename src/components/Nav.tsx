"use client";

import React from "react";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HeaderStringItems } from "./Header";

interface LinkItems {
    index: number;
    name: string;
    path: string;
};

const getLanguageLabel = (
    language:string, 
    HeaderStrings:HeaderStringItems, 
    target:keyof HeaderStringItems["en"]["navigation"]
):string => {
    return HeaderStrings[language.includes("en-us") ? "en" : "br"].navigation[target];
};

const Nav:React.FC<{language: string, HeaderStrings:HeaderStringItems}> = ({ language, HeaderStrings}) => {
    const links:LinkItems[] = [
        {
            index: 1,
            name: getLanguageLabel(language, HeaderStrings, "home"),
            path: "/"
        },
        {
            index: 2,
            name: getLanguageLabel(language, HeaderStrings, "education"),
            path: "/education"
        },
        {
            index: 3,
            name: getLanguageLabel(language, HeaderStrings, "experiences"),
            path: "/experiences"
        },
        {
            index: 4,
            name: getLanguageLabel(language, HeaderStrings, "skills"),
            path: "/skills"
        },
        {
            index: 5,
            name: getLanguageLabel(language, HeaderStrings, "projects"),
            path: "/projects"
        },
        {
            index: 6,
            name: getLanguageLabel(language, HeaderStrings, "about"),
            path: "/about"
        }
    ];

    const pathname:string = usePathname();

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