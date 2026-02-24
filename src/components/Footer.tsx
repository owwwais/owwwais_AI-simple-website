

export function Footer() {
    return (
        <footer id="about" className="relative pt-32 pb-12 overflow-hidden bg-white/30 backdrop-blur-3xl border-t border-white/60 text-slate-ash">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">

                {/* The Gentle Invitation CTA */}
                <div className="text-center mb-32 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-outfit mb-8">Ready to evolve?</h2>

                    <button className="group relative px-12 py-5 rounded-full bg-white border border-slate-ash/10 shadow-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(167,139,250,0.3)] overflow-hidden">
                        {/* Mesh bloom inside button */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-muted-lavender/40 to-soft-sage/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply blur-xl pointer-events-none"></div>

                        <span className="relative z-10 font-inter font-medium text-lg text-slate-ash tracking-wide">
                            Explore our models
                        </span>
                    </button>
                </div>

                {/* Minimalist Footer Layout */}
                <div className="w-full flex flex-col md:flex-row justify-between items-end gap-12 md:gap-0">

                    <div className="flex flex-col gap-4 text-sm font-inter text-slate-ash/60">
                        <div className="font-outfit font-medium text-xl text-slate-ash">
                            owwwais <span className="text-muted-lavender">AI</span>
                        </div>
                        <p>Designing the peaceful future of intelligence.</p>
                        <p className="mt-4">&copy; {new Date().getFullYear()} owwwais AI Research. All rights reserved.</p>
                    </div>

                    <div className="flex flex-row gap-12 font-inter text-sm text-slate-ash/70">
                        <div className="flex flex-col gap-3">
                            <a href="#" className="hover:text-slate-ash transition-colors">Research</a>
                            <a href="#" className="hover:text-slate-ash transition-colors">Platform</a>
                            <a href="#" className="hover:text-slate-ash transition-colors">Company</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="hover:text-slate-ash transition-colors">X / Twitter</a>
                            <a href="#" className="hover:text-slate-ash transition-colors">GitHub</a>
                            <a href="#" className="hover:text-slate-ash transition-colors">Discord</a>
                        </div>
                    </div>

                </div>

                {/* Resting Network Indicator */}
                <div className="w-full mt-16 pt-8 border-t border-slate-ash/5 flex justify-end items-center gap-3">
                    <span className="font-inter text-xs text-slate-ash/40">Neural network resting beautifully.</span>
                    <div className="w-2 h-2 rounded-full bg-soft-sage animate-pulse-slow shadow-[0_0_10px_rgba(153,246,228,0.8)]"></div>
                </div>

            </div>
        </footer>
    );
}
