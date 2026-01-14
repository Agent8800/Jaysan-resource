"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, User, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AdminLogin() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (id === "admin" && password === "jrpl123") {
            // Set a dummy token for simulated auth
            localStorage.setItem("jrpl_admin_token", "verified_" + Math.random().toString(36).substr(2));
            router.push("/admin");
        } else {
            setError("Invalid Administrative Credentials");
        }
    };

    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-green-500/10 blur-[150px] rounded-full -mr-[25vw] -mt-[25vh]" />
            <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-indigo-500/10 blur-[150px] rounded-full -ml-[25vw] -mb-[25vh]" />

            <div className="max-w-md w-full relative z-10">
                {/* Logo Section */}
                <div className="text-center mb-12">
                    <Link href="/">
                        <div className="relative w-56 h-14 mx-auto mb-6 grayscale invert brightness-200">
                            <Image src="/logo.png" alt="JRPL Logo" fill className="object-contain" />
                        </div>
                    </Link>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 text-green-400 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-green-500/20 backdrop-blur-sm">
                        <ShieldCheck size={14} /> Regional Admin Gateway
                    </div>
                </div>

                {/* Login Card */}
                <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] shadow-2xl p-8 sm:p-16 border border-white/10 relative group overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-indigo-500/20 rounded-[3rem] blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                    <div className="relative">
                        <h1 className="text-3xl font-black text-white mb-2 text-center tracking-tight">System Access</h1>
                        <p className="text-white/40 text-xs mb-12 text-center font-bold uppercase tracking-widest leading-relaxed">Identity Verification Protocol</p>

                        <form onSubmit={handleLogin} className="space-y-8">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Operator ID</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-white/20">
                                        <User size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        value={id}
                                        onChange={(e) => setId(e.target.value)}
                                        className="w-full pl-14 pr-6 py-6 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:ring-4 focus:ring-green-500/10 focus:border-green-500/40 outline-none transition-all font-bold text-white placeholder:text-white/10"
                                        placeholder="Admin identifier"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Security Key</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-white/20">
                                        <Lock size={20} />
                                    </div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-14 pr-6 py-6 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 focus:ring-4 focus:ring-green-500/10 focus:border-green-500/40 outline-none transition-all font-bold text-white placeholder:text-white/10"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            {error && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-center">
                                    <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">{error}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-[#22c55e] text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-green-400 transition-all shadow-xl shadow-green-900/40 active:scale-[0.98] flex items-center justify-center gap-4 group/btn"
                            >
                                Verify Identity <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-white/20 hover:text-green-400 transition-colors text-[10px] font-black uppercase tracking-[0.3em] group">
                        <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                        Return to Storefront
                    </Link>
                </div>
            </div>
        </div>
    );
}
