'use client'
import { Equal } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { GeistMono } from 'geist/font/mono';
import { Cross as Hamburger } from 'hamburger-react'
import Link from "next/link";

function MobileHeader() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <section className="block md:hidden">
                <div ref={menuRef} className="fixed right-6 top-6 block md:hidden flex flex-col items-end z-50">
                    <div className={`${isOpen ? `bg-white rounded-t-lg` : ``}`}>
                        <Hamburger size={18} toggled={isOpen} toggle={setIsOpen} />
                    </div>
                    <div
                        className={`${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                            } bg-white shadow-xl block px-4 py-4 rounded-b-lg rounded-tl-lg transform transition-all duration-300 ease-in-out`}
                    >
                        <div className={`${GeistMono.className} text-xl space-y-1`}>
                            <div><Link href="/" onClick={handleLinkClick}>Home</Link></div>
                            <div><Link href="/components/header" onClick={handleLinkClick}>Components</Link></div>
                            <div><Link href="/newsletter" onClick={handleLinkClick}>Newsletter</Link></div>
                            <div><Link href="/pricing" onClick={handleLinkClick}>Pricing</Link></div>
                            <div><Link target="_blank" onClick={handleLinkClick} href="https://x.com/literallyanshul">X</Link></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export { MobileHeader };
