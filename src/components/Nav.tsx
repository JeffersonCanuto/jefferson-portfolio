"use client";

import React from "react";

import { HeaderStrings, LinkItems } from "@/types/components/Header";
import getHeaderFieldNames from "@/utils/components/headerHelpers";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav:React.FC<{ language: string; headerStrings:Record<"en" | "br", HeaderStrings> }> = ({ language, headerStrings}) => {
    const pathname = usePathname();
    
    const links:LinkItems[] = [
        {
            index: 1,
            name: getHeaderFieldNames(language, headerStrings, "home"),
            path: "/"
        },
        {
            index: 2,
            name: getHeaderFieldNames(language, headerStrings, "education"),
            path: "/education"
        },
        {
            index: 3,
            name: getHeaderFieldNames(language, headerStrings, "experiences"),
            path: "/experiences"
        },
        {
            index: 4,
            name: getHeaderFieldNames(language, headerStrings, "skills"),
            path: "/skills"
        },
        {
            index: 5,
            name: getHeaderFieldNames(language, headerStrings, "projects"),
            path: "/projects"
        },
        {
            index: 6,
            name: getHeaderFieldNames(language, headerStrings, "about"),
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