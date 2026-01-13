"use client";

import {
    Plus,
    Search,
    Package,
    Printer,
    Droplets,
    HardDrive,
    MoreVertical,
    ExternalLink,
    Trash2,
    Edit3,
    X,
    Upload
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const initialProducts = [
    { id: 1, name: "HP Laser Jet M15w", category: "Printers", price: "₹12,499", stock: 12, icon: Printer, iconColor: "text-[#4f46e5]", bg: "bg-indigo-50" },
    { id: 2, name: "Genuine 12A Toner", category: "Supplies", price: "₹3,299", stock: 45, icon: Droplets, iconColor: "text-[#22c55e]", bg: "bg-green-50" },
    { id: 3, name: "Maintenance Kit Pro", category: "Service", price: "₹1,899", stock: 8, icon: HardDrive, iconColor: "text-[#f59e0b]", bg: "bg-amber-50" },
];

export default function ProductManager() {
    const [products, setProducts] = useState(initialProducts);
    const [isAdding, setIsAdding] = useState(false);

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-20">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search store inventory..."
                        className="w-full pl-11 pr-4 py-3 bg-white border border-gray-100 rounded-xl outline-none focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] transition-all font-bold text-sm"
                    />
                </div>
                <button
                    onClick={() => setIsAdding(true)}
                    className="w-full sm:w-auto bg-[#22c55e] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#16a34a] shadow-lg shadow-green-100 active:scale-95 transition-all"
                >
                    <Plus size={20} /> Add New Product
                </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {products.map(item => (
                    <div key={item.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-4 hover:shadow-xl transition-all group overflow-hidden">
                        <div className={`relative aspect-video rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                            <item.icon size={60} className={`${item.iconColor} opacity-20 group-hover:scale-110 transition-transform`} />
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white/80 backdrop-blur-md p-2 rounded-lg text-gray-500 hover:text-[#0f172a]">
                                    <MoreVertical size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="px-2">
                            <div className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{item.category}</div>
                            <h4 className="font-bold text-[#0f172a] h-10 overflow-hidden leading-tight mb-4">{item.name}</h4>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                <div>
                                    <div className="font-black text-lg text-[#0f172a]">{item.price}</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.stock} in Stock</div>
                                </div>
                                <div className="flex gap-1">
                                    <button className="p-2 text-gray-300 hover:text-[#4f46e5] transition-colors"><Edit3 size={18} /></button>
                                    <button className="p-2 text-gray-300 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Product Drawer / Modal */}
            {isAdding && (
                <div className="fixed inset-0 z-[60] flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="w-full max-w-xl bg-white h-full animate-in slide-in-from-right duration-500 shadow-2xl flex flex-col">
                        <div className="p-8 pb-4 flex items-center justify-between border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-50 text-[#22c55e] rounded-xl flex items-center justify-center"><Plus size={24} /></div>
                                <h2 className="text-xl font-black text-[#0f172a]">New Product Entry</h2>
                            </div>
                            <button onClick={() => setIsAdding(false)} className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-gray-900 transition-all">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Product Title</label>
                                <input type="text" className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] transition-all font-bold" placeholder="e.g. Laser Jet Pro X" />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Category</label>
                                    <select className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] transition-all font-bold appearance-none cursor-pointer">
                                        <option>Printers</option>
                                        <option>Supplies</option>
                                        <option>Service</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Price (INR)</label>
                                    <input type="text" className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] transition-all font-bold" placeholder="₹ 3,000" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Product Description</label>
                                <textarea rows={4} className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] transition-all font-bold resize-none" placeholder="Features and specifications..."></textarea>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Initial Inventory</label>
                                <input type="number" className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] transition-all font-bold" placeholder="0" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Media Assets</label>
                                <div className="border-2 border-dashed border-gray-100 rounded-[2rem] p-10 text-center hover:border-indigo-200 transition-all bg-gray-50/50 cursor-pointer group">
                                    <Upload className="mx-auto h-10 w-10 text-gray-300 group-hover:text-[#4f46e5] transition-colors mb-4" />
                                    <div className="text-sm font-bold text-gray-400">Drag product images here</div>
                                    <div className="text-[10px] text-gray-300 mt-1 uppercase font-black tracking-widest">JPG or PNG up to 5MB</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 border-t border-gray-100 flex gap-4 bg-gray-50/30">
                            <button className="flex-1 bg-[#0f172a] text-white py-4 rounded-xl font-bold hover:bg-black transition-all shadow-xl active:scale-95">Save Product</button>
                            <button onClick={() => setIsAdding(false)} className="px-6 bg-white border border-gray-100 text-gray-400 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
