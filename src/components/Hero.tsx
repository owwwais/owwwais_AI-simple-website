import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const words = ["listens", "sees", "predicts", "understands"];

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const wordsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Graceful fade up for the main typography using custom ease
            gsap.fromTo(
                textRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1.8, ease: "cubic-bezier(0.16, 1, 0.3, 1)", delay: 0.2 }
            );

            // Text Spinner Logic
            const wordElements = wordsRef.current?.children;
            if (wordElements) {
                gsap.set(wordElements, { yPercent: 100, opacity: 0, filter: "blur(10px)" });

                const tl = gsap.timeline({ repeat: -1 });

                Array.from(wordElements).forEach((word) => {
                    // Bring in
                    tl.to(word, {
                        yPercent: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 1.2,
                        ease: "cubic-bezier(0.16, 1, 0.3, 1)"
                    })
                        // Hold
                        .to(word, {
                            duration: 1.5
                        })
                        // Take out
                        .to(word, {
                            yPercent: -100,
                            opacity: 0,
                            filter: "blur(10px)",
                            duration: 1.2,
                            ease: "cubic-bezier(0.16, 1, 0.3, 1)"
                        }, "+=0"); // start immediately after hold
                });
            }

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[100dvh] flex items-center pt-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                <div className="flex flex-col items-start" ref={textRef}>
                    <h1 className="text-5xl md:text-7xl font-outfit text-slate-ash leading-tight mb-6">
                        Intelligence, <br /> naturally.
                    </h1>

                    <div className="flex items-center text-2xl md:text-3xl font-inter font-light text-slate-ash/70 overflow-hidden h-12">
                        <span>We build AI that&nbsp;</span>
                        <div className="relative w-48 h-full" ref={wordsRef}>
                            {words.map((word, i) => (
                                <div key={i} className="absolute inset-0 flex items-center text-muted-lavender font-medium">
                                    {word}.
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* The Aura Orb */}
                <div className="relative h-[400px] w-full flex justify-center items-center pointer-events-none">
                    <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-muted-lavender/40 to-soft-sage/40 blur-3xl rounded-full opacity-60 animate-pulse-slow mix-blend-multiply"></div>
                    <div className="aura-orb w-[300px] h-[300px] z-10"></div>
                </div>
            </div>
        </section>
    );
}
