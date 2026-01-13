"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, ArrowRight, Printer, Droplets, HardDrive, X, Check, Settings } from "lucide-react";
import Link from "next/link";

const products = [
    {
        id: 1,
        name: "HP Laser Jet M15w",
        category: "Printers",
        price: "₹12,499",
        icon: Printer,
        tag: "Best Seller",
        bgColor: "bg-indigo-50",
        iconColor: "text-[#4f46e5]",
        description: "Compact laser printer for home and small offices. High-speed black and white printing with wireless connectivity."
    },
    {
        id: 2,
        name: "Genuine 12A Toner",
        category: "Supplies",
        price: "₹3,299",
        icon: Droplets,
        tag: "Original",
        bgColor: "bg-green-50",
        iconColor: "text-[#22c55e]",
        description: "Original HP 12A Black Toner Cartridge. Yields up to 2,000 pages. Ensure sharp text and reliable performance."
    },
    {
        id: 3,
        name: "Maintenance Kit Pro",
        category: "Service",
        price: "₹1,899",
        icon: Settings,
        tag: "Essential",
        bgColor: "bg-amber-50",
        iconColor: "text-[#f59e0b]",
        description: "Complete maintenance kit for major printer models. Includes fuser rollers, separation pads, and pickup rollers."
    },
    {
        id: 4,
        name: "Epson L3210 EcoTank",
        category: "Printers",
        price: "₹14,299",
        icon: Printer,
        tag: "High Savings",
        bgColor: "bg-green-50",
        iconColor: "text-[#22c55e]",
        description: "High-performance ink tank printer with low printing cost. Ideal for home and office use."
    }
];

export default function ProductSection() {
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    return (
        <section className="py-20 bg-gray-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 px-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
                            Hardware & <br />
                            <span className="text-[#22c55e]">Original Supplies</span>
                        </h2>
                    </div>
                    <Link href="/shop" className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[#4F46E5] font-black text-sm uppercase tracking-widest hover:underline group">
                        Browse Full Shop <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl cursor-pointer" onClick={() => setSelectedProduct(product)}>
                            {/* Product Card - Smaller */}
                            <div className={`relative aspect-square ${product.bgColor} overflow-hidden flex items-center justify-center m-2 rounded-xl`}>
                                <product.icon size={80} className={`${product.iconColor} opacity-20 group-hover:scale-110 transition-transform duration-500`} />
                                <div className="absolute top-3 left-3 flex flex-col gap-1">
                                    <span className="px-2 py-0.5 bg-white shadow-sm rounded-full text-[8px] font-black uppercase tracking-wider text-gray-500 border border-gray-100">
                                        {product.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Product Info - More Compact */}
                            <div className="p-5 pb-6">
                                <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-2">{product.category}</span>
                                <h3 className="text-base font-bold text-[#0f172a] mb-6 group-hover:text-[#4f46e5] transition-colors leading-snug h-10 overflow-hidden">{product.name}</h3>

                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-black text-[#0f172a]">{product.price}</p>
                                    <button className="bg-[#22c55e] text-white p-2 rounded-lg font-bold hover:bg-[#16a34a] transition-all shadow-md">
                                        <ShoppingCart size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-[2.5rem] max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-6 right-6 z-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <X size={24} className="text-gray-600" />
                        </button>

                        <div className={`flex-1 ${selectedProduct.bgColor} flex items-center justify-center p-12`}>
                            <selectedProduct.icon size={160} className={`${selectedProduct.iconColor}`} />
                        </div>

                        <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center">
                            <span className="text-xs font-black text-[#22c55e] uppercase tracking-widest mb-4 inline-block">{selectedProduct.category}</span>
                            <h2 className="text-3xl font-black text-[#0f172a] mb-6">{selectedProduct.name}</h2>

                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                {selectedProduct.description}
                            </p>

                            <div className="flex items-center gap-6 mb-8">
                                <p className="text-3xl font-black text-[#0f172a]">{selectedProduct.price}</p>
                                <span className="text-green-600 font-bold flex items-center gap-1 bg-green-50 px-3 py-1 rounded-lg text-xs">
                                    <Check size={14} /> In Stock
                                </span>
                            </div>

                            <div className="flex gap-4">
                                <button className="flex-1 bg-[#22c55e] text-white py-4 rounded-xl font-bold hover:bg-[#16a34a] shadow-xl shadow-green-100 transition-all active:scale-95 flex items-center justify-center gap-2">
                                    <ShoppingCart size={18} /> Add to Cart
                                </button>
                                <button className="px-6 bg-gray-100 text-gray-900 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all">
                                    Request Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
