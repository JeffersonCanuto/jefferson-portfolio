"use client";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

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
    },
    {
        index: 7,
        name: "Contact",
        path: "/contact"
    }
];

/*
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
        name: "Skills",
        path: "/skills"
    },
    {
        index: 4,
        name: "Projects",
        path: "/projects"
    }
];
*/

function MobileNav() {
    const pathname = usePathname();
    
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetTitle className="w-[30px] text-white mt-2">Menu</SheetTitle> 
                {/* Logo */}
                <div className="mt-32 mb-20 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            JC <span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/* Nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map(link => {
                        return (
                            <Link
                                href={link.path} 
                                key={link.index} 
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;