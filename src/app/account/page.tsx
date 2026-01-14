"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Package,
    MapPin,
    User,
    LogOut,
    ChevronRight,
    CreditCard,
    Clock,
    CheckCircle2,
    Truck
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState("Orders");
    const [orders, setOrders] = useState<any[]>([]);
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("jrpl_token");
            const userData = localStorage.getItem("jrpl_user");

            if (!token || !userData) {
                router.push("/login");
            } else {
                setUser(JSON.parse(userData));
            }
        };

        checkAuth();

        // Simulate loading orders
        const mockOrders = [
            {
                id: "ORD-7829-JP",
                date: "Jan 12, 2026",
                total: "₹14,749",
                status: "Delivered",
                items: "HP LaserJet M15w, Black Ink 103"
            }
        ];
        setOrders(mockOrders);
    }, [router]);

    const handleSignOut = () => {
        localStorage.removeItem("jrpl_token");
        localStorage.removeItem("jrpl_user");
        router.push("/login");
    };

    if (!user) return null; // Prevent flicker before redirect

    const tabs = [
        { id: "Orders", icon: Package, label: "My Orders" },
        { id: "Address", icon: MapPin, label: "Addresses" },
        { id: "Profile", icon: User, label: "Profile Settings" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Sidebar */}
                        <aside className="lg:w-80">
                            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 overflow-hidden relative group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-green-600" />
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold text-2xl">
                                        R
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-black text-slate-900 leading-tight">{user.name}</h2>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Prime Member</p>
                                    </div>
                                </div>

                                <nav className="space-y-2">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm ${activeTab === tab.id
                                                ? "bg-slate-900 text-white shadow-lg shadow-slate-200"
                                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                                }`}
                                        >
                                            <tab.icon size={20} />
                                            {tab.label}
                                        </button>
                                    ))}
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm text-red-500 hover:bg-red-50 mt-10 text-left"
                                    >
                                        <LogOut size={20} />
                                        Sign Out
                                    </button>
                                </nav>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <div className="flex-1">
                            <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm p-8 sm:p-12 min-h-[600px]">
                                {activeTab === "Orders" && (
                                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-3xl font-black text-slate-900">Order History</h3>
                                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{orders.length} Orders Found</div>
                                        </div>

                                        <div className="space-y-6">
                                            {orders.map((order) => (
                                                <div key={order.id} className="group border border-slate-50 rounded-[2rem] p-8 hover:border-green-600 transition-all hover:shadow-xl hover:shadow-green-900/5 relative overflow-hidden bg-slate-50/30">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                                        <div className="flex items-center gap-6">
                                                            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-green-600 shadow-sm">
                                                                <Package size={28} />
                                                            </div>
                                                            <div>
                                                                <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{order.date}</div>
                                                                <div className="font-black text-slate-900 text-xl">{order.id}</div>
                                                                <div className="text-sm font-bold text-slate-500 mt-1 line-clamp-1">{order.items}</div>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center justify-between md:flex-col md:items-end gap-2">
                                                            <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                                                                }`}>
                                                                {order.status}
                                                            </div>
                                                            <div className="text-2xl font-black text-slate-900">{order.total}</div>
                                                        </div>
                                                    </div>

                                                    <button className="mt-8 w-full md:w-auto px-8 py-3 bg-white border border-slate-200 rounded-xl font-black text-[10px] uppercase tracking-widest text-slate-900 hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-slate-900 group-hover:text-white">
                                                        Track Delivery <ChevronRight size={14} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === "Address" && (
                                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h3 className="text-3xl font-black text-slate-900">Shipping Addresses</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="border-2 border-green-600 rounded-[2rem] p-8 relative overflow-hidden group bg-green-50/20">
                                                <div className="absolute top-6 right-8 text-green-600"><CheckCircle2 size={24} /></div>
                                                <div className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-4">Default Address</div>
                                                <h4 className="font-black text-slate-900 text-lg mb-2">{user.name}</h4>
                                                <p className="text-sm font-bold text-slate-500 leading-relaxed mb-6">
                                                    {user.address}
                                                </p>
                                                <div className="text-xs font-black text-slate-900">{user.phone}</div>

                                                <div className="mt-8 flex gap-4">
                                                    <button className="text-[10px] font-black uppercase tracking-widest text-slate-900 hover:text-green-600 transition-colors">Edit</button>
                                                    <span className="text-slate-200">|</span>
                                                    <button className="text-[10px] font-black uppercase tracking-widest text-slate-400">Remove</button>
                                                </div>
                                            </div>

                                            <button className="border-2 border-dashed border-slate-200 rounded-[2rem] p-8 flex flex-col items-center justify-center gap-4 hover:border-slate-900 hover:bg-slate-50 transition-all text-slate-400 hover:text-slate-900">
                                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center"><MapPin size={24} /></div>
                                                <div className="text-[10px] font-black uppercase tracking-widest">Add New Address</div>
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "Profile" && (
                                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h3 className="text-3xl font-black text-slate-900">Profile Settings</h3>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                                <input type="text" defaultValue={user.name} className="w-full px-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-green-600 outline-none transition-all font-bold text-slate-900" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                                <input type="tel" defaultValue={user.phone} className="w-full px-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-green-600 outline-none transition-all font-bold text-slate-900" />
                                            </div>
                                            <div className="sm:col-span-2 space-y-3">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                                <input type="email" defaultValue={user.email} className="w-full px-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-green-600 outline-none transition-all font-bold text-slate-900" />
                                            </div>
                                        </div>

                                        <div className="pt-8 border-t border-slate-50 flex flex-col sm:flex-row gap-4">
                                            <button className="bg-slate-900 text-white px-10 py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95">Save Changes</button>
                                            <button className="bg-white border border-slate-200 text-slate-400 px-10 py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all">Change Password</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
