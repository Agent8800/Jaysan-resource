"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ShoppingBag,
    Trash2,
    Plus,
    Minus,
    ArrowRight,
    Inbox,
    Printer,
    ShieldCheck
} from "lucide-react";
import Link from "next/link";

export default function CartPage() {
    const [cart, setCart] = useState<any[]>([]);

    const loadCart = () => {
        const storedCart = localStorage.getItem("jrpl_cart");
        if (storedCart) setCart(JSON.parse(storedCart));
    };

    useEffect(() => {
        loadCart();
        window.addEventListener("cartUpdated", loadCart);
        return () => window.removeEventListener("cartUpdated", loadCart);
    }, []);

    const removeItem = (cartId: number) => {
        const updatedCart = cart.filter(item => item.cartId !== cartId);
        localStorage.setItem("jrpl_cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const subtotal = cart.reduce((acc, item) => {
        const price = parseInt(String(item.price).replace(/[₹,]/g, ''));
        return acc + (isNaN(price) ? 0 : price);
    }, 0);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-green-600 rounded-lg shadow-sm">
                            <ShoppingBag size={24} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Shopping Bag</h1>
                            <p className="text-slate-400 font-bold text-[9px] uppercase tracking-widest mt-0.5">Store Control</p>
                        </div>
                    </div>

                    {cart.length === 0 ? (
                        <div className="enterprise-card rounded-lg p-16 text-center border-dashed border-slate-300">
                            <div className="w-16 h-16 bg-slate-100 flex items-center justify-center mx-auto mb-6 text-slate-300 rounded-full shadow-inner">
                                <Inbox size={32} />
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 mb-2">Your bag is empty</h2>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] mb-8">Start adding printers and supplies to your store</p>
                            <Link href="/shop" className="inline-flex px-8 py-3 bg-slate-900 text-white rounded font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-sm active:scale-95">
                                Browse Shop
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Cart items */}
                            <div className="lg:col-span-8 space-y-4">
                                {cart.map((item) => (
                                    <div key={item.cartId} className="enterprise-card rounded-lg p-6 flex items-center gap-6 hover:border-slate-300 transition-all duration-300 group">
                                        <div className={`w-24 h-24 rounded ${item.bgColor || 'bg-slate-50'} flex items-center justify-center shrink-0 border border-slate-100 shadow-inner hover:scale-105 transition-transform`}>
                                            <Printer size={40} className={`${item.iconColor || 'text-slate-400'} opacity-10`} />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className="text-[9px] font-bold text-green-700 uppercase tracking-widest block mb-1">{item.category}</span>
                                                    <h3 className="text-base font-bold text-slate-900 leading-tight mb-2 group-hover:text-green-700 transition-colors">{item.name}</h3>
                                                </div>
                                                <button onClick={() => removeItem(item.cartId)} className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded transition-all">
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">
                                                <div className="text-xl font-bold text-slate-900">{item.price}</div>
                                                <div className="flex items-center gap-1.5 text-green-600 font-bold px-2 py-0.5 bg-green-50 rounded text-[9px] uppercase tracking-widest border border-green-100">
                                                    <div className="w-1 h-1 bg-green-600 rounded-full" /> In Stock
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Summary */}
                            <div className="lg:col-span-4">
                                <div className="enterprise-card rounded-lg p-8 shadow-sm relative overflow-hidden sticky top-28">
                                    <h3 className="text-lg font-bold text-slate-900 mb-8 relative z-10 tracking-tight">Order Summary</h3>

                                    <div className="space-y-4 mb-8 relative z-10">
                                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            <span>Subtotal</span>
                                            <span className="text-slate-900">₹{subtotal.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            <span>Shipping</span>
                                            <span className="text-green-600 font-bold">Calculated at checkout</span>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-slate-100 flex justify-between items-center relative z-10">
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Total</span>
                                        <span className="text-2xl font-bold text-slate-900">₹{subtotal.toLocaleString()}</span>
                                    </div>

                                    <Link
                                        href="/checkout"
                                        className="w-full bg-slate-900 text-white py-4 rounded font-bold text-xs uppercase tracking-widest mt-8 hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm"
                                    >
                                        Checkout <ArrowRight size={16} />
                                    </Link>

                                    <div className="mt-8 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-widest text-slate-300">
                                        <ShieldCheck size={14} className="text-slate-200" /> Secure SSL Checkout
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
