"use client";

import React from "react";

import { usePathname } from "next/navigation";

const Copyright:React.FC = () => {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();
    
    return (
        <div
            className={`container mx-auto
                ${pathname === "/" ?
                    "-mt-9"
                : pathname === "/education" ?
                    "-mt-2"
                : pathname === "/experiences" ?
                    "mt-2"
                : pathname === "/skills" ? 
                    "-mt-3"
                : pathname === "/projects" ?
                    "-mt-8"
                : pathname === "/about" ?
                    "mt-4"
                :
                    ""
                }
            `}
        >
            <div className="flex justify-center items-center">
                <div className="flex-grow border-b border-gray-600"></div>
                <p className="p-4 text-[12px] text-white/60">© {currentYear} Jefferson Canuto. All rights reserved.</p>
                <div className="flex-grow border-b border-gray-600"></div>
            </div>
        </div>
    );
}

export default Copyright;