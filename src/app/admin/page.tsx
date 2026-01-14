"use client";

import {
    Package,
    ClipboardList,
    TrendingUp,
    CheckCircle2,
    Clock,
    ChevronRight,
    Printer,
    AlertCircle,
    ShieldCheck
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminDashboard() {
    const [stats, setStats] = useState<any[]>([]);
    const [recentRequests, setRecentRequests] = useState<any[]>([]);

    useEffect(() => {
        const loadData = () => {
            const storedProducts = JSON.parse(localStorage.getItem("jrpl_products") || "[]");
            const storedRequests = JSON.parse(localStorage.getItem("jrpl_requests") || "[]");
            const cart = JSON.parse(localStorage.getItem("jrpl_cart") || "[]");

            setStats([
                { name: "Live Products", value: storedProducts.length.toString(), icon: Package, color: "text-[#4f46e5]", bg: "bg-indigo-50", trend: "+12%" },
                { name: "Service Tickets", value: storedRequests.length.toString(), icon: ClipboardList, color: "text-[#22c55e]", bg: "bg-green-50", trend: "+5%" },
                { name: "Active Carts", value: cart.length.toString(), icon: Clock, color: "text-[#f59e0b]", bg: "bg-amber-50", trend: "Stable" },
                { name: "Revenue (Mtd)", value: "₹4.2L", icon: TrendingUp, color: "text-[#4f46e5]", bg: "bg-indigo-50", trend: "+18%" },
            ]);

            setRecentRequests(storedRequests.slice(-5).reverse());
        };
        loadData();
        window.addEventListener("storage", loadData);
        return () => window.removeEventListener("storage", loadData);
    }, []);

    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            {/* Header section with Greeting */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">System Overview</h2>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mt-2">Real-time store performance analytics</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-xs uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all">Download Report</button>
                    <button className="px-6 py-3 bg-[#22c55e] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg shadow-green-900/20">System Refresh</button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[3rem] -mr-8 -mt-8 grayscale opacity-10 group-hover:opacity-20 transition-opacity" />

                        <div className="flex items-center justify-between mb-8">
                            <div className={`${stat.bg} ${stat.color} p-5 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                                <stat.icon size={28} />
                            </div>
                            <div className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${stat.trend.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-400'
                                }`}>
                                {stat.trend}
                            </div>
                        </div>
                        <div className="text-4xl font-black text-slate-900 tracking-tighter mb-1">{stat.value}</div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{stat.name}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                {/* Recent Service Requests - Takes 2 cols */}
                <div className="xl:col-span-2 bg-white rounded-[3rem] border border-slate-50 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-10 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">Active Service Log</h2>
                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Live from Lucknow Node 01</p>
                        </div>
                        <Link href="/admin/requests" className="text-[10px] font-black text-[#4f46e5] uppercase tracking-widest hover:underline px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-100 transition-all active:scale-95">Manage Workspace</Link>
                    </div>

                    <div className="divide-y divide-slate-50 h-[400px] overflow-y-auto custom-scrollbar">
                        {recentRequests.length === 0 ? (
                            <div className="h-full flex items-center justify-center text-slate-300 font-bold uppercase tracking-widest text-xs">No Recent Requests</div>
                        ) : (
                            recentRequests.map((req) => (
                                <div key={req.id} className="p-8 flex items-center justify-between hover:bg-slate-50/50 transition-colors group">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm group-hover:bg-[#22c55e] group-hover:text-white transition-all duration-500">
                                            <Printer size={28} />
                                        </div>
                                        <div>
                                            <div className="font-black text-slate-900 text-lg leading-tight">{req.customer}</div>
                                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
                                                {req.product} <span className="w-1 h-1 bg-slate-200 rounded-full" /> <span className="text-[#22c55e]">{req.id}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right flex flex-col items-end gap-2">
                                        <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest inline-block ${req.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                            'bg-amber-100 text-amber-700'
                                            }`}>
                                            {req.status}
                                        </div>
                                        <div className="text-[9px] text-slate-400 font-black uppercase tracking-widest">{req.date}</div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* System Health Card */}
                <div className="flex flex-col gap-8">
                    <div className="bg-[#0f172a] text-white rounded-[3rem] p-12 relative overflow-hidden flex flex-col justify-between shadow-2xl h-full">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#22c55e]/10 blur-[120px] rounded-full -mr-40 -mt-40" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4f46e5]/10 blur-[120px] rounded-full -ml-40 -mb-40" />

                        <div className="relative z-10">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#22c55e] mb-4 block">Security Monitor</span>
                            <h3 className="text-3xl font-black mb-8 leading-tight">Infrastructure<br />Response</h3>

                            <div className="space-y-6">
                                <div className="p-6 bg-white/5 rounded-[2rem] border border-white/5 hover:bg-white/10 transition-all group">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">Gateway Sync</span>
                                        <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div className="text-2xl font-black">99.9%</div>
                                        <div className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Latency: 14ms</div>
                                    </div>
                                </div>
                                <div className="p-6 bg-white/5 rounded-[2rem] border border-white/5 hover:bg-white/10 transition-all group">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Database Auth</span>
                                        <ShieldCheck size={14} className="text-indigo-400" />
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div className="text-2xl font-black">Verified</div>
                                        <div className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Last Check: 1m ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="relative z-10 mt-12 w-full bg-white text-[#0f172a] py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-[#22c55e] hover:text-white transition-all shadow-xl shadow-black/40 group active:scale-95">
                            Audit logs <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
