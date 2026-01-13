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
            router.push("/admin");
        } else {
            setError("Invalid Administrative Credentials");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                {/* Logo Section */}
                <div className="text-center mb-10">
                    <Link href="/">
                        <div className="relative w-48 h-16 mx-auto mb-6">
                            <Image src="/logo.png" alt="JRPL Logo" fill className="object-contain" />
                        </div>
                    </Link>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-[#4f46e5] rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100">
                        <ShieldCheck size={12} /> Restricted Access
                    </div>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 sm:p-12 border border-gray-100">
                    <h1 className="text-2xl font-black text-[#0f172a] mb-2 text-center">Admin Portal</h1>
                    <p className="text-gray-400 text-sm mb-8 text-center font-medium">Please enter your store credentials</p>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Admin ID</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-300">
                                    <User size={18} />
                                </div>
                                <input
                                    type="text"
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] outline-none transition-all font-bold"
                                    placeholder="ID"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-300">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] outline-none transition-all font-bold"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        {error && (
                            <p className="text-xs font-bold text-red-500 text-center animate-pulse">{error}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-[#0f172a] text-white py-5 rounded-2xl font-black hover:bg-black transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 group"
                        >
                            Sign In <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>

                <p className="mt-8 text-center text-gray-400 text-xs font-bold uppercase tracking-widest">
                    Return to <Link href="/" className="text-[#22c55e] hover:underline">Jaysan Resource</Link>
                </p>
            </div>
        </div>
    );
}
