"use client";

import {
    Printer,
    Settings,
    Wrench,
    Droplets,
    Zap,
    ShieldCheck,
    RefreshCw,
    Truck,
    FileText
} from "lucide-react";

const services = [
    { name: "Laser Repair", icon: Printer, color: "text-[#4f46e5]", bg: "bg-indigo-50" },
    { name: "Ink & Toner", icon: Droplets, color: "text-[#22c55e]", bg: "bg-green-50" },
    { name: "Maintenance", icon: Settings, color: "text-[#f59e0b]", bg: "bg-amber-50" },
    { name: "Plotter Service", icon: FileText, color: "text-[#4f46e5]", bg: "bg-indigo-50" },
    { name: "Drum Replacement", icon: RefreshCw, color: "text-[#22c55e]", bg: "bg-green-50" },
    { name: "On-site Visit", icon: Truck, color: "text-[#f59e0b]", bg: "bg-amber-50" },
];

export default function ServiceGrid() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
                        Comprehensive Printer Services
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        From emergency repairs to periodic maintenance, we keep your printers running at peak performance.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center p-6 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-100 transition-all duration-300 cursor-pointer bg-white"
                        >
                            <div className={`w-16 h-16 mb-4 rounded-2xl flex items-center justify-center ${service.bg} ${service.color} group-hover:scale-110 transition-transform`}>
                                <service.icon size={32} />
                            </div>
                            <span className="text-sm font-bold text-gray-700 text-center">
                                {service.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
