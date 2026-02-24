import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cx(...args: (string | undefined | null | false)[]) {
    return twMerge(clsx(args));
}

const navLinks = ['Models', 'Philosophy', 'Capabilities', 'About'];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
            <div
                className={cx(
                    "pointer-events-auto flex items-center justify-between px-8 py-4 rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full max-w-5xl",
                    isScrolled
                        ? "bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.05)] translate-y-0"
                        : "bg-transparent border-transparent translate-y-2"
                )}
            >
                <div className="font-outfit font-medium text-xl tracking-wide text-slate-ash">
                    owwwais <span className="text-muted-lavender">AI</span>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="font-inter text-sm text-slate-ash/80 hover:text-slate-ash transition-all duration-300 hover:text-glow-lavender relative group"
                        >
                            {link}
                            <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-muted-lavender/50 transition-all duration-300 group-hover:w-1/2 group-hover:-translate-x-1/2"></span>
                        </a>
                    ))}
                </div>

                <button className="hidden md:block font-inter text-sm bg-slate-ash text-white px-6 py-2.5 rounded-full hover:bg-slate-ash/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md">
                    Get Started
                </button>
            </div>
        </nav>
    );
}
