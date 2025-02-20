"use client";

import React, { useCallback, Fragment }from "react";

import { FcGlobe } from "react-icons/fc";

import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

import BrFlag from "../../public/assets/others/br-flag.svg";
import UsFlag from "../../public/assets/others/us-flag.svg";

import Link from "next/link";
import Image from "next/image";

const Header:React.FC = () => {
    const handleLangButtonClick = useCallback(() => {
        console.log("Hi");
    }, []);
    
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        JC <span className="text-accent">.</span>
                    </h1>
                </Link>
                {/* Language */}
                <div className="w-[220px] flex gap-5">
                    <div className="flex items-center gap-1">
                        <FcGlobe aria-describedby="language" className="text-[20px]"/>
                        <p className="text-[14px] text-white/60" id="language">Language:</p>
                    </div>
                    <div className="w-[90px] flex justify-between items-center gap-3">
                        {[...Array(2)].map((_:undefined, index:number) => (
                            <Fragment key={index}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div onClick={handleLangButtonClick}>
                                                <Image
                                                    src={index === 0 ? BrFlag : UsFlag}
                                                    width={`${index === 0 ? "35": "30"}`}
                                                    height={`${index === 0 ? "55": "50"}`}
                                                    alt={`${index === 0 ? "brazil-flag" : "usa-flag"}`}
                                                />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {
                                                index == 0 ?
                                                    "PT-BR"
                                                :
                                                    "EN-US"
                                            }
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                { index === 0 && (
                                    <span>|</span>
                                )}
                            </Fragment>                          
                        ))}
                    </div>
                </div>
                {/* Desktop Navbar & Contact button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                </div>

                {/* Mobile Navbar */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;