"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/nav";

const SiteHeader = () => {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-40 flex-shrink-0 border-b border-white/10 bg-black/90 backdrop-blur">
            <div className="w-full px-6 py-4 sm:px-8 lg:px-12 xl:px-16">
                <div className="flex items-center justify-between">
                    <Link href="/" title="Impossible AI" className="flex flex-col leading-none rounded-md flex-shrink-0 focus:outline-none">
                        <span className="font-display text-xl font-bold tracking-widest text-white sm:text-2xl">Impossible AI</span>
                        <span className="hidden sm:block mt-1 font-display text-[10px] font-semibold tracking-[0.2em] uppercase text-primary">India&apos;s AI Fitness Platform</span>
                    </Link>

                    <nav className="items-center hidden space-x-8 xl:flex">
                        {navLinks.map((link) => {
                            const active = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    title=""
                                    className={`font-display text-xs font-semibold tracking-widest uppercase transition-all duration-200 rounded focus:outline-none ${
                                        active ? "text-primary" : "text-white/70 hover:text-white"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="items-center hidden xl:flex">
                        <Link
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-5 py-2 font-display text-xs font-bold tracking-widest text-black uppercase transition-all duration-200 bg-white border-2 border-transparent rounded-full hover:bg-opacity-90 focus:outline-none"
                        >
                            Join Beta
                        </Link>
                    </div>

                    <button type="button" className="p-2 -m-2 transition-all duration-200 rounded-full text-white xl:hidden focus:outline-none">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;
