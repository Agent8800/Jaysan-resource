"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white text-gray-900 pt-20 pb-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-8">
                        <div className="relative w-56 h-16 sm:w-64 sm:h-20">
                            <Image
                                src="/logo.png"
                                alt="Jaysan Resource"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-500 leading-relaxed text-sm max-w-xs">
                            Your neighborhood printer experts. Providing fast service, quality repairs, and genuine supplies across India.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#22c55e] hover:text-white hover:shadow-lg transition-all border border-gray-100">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Shop */}
                    <div className="lg:pl-8">
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#0f172a] mb-8">Our Shop</h3>
                        <ul className="space-y-4 text-gray-500 text-sm font-medium">
                            <li><Link href="/shop" className="hover:text-[#22c55e] transition-colors flex items-center gap-2">Printers <span className="text-[10px] bg-green-50 px-2 py-0.5 rounded text-green-600 font-black">NEW</span></Link></li>
                            <li><Link href="/shop" className="hover:text-[#22c55e] transition-colors">Ink Cartridges</Link></li>
                            <li><Link href="/shop" className="hover:text-[#22c55e] transition-colors">Toners & Drums</Link></li>
                            <li><Link href="/shop" className="hover:text-[#22c55e] transition-colors">Parts & Kits</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#0f172a] mb-8">Services</h3>
                        <ul className="space-y-4 text-gray-500 text-sm font-medium">
                            <li><Link href="/complaint" className="hover:text-[#22c55e] transition-colors">Book Repair</Link></li>
                            <li><Link href="/complaint" className="hover:text-[#22c55e] transition-colors">Maintenance Pro</Link></li>
                            <li><Link href="/complaint" className="hover:text-[#22c55e] transition-colors">Ink Refill Plan</Link></li>
                            <li><Link href="/admin" className="text-[#4f46e5] font-black hover:underline underline-offset-4">Admin Dashboard</Link></li>
                        </ul>
                    </div>

                    {/* Local Contact */}
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#0f172a] mb-8">Store Info</h3>
                        <ul className="space-y-5 text-gray-500 text-sm">
                            <li className="flex items-start gap-4 font-medium">
                                <MapPin size={22} className="text-[#22c55e] shrink-0" />
                                <span>Sector 12, Industrial Area, Noida, UP - 201301</span>
                            </li>
                            <li className="flex items-center gap-4 font-medium">
                                <Phone size={22} className="text-[#22c55e] shrink-0" />
                                <span>+91 987 654 3210</span>
                            </li>
                            <li className="flex items-center gap-4 font-medium">
                                <Mail size={22} className="text-[#22c55e] shrink-0" />
                                <span>support@jrplshop.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                        © {new Date().getFullYear()} Jaysan Resource Printer Shop.
                    </p>
                    <div className="flex gap-10 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                        <a href="#" className="hover:text-[#0f172a] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#0f172a] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
