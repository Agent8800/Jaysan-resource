"use client";

import { Search, Printer, ShoppingBag, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroSlides = [
    {
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop",
        title: "Enterprise Solutions",
        subtitle: "High-performance hardware for modern businesses."
    },
    {
        image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=2070&auto=format&fit=crop",
        title: "Original Supplies",
        subtitle: "Authentic ink and toner for peak performance."
    },
    {
        image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=2070&auto=format&fit=crop",
        title: "Expert Service",
        subtitle: "Authorized technical diagnostics and repair."
    }
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full bg-white overflow-hidden border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-green-50 text-green-600 border border-green-100 text-[10px] font-bold uppercase tracking-widest mb-8">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-green-600 animate-pulse"></span>
                            Official Regional Store
                        </div>

                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
                            Lucknow's #1 <br />
                            <span className="text-green-600">Printer Store.</span>
                        </h1>

                        <p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 font-medium">
                            Your one-stop destination for professional printer hardware, genuine supplies, and authorized repair services in Lucknow.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                            <Link
                                href="/complaint"
                                className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white rounded font-bold text-xs uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 group"
                            >
                                <Wrench size={16} className="group-hover:rotate-12 transition-transform" />
                                Support Request
                            </Link>
                            <Link
                                href="/shop"
                                className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
                            >
                                <ShoppingBag size={16} />
                                Visit Store
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
                        <div className="relative aspect-square sm:aspect-[4/3] rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shadow-sm group">
                            {heroSlides.map((slide, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                                        <h3 className="text-xl font-bold mb-1">{slide.title}</h3>
                                        <p className="text-xs text-white/80 font-medium">{slide.subtitle}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Slider Controls */}
                            <div className="absolute bottom-6 right-6 flex gap-2">
                                <button
                                    onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                                    className="p-2 bg-white/10 backdrop-blur-md rounded border border-white/20 text-white hover:bg-white/20 transition-all"
                                >
                                    <ChevronLeft size={16} />
                                </button>
                                <button
                                    onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                                    className="p-2 bg-white/10 backdrop-blur-md rounded border border-white/20 text-white hover:bg-white/20 transition-all"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            </div>

                            {/* Progress Indicators */}
                            <div className="absolute top-6 right-6 flex gap-1">
                                {heroSlides.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-green-500' : 'w-2 bg-white/30'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
