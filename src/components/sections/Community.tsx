"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const findNear = ["Gyms", "Trainers", "Yoga Studios", "Running Clubs", "CrossFit", "Events"];
const socialFeatures = [
    "Follow friends & fitness influencers",
    "Share progress & workout highlights",
    "Join group challenges together",
    "Compete on local leaderboards",
];
const networkFeatures = ["Posts & Comments", "Likes & Reactions", "Share Moments", "Friends & Clubs", "Local Events", "Token Rewards"];
const leaderboards = ["Weekly", "Monthly", "Global", "City", "Friends"];

const Community = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Hyperlocal Community & Social Network"
                    title="Your City."
                    accent="Your Fitness Tribe."
                />

                <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                    >
                        <h3 className="font-display text-xs font-bold uppercase tracking-widest text-primary">Find Near You</h3>
                        <div className="mt-5 flex flex-wrap gap-2.5">
                            {findNear.map((f) => (
                                <span key={f} className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-display text-xs font-semibold text-white/80">
                                    {f}
                                </span>
                            ))}
                        </div>

                        <h3 className="mt-8 font-display text-xs font-bold uppercase tracking-widest text-primary">Social Features</h3>
                        <ul className="mt-5 space-y-3">
                            {socialFeatures.map((s) => (
                                <li key={s} className="flex items-start gap-2.5 font-sans text-sm leading-6 text-white/70">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                    >
                        <h3 className="font-display text-xs font-bold uppercase tracking-widest text-white/50">
                            India&apos;s Fitness Social Network
                        </h3>
                        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {networkFeatures.map((n) => (
                                <div key={n} className="rounded-xl border border-white/10 bg-black/40 px-3 py-4 text-center">
                                    <p className="font-display text-xs font-semibold text-white/80">{n}</p>
                                </div>
                            ))}
                        </div>

                        <h3 className="mt-8 font-display text-xs font-bold uppercase tracking-widest text-white/50">Leaderboards</h3>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {leaderboards.map((l) => (
                                <span key={l} className="rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-primary">
                                    {l}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Community;
