import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Award, Clock, Printer, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
                {/* Hero */}
                <section className="bg-gray-50 py-20 lg:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="text-xs font-black text-[#22c55e] uppercase tracking-[0.3em] mb-4 block">Since 2008</span>
                        <h1 className="text-4xl sm:text-6xl font-black text-[#0f172a] mb-8 leading-tight">Expert Printer Solutions <br /><span className="text-[#4F46E5]">for Every Need.</span></h1>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Jaysan Resource Printer Line (JRPL) started with a simple mission: to provide reliable, fast, and affordable printer repairs and supplies to our local community.
                        </p>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-20 lg:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                { label: "Years Experience", value: "15+", icon: Clock },
                                { label: "Happy Customers", value: "10k+", icon: Users },
                                { label: "Repairs Completed", value: "25k+", icon: Printer },
                                { label: "Brand Certifications", value: "12+", icon: Award },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center group">
                                    <div className="w-16 h-16 bg-gray-50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 text-[#22c55e] border border-gray-100 group-hover:bg-[#22c55e] group-hover:text-white transition-all duration-300">
                                        <stat.icon size={28} />
                                    </div>
                                    <div className="text-4xl font-black text-[#0f172a] mb-2">{stat.value}</div>
                                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission */}
                <section className="py-20 lg:py-32 bg-[#0f172a] text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1">
                            <h2 className="text-3xl sm:text-5xl font-black mb-8 leading-tight">Reliability is our <br /><span className="text-[#22c55e]">Middle Name.</span></h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 shrink-0 bg-[#22c55e] rounded-lg items-center justify-center flex text-white"><ShieldCheck /></div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Original Only</h4>
                                        <p className="text-white/50 text-sm leading-relaxed">We strictly use OEM parts and genuine consumables to ensure your printer lives its full life.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 shrink-0 bg-[#4f46e5] rounded-lg items-center justify-center flex text-white"><Clock /></div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Express Turnaround</h4>
                                        <p className="text-white/50 text-sm leading-relaxed">We know downtime costs money. Our 24-hour repair guarantee keeps your business moving.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative w-full aspect-square max-w-md">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#22c55e]/20 to-[#4f46e5]/20 blur-[100px] rounded-full" />
                            <div className="relative z-10 w-full h-full bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 flex items-center justify-center">
                                <Printer size={200} className="text-white opacity-20" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
