"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const STRIPS = 8;
const CLEANUP_MS = 1150;

const PageTransition = () => {
    const pathname = usePathname();
    const isFirstRender = useRef(true);
    const [playId, setPlayId] = useState<number | null>(null);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setPlayId(Date.now());
    }, [pathname]);

    useEffect(() => {
        if (playId === null) return;
        const timer = setTimeout(() => setPlayId(null), CLEANUP_MS);
        return () => clearTimeout(timer);
    }, [playId]);

    if (playId === null) return null;

    return (
        <div key={playId} className="pointer-events-none fixed inset-0 z-[90] flex overflow-hidden">
            {Array.from({ length: STRIPS }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: "0%" }}
                    animate={{ y: "-110%" }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: [0.76, 0, 0.24, 1] }}
                    className="relative h-full bg-black"
                    style={{ width: `${100 / STRIPS}%` }}
                >
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.05]"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
                        }}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default PageTransition;
