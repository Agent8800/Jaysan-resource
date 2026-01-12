"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
        { name: "Products", icon: Package, href: "/admin/products" },
        { name: "Requests", icon: ClipboardList, href: "/admin/requests" },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                <div className="p-8 pb-4">
                    <Link href="/">
                        <Image src="/logo.png" alt="JRPL Admin" width={120} height={40} className="object-contain" />
                    </Link>
                    <div className="mt-8 text-[10px] font-black uppercase tracking-widest text-gray-400">Main Menu</div>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold ${isActive
                                        ? "bg-[#22c55e] text-white shadow-lg shadow-green-100"
                                        : "text-gray-500 hover:bg-gray-50 hover:text-[#0f172a]"
                                    }`}
                            >
                                <item.icon size={20} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-500 hover:text-red-600 font-bold transition-colors">
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                {/* Mobile Header */}
                <header className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                    <Link href="/">
                        <Image src="/logo.png" alt="JRPL Admin" width={100} height={30} className="object-contain" />
                    </Link>
                    <button className="p-2 text-gray-500">
                        <MenuIcon />
                    </button>
                </header>

                {/* Top Bar */}
                <header className="hidden md:flex bg-white h-20 items-center justify-between px-8 border-b border-gray-100">
                    <div className="text-gray-900 font-black text-xl">
                        {menuItems.find(i => i.href === pathname)?.name || "Admin Panel"}
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <div className="text-sm font-black text-gray-900">Admin User</div>
                            <div className="text-xs text-gray-400">Store Manager</div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#4f46e5] text-white flex items-center justify-center font-bold">
                            A
                        </div>
                    </div>
                </header>

                <div className="p-4 sm:p-8 overflow-y-auto">
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
