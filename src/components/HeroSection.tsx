"use client";

import { Search, Printer } from "lucide-react";

export default function HeroSection() {
    return (
        <div className="relative w-full bg-[#064E3B] overflow-hidden">
            {/* Professional Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#064E3B] via-[#053F30] to-[#022C22] z-10" />

            {/* Abstract Design Elements */}
            <div className="absolute top-0 right-0 w-2/3 h-full hidden lg:flex items-center justify-center z-10 opacity-10 pointer-events-none">
                <Printer size={600} className="text-white shrink-0 rotate-12" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-40 relative z-20">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Certified Professional Services
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                        Enterprise Printer<br />
                        <span className="text-emerald-400 italic">Maintenance.</span>
                    </h1>
                    <p className="mt-8 text-lg sm:text-xl text-emerald-50/80 max-w-lg leading-relaxed">
                        High-precision repair, maintenance, and supplies for industrial-grade printers and corporate print fleets.
                    </p>

                    <div className="mt-12 max-w-xl">
                        <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2">
                            <div className="flex-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <Search size={22} />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-12 pr-4 py-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-base border-none rounded-xl"
                                    placeholder="Need Enterprise printer support?"
                                />
                            </div>
                            <button className="bg-[#064E3B] text-white px-10 py-5 rounded-xl font-bold hover:bg-[#053F30] transition-all shadow-lg active:scale-95">
                                Search
                            </button>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4 text-emerald-100/60 text-sm">
                        <span className="px-4 py-2 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-colors">Industrial Laser</span>
                        <span className="px-4 py-2 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-colors">Toner Optimization</span>
                        <span className="px-4 py-2 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-colors">Fleet Management</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
