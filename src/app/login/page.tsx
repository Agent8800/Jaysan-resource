"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Lock, User, ArrowRight, ShieldCheck, Github } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
        const body = isLogin ? { email, password } : { name, email, password };

        try {
            const res = await fetch(`http://localhost:5000${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("jrpl_token", data.token);
                localStorage.setItem("jrpl_user", JSON.stringify(data.user));
                router.push("/account");
            } else {
                setError(data.error || "Authentication failed");
            }
        } catch (err) {
            setError("Cannot connect to server. Ensure backend is running.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />

            <div className="flex-grow flex items-center justify-center p-6 py-20 relative overflow-hidden">
                {/* Decorative Blobs */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-200/40 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-200/40 blur-[100px] rounded-full" />

                <div className="max-w-md w-full relative z-10">
                    <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 p-10 sm:p-16 border border-slate-100 relative group overflow-hidden">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <ShieldCheck size={14} /> Regional Identity
                            </div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">
                                {isLogin ? "Welcome Back" : "Create Account"}
                            </h1>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed">
                                {isLogin ? "Access your regional printing dashboard" : "Join the regional printing network"}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {!isLogin && (
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-slate-300">
                                            <User size={20} />
                                        </div>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full pl-14 pr-6 py-6 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-green-600 outline-none transition-all font-bold text-slate-900"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email Identity</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-slate-300">
                                        <Mail size={20} />
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-14 pr-6 py-6 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-green-600 outline-none transition-all font-bold text-slate-900"
                                        placeholder="name@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Secure Key</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-slate-300">
                                        <Lock size={20} />
                                    </div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-14 pr-6 py-6 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-green-600 outline-none transition-all font-bold text-slate-900"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            {error && (
                                <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-center">
                                    <p className="text-[10px] font-black text-red-500 uppercase tracking-widest">{error}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl shadow-slate-200 active:scale-[0.98] flex items-center justify-center gap-4 group/btn"
                            >
                                {isLoading ? "Processing..." : isLogin ? "Sign In" : "Register"} <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-12 text-center">
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-green-600 transition-colors"
                            >
                                {isLogin ? "New here? Create regional account" : "Already have an account? Sign In"}
                            </button>
                        </div>
                    </div>

                    <p className="mt-12 text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
                        Jaysan Resource Terminal
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
