"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Search, MapPin, Menu, User } from "lucide-react";

export default function Navbar() {
    const [location, setLocation] = useState("Select Location");

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
                    console.error("Error fetching location:", error);
                }
            });
        }
    }, []);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center">
                        <div className="relative w-32 h-10 sm:w-40 sm:h-12">
                            <Image
                                src="/logo.png"
                                alt="Jaysan Resource"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* Search Bar - Hidden on mobile */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-8">
                        <div className="relative w-full group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#064E3B]">
                                <Search size={18} />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-50 focus:border-[#064E3B] sm:text-sm transition-all shadow-sm"
                                placeholder="Search for 'Printer Repair', 'Toner'..."
                            />
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex items-center gap-1 text-gray-600 hover:text-[#064E3B] cursor-pointer transition-colors">
                            <MapPin size={18} className="text-[#064E3B]" />
                            <span className="text-sm font-semibold whitespace-nowrap">{location}</span>
                        </div>

                        <Link
                            href="/complaint"
                            className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold rounded-xl text-white bg-[#064E3B] hover:bg-[#053F30] shadow-md transition-all active:scale-95"
                        >
                            Register Request
                        </Link>

                        <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-[#064E3B] cursor-pointer hover:bg-emerald-100 transition-colors">
                            <User size={20} />
                        </div>

                        <button className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
