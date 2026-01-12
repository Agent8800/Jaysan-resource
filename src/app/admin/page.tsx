"use client";

import {
    Package,
    ClipboardList,
    TrendingUp,
    Users,
    CheckCircle2,
    Clock,
    ChevronRight,
    Printer
} from "lucide-react";

export default function AdminDashboard() {
    const stats = [
        { name: "Total Products", value: "24", icon: Package, color: "text-[#4f46e5]", bg: "bg-indigo-50" },
        { name: "Service Requests", value: "12", icon: ClipboardList, color: "text-[#22c55e]", bg: "bg-green-50" },
        { name: "Urgent Tasks", value: "3", icon: Clock, color: "text-[#f59e0b]", bg: "bg-amber-50" },
        { name: "Recent Sales", value: "AED 4,500", icon: TrendingUp, color: "text-[#22c55e]", bg: "bg-green-50" },
    ];

    const recentRequests = [
        { id: "PR-12345", customer: "Ahmad Ali", product: "HP Laser Jet", status: "In Progress", date: "2 mins ago" },
        { id: "PR-12344", customer: "Sarah Khan", product: "Canon InkJet", status: "Pending", date: "15 mins ago" },
        { id: "PR-12343", customer: "Office Depot", product: "Enterprise Plotter", status: "Completed", date: "1 hour ago" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl`}>
                                <stat.icon size={24} />
                            </div>
                        </div>
                        <div className="text-2xl font-black text-gray-900">{stat.value}</div>
                        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">{stat.name}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Service Requests */}
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                        <h2 className="text-xl font-black text-gray-900">Recent Service Requests</h2>
                        <button className="text-sm font-bold text-[#4f46e5] hover:underline">View All</button>
                    </div>
                    <div className="divide-y divide-gray-50 text-sm">
                        {recentRequests.map((req) => (
                            <div key={req.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                        <Printer size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{req.customer}</div>
                                        <div className="text-xs text-gray-400">{req.product} • {req.id}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block ${req.status === 'Completed' ? 'bg-green-50 text-green-600' :
                                            req.status === 'In Progress' ? 'bg-blue-50 text-blue-600' :
                                                'bg-amber-50 text-amber-600'
                                        }`}>
                                        {req.status}
                                    </div>
                                    <div className="text-[10px] text-gray-400 mt-1 font-medium">{req.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Store Insights / Placeholder */}
                <div className="bg-[#0f172a] text-white rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#22c55e]/20 blur-[100px] rounded-full -mr-32 -mt-32" />
                    <div className="relative z-10">
                        <h3 className="text-2xl font-black mb-4">Store Insights</h3>
                        <p className="text-white/60 text-sm mb-8 leading-relaxed">
                            Your store performance is up by <span className="text-[#22c55e] font-bold">15%</span> compared to last month. Most requests are for Laser Repair.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-[#22c55e]" size={20} />
                                    <span className="text-sm font-bold">Successful Repairs</span>
                                </div>
                                <span className="font-black">128</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                                <div className="flex items-center gap-3">
                                    <Clock className="text-[#f59e0b]" size={20} />
                                    <span className="text-sm font-bold">Pending Stock</span>
                                </div>
                                <span className="font-black">42 Items</span>
                            </div>
                        </div>
                    </div>

                    <button className="relative z-10 mt-8 w-full bg-[#22c55e] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#16a34a] transition-all group">
                        Generate Report <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}
