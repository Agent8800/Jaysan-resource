"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, ArrowRight, Printer, Droplets, HardDrive, X, Check, Settings, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const iconMap: { [key: string]: any } = {
    Printer,
    Droplets,
    Settings,
    HardDrive
};

const defaultProducts = [
    { id: 1, name: "HP Laser Jet M15w", category: "Printers", price: "₹12,499", iconName: "Printer", tag: "Best Seller", bgColor: "bg-indigo-50", iconColor: "text-[#4f46e5]", description: "Compact laser printer for home and small offices. High-speed black and white printing." },
    { id: 2, name: "Genuine 12A Toner", category: "Supplies", price: "₹3,299", iconName: "Droplets", tag: "Original", bgColor: "bg-green-50", iconColor: "text-[#22c55e]", description: "Original HP 12A Black Toner Cartridge. Yields up to 2,000 pages." },
    { id: 3, name: "Maintenance Kit Pro", category: "Service", price: "₹1,899", iconName: "Settings", tag: "Essential", bgColor: "bg-amber-50", iconColor: "text-[#f59e0b]", description: "Complete maintenance kit for major printer models." },
    { id: 4, name: "Epson L3210 EcoTank", category: "Printers", price: "₹14,299", iconName: "Printer", tag: "High Savings", bgColor: "bg-green-50", iconColor: "text-[#22c55e]", description: "High-performance ink tank printer with low printing cost." }
];

export default function ProductSection() {
    const [products, setProducts] = useState<any[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [addedToCart, setAddedToCart] = useState<number | null>(null);
    const router = useRouter();

    useEffect(() => {
        const loadProducts = () => {
            const stored = localStorage.getItem("jrpl_products");
            if (stored) {
                const parsed = JSON.parse(stored);
                // Migrate old data if iconName is missing
                const migrated = parsed.map((p: any) => ({
                    ...p,
                    iconName: p.iconName || (p.category === "Supplies" ? "Droplets" : p.category === "Service" ? "Settings" : "Printer")
                }));
                setProducts(migrated.slice(0, 4));
            } else {
                setProducts(defaultProducts);
                localStorage.setItem("jrpl_products", JSON.stringify(defaultProducts));
            }
        };
        loadProducts();
        window.addEventListener("storage", loadProducts);
        return () => window.removeEventListener("storage", loadProducts);
    }, []);

    const addToCart = (product: any, e: React.MouseEvent) => {
        e.stopPropagation();
        const cart = JSON.parse(localStorage.getItem("jrpl_cart") || "[]");
        // Avoid duplicates in cart if necessary, or just push
        cart.push({ ...product, cartId: Date.now() });
        localStorage.setItem("jrpl_cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));
        setAddedToCart(product.id);
        setTimeout(() => setAddedToCart(null), 2000);
    };

    const buyNow = (product: any, e: React.MouseEvent) => {
        e.stopPropagation();
        const cart = JSON.parse(localStorage.getItem("jrpl_cart") || "[]");
        cart.push({ ...product, cartId: Date.now() });
        localStorage.setItem("jrpl_cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));
        router.push("/checkout");
    };

    return (
        <section className="py-16 bg-white border-y border-slate-100 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                            Store Selection
                        </h2>
                        <p className="text-slate-500 font-medium mt-1 text-xs uppercase tracking-widest">Available in Lucknow Store</p>
                    </div>
                    <Link href="/shop" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-green-700 font-bold text-xs uppercase tracking-widest hover:text-green-800 transition-colors">
                        View Full Store <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="enterprise-card enterprise-card-hover rounded-lg overflow-hidden group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                            {/* Product Card */}
                            <div className={`relative aspect-square ${product.bgColor || 'bg-slate-50'} flex items-center justify-center m-2 rounded-md transition-colors overflow-hidden`}>
                                {product.imageUrl ? (
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    (() => {
                                        const Icon = iconMap[product.iconName] || Printer;
                                        return <Icon size={64} className={`${product.iconColor || 'text-slate-400'} opacity-10 group-hover:opacity-20 transition-opacity`} />;
                                    })()
                                )}
                                <div className="absolute top-2 left-2">
                                    <span className="px-2 py-0.5 bg-white shadow-sm rounded text-[8px] font-bold uppercase tracking-wider text-slate-600 border border-slate-200">
                                        {product.tag || 'In Stock'}
                                    </span>
                                </div>
                            </div>

                            <div className="p-4 pt-2">
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{product.category}</span>
                                <h3 className="text-sm font-bold text-slate-800 mb-4 group-hover:text-green-700 transition-colors line-clamp-1">{product.name}</h3>

                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-bold text-slate-900">{product.price}</p>
                                    <button
                                        onClick={(e) => addToCart(product, e)}
                                        className="bg-slate-900 text-white p-2 rounded shadow-sm hover:bg-slate-800 transition-colors active:scale-95"
                                    >
                                        {addedToCart === product.id ? <Check size={16} /> : <ShoppingCart size={16} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row transition-all duration-300">
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className={`flex-1 ${selectedProduct.bgColor || 'bg-slate-50'} flex items-center justify-center p-12 relative overflow-hidden`}>
                            {selectedProduct.imageUrl ? (
                                <Image
                                    src={selectedProduct.imageUrl}
                                    alt={selectedProduct.name}
                                    fill
                                    className="object-contain p-8"
                                />
                            ) : (
                                (() => {
                                    const Icon = iconMap[selectedProduct.iconName] || Printer;
                                    return <Icon size={120} className={`${selectedProduct.iconColor} opacity-20`} />;
                                })()
                            )}
                        </div>

                        <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center">
                            <span className="text-[10px] font-bold text-green-700 uppercase tracking-widest mb-2 block">{selectedProduct.category}</span>
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">{selectedProduct.name}</h2>
                            <div className="flex items-center gap-3 mb-6">
                                <p className="text-xl font-bold text-slate-900">{selectedProduct.price}</p>
                                <div className="text-[10px] font-bold text-green-700 flex items-center gap-1.5 px-2 py-0.5 bg-green-50 rounded border border-green-200">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                    <span>In Stock</span>
                                </div>
                            </div>

                            <p className="text-slate-500 font-medium leading-relaxed mb-8 text-xs">
                                {selectedProduct.description || "Enterprise-grade printer component for professional use."}
                            </p>

                            <div className="flex gap-3">
                                <button
                                    onClick={(e) => addToCart(selectedProduct, e)}
                                    className="flex-1 border border-slate-200 text-slate-700 py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-colors active:scale-95 flex items-center justify-center gap-2"
                                >
                                    {addedToCart === selectedProduct.id ? <Check size={14} /> : <><ShoppingCart size={14} /> Add to Cart</>}
                                </button>
                                <button
                                    onClick={(e) => buyNow(selectedProduct, e)}
                                    className="flex-1 bg-green-600 text-white py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-green-700 transition-colors shadow-sm active:scale-95"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
