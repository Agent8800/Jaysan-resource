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
                    <div className="space-y-6">
                        <div className="relative w-40 h-12">
                            <Image
                                src="/logo.png"
                                alt="Jaysan Resource"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Your neighborhood printer experts. Providing fast service, quality repairs, and genuine supplies for over 15 years.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#22c55e] hover:text-white transition-all shadow-sm">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="text-base font-black uppercase tracking-widest text-[#0f172a] mb-6">Our Shop</h3>
                        <ul className="space-y-4 text-gray-500 text-sm">
                            <li><Link href="/shop" className="hover:text-[#22c55e] transition-colors">Printers</Link></li>
                            <li><Link href="/shop" className="hover:text-[#22c55e] transition-colors">Ink Cartridges</Link></li>
                            <li><Link href="/shop" className="hover:text-[#22c55e] transition-colors">Toners</Link></li>
                            <li><Link href="/shop" className="hover:text-[#22c55e] transition-colors">Warranties</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-base font-black uppercase tracking-widest text-[#0f172a] mb-6">Services</h3>
                        <ul className="space-y-4 text-gray-500 text-sm">
                            <li><Link href="/complaint" className="hover:text-[#22c55e] transition-colors">Book Repair</Link></li>
                            <li><Link href="/complaint" className="hover:text-[#22c55e] transition-colors">Printer Maintenance</Link></li>
                            <li><Link href="/complaint" className="hover:text-[#22c55e] transition-colors">Toner Refill</Link></li>
                            <li><Link href="/admin" className="hover:text-[#4f46e5] font-bold">Admin Portal</Link></li>
                        </ul>
                    </div>

                    {/* Local Contact */}
                    <div>
                        <h3 className="text-base font-black uppercase tracking-widest text-[#0f172a] mb-6">Store Info</h3>
                        <ul className="space-y-4 text-gray-500 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#22c55e] shrink-0 mt-0.5" />
                                <span>Ind Area 3, Street 12, Shop #5, Behind Grand Mall</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[#22c55e] shrink-0" />
                                <span>+971 4 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[#22c55e] shrink-0" />
                                <span>hello@jaysanresource.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-400 text-xs">
                        © {new Date().getFullYear()} Jaysan Resource Printer Shop. Created with excellence.
                    </p>
                    <div className="flex gap-8 text-gray-400 text-xs font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-[#0f172a] transition-colors">Privacy</a>
                        <a href="#" className="hover:text-[#0f172a] transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
