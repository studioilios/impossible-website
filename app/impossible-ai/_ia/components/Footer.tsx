import Link from "next/link";
import { site } from "@ia/lib/site";

const productLinks = ["AI Coach", "Nutrition AI", "Rewards", "Athletes", "Community", "Pricing"];
const companyLinks = [
    { label: "Support", href: site.routes.support },
    { label: "Contact", href: `${site.routes.support}#contact` },
    { label: "Privacy Policy", href: site.routes.privacy },
    { label: "Terms of Use", href: site.routes.terms },
    { label: "Delete Account", href: site.routes.deleteAccount },
];

const Footer = () => {
    return (
        <footer className="relative overflow-hidden border-t border-black/10 bg-white px-6 pt-14 sm:px-8 lg:px-12 xl:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2 lg:col-span-2">
                        <Link href="/impossible-ai" className="inline-flex items-center gap-2">
                            <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z" />
                            </svg>
                            <span className="font-display text-xl font-bold tracking-widest text-neutral-950">Impossible AI</span>
                        </Link>
                        <p className="mt-3 max-w-sm font-sans text-sm leading-6 text-neutral-500">
                            A global AI fitness platform, built for diverse lifestyles and powered by world class AI.
                        </p>
                        <section aria-labelledby="footer-locations" className="mt-6">
                            <h3 id="footer-locations" className="font-display text-xl font-semibold text-neutral-950">
                                Locations
                            </h3>
                            <div className="mt-4 grid gap-5 sm:grid-cols-2">
                                <address className="not-italic">
                                    <h4 className="font-display text-base font-semibold text-neutral-950">United States</h4>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        <span className="rounded bg-neutral-100 px-2.5 py-1 font-sans text-xs text-neutral-700">Primary</span>
                                        <span className="rounded bg-neutral-100 px-2.5 py-1 font-sans text-xs text-neutral-700">US Operations / Sister Company</span>
                                    </div>
                                    <p className="mt-2 font-sans text-sm text-neutral-600">San Francisco, CA (California) 94104</p>
                                </address>
                                <address className="not-italic">
                                    <h4 className="font-display text-base font-semibold text-neutral-950">India</h4>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        <span className="rounded bg-neutral-100 px-2.5 py-1 font-sans text-xs text-neutral-700">Headquarters</span>
                                    </div>
                                    <p className="mt-2 font-sans text-sm text-neutral-600">Bengaluru, Karnataka 560043</p>
                                </address>
                            </div>
                        </section>
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
                            Help
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                            {companyLinks.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className="font-sans text-sm text-neutral-600 transition-colors hover:text-primary">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 sm:flex-row">
                    <p className="font-sans text-xs text-neutral-400">© 2026 IMPOSSIBLE AI | MADE FOR EVERYONE</p>
                    <div className="flex items-center gap-5 font-sans text-xs text-neutral-400">
                        <Link href={site.routes.privacy} className="transition-colors hover:text-primary">Privacy</Link>
                        <Link href={site.routes.terms} className="transition-colors hover:text-primary">Terms</Link>
                        <Link href={site.routes.support} className="transition-colors hover:text-primary">Support</Link>
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