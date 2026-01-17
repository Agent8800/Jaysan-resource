"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Printer } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 pt-10 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                        <div className="relative w-44 h-10 mb-3">
                            <Image
                                src="/logo.png"
                                alt="JRPL Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6">
                            Lucknow's premier regional distributor specializing in high-performance printer hardware, original supplies, and professional diagnostic services.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 border border-slate-100 shadow-sm">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px] mb-4">Store</h4>
                        <ul className="space-y-3">
                            <li><Link href="/shop" className="text-slate-500 hover:text-green-600 text-xs font-medium transition-colors">Laser Printers</Link></li>
                            <li><Link href="/shop" className="text-slate-500 hover:text-green-600 text-xs font-medium transition-colors">Ink Tanks</Link></li>
                            <li><Link href="/shop" className="text-slate-500 hover:text-green-600 text-xs font-medium transition-colors">Refill Supplies</Link></li>
                            <li><Link href="/shop" className="text-slate-500 hover:text-green-600 text-xs font-medium transition-colors">Toner & Drums</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px] mb-4">Operations</h4>
                        <ul className="space-y-3">
                            <li><Link href="/complaint" className="text-slate-500 hover:text-green-600 text-xs font-medium transition-colors">Book Repair</Link></li>
                            <li><Link href="/complaint" className="text-slate-500 hover:text-green-600 text-xs font-medium transition-colors">On-Site Visit</Link></li>
                            <li><Link href="/about" className="text-slate-500 hover:text-green-600 text-xs font-medium transition-colors">Support Team</Link></li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div>
                        <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px] mb-4">Lucknow Store</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-green-600 shrink-0 mt-0.5" />
                                <span className="text-slate-500 text-xs font-medium">B-3/42 Sector B Aliganj,<br />Lucknow, Uttar Pradesh 226024</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-green-600 shrink-0" />
                                <span className="text-slate-500 text-xs font-medium">+91-522-3591902</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-green-600 shrink-0" />
                                <span className="text-slate-500 text-xs font-medium">support@jrpl.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                        © {new Date().getFullYear()} Jaysan Resource Pvt Ltd. Lucknow Regional Store.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="/privacy" className="text-slate-400 hover:text-slate-600 text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-slate-400 hover:text-slate-600 text-[10px] font-bold uppercase tracking-widest transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
