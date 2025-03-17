"use client";

import React from "react";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import disclaimerStrings from "@/strings/components/Disclaimer";

import { usePathname } from "next/navigation";

import packageJson from "../../package.json";

const Disclaimer:React.FC = () => {
    const pathname = usePathname();

    const language = useSelector((state:RootState) => state.language.preferred);
    const releaseDate = language.includes("en-us") ? process.env.NEXT_PUBLIC_RELEASE_EN : process.env.NEXT_PUBLIC_RELEASE_PT;

    const currentYear = new Date().getFullYear();
    
    return (
        <div
            className={`container mx-auto
                ${pathname === "/" ?
                    "-mt-6"
                : pathname === "/education" ?
                    "-mt-2"
                : pathname === "/experiences" ?
                    "mt-2"
                : pathname === "/skills" ?
                    "-mt-3"
                : pathname === "/projects" ?
                    "-mt-8"
                : pathname === "/about" ?
                    "-mt-4"
                : pathname === "/hire" ?
                    "-mt-7"
                :
                    ""
                }
            `}
        >
            <div className="flex justify-center items-center">
                <div className="flex-grow border-b border-gray-600"></div>
                <p className="p-4 text-[8px] xl:text-[11px] text-white/60">
                    © {currentYear} Jefferson Canuto. {disclaimerStrings[language.includes("en-us") ? "en" : "br"].text}. {disclaimerStrings[language.includes("en-us") ? "en" : "br"].version} {packageJson.version} ({releaseDate}).
                </p>
                <div className="flex-grow border-b border-gray-600"></div>
            </div>
        </div>
    );
}

export default Disclaimer;