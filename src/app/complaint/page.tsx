"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertCircle, CheckCircle2, ChevronRight, Upload, Info, Shield, Printer } from "lucide-react";

export default function ComplaintPage() {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="flex flex-col min-h-screen bg-white">
                <Navbar />
                <main className="flex-grow flex items-center justify-center p-4">
                    <div className="max-w-md w-full text-center p-12 rounded-[3rem] bg-white shadow-2xl border border-gray-100">
                        <div className="w-24 h-24 bg-emerald-50 text-[#064E3B] rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                            <CheckCircle2 size={56} />
                        </div>
                        <h1 className="text-3xl font-black text-[#022C22] mb-4">Request Logged</h1>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            Your enterprise support request (Ref: #PR-{Math.floor(Math.random() * 100000)}) has been registered. A technician will be dispatched within 4 hours.
                        </p>
                        <button
                            onClick={() => window.location.href = "/"}
                            className="w-full bg-[#064E3B] text-white py-5 rounded-2xl font-bold hover:bg-[#053F30] transition-all shadow-xl active:scale-95"
                        >
                            Return to Dashboard
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#F0FDF4]/30">
            <Navbar />

            <main className="flex-grow py-12 sm:py-20 lg:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-black text-[#022C22] tracking-tight">Technical Support</h1>
                        <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">Register your industrial printer service request for immediate professional attention.</p>
                    </div>

                    {/* Stepper */}
                    <div className="mb-16 flex items-center justify-between max-w-sm mx-auto relative px-4">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0" />
                        {[1, 2, 3].map((s) => (
                            <div
                                key={s}
                                className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-black transition-all duration-500 ${step >= s ? 'bg-[#064E3B] text-white shadow-xl shadow-emerald-900/20' : 'bg-white text-gray-400 border-2 border-gray-100'}`}
                            >
                                {s}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="p-8 sm:p-16">
                            {step === 1 && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex items-center gap-3 pb-6 border-b border-gray-50 mb-8">
                                        <div className="p-2 bg-emerald-50 text-[#064E3B] rounded-xl"><Shield size={24} /></div>
                                        <h2 className="text-2xl font-black text-[#022C22]">Contact Information</h2>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Full Name</label>
                                            <input type="text" required className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-50 focus:border-[#064E3B] outline-none transition-all font-medium" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Enterprise Email</label>
                                            <input type="email" required className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-50 focus:border-[#064E3B] outline-none transition-all font-medium" placeholder="john@company.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Primary Phone</label>
                                        <input type="tel" required className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-50 focus:border-[#064E3B] outline-none transition-all font-medium" placeholder="+971 50 123 4567" />
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div className="flex items-center gap-3 pb-6 border-b border-gray-50 mb-8">
                                        <div className="p-2 bg-emerald-50 text-[#064E3B] rounded-xl"><Printer size={24} /></div>
                                        <h2 className="text-2xl font-black text-[#022C22]">Machine Profile</h2>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Printer Category</label>
                                        <select required className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-50 focus:border-[#064E3B] outline-none transition-all font-medium appearance-none cursor-pointer">
                                            <option value="">Select hardware type</option>
                                            <option value="laser">High-Volume Laser Jet</option>
                                            <option value="inkjet">Precision Office Jet</option>
                                            <option value="plotter">Architectural Plotter</option>
                                            <option value="thermal">Label / Thermal Printer</option>
                                            <option value="other">Managed Print Service</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Service Urgency</label>
                                        <select required className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-50 focus:border-[#064E3B] outline-none transition-all font-medium appearance-none cursor-pointer">
                                            <option value="standard">Standard (Business Hours)</option>
                                            <option value="urgent">Urgent (Express Support)</option>
                                            <option value="critical">Critical (Enterprise Outage)</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div className="flex items-center gap-3 pb-6 border-b border-gray-50 mb-8">
                                        <div className="p-2 bg-emerald-50 text-[#064E3B] rounded-xl"><AlertCircle size={24} /></div>
                                        <h2 className="text-2xl font-black text-[#022C22]">Issue Diagnostic</h2>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Problem Description</label>
                                        <textarea required rows={5} className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-50 focus:border-[#064E3B] outline-none transition-all font-medium resize-none shadow-inner" placeholder="Provide error codes or visual symptoms..."></textarea>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Diagnostic Reference (Optional)</label>
                                        <div className="mt-1 flex justify-center px-6 pt-10 pb-10 border-2 border-gray-100 border-dashed rounded-[2rem] hover:border-emerald-400 transition-all cursor-pointer group bg-gray-50">
                                            <div className="space-y-2 text-center">
                                                <Upload className="mx-auto h-12 w-12 text-gray-400 group-hover:text-[#064E3B] transition-colors" />
                                                <div className="flex text-sm text-gray-600">
                                                    <span className="font-bold text-[#064E3B] hover:underline">Upload error log</span>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-400">PDF, PNG, JPG up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="px-8 pb-12 sm:px-16 flex flex-col-reverse sm:flex-row gap-4 items-center justify-between">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="w-full sm:w-auto text-gray-400 font-bold hover:text-[#064E3B] transition-colors px-6"
                                >
                                    Previous Step
                                </button>
                            ) : <div></div>}

                            {step < 3 ? (
                                <button
                                    type="button"
                                    onClick={() => setStep(step + 1)}
                                    className="w-full sm:w-auto bg-[#064E3B] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#053F30] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2"
                                >
                                    Continue <ChevronRight size={20} />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto bg-[#064E3B] text-white px-12 py-5 rounded-2xl font-bold hover:bg-[#053F30] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2"
                                >
                                    Submit Request <Shield size={20} />
                                </button>
                            )}
                        </div>
                    </form>

                    <div className="mt-12 flex items-center justify-center gap-8 text-gray-400">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                            <Shield size={16} className="text-emerald-500" /> Secure Data
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                            <Info size={16} className="text-emerald-500" /> Enterprise Support
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
