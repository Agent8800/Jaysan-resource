"use client";

import Image from "next/image";
import { Star, ShoppingCart, ArrowRight, Printer, Droplets, HardDrive } from "lucide-react";
import Link from "next/link";

const products = [
    {
        id: 1,
        name: "HP Laser Jet M15w",
        category: "Printers",
        price: "AED 349",
        rating: 4.8,
        reviews: 210,
        icon: Printer,
        tag: "Most Compatible",
        bgColor: "bg-indigo-50",
        iconColor: "text-[#4f46e5]"
    },
    {
        id: 2,
        name: "Genuine 12A Black Toner",
        category: "Ink & Toner",
        price: "AED 189",
        rating: 4.9,
        reviews: 540,
        icon: Droplets,
        tag: "High Yield",
        bgColor: "bg-green-50",
        iconColor: "text-[#22c55e]"
    },
    {
        id: 3,
        name: "Printer Maintenance Kit",
        category: "Accessories",
        price: "AED 120",
        rating: 4.7,
        reviews: 85,
        icon: HardDrive,
        tag: "Professional",
        bgColor: "bg-amber-50",
        iconColor: "text-[#f59e0b]"
    }
];

export default function ProductSection() {
    return (
        <section className="py-20 sm:py-32 bg-gray-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 px-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight">
                            Hardware & <br />
                            <span className="text-[#22c55e]">Original Supplies</span>
                        </h2>
                        <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                            Don't compromise on quality. We only stock original peripherals and high-quality compatible parts for your specific printer models.
                        </p>
                    </div>
                    <Link href="/shop" className="mt-8 md:mt-0 inline-flex items-center gap-2 text-[#4f46e5] font-bold text-lg hover:underline group">
                        Browse Full Shop <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative flex flex-col bg-white rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-indigo-900/5">
                            {/* Product Card */}
                            <div className={`relative aspect-square ${product.bgColor} overflow-hidden flex items-center justify-center m-3 rounded-2xl`}>
                                <product.icon size={140} className={`${product.iconColor} opacity-20 group-hover:scale-110 transition-transform duration-500`} />

                                {/* Badges */}
                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                    <span className="px-3 py-1 bg-white shadow-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-700 border border-gray-100">
                                        {product.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{product.category}</span>
                                    <div className="flex items-center gap-1 text-[#f59e0b]">
                                        <Star size={14} fill="currentColor" />
                                        <span className="text-sm font-bold text-gray-900">{product.rating}</span>
                                        <span className="text-xs text-gray-400">({product.reviews})</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-6 group-hover:text-[#4f46e5] transition-colors">{product.name}</h3>

                                <div className="flex items-center justify-between">
                                    <p className="text-2xl font-black text-[#0f172a]">{product.price}</p>
                                    <button className="bg-[#22c55e] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#16a34a] active:scale-95 transition-all shadow-lg shadow-green-100 flex items-center gap-2">
                                        <ShoppingCart size={18} /> Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
