"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    CreditCard,
    MapPin,
    ShieldCheck,
    ChevronRight,
    CheckCircle2,
    ArrowLeft,
    Truck,
    Building,
    Smartphone
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CheckoutPage() {
    const [cart, setCart] = useState<any[]>([]);
    const [paymentMethod, setPaymentMethod] = useState("Card");
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const loadData = () => {
            const storedCart = localStorage.getItem("jrpl_cart");
            if (storedCart) setCart(JSON.parse(storedCart));
        };
        loadData();
        window.addEventListener("cartUpdated", loadData);
        return () => window.removeEventListener("cartUpdated", loadData);
    }, []);

    const subtotal = cart.reduce((acc, item) => {
        const priceStr = String(item.price || "0").replace(/[₹,]/g, '');
        const price = parseInt(priceStr);
        return acc + (isNaN(price) ? 0 : price);
    }, 0);

    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + tax;

    const handlePlaceOrder = async () => {
        if (cart.length === 0) return;
        setIsProcessing(true);

        try {
            // 1. Create Order on Backend
            const response = await fetch("http://localhost:5000/api/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: total }),
            });

            const order = await response.json();

            if (order.error) throw new Error(order.error);

            // 2. Load Razorpay Script
            const loadScript = (src: string) => {
                return new Promise((resolve) => {
                    const script = document.createElement("script");
                    script.src = src;
                    script.onload = () => resolve(true);
                    script.onerror = () => resolve(false);
                    document.body.appendChild(script);
                });
            };

            const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                setIsProcessing(false);
                return;
            }

            // 3. Open Razorpay Modal
            const options = {
                key: "rzp_test_mock_id", // Replace with actual Key ID or pass from backend
                amount: order.amount,
                currency: order.currency,
                name: "Jaysan Resource",
                description: "Regional Printer Store - Purchase",
                image: "/logo.png",
                order_id: order.id,
                handler: function (response: any) {
                    // Payment Success handler
                    setIsProcessing(false);
                    setIsSuccess(true);
                    localStorage.removeItem("jrpl_cart");
                    window.dispatchEvent(new Event("cartUpdated"));
                    console.log("Payment Success:", response);
                },
                prefill: {
                    name: (document.querySelector('input[placeholder="E.g. Rajesh Kumar"]') as HTMLInputElement)?.value || "",
                    contact: (document.querySelector('input[placeholder="+91"]') as HTMLInputElement)?.value || "",
                },
                theme: {
                    color: "#22c55e",
                },
                modal: {
                    ondismiss: function () {
                        setIsProcessing(false);
                    }
                }
            };

            const paymentObject = new (window as any).Razorpay(options);
            paymentObject.open();

        } catch (error) {
            console.error("Order error:", error);
            alert("Payment failed to initialize. Please try again.");
            setIsProcessing(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen flex flex-col bg-slate-50">
                <Navbar />
                <main className="flex-grow flex items-center justify-center p-6">
                    <div className="max-w-md w-full text-center bg-white border border-slate-200 p-12 rounded-lg shadow-xl animate-in fade-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                            <CheckCircle2 size={40} />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Order Confirmed</h1>
                        <p className="text-slate-500 font-bold mb-10 text-[10px] uppercase tracking-widest leading-relaxed">
                            Thank you for shopping at JRPL Lucknow. Your order is being processed.
                        </p>
                        <Link href="/shop" className="w-full inline-block px-8 py-3 bg-slate-900 text-white rounded font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-sm active:scale-95">
                            Continue Shopping
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow py-12 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-8 hover:text-slate-900 transition-colors">
                        <ArrowLeft size={16} /> Back
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8 space-y-8">
                            {/* Shipping Info */}
                            <div className="enterprise-card rounded-lg p-8 sm:p-12 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-green-600" />
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded border border-slate-100 flex items-center justify-center shadow-sm">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900 tracking-tight">Shipping Detail</h2>
                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 block">Lucknow Delivery Store</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm font-bold focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-green-600 outline-none transition-all shadow-inner" placeholder="E.g. Rajesh Kumar" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Mobile Number</label>
                                        <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm font-bold focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-green-600 outline-none transition-all shadow-inner" placeholder="+91" />
                                    </div>
                                </div>
                                <div className="mt-8 space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Lucknow Delivery Address</label>
                                    <textarea rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm font-bold focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-green-600 outline-none transition-all resize-none shadow-inner" placeholder="Complete address with landmark..."></textarea>
                                </div>
                            </div>

                            {/* Payment Info */}
                            <div className="enterprise-card rounded-lg p-8 sm:p-12 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-slate-900" />
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded border border-slate-100 flex items-center justify-center shadow-sm">
                                        <CreditCard size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900 tracking-tight">Payment Method</h2>
                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 block">Secure Store Gateway</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        { id: "Card", icon: CreditCard, color: "bg-slate-900", text: "Online Pay" },
                                        { id: "UPI", icon: Smartphone, color: "bg-green-600", text: "UPI / QR" },
                                        { id: "COD", icon: Building, color: "bg-amber-500", text: "Cash on Delivery" }
                                    ].map((method) => (
                                        <button
                                            key={method.id}
                                            onClick={() => setPaymentMethod(method.id)}
                                            className={`p-6 rounded border-2 transition-all text-left group relative ${paymentMethod === method.id ? 'border-green-600 bg-green-50/30' : 'border-slate-100 hover:border-slate-200'
                                                }`}
                                        >
                                            <div className={`w-10 h-10 rounded ${method.color} text-white flex items-center justify-center mb-6 shadow-sm`}>
                                                <method.icon size={20} />
                                            </div>
                                            <div className="font-bold text-slate-900 text-[10px] uppercase tracking-widest">{method.text}</div>
                                            {paymentMethod === method.id && (
                                                <div className="absolute top-6 right-6 text-green-600 animate-in zoom-in duration-300"><CheckCircle2 size={24} /></div>
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {paymentMethod === "Card" && (
                                    <div className="mt-10 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Card Number</label>
                                            <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm font-bold focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-green-600 outline-none transition-all shadow-inner" placeholder="XXXX XXXX XXXX XXXX" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Expiry</label>
                                                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm font-bold focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-green-600 outline-none transition-all shadow-inner" placeholder="MM / YY" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">CVV</label>
                                                <input type="password" size={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm font-bold focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-green-600 outline-none transition-all shadow-inner" placeholder="***" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="enterprise-card bg-slate-900 border-none text-white rounded-lg p-8 shadow-xl relative overflow-hidden backdrop-blur-3xl sticky top-28 group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[90px] rounded-full -mr-32 -mt-32 transition-all group-hover:bg-green-500/20" />
                                <h3 className="text-lg font-bold mb-8 relative z-10 tracking-tight">Checkout Summary</h3>

                                <div className="space-y-6 mb-8 relative z-10">
                                    {cart.length === 0 ? (
                                        <div className="py-12 text-center text-white/5 font-bold uppercase tracking-widest text-[9px]">Empty</div>
                                    ) : cart.map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-start gap-4">
                                            <div className="flex-1">
                                                <div className="text-[12px] font-semibold leading-tight line-clamp-1">{item.name}</div>
                                                <div className="text-[8px] text-white/30 font-bold uppercase tracking-widest mt-1">{item.category}</div>
                                            </div>
                                            <div className="text-sm font-bold text-green-500 shrink-0">{item.price}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-white/10 space-y-4 relative z-10">
                                    <div className="flex justify-between text-[8px] font-bold text-white/40 uppercase tracking-widest">
                                        <span>Subtotal</span>
                                        <span className="text-white/80">₹{subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-[8px] font-bold text-white/40 uppercase tracking-widest">
                                        <span>GST (18%)</span>
                                        <span className="text-white/80">₹{tax.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-6 border-t border-white/10">
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-green-500/80">Grand Total</span>
                                        <span className="text-2xl font-bold text-green-500">₹{total.toLocaleString()}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handlePlaceOrder}
                                    disabled={isProcessing || cart.length === 0}
                                    className="w-full bg-green-600 text-white py-4 rounded font-bold text-xs uppercase tracking-widest mt-10 hover:bg-green-700 transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-20 shadow-lg shadow-green-900/40"
                                >
                                    {isProcessing ? "Processing..." : "Complete Order"}
                                </button>

                                <div className="mt-8 flex items-center justify-center gap-2 text-[8px] font-bold uppercase tracking-widest text-white/10">
                                    <ShieldCheck size={14} className="text-green-600/40" /> Secure Regional Store Encryption
                                </div>
                            </div>

                            {/* Regional Trust Badge */}
                            <div className="mt-6 enterprise-card rounded-lg p-6 flex items-center gap-4 bg-white">
                                <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center text-green-600 shrink-0 shadow-sm rounded-lg">
                                    <Truck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[9px] font-bold text-slate-900 uppercase tracking-widest mb-1 leading-none">Regional Delivery</h4>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Lucknow Store Dispatch</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
