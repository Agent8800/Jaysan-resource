"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertCircle, CheckCircle2, ChevronRight, Upload, Info, Shield } from "lucide-react";

export default function ComplaintPage() {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow flex items-center justify-center p-4">
                    <div className="max-w-md w-full text-center p-12 rounded-[2.5rem] bg-white shadow-2xl border border-gray-100">
                        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircle2 size={48} />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Complaint Registered!</h1>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            Your complaint (Ref: #JR-{Math.floor(Math.random() * 100000)}) has been successfully registered. Our team will contact you within 24 hours.
                        </p>
                        <button
                            onClick={() => window.location.href = "/"}
                            className="w-full bg-[#002E6E] text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg"
                        >
                            Back to Home
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />

            <main className="flex-grow py-12 sm:py-20 lg:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">Register a Complaint</h1>
                        <p className="mt-4 text-lg text-gray-500">We take your concerns seriously. Please provide the details below.</p>
                    </div>

                    {/* Stepper */}
                    <div className="mb-12 flex items-center justify-between max-w-sm mx-auto relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
                        {[1, 2, 3].map((s) => (
                            <div
                                key={s}
                                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s ? 'bg-[#002E6E] text-white' : 'bg-white text-gray-400 border-2 border-gray-200'}`}
                            >
                                {s}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
                        <div className="p-8 sm:p-12">
                            {step === 1 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Personal Details</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                            <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-900 outline-none transition-all" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                            <input type="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-900 outline-none transition-all" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                        <input type="tel" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-900 outline-none transition-all" placeholder="+971 50 123 4567" />
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Service Details</h2>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type</label>
                                        <select required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-900 outline-none transition-all appearance-none cursor-pointer">
                                            <option value="">Select a service</option>
                                            <option value="ac">AC Repair & Maintenance</option>
                                            <option value="cleaning">Home Cleaning</option>
                                            <option value="plumbing">Plumbing</option>
                                            <option value="electronics">Electronics Repair</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Service (Approx)</label>
                                        <input type="date" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-900 outline-none transition-all" />
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Complaint Description</h2>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                                        <textarea required rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-900 outline-none transition-all resize-none" placeholder="Describe your issue in detail..."></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Photos (Optional)</label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-blue-400 transition-colors cursor-pointer group">
                                            <div className="space-y-1 text-center">
                                                <Upload className="mx-auto h-12 w-12 text-gray-400 group-hover:text-blue-500 transition-colors" />
                                                <div className="flex text-sm text-gray-600">
                                                    <span className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                                        Upload a file
                                                    </span>
                                                    <p className="pl-1 text-gray-500">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl text-blue-800 text-sm border border-blue-100">
                                        <Info size={18} className="shrink-0 mt-0.5" />
                                        <p>Submitting this form will create a priority ticket. Our executive will reach out to resolve the issue as per our quality guarantee.</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                            {step > 1 ? (
                                <button type="button" onClick={prevStep} className="px-6 py-3 font-semibold text-gray-600 hover:text-gray-900 transition-colors">
                                    Previous
                                </button>
                            ) : (
                                <div />
                            )}

                            {step < 3 ? (
                                <button type="button" onClick={nextStep} className="inline-flex items-center gap-2 bg-[#002E6E] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-md">
                                    Continue <ChevronRight size={18} />
                                </button>
                            ) : (
                                <button type="submit" className="bg-[#002E6E] text-white px-10 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-md">
                                    Submit Complaint
                                </button>
                            )}
                        </div>
                    </form>

                    <div className="mt-12 flex items-center justify-center gap-8 opacity-50">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
                            <Shield size={16} /> Secure Registration
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
                            <AlertCircle size={16} /> 24/7 Monitoring
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
