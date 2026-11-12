"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@ia/lib/site";

const channels = [
    {
        title: "Email Support",
        body: `Write to us and a real person will reply ${site.responseTime}.`,
        cta: site.supportEmail,
        href: `mailto:${site.supportEmail}`,
    },
    {
        title: "Privacy Requests",
        body: "Data access, correction, export, or deletion requests.",
        cta: site.privacyEmail,
        href: `mailto:${site.privacyEmail}`,
    },
    {
        title: "In App Help",
        body: "Open Profile, then Settings, then Help and Support to reach us with your account details attached.",
        cta: "Send a message",
        href: "#contact",
    },
];

const topics = [
    {
        q: "I did not receive my login code",
        a: "Codes arrive from Impossible AI within a minute. Check your spam and promotions folders, confirm the email address is typed correctly, and request a new code after 60 seconds. Each code expires after 15 minutes.",
    },
    {
        q: "It says my account is linked to another device",
        a: "For security every account is bound to one device. If you changed or reset your phone, email us from your registered address and we will unlink the old device so you can sign in on the new one.",
    },
    {
        q: "My workout or steps did not sync",
        a: "Make sure the app has permission for Motion, Location, and Apple Health or Google Fit in your device settings. Keep the app updated and open it once after a workout to trigger a sync.",
    },
    {
        q: "Rep counting is not accurate",
        a: "Place your phone so your full body is visible, use good lighting, and keep the camera steady. Camera processing runs on your device and works best a couple of metres away.",
    },
    {
        q: "GPS tracking stops in the background",
        a: "Allow location access set to Always or While Using, and disable battery saver for the app. On iOS, keep Background App Refresh enabled.",
    },
    {
        q: "How do rewards and tokens work?",
        a: "Verified activity such as workouts, steps, check ins, and streaks earns tokens automatically. Tokens that look manipulated may be adjusted. See the Terms of Use for full details.",
    },
    {
        q: "How do I report a user or post?",
        a: "Tap the menu on any post, comment, or profile and choose Report. Our team reviews reports and removes content that breaks the community rules.",
    },
    {
        q: "Is Impossible AI medical advice?",
        a: "No. Plans and AI coaching are general fitness guidance. Consult a doctor before starting a new programme, especially if you have a health condition.",
    },
];

const deletionSteps = [
    "Open Impossible AI and go to Profile.",
    "Tap Settings, then Delete Account.",
    "Confirm with the code sent to your email.",
    "Your account and personal data are removed within 30 days.",
];

const Topic = ({ q, a, index }: { q: string; a: string; index: number }) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (index % 6) * 0.04 }}
            className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-colors duration-300 hover:border-primary/30"
        >
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none sm:px-6 sm:py-5"
            >
                <span className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] font-semibold text-neutral-300">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-display text-sm font-semibold text-neutral-950 sm:text-base">{q}</span>
                </span>
                <motion.svg
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="h-5 w-5 flex-shrink-0 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14M5 12h14" />
                </motion.svg>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="px-5 pb-5 pl-[3.25rem] font-sans text-sm leading-6 text-neutral-600 sm:px-6 sm:pl-[3.75rem]">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Support = () => {
    const [topic, setTopic] = useState("Login or account");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    const mailto = `mailto:${site.supportEmail}?subject=${encodeURIComponent(`[${topic}] Impossible AI support`)}&body=${encodeURIComponent(`${message}\n\nReply to: ${email}`)}`;

    return (
        <>
            <section className="relative overflow-hidden border-t border-black/10 bg-[#f3f3f1] px-6 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 xl:px-16">
                <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-30" />
                <div className="pointer-events-none absolute -right-40 top-10 aspect-square w-[520px] rounded-full border-2 border-primary/25" />
                <div className="relative mx-auto max-w-7xl">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-black px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-white"
                    >
                        Support
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.05 }}
                        className="mt-5 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-6xl"
                    >
                        How Can We <span className="font-serif italic font-normal text-primary">Help?</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="mt-5 max-w-2xl font-sans text-sm leading-7 text-neutral-600 sm:text-base"
                    >
                        Get help with your account, workouts, tracking, rewards, and privacy. Our team is based in Bengaluru and
                        responds {site.responseTime}.
                    </motion.p>

                    <div className="mt-12 grid gap-4 sm:grid-cols-3">
                        {channels.map((c, i) => (
                            <motion.a
                                key={c.title}
                                href={c.href}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                                className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                            >
                                <h3 className="font-display text-lg font-bold text-neutral-950">{c.title}</h3>
                                <p className="mt-2 font-sans text-sm leading-6 text-neutral-600">{c.body}</p>
                                <p className="mt-5 break-all font-display text-xs font-bold uppercase tracking-widest text-primary">
                                    {c.cta}
                                </p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-black/10 bg-white px-6 py-14 sm:px-8 sm:py-20 lg:px-12 xl:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <span className="inline-block bg-black px-2 py-1 font-mono text-[11px] font-semibold tracking-widest text-white">
                            HELP TOPICS
                        </span>
                        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                            Quick <span className="font-serif italic font-normal text-primary">Answers</span>
                        </h2>
                        <p className="mt-4 max-w-sm font-sans text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                            The most common questions from athletes using Impossible AI.
                        </p>
                    </div>
                    <div className="space-y-3">
                        {topics.map((t, i) => (
                            <Topic key={t.q} q={t.q} a={t.a} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="delete-account" className="scroll-mt-24 border-t border-black/10 bg-[#e9e9e6] px-6 py-14 sm:px-8 sm:py-20 lg:px-12 xl:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <span className="inline-block bg-black px-2 py-1 font-mono text-[11px] font-semibold tracking-widest text-white">
                            ACCOUNT DELETION
                        </span>
                        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                            Delete Your <span className="font-serif italic font-normal text-primary">Account</span>
                        </h2>
                        <p className="mt-4 max-w-md font-sans text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                            You can permanently delete your account and associated data from inside the app. If you can no longer
                            access the app, email {site.privacyEmail} from your registered address with the subject Delete My
                            Account.
                        </p>
                        <Link
                            href={site.routes.privacy}
                            className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-black/15 bg-white px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-neutral-800 transition-all hover:border-primary hover:text-primary"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                    <ol className="space-y-3">
                        {deletionSteps.map((s, i) => (
                            <motion.li
                                key={s}
                                initial={{ opacity: 0, x: 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                                className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
                            >
                                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-black font-mono text-xs font-semibold text-white">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="font-sans text-sm text-neutral-700 sm:text-base">{s}</span>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </section>

            <section id="contact" className="scroll-mt-24 border-t border-black/10 bg-white px-6 py-14 sm:px-8 sm:py-20 lg:px-12 xl:px-16">
                <div className="mx-auto max-w-3xl">
                    <div className="text-center">
                        <span className="inline-block bg-black px-2 py-1 font-mono text-[11px] font-semibold tracking-widest text-white">
                            CONTACT
                        </span>
                        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                            Still <span className="font-serif italic font-normal text-primary">Stuck?</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-6 text-neutral-600 sm:text-base">
                            Send us a message and include the email you use to sign in.
                        </p>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            window.location.href = mailto;
                        }}
                        className="mt-10 space-y-4 rounded-3xl border border-black/10 bg-neutral-50 p-6 sm:p-8"
                    >
                        <label className="block">
                            <span className="font-display text-xs font-semibold uppercase tracking-widest text-neutral-500">Your email</span>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-sans text-sm text-neutral-900 outline-none transition-colors focus:border-primary"
                            />
                        </label>
                        <label className="block">
                            <span className="font-display text-xs font-semibold uppercase tracking-widest text-neutral-500">Topic</span>
                            <select
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-sans text-sm text-neutral-900 outline-none transition-colors focus:border-primary"
                            >
                                {["Login or account", "Workouts and tracking", "Nutrition", "Rewards", "Community", "Privacy or deletion", "Other"].map((t) => (
                                    <option key={t}>{t}</option>
                                ))}
                            </select>
                        </label>
                        <label className="block">
                            <span className="font-display text-xs font-semibold uppercase tracking-widest text-neutral-500">Message</span>
                            <textarea
                                required
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 font-sans text-sm text-neutral-900 outline-none transition-colors focus:border-primary"
                            />
                        </label>
                        <button
                            type="submit"
                            className="inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3.5 font-display text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-neutral-800"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Support;
