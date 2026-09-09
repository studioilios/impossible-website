"use client";

import { motion } from "framer-motion";
import SectionHeading from "@ia/components/ui/SectionHeading";

const columns = [
    { title: "Available", tone: "done", items: ["Android App", "AI Trainer", "Gym Partnerships"] },
    { title: "In Progress", tone: "progress", items: ["iOS App", "Brand Partnerships", "Influencer Marketing"] },
    { title: "Coming Soon", tone: "soon", items: ["Community App", "Advanced Gamification", "Team Challenges", "Brand Rewards"] },
];

const toneDot: Record<string, string> = {
    done: "bg-emerald-400",
    progress: "bg-primary animate-pulse",
    soon: "bg-white/30",
};

const Roadmap = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading eyebrow="Product Roadmap" title="Built &" accent="What's Next" />

                <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-3">
                    {columns.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                        >
                            <div className="flex items-center gap-2.5">
                                <span className={`h-2 w-2 rounded-full ${toneDot[c.tone]}`} />
                                <h3 className="font-display text-xs font-bold uppercase tracking-widest text-white">
                                    {c.title}
                                </h3>
                            </div>
                            <ul className="mt-5 space-y-3">
                                {c.items.map((item) => (
                                    <li key={item} className="rounded-lg border border-white/10 bg-black/40 px-3.5 py-2.5 font-sans text-sm text-white/70">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
