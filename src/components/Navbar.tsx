"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Search, MapPin, Menu, User, ShoppingBag, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [location, setLocation] = useState("Lucknow, UP");
    const [cartCount, setCartCount] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const updateState = () => {
            const cart = JSON.parse(localStorage.getItem("jrpl_cart") || "[]");
            setCartCount(cart.length);

            const token = localStorage.getItem("jrpl_token");
            setIsAuthenticated(!!token);
        };

        updateState();
        window.addEventListener("storage", updateState);
        window.addEventListener("cartUpdated", updateState);
        return () => {
            window.removeEventListener("storage", updateState);
            window.removeEventListener("cartUpdated", updateState);
        };
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo - significantly larger */}
                    <Link href="/" className="flex-shrink-0 flex items-center pr-4">
                        <div className="relative w-40 h-10 sm:w-56 sm:h-14">
                            <Image
                                src="/logo.png"
                                alt="JRPL Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden lg:flex flex-1 max-w-lg mx-4">
                        <form onSubmit={handleSearch} className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <Search size={16} />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="block w-full pl-10 pr-4 py-2 border border-slate-300 rounded text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-green-600 outline-none transition-all"
                                placeholder="Search store..."
                            />
                        </form>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 text-slate-500 text-xs font-medium">
                            <MapPin size={14} className="text-green-600" />
                            <span>{location}</span>
                        </div>

                        {isAuthenticated ? (
                            <Link href="/account" className="p-2 text-slate-600 hover:text-green-600 transition-colors">
                                <User size={24} />
                            </Link>
                        ) : (
                            <Link href="/login" className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-black uppercase tracking-widest hover:bg-black transition-all">
                                <LogIn size={16} /> Login / Join
                            </Link>
                        )}

                        <Link href="/cart" className="p-2 text-slate-600 hover:text-green-600 relative transition-colors">
                            <ShoppingBag size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white shadow">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        <button className="lg:hidden p-3 rounded-2xl text-gray-600 hover:bg-gray-100 transition-colors">
                            <Menu size={32} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
