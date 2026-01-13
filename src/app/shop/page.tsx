"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ShoppingCart, Filter, X, Check, Printer, Droplets, Settings, HardDrive, Star } from "lucide-react";

const allProducts = [
    { id: 1, name: "HP Laser Jet M15w", category: "Printers", price: 12499, icon: Printer, tag: "Best Seller", bgColor: "bg-indigo-50", iconColor: "text-[#4f46e5]", description: "Compact laser printer for home and small offices." },
    { id: 2, name: "Genuine 12A Toner", category: "Supplies", price: 3299, icon: Droplets, tag: "Original", bgColor: "bg-green-50", iconColor: "text-[#22c55e]", description: "Original HP 12A Black Toner Cartridge." },
    { id: 3, name: "Maintenance Kit Pro", category: "Service", price: 1899, icon: Settings, tag: "Essential", bgColor: "bg-amber-50", iconColor: "text-[#f59e0b]", description: "Complete maintenance kit for major printer models." },
    { id: 4, name: "Epson L3210 EcoTank", category: "Printers", price: 14299, icon: Printer, tag: "High Savings", bgColor: "bg-green-50", iconColor: "text-[#22c55e]", description: "High-performance ink tank printer." },
    { id: 5, name: "Brother HL-L2321D", category: "Printers", price: 11499, icon: Printer, tag: "Robust", bgColor: "bg-indigo-50", iconColor: "text-[#4f46e5]", description: "Reliable monochrome laser printer." },
    { id: 6, name: "Canon GI-790 Ink", category: "Supplies", price: 799, icon: Droplets, tag: "Original", bgColor: "bg-amber-50", iconColor: "text-[#f59e0b]", description: "High-yield ink bottle for G-series printers." },
    { id: 7, name: "Samsung ML-2161 Drum", category: "Service", price: 2499, icon: HardDrive, tag: "Compatible", bgColor: "bg-indigo-50", iconColor: "text-[#4f46e5]", description: "High-quality replacement drum unit." },
    { id: 8, name: "Universal Cleaning Kit", category: "Service", price: 499, icon: Settings, tag: "Universal", bgColor: "bg-green-50", iconColor: "text-[#22c55e]", description: "Professional cleaning supplies for all printers." },
];

export default function ShopPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const categories = ["All", "Printers", "Supplies", "Service"];

    const filteredProducts = allProducts.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="flex flex-col min-h-screen bg-gray-50/30">
            <Navbar />

            <main className="flex-grow py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                        <div>
                            <h1 className="text-4xl font-black text-[#0f172a] tracking-tight">JRPL Shop</h1>
                            <p className="text-gray-500 font-medium mt-2">Browse our full range of professional printer solutions.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <div className="relative flex-grow min-w-[300px]">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search for hardware or supplies..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] outline-none transition-all font-bold"
                                />
                            </div>
                            <div className="flex bg-white p-2 rounded-2xl border border-gray-100 shadow-sm gap-1 overflow-x-auto">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-6 py-2 rounded-xl text-sm font-black transition-all whitespace-nowrap ${selectedCategory === cat ? 'bg-[#22c55e] text-white shadow-lg' : 'text-gray-400 hover:text-[#0f172a]'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group relative flex flex-col bg-white rounded-[2rem] border border-gray-100 hover:border-gray-200 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-green-900/5 cursor-pointer"
                                onClick={() => setSelectedProduct(product)}
                            >
                                <div className={`relative aspect-square ${product.bgColor} overflow-hidden flex items-center justify-center m-2 rounded-[1.5rem]`}>
                                    <product.icon size={100} className={`${product.iconColor} opacity-20 group-hover:scale-110 transition-transform duration-500`} />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white shadow-sm rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500">
                                            {product.tag}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 pb-8">
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">{product.category}</span>
                                    <h3 className="text-lg font-bold text-[#0f172a] mb-6 group-hover:text-[#4f46e5] transition-colors leading-tight h-12 overflow-hidden">{product.name}</h3>

                                    <div className="flex items-center justify-between">
                                        <p className="text-2xl font-black text-[#0f172a]">₹{product.price.toLocaleString()}</p>
                                        <button className="bg-[#22c55e] text-white p-3 rounded-xl font-bold hover:bg-[#16a34a] transition-all shadow-lg active:scale-95">
                                            <ShoppingCart size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="py-20 text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                                <Search size={40} />
                            </div>
                            <h2 className="text-2xl font-black text-[#0f172a]">No Results Found</h2>
                            <p className="text-gray-400 mt-2">Try adjusting your filters or search keywords.</p>
                            <button
                                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                                className="mt-8 text-[#22c55e] font-black underline underline-offset-4"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </main>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-[3rem] max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
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
                                <p className="text-3xl font-black text-[#0f172a]">₹{selectedProduct.price.toLocaleString()}</p>
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

            <Footer />
        </div>
    );
}
