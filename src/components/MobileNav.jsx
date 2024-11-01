"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

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
        name: "About me",
        path: "/about"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]

function MobileNav() {
    const pathname = usePathname();
    
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
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
                                key={link.name} 
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