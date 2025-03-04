"use client";

import React, {
    useState,
    useCallback,
    Fragment,
    MouseEvent
} from "react";

import { FaCheck } from "react-icons/fa";
import { FcGlobe } from "react-icons/fc";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/redux/store";
import { setPreferredLanguage } from "@/redux/slices/languageSlice";

import HeaderStrings from "@/strings/components/Header";

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
    const language = useSelector((state:RootState) => state.language.preferred);
    const dispatch = useDispatch<AppDispatch>();

    const [ isEnglishActive, setIsEnglishActive ] = useState(() => language.includes("en-us"));
    const [ isPortugueseActive, setIsPortugueseActive ] = useState(() => language.includes("pt-br"));
    
    const handleLangButtonClick = useCallback((event:MouseEvent<HTMLDivElement>, index: number) => {    
        event.preventDefault();
        
        if (!index) {
            dispatch(setPreferredLanguage("en-us"));

            setIsEnglishActive(true);
            setIsPortugueseActive(false);
        } else {
            dispatch(setPreferredLanguage("pt-br"));

            setIsPortugueseActive(true);
            setIsEnglishActive(false);
        }
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
                {/* Language Preference */}
                <div className={`${isEnglishActive ? "w-[210px] xl:w-[270px]" : "w-[200px] xl:w-[240px]"} flex gap-5`}>
                    <div className="flex items-center gap-1">
                        <FcGlobe aria-describedby="language" className="text-[13px] xl:text-[20px]"/>
                        <p className="text-[10px] xl:text-[14px] text-white/60" id="language">
                            {HeaderStrings[language.includes("en-us") ? "en" : "br"].language}:
                        </p>
                    </div>
                    <div className="w-full flex justify-between items-center gap-3">
                        {[...Array(2)].map((_:undefined, index:number) => (
                            <Fragment key={index}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div onClick={(event:MouseEvent<HTMLDivElement>) => handleLangButtonClick(event, index)}>
                                                <Image
                                                    src={index === 0 ? UsFlag : BrFlag}
                                                    width={`${index === 0 ? "30": "35"}`}
                                                    height={`${index === 0 ? "50": "55"}`}
                                                    alt={`${index === 0 ? "usa-flag" : "brazil-flag"}`}
                                                    className="flex flex-shrink-0"
                                                />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {
                                                index == 0 ?
                                                    "EN-US"
                                                :
                                                    "PT-BR"
                                            }
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                { index === 0 ? (
                                    isEnglishActive ?
                                        <div className="border-2 border-accent rounded-full flex justify-center items-center p-1">
                                            <FaCheck className="text-[6px] xl:text-[9px] text-accent"/>
                                        </div>
                                    :
                                        <></>
                                ):(
                                    isPortugueseActive ?
                                        <div className="border-2 border-accent rounded-full flex justify-center items-center p-1">
                                            <FaCheck className="text-[6px] xl:text-[9px] text-accent"/>
                                        </div>
                                    :
                                        <></>
                                )}
                                { index === 0 && (
                                    <span>|</span>
                                )}
                            </Fragment>                          
                        ))}
                    </div>
                </div>
                {/* Desktop Navbar & Contact button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav language={language} HeaderStrings={HeaderStrings} />
                </div>

                {/* Mobile Navbar */}
                <div className="xl:hidden">
                    <MobileNav language={language} HeaderStrings={HeaderStrings} />
                </div>
            </div>
        </header>
    );
}

export default Header;