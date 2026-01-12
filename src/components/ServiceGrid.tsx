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
    { name: "Laser Repair", icon: Printer },
    { name: "Ink & Toner", icon: Droplets },
    { name: "Maintenance", icon: Settings },
    { name: "Parts Replace", icon: Wrench },
    { name: "Plotter Service", icon: FileText },
    { name: "Drum Care", icon: RefreshCw },
];

export default function ServiceGrid() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#022C22] tracking-tight">
                            Expert Printer Care
                        </h2>
                        <p className="mt-4 text-lg text-gray-500 max-w-2xl">
                            From high-speed enterprise solutions to home-office inkjet printers, we provide certified repair and maintenance services.
                        </p>
                    </div>
                    <button className="hidden md:block text-[#064E3B] font-bold hover:underline">
                        All services &rarr;
                    </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center p-4 sm:p-6 rounded-3xl border border-gray-100 hover:border-emerald-100 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 cursor-pointer bg-white"
                        >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 rounded-2xl flex items-center justify-center bg-[#F0FDF4] text-[#064E3B] group-hover:bg-[#064E3B] group-hover:text-white transition-all duration-300">
                                <service.icon size={28} className="sm:w-8 sm:h-8" />
                            </div>
                            <span className="text-sm sm:text-base font-bold text-gray-700 group-hover:text-[#064E3B] transition-colors text-center">
                                {service.name}
                            </span>
                        </div>
                    ))}

                    <div className="group flex flex-col items-center p-4 sm:p-6 rounded-3xl border border-dashed border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all cursor-pointer">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 rounded-2xl flex items-center justify-center bg-gray-50 text-gray-400 group-hover:text-[#064E3B]">
                            <Truck size={28} className="sm:w-8 sm:h-8" />
                        </div>
                        <span className="text-sm sm:text-base font-bold text-gray-500 group-hover:text-[#064E3B] transition-colors text-center">
                            On-site Setup
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
