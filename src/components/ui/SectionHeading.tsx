"use client";

import { motion } from "framer-motion";

const SectionHeading = ({
    eyebrow,
    title,
    accent,
    description,
    align = "left",
}: {
    eyebrow: string;
    title: string;
    accent?: string;
    description?: string;
    align?: "left" | "center";
}) => {
    const centered = align === "center";

    return (
        <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`flex items-center gap-2 ${centered ? "justify-center" : ""}`}
            >
                <span className="inline-block bg-black px-2 py-1 font-mono text-[11px] font-semibold tracking-widest text-white">
                    {eyebrow}
                </span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="mt-4 font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl"
            >
                {title}
                {accent && (
                    <>
                        {" "}
                        <span className="font-serif italic font-normal text-primary">{accent}</span>
                    </>
                )}
            </motion.h2>

            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    className="mt-4 font-sans text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7"
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
};

export default SectionHeading;
