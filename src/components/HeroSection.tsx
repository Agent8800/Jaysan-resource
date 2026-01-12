"use client";

import { Search, Printer, ShoppingBag, Wrench } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="relative w-full bg-white overflow-hidden border-b border-gray-50">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#22c55e]/5 blur-[100px] rounded-full -mr-20 -mt-20 z-0" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#4f46e5]/5 blur-[100px] rounded-full -ml-20 -mb-20 z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 lg:py-32 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-[#22c55e] border border-green-100 text-sm font-bold mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                            Your Trusted Printer Partner
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0f172a] leading-[1.1] tracking-tight mb-8">
                            Quality Printers <br />
                            <span className="text-[#4f46e5]">Experts.</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
                            Your one-stop shop for professional printer repairs, genuine ink & toner supplies, and branded printer hardware.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                            <Link
                                href="/complaint"
                                className="w-full sm:w-auto px-8 py-4 bg-[#22c55e] text-white rounded-2xl font-bold shadow-xl shadow-green-200 hover:bg-[#16a34a] transition-all flex items-center justify-center gap-2 group"
                            >
                                <Wrench size={20} className="group-hover:rotate-12 transition-transform" />
                                Book a Repair
                            </Link>
                            <Link
                                href="/shop"
                                className="w-full sm:w-auto px-8 py-4 bg-[#4f46e5] text-white rounded-2xl font-bold shadow-xl shadow-indigo-200 hover:bg-[#4338ca] transition-all flex items-center justify-center gap-2"
                            >
                                <ShoppingBag size={20} />
                                Shop Supplies
                            </Link>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
                            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                                <Printer size={20} /> <span className="text-sm font-bold">HP Certified</span>
                            </div>
                            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                                <Printer size={20} /> <span className="text-sm font-bold">Canon Expert</span>
                            </div>
                            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                                <Printer size={20} /> <span className="text-sm font-bold">Epson Pro</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
                        <div className="relative aspect-square sm:aspect-[4/3] rounded-[3rem] bg-gray-50 border border-gray-100 overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="relative w-full h-full opacity-10">
                                    <Printer size={400} className="w-full h-full text-[#4f46e5]" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl max-w-xs">
                                        <div className="text-4xl font-black text-[#22c55e] mb-2">15+</div>
                                        <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years of Printer Excellence</div>
                                    </div>
                                </div>
                            </div>
                            {/* Accent lines */}
                            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#f59e0b]/10 to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#22c55e]/10 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
