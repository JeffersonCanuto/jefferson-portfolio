"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    {
        index: 1,
        name: "Home",
        path: "/"
    },
    {
        index: 2,
        name: "Education",
        path: "/education"
    },
    {
        index: 3,
        name: "Experiences",
        path: "/experiences"
    },
    {
        index: 4,
        name: "Skills",
        path: "/skills"
    },
    {
        index: 5,
        name: "Projects",
        path: "/projects"
    },
    {
        index: 6,
        name: "About Me",
        path: "/about"
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
                        key={link.index}
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