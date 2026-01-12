"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Menu, User } from "lucide-react";

export default function Navbar() {
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
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-900">
                                <Search size={18} />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-900 sm:text-sm transition-all shadow-sm"
                                placeholder="Search for 'AC Repair', 'Cleaning'..."
                            />
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex items-center gap-1 text-gray-600 hover:text-blue-900 cursor-pointer transition-colors">
                            <MapPin size={18} />
                            <span className="text-sm font-medium">Dubai, UAE</span>
                        </div>

                        <Link
                            href="/complaint"
                            className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-xl text-white bg-[#002E6E] hover:bg-[#003B8E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md transition-all active:scale-95"
                        >
                            Register Complaint
                        </Link>

                        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 lg:hidden focus:outline-none">
                            <Menu size={24} />
                        </button>

                        <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-gray-200">
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 border border-blue-100">
                                <User size={18} />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
