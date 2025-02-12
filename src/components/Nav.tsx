"use client";

import React from "react";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkItems {
    index: number;
    name: string;
    path: string;
};

const links:LinkItems[] = [
    {
        index: 1,
        name: "Home",
        path: "/"
    },
    {
        index: 2,
        name: "Education",
        path: "/education"
    },
    {
        index: 3,
        name: "Experiences",
        path: "/experiences"
    },
    {
        index: 4,
        name: "Skills",
        path: "/skills"
    },
    {
        index: 5,
        name: "Projects",
        path: "/projects"
    },
    {
        index: 6,
        name: "About Me",
        path: "/about"
    }
];

const Nav:React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {links.map((link:LinkItems) => {
                return (
                    <Link 
                        href={link.path}
                        key={link.index}
                        className={`${link.path === pathname && 
                            "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`
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