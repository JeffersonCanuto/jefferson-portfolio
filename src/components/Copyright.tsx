"use client";

import React from "react";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import CopyrightStrings from "@/strings/components/Copyright";

import { usePathname } from "next/navigation";

import packageJson from "../../package.json";

const Copyright:React.FC = () => {
    const language = useSelector((state:RootState) => state.language.preferred);

    const currentYear = new Date().getFullYear();
    const pathname = usePathname();
    
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
                    © {currentYear} Jefferson Canuto. {CopyrightStrings[language.includes("en-us") ? "en" : "br"].text} (v{packageJson.version}).
                </p>
                <div className="flex-grow border-b border-gray-600"></div>
            </div>
        </div>
    );
}

export default Copyright;