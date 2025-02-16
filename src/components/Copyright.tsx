"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Copyright:React.FC = () => {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    console.log(pathname);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" }
            }}
            className={`container mx-auto
                ${ pathname === "/" ?
                    "mt-[-60]"
                : pathname === "/education" ?
                    "mt-5"
                : pathname === "/experiences" ?
                    "mt-2"
                : pathname === "/skills" ?
                    "mt-2"
                : pathname === "/projects" ?
                    "mt-[-60]"
                :
                    "mt-0"
                }`
            }
        >
            <div className="flex justify-center items-center">
                <div className="flex-grow border-b border-gray-600"></div>
                <p className="p-4 text-[13px] text-white/60">© {currentYear} Jefferson Canuto. All rights reserved.</p>
                <div className="flex-grow border-b border-gray-600"></div>
            </div>
        </motion.div>
    );
}

export default Copyright;