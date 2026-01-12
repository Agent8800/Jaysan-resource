"use client";

import Image from "next/image";
import { Search } from "lucide-react";

export default function HeroSection() {
    return (
        <div className="relative w-full bg-[#002E6E] overflow-hidden">
            {/* Background Pattern/Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#002E6E] via-[#002E6E]/90 to-transparent z-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
                <Image
                    src="/hero.png"
                    alt="Jaysan Resource Services"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32 relative z-20">
                <div className="max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                        Home services,<br />
                        <span className="text-blue-300">at your doorstep.</span>
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-lg">
                        Experience the best-in-class home maintenance, cleaning, and resource management with Jaysan Resource.
                    </p>

                    <div className="mt-10 max-w-xl">
                        <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2">
                            <div className="flex-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <Search size={20} />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-base border-none rounded-xl"
                                    placeholder="What service are you looking for?"
                                />
                            </div>
                            <button className="bg-[#002E6E] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg active:scale-95">
                                Search
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4 text-blue-100 text-sm">
                        <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/10">AC Repair</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/10">Full Home Cleaning</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/10">Painting</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/10">Plumbing</span>
                    </div>
                </div>
            </div>

            {/* Mobile Background (only visible on mobile) */}
            <div className="lg:hidden absolute bottom-0 right-0 w-full h-1/2 opacity-20 pointer-events-none">
                <Image
                    src="/hero.png"
                    alt="Hero Mobile"
                    fill
                    className="object-contain object-bottom"
                />
            </div>
        </div>
    );
}
