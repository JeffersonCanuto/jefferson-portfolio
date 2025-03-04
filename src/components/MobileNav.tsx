"use client";

import React from "react";

import { CiMenuFries } from 'react-icons/ci';

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';
import { HeaderStringItems } from "@/strings/components/Header";

import { getNavFieldNames } from "./Nav";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkItems {
    index: number;
    name: string;
    path: string;
};

const MobileNav:React.FC<{ language: string; HeaderStrings:HeaderStringItems }> = ({ language, HeaderStrings }) => {
    const pathname = usePathname();

    const links:LinkItems[] = [
        {
            index: 1,
            name: getNavFieldNames(language, HeaderStrings, "home"),
            path: "/"
        },
        {
            index: 2,
            name: getNavFieldNames(language, HeaderStrings, "education"),
            path: "/education"
        },
        {
            index: 3,
            name: getNavFieldNames(language, HeaderStrings, "experiences"),
            path: "/experiences"
        },
        {
            index: 4,
            name: getNavFieldNames(language, HeaderStrings, "skills"),
            path: "/skills"
        },
        {
            index: 5,
            name: getNavFieldNames(language, HeaderStrings, "projects"),
            path: "/projects"
        },
        {
            index: 6,
            name: getNavFieldNames(language, HeaderStrings, "about"),
            path: "/about"
        }
    ];

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetTitle className="w-[30px] text-white mt-2">Menu</SheetTitle> 
                {/* Logo */}
                <div className="my-20 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            <span>JC</span>
                            <span className="-ml-3 text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/* Nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link:LinkItems) => {
                        return (
                            <Link
                                href={link.path} 
                                key={link.index} 
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;