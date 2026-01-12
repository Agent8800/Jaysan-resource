"use client";

import {
    Wind,
    Droplets,
    Wrench,
    PaintBucket,
    Zap,
    ShieldCheck,
    Smartphone,
    Trash2,
    Home
} from "lucide-react";

const services = [
    { name: "AC Repair", icon: Wind, color: "bg-blue-50 text-blue-600" },
    { name: "Cleaning", icon: Droplets, color: "bg-cyan-50 text-cyan-600" },
    { name: "Plumbing", icon: Droplets, color: "bg-blue-50 text-blue-800" },
    { name: "Electronics", icon: Smartphone, color: "bg-indigo-50 text-indigo-600" },
    { name: "Electrician", icon: Zap, color: "bg-yellow-50 text-yellow-600" },
    { name: "Painting", icon: PaintBucket, color: "bg-orange-50 text-orange-600" },
    { name: "Pest Control", icon: ShieldCheck, color: "bg-green-50 text-green-600" },
    { name: "Carpentry", icon: Wrench, color: "bg-amber-50 text-amber-700" },
    { name: "Waste Mgmt", icon: Trash2, color: "bg-red-50 text-red-600" },
];

export default function ServiceGrid() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                            Looking for something?
                        </h2>
                        <p className="mt-4 text-lg text-gray-500 max-w-2xl">
                            Professional services for every need, delivered by verified experts in your area.
                        </p>
                    </div>
                    <button className="hidden md:block text-[#002E6E] font-bold hover:underline">
                        View all services &rarr;
                    </button>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center p-4 sm:p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 cursor-pointer"
                        >
                            <div className={`w-12 h-12 sm:w-16 sm:h-16 mb-4 rounded-2xl flex items-center justify-center ${service.color} group-hover:scale-110 transition-transform`}>
                                <service.icon size={28} className="sm:w-8 sm:h-8" />
                            </div>
                            <span className="text-sm sm:text-base font-semibold text-gray-700 group-hover:text-blue-900 transition-colors text-center">
                                {service.name}
                            </span>
                        </div>
                    ))}

                    <div className="group flex flex-col items-center p-4 sm:p-6 rounded-2xl border border-dashed border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 rounded-2xl flex items-center justify-center bg-gray-50 text-gray-400 group-hover:text-blue-500">
                            <Home size={28} className="sm:w-8 sm:h-8" />
                        </div>
                        <span className="text-sm sm:text-base font-semibold text-gray-500 group-hover:text-blue-700 transition-colors text-center">
                            More Services
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
