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
    { name: "Laser Repair", icon: Printer, color: "text-slate-900", bg: "bg-slate-50" },
    { name: "Ink & Toner", icon: Droplets, color: "text-green-600", bg: "bg-slate-50" },
    { name: "Maintenance", icon: Settings, color: "text-amber-500", bg: "bg-slate-50" },
    { name: "Plotter Service", icon: FileText, color: "text-slate-900", bg: "bg-slate-50" },
    { name: "Drum Replacement", icon: RefreshCw, color: "text-green-600", bg: "bg-slate-50" },
    { name: "On-site Visit", icon: Truck, color: "text-amber-500", bg: "bg-slate-50" },
];

export default function ServiceGrid() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        Comprehensive Printer Services
                    </h2>
                    <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                        From emergency repairs to periodic maintenance, we keep your printers running at peak performance.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="enterprise-card group flex flex-col items-center p-6 rounded-lg cursor-pointer"
                        >
                            <div className={`w-12 h-12 mb-4 rounded border border-slate-100 flex items-center justify-center ${service.bg} ${service.color} group-hover:scale-110 transition-transform shadow-sm`}>
                                <service.icon size={24} />
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center group-hover:text-green-600 transition-colors">
                                {service.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
