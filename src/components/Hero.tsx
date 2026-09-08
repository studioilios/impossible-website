"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/nav";

const Hero = () => {
    return (
        <div className="relative flex flex-col min-h-screen overflow-hidden bg-black">
            <div className="absolute inset-0">
                <div className="absolute top-[10%] right-[4%] bottom-[4%] w-[56%]">
                    <img className="object-contain object-right w-full h-full" src="/hero.png" alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
            </div>

            <header className="relative z-10 flex-shrink-0 border-b border-white/10">
                <div className="w-full px-6 py-4 sm:px-8 lg:px-12 xl:px-16">
                    <div className="flex items-center justify-between">
                        <Link href="/" title="Impossible AI" className="flex flex-col leading-none rounded-md flex-shrink-0 focus:outline-none">
                            <span className="font-display text-xl font-bold tracking-widest text-white sm:text-2xl">Impossible AI</span>
                            <span className="hidden sm:block mt-1 font-display text-[10px] font-semibold tracking-[0.2em] uppercase text-primary">India&apos;s AI Fitness Platform</span>
                        </Link>

                        <nav className="items-center hidden space-x-8 xl:flex">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    title=""
                                    className="font-display text-xs font-semibold tracking-widest uppercase transition-all duration-200 rounded text-white/70 hover:text-white focus:outline-none"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="items-center hidden xl:flex">
                            <a
                                href="#"
                                title=""
                                className="inline-flex items-center justify-center px-5 py-2 font-display text-xs font-bold tracking-widest text-black uppercase transition-all duration-200 bg-white border-2 border-transparent rounded-full hover:bg-opacity-90 focus:outline-none"
                            >
                                Join Beta
                            </a>
                        </div>

                        <button type="button" className="p-2 -m-2 transition-all duration-200 rounded-full text-white xl:hidden focus:outline-none">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <div className="relative z-10 flex items-center flex-1 min-h-0">
                <div className="w-full px-6 overflow-hidden sm:px-8 lg:px-12 xl:px-16">
                    <div className="w-full lg:w-3/4 xl:w-1/2">
                        {/* <motion.a
                            href="#"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-display text-[11px] font-semibold uppercase tracking-widest text-primary transition-colors hover:bg-primary/20"
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                            </span>
                            Now Live — India&apos;s First AI Fitness Platform
                        </motion.a> */}

                        <p className="tracking-tighter text-white">
                            <span className="font-display font-normal text-4xl sm:text-6xl xl:text-7xl">India&apos;s AI-Powered</span><br />
                            <span className="font-display font-normal text-4xl sm:text-6xl xl:text-7xl">Fitness &amp; Health</span><br />
                            <span className="font-serif italic font-normal text-5xl sm:text-7xl xl:text-8xl text-primary">Platform</span>
                        </p>

                        <p className="mt-4 font-display text-sm sm:text-base font-normal leading-6 sm:leading-7 text-white text-opacity-70 max-w-xl">
                            The world&apos;s first AI Multi-Agent Fitness Platform built for Indian lifestyles. Personalized AI coaching, nutrition, rewards, community, and athlete opportunities — all in one platform.
                        </p>

                        <div className="flex flex-wrap items-center mt-5 gap-3 sm:mt-6">
                            <a
                                href="#"
                                title=""
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-4
                                    py-2
                                    font-display
                                    text-xs
                                    sm:text-sm
                                    font-bold
                                    tracking-wide
                                    uppercase
                                    transition-all
                                    duration-200
                                    border-2 border-transparent
                                    rounded-full
                                    bg-white
                                    text-black
                                    shadow-[0_0_24px_rgba(245,158,11,0.35)]
                                    hover:bg-opacity-90
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                                "
                                role="button"
                            >
                                Download App
                            </a>

                            <a
                                href="#"
                                title=""
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-4
                                    py-2
                                    font-display
                                    text-xs
                                    sm:text-sm
                                    font-bold
                                    tracking-wide
                                    uppercase
                                    transition-all
                                    duration-200
                                    bg-transparent
                                    border-2
                                    rounded-full
                                    text-white
                                    border-primary
                                    hover:bg-white
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                                    hover:text-black
                                    focus:ring-offset-secondary
                                "
                                role="button"
                            >
                                Join Beta
                            </a>

                            <a
                                href="#"
                                title=""
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-4
                                    py-2
                                    font-display
                                    text-xs
                                    sm:text-sm
                                    font-bold
                                    tracking-wide
                                    uppercase
                                    text-white
                                    transition-all
                                    duration-200
                                    rounded-full
                                    hover:text-primary
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                                    focus:ring-offset-secondary
                                "
                                role="button"
                            >
                                Start Your Journey
                                <svg className="w-3.5 h-3.5 ml-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4 mt-6 border-t sm:grid-cols-4 sm:gap-6 sm:pt-5 sm:mt-8 border-white/10 max-w-2xl">
                            <div>
                                <p className="font-display text-xl font-bold text-white sm:text-3xl">213M</p>
                                <p className="mt-1 font-display text-[10px] sm:text-xs font-normal tracking-wide text-white uppercase text-opacity-60">Indians trying to get fit</p>
                            </div>
                            <div>
                                <p className="font-display text-xl font-bold text-white sm:text-3xl">1.8B</p>
                                <p className="mt-1 font-display text-[10px] sm:text-xs font-normal tracking-wide text-white uppercase text-opacity-60">Global audience</p>
                            </div>
                            <div>
                                <p className="font-display text-xl font-bold text-white sm:text-3xl">94%</p>
                                <p className="mt-1 font-display text-[10px] sm:text-xs font-normal tracking-wide text-white uppercase text-opacity-60">Quit within 30 days</p>
                            </div>
                            <div>
                                <p className="font-display text-xl font-bold text-primary sm:text-3xl">95K+</p>
                                <p className="mt-1 font-display text-[10px] sm:text-xs font-normal tracking-wide text-white uppercase text-opacity-60">Indian recipes tracked</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="relative z-10 flex-shrink-0 hidden pb-6 sm:flex justify-center"
            >
                <a href="#" title="" className="flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70 focus:outline-none">
                    <span className="font-display text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll to Explore</span>
                    <motion.svg
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                </a>
            </motion.div>
        </div>
    );
};

export default Hero;
