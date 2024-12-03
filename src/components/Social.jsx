import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
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


function Social({ containerStyles, iconStyles }) {
    return (
        <div className={containerStyles}>
            {socials.map(social => {
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