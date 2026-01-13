"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Search, MapPin, Menu, User, ShoppingBag } from "lucide-react";

export default function Navbar() {
    const [location, setLocation] = useState("Detecting...");

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
                    );
                    const data = await response.json();
                    const city = data.address.city || data.address.town || data.address.village || "Current Location";
                    setLocation(city);
                } catch (error) {
                    setLocation("Store Location");
                }
            }, () => {
                setLocation("Store Location");
            });
        } else {
            setLocation("Store Location");
        }
    }, []);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 sm:h-24">
                    {/* Logo - Increased size */}
                    <Link href="/" className="flex-shrink-0 flex items-center">
                        <div className="relative w-40 h-14 sm:w-56 sm:h-18">
                            <Image
                                src="/logo.png"
                                alt="Jaysan Resource"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-8">
                        <div className="relative w-full group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#22c55e]">
                                <Search size={18} />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-[#22c55e] sm:text-sm transition-all shadow-sm"
                                placeholder="Search for printers, ink, repair..."
                            />
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3 sm:gap-6">
                        <div className="hidden lg:flex items-center gap-1 text-gray-600 hover:text-[#22c55e] cursor-pointer transition-colors px-4 py-2 bg-gray-50 rounded-xl">
                            <MapPin size={16} className="text-[#22c55e]" />
                            <span className="text-sm font-bold whitespace-nowrap">{location}</span>
                        </div>

                        <Link
                            href="/complaint"
                            className="hidden sm:inline-flex items-center px-6 py-3 text-sm font-black rounded-xl text-white bg-[#22c55e] hover:bg-[#16a34a] shadow-lg shadow-green-100 transition-all active:scale-95 uppercase tracking-wider"
                        >
                            Book Repair
                        </Link>

                        <Link href="/shop" className="p-2 text-gray-600 hover:text-[#4f46e5] relative">
                            <ShoppingBag size={24} />
                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#f59e0b] rounded-full ring-2 ring-white"></span>
                        </Link>

                        <Link href="/admin" className="p-3 text-gray-600 hover:text-[#0f172a] bg-gray-50 rounded-full">
                            <User size={22} />
                        </Link>

                        <button className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100">
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
