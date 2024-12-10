"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* AQUI
const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Education",
        path: "/education"
    },
    {
        name: "Experiences",
        path: "/experiences"
    },
    {
        name: "Skills",
        path: "/skills"
    },
    {
        name: "Projects",
        path: "/projects"
    },
    {
        name: "About me",
        path: "/about"
    }
];
*/

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Education",
        path: "/education"
    },
    {
        name: "Skills",
        path: "/skills"
    },
    {
        name: "Projects",
        path: "/projects"
    }
];

function Nav() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {links.map(link=> {
                return (
                    <Link 
                        href={link.path}
                        key={link.name}
                        className={`${link.path === pathname && 
                            "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`
                        }
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Nav;