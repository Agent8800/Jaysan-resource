"use client";

import {
    Plus,
    Search,
    Package,
    Printer,
    Droplets,
    HardDrive,
    MoreVertical,
    Trash2,
    Edit3,
    X,
    Upload,
    Check,
    Lock,
    Settings
} from "lucide-react";

const iconMap: { [key: string]: any } = {
    Printer,
    Droplets,
    Settings,
    HardDrive
};
import { useState, useEffect } from "react";

export default function ProductManager() {
    const [products, setProducts] = useState<any[]>([]);
    const [isAdding, setIsAdding] = useState(false);

    // New Product State
    const [newTitle, setNewTitle] = useState("");
    const [newCategory, setNewCategory] = useState("Printers");
    const [newPrice, setNewPrice] = useState("");
    const [newOfferPrice, setNewOfferPrice] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newStock, setNewStock] = useState("");
    const [newImageUrl, setNewImageUrl] = useState("");

    useEffect(() => {
        const load = () => {
            const stored = localStorage.getItem("jrpl_products");
            if (stored) setProducts(JSON.parse(stored));
        };
        load();
    }, []);

    const handleSave = () => {
        const updated = [
            {
                id: Date.now(),
                name: newTitle,
                category: newCategory,
                price: `₹${newPrice}`,
                offerPrice: newOfferPrice ? `₹${newOfferPrice}` : null,
                stock: newStock,
                description: newDescription,
                image: newImageUrl || "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800",
                tag: "In Stock"
            },
            ...products
        ];
        setProducts(updated);
        localStorage.setItem("jrpl_products", JSON.stringify(updated));
        window.dispatchEvent(new Event("storage"));
        setIsAdding(false);
        // Reset fields
        setNewTitle(""); setNewPrice(""); setNewOfferPrice(""); setNewDescription(""); setNewImageUrl("");
    };

    const handleDelete = (id: number) => {
        const updated = products.filter(p => p.id !== id);
        setProducts(updated);
        localStorage.setItem("jrpl_products", JSON.stringify(updated));
        window.dispatchEvent(new Event("storage"));
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 bg-white p-6 rounded-[2rem] border border-slate-50 shadow-sm">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Filter inventory by name..."
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] transition-all font-bold text-sm"
                    />
                </div>
                <button
                    onClick={() => setIsAdding(true)}
                    className="w-full sm:w-auto bg-[#0f172a] text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-black shadow-xl shadow-slate-200 transition-all active:scale-95"
                >
                    <Plus size={20} /> Create Shopify-style Product
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.length === 0 && (
                    <div className="col-span-full py-20 text-center text-slate-300 font-black uppercase tracking-[0.4em] text-xs h-96 flex flex-col items-center justify-center border-2 border-dashed border-slate-100 rounded-[3rem] bg-white">
                        <Package size={48} className="mb-6 opacity-20" />
                        No inventory items found
                    </div>
                )}
                {products.map(item => (
                    <div key={item.id} className="bg-white rounded-[2.5rem] border border-slate-50 shadow-sm p-6 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group relative flex flex-col">
                        <div className="aspect-square rounded-[2rem] bg-slate-50 flex items-center justify-center mb-6 overflow-hidden relative shadow-inner">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            {item.offerPrice && (
                                <div className="absolute top-4 right-4 bg-red-500 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">SALE</div>
                            )}
                        </div>

                        <div className="px-2 flex-grow">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-[10px] font-black text-[#22c55e] uppercase tracking-widest">{item.category}</span>
                                <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Id: {item.id.toString().slice(-4)}</span>
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg leading-tight mb-4 group-hover:text-[#22c55e] transition-colors">{item.name}</h4>

                            <div className="flex items-center gap-3 mb-6">
                                <div className={`font-black text-2xl ${item.offerPrice ? 'text-red-500' : 'text-slate-900'}`}>{item.offerPrice || item.price}</div>
                                {item.offerPrice && (
                                    <div className="text-sm font-bold text-slate-300 line-through mt-1">{item.price}</div>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                            <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Stock: <span className="text-slate-900">{item.stock}</span></div>
                            <div className="flex gap-2">
                                <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all"><Edit3 size={18} /></button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="p-3 bg-red-50 text-red-300 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isAdding && (
                <div className="fixed inset-0 z-[60] flex justify-end bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-500">
                    <div className="w-full max-w-2xl bg-white h-full animate-in slide-in-from-right duration-500 shadow-2xl flex flex-col p-10">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Add Store Product</h2>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2">Publishing to Lucknow Node</p>
                            </div>
                            <button onClick={() => setIsAdding(false)} className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto pr-4 space-y-10 custom-scrollbar">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Product Information</label>
                                <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} type="text" className="w-full bg-slate-50 border border-transparent rounded-[1.5rem] px-8 py-6 outline-none focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] transition-all font-bold text-lg" placeholder="e.g. HP LaserJet Enterprise M608dn" />
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Market Price</label>
                                    <div className="relative">
                                        <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-slate-300">₹</span>
                                        <input value={newPrice} onChange={(e) => setNewPrice(e.target.value)} type="text" className="w-full bg-slate-50 border border-transparent rounded-[1.5rem] pl-12 pr-8 py-6 outline-none focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] transition-all font-bold" placeholder="54,999" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-red-400 uppercase tracking-[0.2em] ml-2">Offer Price (Optional)</label>
                                    <div className="relative">
                                        <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-red-200">₹</span>
                                        <input value={newOfferPrice} onChange={(e) => setNewOfferPrice(e.target.value)} type="text" className="w-full bg-slate-50 border border-transparent rounded-[1.5rem] pl-12 pr-8 py-6 outline-none focus:bg-white focus:ring-4 focus:ring-red-50 focus:border-red-400 transition-all font-bold text-red-500" placeholder="49,999" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Store Category</label>
                                    <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)} className="w-full bg-slate-50 border border-transparent rounded-[1.5rem] px-8 py-6 outline-none focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] transition-all font-bold appearance-none cursor-pointer">
                                        <option>Printers</option>
                                        <option>Inks & Toners</option>
                                        <option>Maintenance Kit</option>
                                        <option>Spare Parts</option>
                                    </select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Inventory Stock</label>
                                    <input value={newStock} onChange={(e) => setNewStock(e.target.value)} type="number" className="w-full bg-slate-50 border border-transparent rounded-[1.5rem] px-8 py-6 outline-none focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] transition-all font-bold" placeholder="25" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Product Image Asset URL</label>
                                <div className="relative">
                                    <Upload className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                                    <input value={newImageUrl} onChange={(e) => setNewImageUrl(e.target.value)} type="text" className="w-full bg-slate-50 border border-transparent rounded-[1.5rem] pl-14 pr-8 py-6 outline-none focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] transition-all font-bold" placeholder="Paste Unsplash or asset URL..." />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Technical Summary</label>
                                <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} rows={4} className="w-full bg-slate-50 border border-transparent rounded-[1.5rem] px-8 py-6 outline-none focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] transition-all font-bold resize-none leading-relaxed" placeholder="Highlight key specifications and enterprise benefits..."></textarea>
                            </div>
                        </div>

                        <div className="pt-10 flex gap-6 bg-white border-t border-slate-50">
                            <button onClick={handleSave} className="flex-1 bg-[#22c55e] text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-green-600 transition-all shadow-2xl shadow-green-900/20 active:scale-[0.98] flex items-center justify-center gap-3">
                                <Check size={20} /> Authorize & Publish
                            </button>
                            <button onClick={() => setIsAdding(false)} className="px-12 bg-slate-50 border border-slate-100 text-slate-400 py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-100 transition-all">Discard</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
