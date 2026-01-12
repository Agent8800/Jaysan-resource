"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="relative w-48 h-12 brightness-0 invert">
                            <Image
                                src="/logo.png"
                                alt="Jaysan Resource"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-xs">
                            Jaysan Resource is your trusted partner for high-quality home maintenance and specialized resource management.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">Our Services</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">Reviews</Link></li>
                            <li><Link href="/complaint" className="hover:text-white transition-colors text-blue-400 font-medium">Register Complaint</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-blue-500 mt-0.5 shrink-0" />
                                <span>123 Business Bay, Dubai,<br />United Arab Emirates</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-blue-500 shrink-0" />
                                <span>+971 4 000 0000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-500 shrink-0" />
                                <span>support@jaysan.service</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Stay Updated</h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Subscribe to our newsletter for service updates and exclusive offers.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white"
                            />
                            <button className="w-full bg-[#002E6E] text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-all">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 lg:mt-24 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Jaysan Resource. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
