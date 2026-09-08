const productLinks = ["AI Coach", "Nutrition AI", "Rewards", "Athletes", "Community", "Pricing"];
const companyLinks = ["About", "Team", "Careers", "Blog", "Contact"];

const Footer = () => {
    return (
        <footer className="relative border-t border-white/10 bg-black px-6 py-14 sm:px-8 lg:px-12 xl:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <span className="font-display text-xl font-bold tracking-widest text-white">Impossible AI</span>
                        <p className="mt-3 max-w-sm font-sans text-sm leading-6 text-white/50">
                            India&apos;s first AI Multi-Agent Fitness Platform. Built for Indian lifestyles, powered by
                            world-class AI.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-white/40">
                            Product
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                            {productLinks.map((l) => (
                                <li key={l}>
                                    <a href="#" className="font-sans text-sm text-white/60 transition-colors hover:text-primary">
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-white/40">
                            Company
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                            {companyLinks.map((l) => (
                                <li key={l}>
                                    <a href="#" className="font-sans text-sm text-white/60 transition-colors hover:text-primary">
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
                    <p className="font-sans text-xs text-white/40">© 2026 IMPOSSIBLE AI — MADE FOR INDIA 🇮🇳</p>
                    <div className="flex items-center gap-5 font-sans text-xs text-white/40">
                        <a href="#" className="transition-colors hover:text-primary">Privacy</a>
                        <a href="#" className="transition-colors hover:text-primary">Terms</a>
                        <a href="#" className="transition-colors hover:text-primary">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
