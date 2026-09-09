"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const FeatureCard = ({
    icon,
    tag,
    title,
    description,
    items,
    index = 0,
}: {
    icon?: ReactNode;
    tag?: string;
    title: string;
    description: string;
    items?: string[];
    index?: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.05]"
        >
            {tag && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-widest text-primary">
                    {tag}
                </span>
            )}
            {icon && <div className="mb-4 text-3xl">{icon}</div>}
            <h3 className="font-display text-lg font-bold text-white sm:text-xl">{title}</h3>
            <p className="mt-2 font-sans text-sm leading-6 text-white/55">{description}</p>

            {items && items.length > 0 && (
                <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                    {items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-white/70">
                            <svg
                                className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </motion.div>
    );
};

export default FeatureCard;
