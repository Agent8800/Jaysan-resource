"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Send, Map as MapIcon, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <span className="text-xs font-black text-[#4f46e5] uppercase tracking-[0.3em] mb-4 block">Get in Touch</span>
                                <h1 className="text-4xl sm:text-5xl font-black text-[#0f172a] tracking-tight leading-tight">How can we <br /><span className="text-[#22c55e]">help you today?</span></h1>
                                <p className="text-gray-500 mt-6 leading-relaxed max-w-md">
                                    Visit our store for repairs, order supplies online, or call our expert technical team for immediate assistance.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { icon: MapPin, title: "Our Store", detail: "Sector 12, Industrial Area, Noida, UP - 201301", color: "bg-green-50 text-green-600" },
                                    { icon: Phone, title: "Call Support", detail: "+91 987 654 3210 / 0120-456789", color: "bg-indigo-50 text-indigo-600" },
                                    { icon: Mail, title: "Email Us", detail: "hello@jrplshop.in / support@jrplshop.in", color: "bg-amber-50 text-amber-600" },
                                    { icon: Clock, title: "Store Hours", detail: "Mon - Sat: 9:00 AM - 8:00 PM (Closed on Sun)", color: "bg-gray-50 text-gray-600" },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-6 items-center p-6 bg-white border border-gray-100 rounded-[2rem] hover:shadow-xl transition-all">
                                        <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center ${item.color}`}>
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-sm font-medium text-gray-400 mt-1">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-[#0f172a] rounded-[3rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#22c55e]/10 blur-[100px] rounded-full -mr-32 -mt-32" />
                            <h2 className="text-2xl font-black mb-8">Send a Message</h2>

                            {submitted ? (
                                <div className="text-center py-12 animate-in zoom-in-95 duration-500">
                                    <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-900/40">
                                        <Send size={32} />
                                    </div>
                                    <h3 className="text-xl font-black mb-2">Message Sent!</h3>
                                    <p className="text-white/50 text-sm">We'll get back to you within 2 business hours.</p>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Your Name</label>
                                            <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:bg-white/10 focus:border-[#22c55e] transition-all font-bold" placeholder="Amit Sharma" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Email Address</label>
                                            <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:bg-white/10 focus:border-[#22c55e] transition-all font-bold" placeholder="amit@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Subject</label>
                                        <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:bg-white/10 focus:border-[#22c55e] transition-all font-bold appearance-none cursor-pointer">
                                            <option>Product Inquiry</option>
                                            <option>Repair Booking Follow-up</option>
                                            <option>Bulk Supply Order</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Message</label>
                                        <textarea required rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:bg-white/10 focus:border-[#22c55e] transition-all font-bold resize-none" placeholder="How can we help?"></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#22c55e] text-white py-5 rounded-2xl font-black hover:bg-[#16a34a] transition-all shadow-xl shadow-green-900/40 active:scale-95 flex items-center justify-center gap-3"
                                    >
                                        Send Message <Send size={20} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
