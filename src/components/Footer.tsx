"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#022C22] text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="relative w-40 h-10 grayscale invert brightness-200">
                            <Image
                                src="/logo.png"
                                alt="Jaysan Resource"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-emerald-50/60 leading-relaxed text-sm">
                            Jaysan Resource is a premier enterprise support provider, specializing in industrial print fleet management and professional technical services.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#064E3B] transition-colors">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Printer Solutions</h3>
                        <ul className="space-y-4 text-emerald-50/50 text-sm">
                            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Laser Repair</Link></li>
                            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Toner Supplies</Link></li>
                            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Maintenance Kits</Link></li>
                            <li><Link href="/complaint" className="hover:text-emerald-400 transition-colors text-emerald-400 font-bold">Service Request</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-emerald-50/50 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-emerald-400 shrink-0" />
                                <span>Specialized Tech Center, Street 12, Ind Area 3</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-emerald-400 shrink-0" />
                                <span>+971 4 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-emerald-400 shrink-0" />
                                <span>support@jaysanprinter.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Enterprise Updates</h3>
                        <p className="text-emerald-50/50 mb-6 text-sm">Subscribe for industrial maintenance bulletins and professional offers.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Business Email"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-400 transition-colors text-sm"
                            />
                            <button className="w-full bg-[#064E3B] text-white py-3 rounded-xl font-bold hover:bg-[#053F30] transition-all text-sm">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-emerald-50/20 text-xs">
                        © {new Date().getFullYear()} Jaysan Resource Printer Services. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-emerald-50/20 text-xs font-medium">
                        <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
