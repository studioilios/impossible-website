"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { LegalBlock, LegalDoc } from "@ia/lib/legal";
import { site } from "@ia/lib/site";

const Block = ({ block }: { block: LegalBlock }) => {
    if (block.type === "p") {
        return <p className="font-sans text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">{block.text}</p>;
    }

    if (block.type === "list") {
        return (
            <ul className="space-y-2.5">
                {block.items.map((item) => (
                    <li key={item} className="flex gap-3 font-sans text-sm leading-7 text-neutral-600 sm:text-base">
                        <span className="mt-[0.7rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-black/10">
            <table className="w-full text-left">
                <thead className="bg-neutral-50">
                    <tr>
                        {block.head.map((h) => (
                            <th key={h} className="px-4 py-3 font-display text-[11px] font-semibold uppercase tracking-widest text-neutral-500 sm:px-5">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                    {block.rows.map(([a, b]) => (
                        <tr key={a} className="align-top">
                            <td className="w-[34%] px-4 py-3.5 font-display text-sm font-semibold text-neutral-950 sm:px-5">{a}</td>
                            <td className="px-4 py-3.5 font-sans text-sm leading-6 text-neutral-600 sm:px-5">{b}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const LegalDocument = ({ doc }: { doc: LegalDoc }) => {
    return (
        <>
            <section className="relative overflow-hidden bg-black px-6 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 xl:px-16">
                <div className="pointer-events-none absolute -right-40 top-10 aspect-square w-[520px] rounded-full border-2 border-primary/25" />
                <div className="relative mx-auto max-w-7xl">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-white px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-black"
                    >
                        {doc.eyebrow}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.05 }}
                        className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl"
                    >
                        {doc.title} <span className="font-serif italic font-normal text-primary">{doc.accent}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="mt-5 max-w-2xl font-sans text-sm leading-7 text-white/60 sm:text-base"
                    >
                        {doc.intro}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                        className="mt-6 font-mono text-[11px] uppercase tracking-widest text-white/40"
                    >
                        Effective {site.effectiveDate}
                    </motion.p>
                </div>
            </section>

            <section className="border-t border-black/10 bg-white px-6 py-14 sm:px-8 sm:py-20 lg:px-12 xl:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
                    <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
                        <p className="font-display text-xs font-semibold uppercase tracking-widest text-neutral-400">On this page</p>
                        <nav className="mt-4 space-y-2.5">
                            {doc.sections.map((s, i) => (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    className="flex items-baseline gap-3 font-sans text-sm text-neutral-600 transition-colors hover:text-primary"
                                >
                                    <span className="font-mono text-[11px] text-neutral-300">{String(i + 1).padStart(2, "0")}</span>
                                    {s.title}
                                </a>
                            ))}
                        </nav>
                        <Link
                            href={site.routes.support}
                            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-black/15 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-neutral-800 transition-all hover:border-primary hover:text-primary"
                        >
                            Get Support
                        </Link>
                    </aside>

                    <div className="max-w-3xl space-y-12">
                        {doc.sections.map((s, i) => (
                            <motion.article
                                key={s.id}
                                id={s.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.4 }}
                                className="scroll-mt-28 space-y-4"
                            >
                                <h2 className="flex items-baseline gap-3 font-display text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                                    <span className="font-mono text-xs font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
                                    {s.title}
                                </h2>
                                {s.blocks.map((b, j) => (
                                    <Block key={j} block={b} />
                                ))}
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default LegalDocument;