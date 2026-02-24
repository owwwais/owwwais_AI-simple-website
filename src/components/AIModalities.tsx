import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function AIModalities() {
    const visionLineRef = useRef<HTMLDivElement>(null);
    const visionTooltip1Ref = useRef<HTMLDivElement>(null);
    const visionTooltip2Ref = useRef<HTMLDivElement>(null);
    const dotsContainerRef = useRef<HTMLDivElement>(null);

    // NLP Typewriter effect
    const [nlpText, setNlpText] = useState('');
    const fullNlpText = 'Summarize the latest research...';
    const [showResponse, setShowResponse] = useState(false);

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            setNlpText(fullNlpText.slice(0, i + 1));
            i++;
            if (i >= fullNlpText.length) {
                clearInterval(typingInterval);
                setTimeout(() => setShowResponse(true), 600);
            }
        }, 80);
        return () => clearInterval(typingInterval);
    }, []);

    // Vision Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1 });
            tl.to(visionLineRef.current, {
                left: '100%',
                duration: 4,
                ease: 'linear'
            });

            // Tooltips
            gsap.to(visionTooltip1Ref.current, {
                opacity: 1,
                y: -10,
                duration: 0.5,
                delay: 1.2,
                yoyo: true,
                repeat: 1,
                repeatDelay: 1.5,
                repeatRefresh: true
            });
            // We loop tooltips manually with timeline to sync with line
            const tooltipTl = gsap.timeline({ repeat: -1 });
            tooltipTl
                .to(visionTooltip1Ref.current, { opacity: 1, y: 0, duration: 0.4 }, 1)
                .to(visionTooltip1Ref.current, { opacity: 0, y: 10, duration: 0.4 }, 2.5)
                .to(visionTooltip2Ref.current, { opacity: 1, y: 0, duration: 0.4 }, 2)
                .to(visionTooltip2Ref.current, { opacity: 0, y: 10, duration: 0.4 }, 3.5);
        });
        return () => ctx.revert();
    }, []);

    // Predictive Data Animation
    useEffect(() => {
        const dots = Array.from(dotsContainerRef.current?.children || []) as HTMLElement[];
        if (!dots.length) return;

        const ctx = gsap.context(() => {
            // Setup initial random positions
            dots.forEach((dot) => {
                gsap.set(dot, {
                    x: Math.random() * 100 + '%',
                    y: Math.random() * 100 + '%',
                });
            });

            const tl = gsap.timeline({ repeat: -1 });

            // Animate to Sine Wave
            tl.to(dots, {
                duration: 2,
                ease: "power2.inOut",
                x: (i) => `${(i / dots.length) * 100}%`,
                y: (i) => {
                    const xVal = (i / dots.length) * Math.PI * 2;
                    // Sine wave between 20% and 80% height
                    return `${50 + Math.sin(xVal) * 30}%`;
                },
                stagger: 0.01
            })
                .to({}, { duration: 2 }) // Hold
                .to(dots, {
                    duration: 2,
                    ease: "power2.inOut",
                    x: () => `${Math.random() * 100}%`,
                    y: () => `${Math.random() * 100}%`,
                })
                .to({}, { duration: 1 }); // Hold random
        });

        return () => ctx.revert();
    }, []);

    return (
        <section id="models" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
            <div className="mb-20 text-center">
                <h2 className="text-4xl md:text-5xl font-outfit text-slate-ash mb-4">Modalities of Mind</h2>
                <p className="text-lg text-slate-ash/70 font-inter max-w-2xl mx-auto">
                    We don't just build models. We craft specialized cognitive engines designed to interact with the world naturally.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Card 1: Generative NLP */}
                <div className="glass-card p-8 flex flex-col h-[400px] col-span-1 md:col-span-2 lg:col-span-1">
                    <div className="mb-6">
                        <h3 className="text-xl font-outfit text-slate-ash mb-2">Generative NLP</h3>
                        <p className="text-sm text-slate-ash/60">Fluid, contextual dialogue without the artificial stiffness.</p>
                    </div>
                    <div className="flex-1 rounded-2xl bg-white/40 p-4 border border-white/50 flex flex-col gap-4 overflow-hidden relative shadow-inner">
                        {/* User Bubble */}
                        <div className="self-end bg-slate-ash/5 text-slate-ash px-4 py-3 rounded-2xl rounded-tr-sm text-sm max-w-[85%]">
                            {nlpText}
                            <span className="inline-block w-1.5 h-4 ml-1 align-middle bg-slate-ash/40 animate-pulse"></span>
                        </div>
                        {/* AI Bubble */}
                        <div
                            className={`self-start bg-gradient-to-br from-white to-white/60 border border-white box-shadow-sm text-slate-ash/80 px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[90%] transition-all duration-1000 ease-out origin-top-left ${showResponse ? 'opacity-100 scale-100 translate-y-0 shadow-[0_10px_40px_-10px_rgba(167,139,250,0.3)]' : 'opacity-0 scale-95 translate-y-4'
                                }`}
                        >
                            The latest research indicates a massive shift toward highly efficient, specialized small models that achieve parity with massive clusters by leveraging high-quality, curated datasets.
                        </div>
                    </div>
                </div>

                {/* Card 2: Computer Vision */}
                <div className="glass-card p-8 flex flex-col h-[400px]">
                    <div className="mb-6 z-10 relative">
                        <h3 className="text-xl font-outfit text-slate-ash mb-2">Computer Vision</h3>
                        <p className="text-sm text-slate-ash/60">Perception that understands context, not just pixels.</p>
                    </div>
                    <div className="flex-1 rounded-2xl overflow-hidden relative border border-white/50 shadow-inner group">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 group-hover:scale-110"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b")' }}
                        >
                            <div className="absolute inset-0 bg-slate-ash/10 mix-blend-multiply"></div>
                        </div>

                        {/* Sweeping Line */}
                        <div
                            ref={visionLineRef}
                            className="absolute top-0 bottom-0 w-[2px] bg-white/60 shadow-[0_0_15px_rgba(255,255,255,0.8)] backdrop-blur-md z-20 left-0"
                        ></div>

                        {/* Tooltips */}
                        <div ref={visionTooltip1Ref} className="absolute left-[20%] top-[40%] bg-white/80 backdrop-blur-md text-xs font-inter px-3 py-1.5 rounded-full border border-white/60 text-slate-ash shadow-sm opacity-0 translate-y-2 z-30">
                            Flora
                        </div>
                        <div ref={visionTooltip2Ref} className="absolute left-[65%] top-[25%] bg-white/80 backdrop-blur-md text-xs font-inter px-3 py-1.5 rounded-full border border-white/60 text-slate-ash shadow-sm opacity-0 translate-y-2 z-30">
                            Atmosphere
                        </div>
                    </div>
                </div>

                {/* Card 3: Predictive Data */}
                <div className="glass-card p-8 flex flex-col h-[400px]">
                    <div className="mb-6 z-10 relative">
                        <h3 className="text-xl font-outfit text-slate-ash mb-2">Predictive Logic</h3>
                        <p className="text-sm text-slate-ash/60">Finding the hidden harmony in chaotic data streams.</p>
                    </div>
                    <div className="flex-1 rounded-2xl bg-white/30 border border-white/50 relative overflow-hidden shadow-inner flex items-center justify-center">
                        {/* Dots Container */}
                        <div ref={dotsContainerRef} className="absolute inset-4">
                            {Array.from({ length: 60 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1.5 h-1.5 bg-slate-ash/30 rounded-full"
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
