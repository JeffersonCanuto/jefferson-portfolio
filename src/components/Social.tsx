import React, { ReactNode } from "react";

import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

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
            {socials.map((social:SocialItems) => {
                return (
                    <Link
                        key={social.path}
                        href={social.path}
                        target="_blank"
                        className={iconStyles}
                    >
                        {social.icon}
                    </Link>
                )
            })}
        </div>
    );
}

export default Social;