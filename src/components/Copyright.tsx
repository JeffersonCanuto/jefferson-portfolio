"use client";

import React from "react";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import CopyrightStrings from "@/strings/components/Copyright";

import { usePathname } from "next/navigation";

import packageJson from "../../package.json";

const Copyright:React.FC = () => {
    const pathname = usePathname();

    const language = useSelector((state:RootState) => state.language.preferred);
    const releaseDate = language.includes("en-us") ? process.env.NEXT_PUBLIC_RELEASE_EN : process.env.NEXT_PUBLIC_RELEASE_PT;

    const currentYear = new Date().getFullYear();
    
    return (
        <div
            className={`container mx-auto
                ${pathname === "/" ?
                    "-mt-5"
                : pathname === "/education" ?
                    "-mt-2"
                : pathname === "/experiences" ?
                    "mt-2"
                : pathname === "/skills" ?
                    "-mt-1"
                : pathname === "/projects" ?
                    "-mt-5"
                : pathname === "/about" ?
                    "-mt-3"
                :
                    ""
                }
            `}
        >
            <div className="flex justify-center items-center">
                <div className="flex-grow border-b border-gray-600"></div>
                <p className="p-4 text-[12px] text-white/60">
                    © {currentYear} Jefferson Canuto. {CopyrightStrings[language.includes("en-us") ? "en" : "br"].text}. {CopyrightStrings[language.includes("en-us") ? "en" : "br"].version} {packageJson.version} ({releaseDate}).
                </p>
                <div className="flex-grow border-b border-gray-600"></div>
            </div>
        </div>
    );
}

export default Copyright;