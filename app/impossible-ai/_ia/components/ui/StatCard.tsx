"use client";

import { motion } from "framer-motion";

const StatCard = ({
    value,
    label,
    index = 0,
    tone = "default",
}: {
    value: string;
    label: string;
    index?: number;
    tone?: "default" | "warning";
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-primary/40 sm:p-6"
        >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <p
                className={`relative font-display text-2xl font-bold tracking-tight sm:text-4xl ${
                    tone === "warning" ? "text-primary" : "text-white"
                }`}
            >
                {value}
            </p>
            <p className="relative mt-2 font-display text-[10px] font-semibold uppercase tracking-widest text-white/50 sm:text-xs">
                {label}
            </p>
        </motion.div>
    );
};

export default StatCard;
