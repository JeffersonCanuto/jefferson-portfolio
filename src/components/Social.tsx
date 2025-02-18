import React, { ReactNode } from "react";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram
} from "react-icons/fa";
import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import Link from "next/link";

interface SocialItems {
    icon: ReactNode;
    path: string;
};

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
};

const socials:SocialItems[] = [
    {
        icon: <FaGithub />,
        path: "https://github.com/JeffersonCanuto"
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/jefferson-canuto-aa3b46163/"
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/itsjefso/"
    }
];

const Social:React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social:SocialItems, index:number) => {
                return (
                    <Link
                        key={social.path}
                        href={social.path}
                        target="_blank"
                        className={iconStyles}
                    >
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger>
                                    {social.icon}
                                </TooltipTrigger>
                                <TooltipContent>
                                    {
                                        index === 0 ?
                                            "GitHub"
                                        : index === 1 ?
                                            "LinkedIn"
                                        : index === 2 ?
                                            "Instagram"
                                        : 
                                            ""
                                    }
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        
                    </Link>
                )
            })}
        </div>
    );
}

export default Social;