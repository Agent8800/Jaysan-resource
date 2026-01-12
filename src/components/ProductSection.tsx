"use client";

import Image from "next/image";
import { Star, ShoppingCart, ArrowRight, Printer, Droplets, HardDrive } from "lucide-react";

const products = [
    {
        id: 1,
        name: "Enterprise Laser Jet Pro",
        category: "Industrial Printers",
        price: "AED 4,599",
        rating: 4.9,
        reviews: 45,
        icon: Printer,
        tag: "Top Rated"
    },
    {
        id: 2,
        name: "Precision Toner Cartridge",
        category: "Supplies",
        price: "AED 349",
        rating: 4.8,
        reviews: 120,
        icon: Droplets,
        tag: "Eco Friendly"
    },
    {
        id: 3,
        name: "High-Yield Drum Unit",
        category: "Components",
        price: "AED 799",
        rating: 4.7,
        reviews: 64,
        icon: HardDrive,
        tag: "Long Lasting"
    }
];

export default function ProductSection() {
    return (
        <section className="py-20 sm:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                            Premium Printer <br />
                            <span className="text-[#064E3B]">Products & Supplies</span>
                        </h2>
                        <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                            Equip your office with the best-in-class printing technology and genuine consumables for uninterrupted productivity.
                        </p>
                    </div>
                    <button className="mt-8 md:mt-0 inline-flex items-center gap-2 text-[#064E3B] font-bold text-lg hover:underline group">
                        All products <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {products.map((product) => (
                        <div key={product.id} className="group relative flex flex-col bg-white rounded-3xl border border-gray-100 hover:border-emerald-100 p-2 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/5">
                            {/* Product Card Styled like Shadcn */}
                            <div className="relative aspect-square rounded-2xl bg-[#F0FDF4] overflow-hidden mb-6 flex items-center justify-center">
                                <product.icon size={120} className="text-[#064E3B]/20 group-hover:scale-110 transition-transform duration-500" />

                                {/* Badges */}
                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                    <span className="px-3 py-1 bg-white shadow-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-[#064E3B] border border-emerald-50">
                                        {product.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="px-4 pb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{product.category}</span>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <Star size={12} fill="currentColor" />
                                        <span className="text-xs font-bold text-gray-900">{product.rating}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#022C22] mb-4 group-hover:text-[#064E3B] transition-colors">{product.name}</h3>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                    <p className="text-2xl font-black text-[#064E3B]">{product.price}</p>
                                    <button className="bg-[#064E3B] text-white p-3 rounded-xl shadow-lg hover:bg-[#053F30] active:scale-95 transition-all">
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Banner */}
                <div className="mt-20 sm:mt-32 relative rounded-[3rem] bg-[#064E3B] p-8 sm:p-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent" />
                    <div className="relative z-10 lg:flex lg:items-center lg:justify-between gap-12">
                        <div className="lg:max-w-xl">
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Industrial Printing Support</h3>
                            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                                Get specialized support for high-volume printer clusters. Maintenance contracts and 24/7 technical assistance for your enterprise.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-white text-[#064E3B] px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-all shadow-lg">
                                    Service Contracts
                                </button>
                                <button className="border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/5 transition-all">
                                    Contact Expert
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:block relative w-80 h-80">
                            <div className="absolute inset-0 bg-white/5 rounded-full animate-pulse" />
                            <div className="absolute inset-10 bg-white/10 rounded-full animate-pulse delay-100" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Printer size={120} className="text-white opacity-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
