import Link from "next/link";

const productLinks = ["AI Coach", "Nutrition AI", "Rewards", "Athletes", "Community", "Pricing"];
const companyLinks = ["About", "Team", "Careers", "Blog", "Contact"];

const Footer = () => {
    return (
        <footer className="relative overflow-hidden border-t border-black/10 bg-white px-6 pt-14 sm:px-8 lg:px-12 xl:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <Link href="/impossible-ai" className="inline-flex items-center gap-2">
                            <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z" />
                            </svg>
                            <span className="font-display text-xl font-bold tracking-widest text-neutral-950">Impossible AI</span>
                        </Link>
                        <p className="mt-3 max-w-sm font-sans text-sm leading-6 text-neutral-500">
                            India&apos;s first AI Multi-Agent Fitness Platform. Built for Indian lifestyles, powered by
                            world-class AI.
                        </p>
                        <a
                            href="#"
                            className="mt-5 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-neutral-800"
                        >
                            Get the App
                        </a>
                    </div>

                    <div>
                        <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-neutral-400">
                            Product
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                            {productLinks.map((l) => (
                                <li key={l}>
                                    <a href="#" className="font-sans text-sm text-neutral-600 transition-colors hover:text-primary">
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-neutral-400">
                            Company
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                            {companyLinks.map((l) => (
                                <li key={l}>
                                    <a href="#" className="font-sans text-sm text-neutral-600 transition-colors hover:text-primary">
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 sm:flex-row">
                    <p className="font-sans text-xs text-neutral-400">© 2026 IMPOSSIBLE AI — MADE FOR INDIA 🇮🇳</p>
                    <div className="flex items-center gap-5 font-sans text-xs text-neutral-400">
                        <a href="#" className="transition-colors hover:text-primary">Privacy</a>
                        <a href="#" className="transition-colors hover:text-primary">Terms</a>
                        <a href="#" className="transition-colors hover:text-primary">Contact</a>
                    </div>
                </div>
            </div>

            <p
                aria-hidden="true"
                className="mt-8 select-none overflow-hidden whitespace-nowrap text-center font-display text-[16vw] font-bold leading-[0.78] tracking-tighter text-neutral-100 sm:text-[11vw]"
            >
                IMPOSSIBLE AI
            </p>
        </footer>
    );
};

export default Footer;
