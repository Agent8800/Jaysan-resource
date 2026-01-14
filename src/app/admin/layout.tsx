"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
    LayoutDashboard,
    Package,
    ClipboardList,
    Settings,
    LogOut,
    ChevronLeft,
    Printer
} from "lucide-react";
import Image from "next/image";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("jrpl_admin_token");
            if (!token && pathname !== "/admin/login") {
                router.push("/admin/login");
                setIsAuthenticated(false);
            } else {
                setIsAuthenticated(true);
            }
        };
        checkAuth();
    }, [pathname, router]);

    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
        { name: "Products", icon: Package, href: "/admin/products" },
        { name: "Requests", icon: ClipboardList, href: "/admin/requests" },
    ];

    const handleLogout = () => {
        localStorage.removeItem("jrpl_admin_token");
        router.push("/admin/login");
    };

    if (isAuthenticated === null) return null; // Prevent flicker

    if (pathname === "/admin/login") return <>{children}</>;

    return (
        <div className="flex min-h-screen bg-[#f8fafc]">
            {/* Sidebar */}
            <aside className="w-72 bg-[#0f172a] hidden md:flex flex-col text-white shadow-2xl z-50">
                <div className="p-10">
                    <Link href="/">
                        <div className="relative w-40 h-10 grayscale invert brightness-200">
                            <Image src="/logo.png" alt="JRPL Admin" fill className="object-contain" />
                        </div>
                    </Link>
                    <div className="mt-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6">Operations</div>

                    <nav className="space-y-3">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm group ${isActive
                                        ? "bg-[#22c55e] text-white shadow-xl shadow-green-900/20"
                                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    <item.icon size={20} className={`${isActive ? "text-white" : "text-slate-500 group-hover:text-white"}`} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="mt-auto p-8 border-t border-white/5">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-4 px-6 py-5 w-full text-slate-500 hover:text-red-400 font-bold transition-all rounded-2xl hover:bg-red-500/5 group"
                    >
                        <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                        System Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0">
                <header className="h-24 bg-white border-b border-slate-100 flex items-center justify-between px-10 sticky top-0 z-40">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                            {menuItems.find(i => i.href === pathname)?.name || "Control Center"}
                        </h1>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Jaysan Resource • Admin Node 01</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden sm:block text-right">
                            <div className="text-sm font-black text-slate-900 leading-none">Management Console</div>
                            <div className="text-[10px] text-green-500 font-black uppercase tracking-widest mt-1">Status: Operational</div>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-[#0f172a] text-white flex items-center justify-center font-black text-lg border-2 border-slate-50 shadow-sm">
                            A
                        </div>
                    </div>
                </header>

                <div className="p-10 max-w-[1600px] mx-auto w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}

function MenuIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
    );
}
