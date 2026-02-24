import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Philosophy() {
    const containerRef = useRef<HTMLElement>(null);
    const text1Ref = useRef<HTMLHeadingElement>(null);
    const text2Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1.5,
                }
            });

            // Part 1: First text is visible initially, then blurs and fades out
            tl.to(text1Ref.current, {
                opacity: 0,
                filter: "blur(15px)",
                y: -50,
                ease: "power2.inOut"
            }, 0)

                // Part 2: Second text comes in blurry and becomes perfectly clear
                .fromTo(text2Ref.current, {
                    opacity: 0,
                    filter: "blur(15px)",
                    y: 50,
                }, {
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                    ease: "power2.inOut"
                }, 0.2);

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="philosophy" className="py-40 min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center relative w-full h-[400px] flex items-center justify-center">

                <h2 ref={text1Ref} className="absolute inset-x-0 mx-auto text-4xl md:text-6xl lg:text-7xl font-outfit text-slate-ash leading-tight opacity-100">
                    Technology shouldn't feel <br /><span className="italic text-slate-ash/60">artificial.</span>
                </h2>

                <h2 ref={text2Ref} className="absolute inset-x-0 mx-auto text-4xl md:text-6xl lg:text-7xl font-outfit text-slate-ash leading-tight opacity-0">
                    It should feel like an <br /><span className="text-muted-lavender bg-clip-text text-transparent bg-gradient-to-r from-muted-lavender to-soft-sage">extension of thought.</span>
                </h2>

            </div>
        </section>
    );
}
