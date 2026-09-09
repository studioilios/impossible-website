"use client";

import { useEffect, useRef } from "react";

const RING_SIZES = [300, 420, 540, 660, 780];

const stats = [
    { value: "213M", label: "Indians trying to get fit" },
    { value: "1.8B", label: "Global audience" },
    { value: "94%", label: "Quit within 30 days" },
    { value: "95K+", label: "Indian recipes tracked" },
];

const cards = [
    {
        icon: "🎯",
        title: "Mission",
        description:
            "Make world-class, AI-personalized fitness genuinely accessible to every Indian — in their language, on their budget, around their life.",
    },
    {
        icon: "🧬",
        title: "Approach",
        description:
            "Every model we train starts with Indian data — phenotype, food, climate, and culture — not a Western template we retrofit.",
    },
    {
        icon: "🚀",
        title: "Vision",
        description:
            "A predictive health layer for a billion people — catching problems before they happen, not after.",
    },
];

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOutCubic = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const About = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const maskRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const ringsRef = useRef<HTMLDivElement>(null);
    const introRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const update = () => {
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const sectionHeight = section.offsetHeight;

            const scrolled = -rect.top;
            const maxScroll = sectionHeight - windowHeight;
            const rawProgress = clamp(maxScroll > 0 ? scrolled / maxScroll : 0, 0, 1);

            // Phase 1 — circle reveal (0 -> 0.4)
            const revealProgress = clamp(rawProgress / 0.4, 0, 1);
            const easedReveal = easeInOutCubic(revealProgress);

            const diagonal = Math.sqrt(windowWidth ** 2 + windowHeight ** 2);
            const startRadius = 110;
            const endRadius = diagonal / 2 + 10;
            const holeRadius = lerp(startRadius, endRadius, easedReveal);

            const cx = windowWidth / 2;
            const cy = windowHeight / 2;

            if (maskRef.current) {
                maskRef.current.style.clipPath = `path("M 0 0 L ${windowWidth} 0 L ${windowWidth} ${windowHeight} L 0 ${windowHeight} Z M ${cx} ${cy} m ${-holeRadius} 0 a ${holeRadius} ${holeRadius} 0 1 0 ${holeRadius * 2} 0 a ${holeRadius} ${holeRadius} 0 1 0 ${-holeRadius * 2} 0")`;
            }

            if (headingRef.current) {
                headingRef.current.style.opacity = String(Math.max(0, 1 - revealProgress * 3));
            }
            if (ringsRef.current) {
                ringsRef.current.style.opacity = String(Math.max(0, 1 - revealProgress * 5));
            }

            // Phase 2 — intro copy + stats + cards slide in (0.42 -> 1.0), then hold
            // fully visible for the rest of the scroll so nothing gets skipped past.
            const cardProgress = clamp((rawProgress - 0.42) / 0.58, 0, 1);

            if (introRef.current) {
                const p = easeOutCubic(clamp(cardProgress / 0.15, 0, 1));
                introRef.current.style.transform = `translateY(${60 * (1 - p)}px)`;
                introRef.current.style.opacity = String(p);
            }

            if (statsRef.current) {
                const p = easeOutCubic(clamp((cardProgress - 0.08) / 0.15, 0, 1));
                statsRef.current.style.transform = `translateY(${60 * (1 - p)}px)`;
                statsRef.current.style.opacity = String(p);
            }

            cardRefs.current.forEach((el, i) => {
                if (!el) return;
                const stagger = 0.16 + i * 0.08;
                const p = clamp((cardProgress - stagger) / 0.2, 0, 1);
                const easedP = easeOutCubic(p);
                el.style.transform = `translateY(${120 * (1 - easedP)}px)`;
                el.style.opacity = String(easedP);
            });
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        window.addEventListener("load", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
            window.removeEventListener("load", update);
        };
    }, []);

    return (
        <section id="about" ref={sectionRef} className="relative" style={{ height: "500vh" }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Layer 1 — background image */}
                <img
                    src="/scrollbgimg.png"
                    alt="Athlete training in the gym"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                />

                {/* Layer 2 — decorative concentric rings */}
                <div ref={ringsRef} className="pointer-events-none absolute inset-0" style={{ willChange: "opacity" }}>
                    {RING_SIZES.map((size) => (
                        <div
                            key={size}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25"
                            style={{ width: size, height: size }}
                        />
                    ))}
                </div>

                {/* Layer 3 — mask with circular hole */}
                <div
                    ref={maskRef}
                    className="pointer-events-none absolute inset-0 bg-[#f3f3f1]"
                    style={{ willChange: "clip-path" }}
                >
                    <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />
                </div>

                {/* Layer 4 — heading, fades out as the circle grows */}
                <div
                    ref={headingRef}
                    className="pointer-events-none absolute inset-x-0 top-[14%] flex flex-col items-center px-6 text-center sm:top-[16%]"
                    style={{ willChange: "opacity" }}
                >
                    <span className="inline-block bg-black px-2 py-1 font-mono text-[11px] font-semibold tracking-widest text-white">
                        About Us
                    </span>
                    <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                        Built to Fix{" "}
                        <span className="font-serif italic font-normal text-primary">India&apos;s Broken Fitness Story</span>
                    </h2>
                </div>

                {/* Layer 5 — intro copy, stats, and cards, slide up after the reveal */}
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 sm:gap-6">
                    <p
                        ref={introRef}
                        className="max-w-2xl text-center font-sans text-sm leading-6 text-white opacity-0 drop-shadow-sm sm:text-base sm:leading-7"
                        style={{ willChange: "transform, opacity" }}
                    >
                        Nearly a billion Indians are deficient in an essential nutrient. Diabetes is showing up in
                        people barely out of their twenties. Global fitness apps were never built for Indian food,
                        biology, or life — so we built the one that is.
                    </p>

                    <div
                        ref={statsRef}
                        className="grid w-full max-w-3xl grid-cols-2 divide-x divide-y divide-black/10 overflow-hidden rounded-2xl border border-black/10 bg-white/90 opacity-0 shadow-sm backdrop-blur-sm sm:grid-cols-4 sm:divide-y-0"
                        style={{ willChange: "transform, opacity" }}
                    >
                        {stats.map((s) => (
                            <div key={s.label} className="px-3 py-3.5 text-center sm:px-2 sm:py-4">
                                <p className="font-display text-xl font-bold text-neutral-950 sm:text-2xl">{s.value}</p>
                                <p className="mt-1 font-mono text-[9px] font-medium uppercase tracking-wide text-neutral-500 sm:text-[10px]">
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="grid max-w-5xl gap-5 sm:grid-cols-3">
                        {cards.map((c, i) => (
                            <div
                                key={c.title}
                                ref={(el) => {
                                    cardRefs.current[i] = el;
                                }}
                                className="pointer-events-auto relative overflow-hidden rounded-2xl border border-black/10 bg-white/90 p-5 opacity-0 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 sm:p-6"
                                style={{ willChange: "transform, opacity" }}
                            >
                                <span className="absolute right-5 top-5 font-mono text-xs font-semibold text-neutral-300">
                                    0{i + 1}
                                </span>
                                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xl sm:h-12 sm:w-12 sm:text-2xl">
                                    {c.icon}
                                </div>
                                <h3 className="mt-4 font-display text-base font-bold text-neutral-950 sm:mt-5 sm:text-lg">
                                    {c.title}
                                </h3>
                                <p className="mt-2 font-sans text-xs leading-5 text-neutral-600 sm:text-sm sm:leading-6">
                                    {c.description}
                                </p>
                                <span className="mt-4 block h-px w-8 bg-primary/50 sm:mt-5" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
