"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wrench, User, Mail, Phone, MapPin, AlertCircle, CheckCircle2, ArrowRight, Clock, ShieldCheck, Printer } from "lucide-react";

export default function BookRepairPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "Lucknow, Uttar Pradesh",
        exactAddress: "",
        problem: "",
        printerModel: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Save to local storage for admin to see
            const requests = JSON.parse(localStorage.getItem("jrpl_requests") || "[]");
            requests.push({
                id: `PR-${Math.floor(10000 + Math.random() * 90000)}`,
                customer: formData.name,
                product: formData.printerModel || "Unknown Printer",
                email: formData.email,
                phone: formData.phone,
                urgency: "Standard",
                status: "Pending",
                date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }),
                issue: formData.problem,
                location: formData.exactAddress
            });
            localStorage.setItem("jrpl_requests", JSON.stringify(requests));
        }, 1500);
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />

            <main className="flex-grow py-12 lg:py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">

                    {isSuccess ? (
                        <div className="bg-white rounded-lg p-12 text-center shadow-xl border border-slate-200 animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                                <CheckCircle2 size={40} />
                            </div>
                            <h1 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h1>
                            <p className="text-slate-500 font-bold mb-10 max-w-xs mx-auto uppercase tracking-widest text-[10px] leading-relaxed">
                                Our Lucknow technician will contact you within 2 business hours for scheduling.
                            </p>
                            <button onClick={() => window.location.href = "/"} className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-sm active:scale-95">
                                Back to Store
                            </button>
                        </div>
                    ) : (
                        <div className="enterprise-card rounded-lg overflow-hidden">
                            <div className="bg-slate-900 p-10 text-white relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full -mr-32 -mt-32" />
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center border border-white/10">
                                        <Wrench size={20} className="text-green-500" />
                                    </div>
                                    <h1 className="text-2xl font-bold tracking-tight">Book Repair</h1>
                                </div>
                                <p className="text-slate-500 font-bold text-[9px] uppercase tracking-widest">Official JRPL Lucknow Service Store</p>
                            </div>

                            <form onSubmit={handleSubmit} className="p-8 sm:p-12 space-y-10 bg-white">
                                {/* Personal Details */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client Identification</h3>
                                        <div className="flex-1 h-px bg-slate-100"></div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                            <input
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                type="text"
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm font-bold focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-green-600 outline-none transition-all shadow-inner"
                                                placeholder="e.g. Rahul Sharma"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email ID</label>
                                            <input
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                type="email"
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm font-bold focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-green-600 outline-none transition-all shadow-inner"
                                                placeholder="rahul@domain.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 text-sm font-bold">+91</div>
                                            <input
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                type="tel"
                                                className="w-full pl-14 pr-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm font-bold focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-green-600 outline-none transition-all shadow-inner"
                                                placeholder="9876543210"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Location Details */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Service Coordination</h3>
                                        <div className="flex-1 h-px bg-slate-100"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Lucknow Delivery Address</label>
                                        <textarea
                                            required
                                            value={formData.exactAddress}
                                            onChange={(e) => setFormData({ ...formData, exactAddress: e.target.value })}
                                            rows={2}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm font-bold focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-green-600 outline-none transition-all resize-none shadow-inner"
                                            placeholder="Complete address with landmark... (Lucknow region only)"
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Problem Details */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Diagnostic Summary</h3>
                                        <div className="flex-1 h-px bg-slate-100"></div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Printer Model</label>
                                            <input
                                                required
                                                value={formData.printerModel}
                                                onChange={(e) => setFormData({ ...formData, printerModel: e.target.value })}
                                                type="text"
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm font-bold focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-green-600 outline-none transition-all shadow-inner"
                                                placeholder="e.g. HP Laserjet Pro M1136"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Issue Category</label>
                                            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm font-bold focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-green-600 outline-none transition-all cursor-pointer appearance-none shadow-inner">
                                                <option>Paper / Feed Issue</option>
                                                <option>Quality / Faded Print</option>
                                                <option>Error / System Lock</option>
                                                <option>Power / Connection</option>
                                                <option>Physical / Noise Issue</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Problem Description</label>
                                        <textarea
                                            required
                                            value={formData.problem}
                                            onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                                            rows={3}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm font-bold focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-green-600 outline-none transition-all resize-none shadow-inner"
                                            placeholder="Briefly describe the fault..."
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-slate-900 text-white py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-4 disabled:opacity-50"
                                >
                                    {isSubmitting ? "Processing..." : <>Confirm Request <ArrowRight size={16} /></>}
                                </button>

                                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                                    <div className="flex items-center gap-2 text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                                        <ShieldCheck size={14} className="text-green-600/50" /> Regional Store Repair
                                    </div>
                                    <div className="flex items-center gap-2 text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                                        <Clock size={14} className="text-amber-500/50" /> 2h Response Time
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
