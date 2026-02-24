import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Eye, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
    {
        title: "Data Models",
        description: "Foundational LLMs trained on highly curated datasets for unprecedented accuracy without the bloat.",
        icon: <Database className="w-8 h-8 text-muted-lavender mb-6" strokeWidth={1.5} />,
        color: "from-muted-lavender/10 to-transparent"
    },
    {
        title: "Vision Systems",
        description: "Multimodal perception engines that understand spatial relationships, atmospheric conditions, and semantic intent.",
        icon: <Eye className="w-8 h-8 text-soft-sage mb-6" strokeWidth={1.5} />,
        color: "from-soft-sage/10 to-transparent"
    },
    {
        title: "Autonomous Agents",
        description: "Self-correcting, goal-oriented cognitive loops that act as true extensions of your workflow.",
        icon: <Cpu className="w-8 h-8 text-slate-ash/70 mb-6" strokeWidth={1.5} />,
        color: "from-slate-ash/5 to-transparent"
    }
];

export function Capabilities() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                const isLastCard = index === cardsRef.current.length - 1;

                if (!isLastCard) {
                    gsap.to(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: "top 15%",
                            endTrigger: cardsRef.current[index + 1] || card,
                            end: "top 25%",
                            scrub: true,
                        },
                        scale: 0.94,
                        opacity: 0.4,
                        y: -20,
                        transformOrigin: "top center",
                        ease: "none"
                    });
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="capabilities" className="py-32 bg-alabaster relative z-10">
            <div className="max-w-4xl mx-auto px-6">

                <div className="mb-24 text-center">
                    <h2 className="text-4xl md:text-5xl font-outfit text-slate-ash mb-4">Core Capabilities</h2>
                    <p className="text-lg text-slate-ash/70 font-inter">
                        Built from the ground up to be lean, brilliant, and human-first.
                    </p>
                </div>

                <div ref={containerRef} className="relative space-y-24">
                    {capabilities.map((cap, i) => (
                        <div
                            key={i}
                            ref={el => { cardsRef.current[i] = el; }}
                            className="sticky top-[15vh] w-full origin-top"
                        >
                            <div className={`glass-card p-12 md:p-16 w-full rounded-[2.5rem] bg-gradient-to-br ${cap.color} border border-white/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]`}>
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                                    <div className="flex-1">
                                        {cap.icon}
                                        <h3 className="text-3xl font-outfit text-slate-ash mb-4">{cap.title}</h3>
                                        <p className="text-lg text-slate-ash/70 font-inter leading-relaxed max-w-xl">
                                            {cap.description}
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/3 flex justify-end">
                                        <div className="w-24 h-24 rounded-full border border-slate-ash/10 flex items-center justify-center bg-white/40 shadow-inner">
                                            <span className="font-outfit text-slate-ash/40 text-xl font-light">0{i + 1}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
