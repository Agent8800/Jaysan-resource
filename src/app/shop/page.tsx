"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ShoppingCart, Filter, X, Check, Printer, Droplets, Settings, HardDrive, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

const iconMap: { [key: string]: any } = {
    Printer,
    Droplets,
    Settings,
    HardDrive
};

export default function ShopPage() {
    const [products, setProducts] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [addedToCart, setAddedToCart] = useState<number | null>(null);
    const router = useRouter();

    useEffect(() => {
        const loadProducts = () => {
            const stored = localStorage.getItem("jrpl_products");
            if (stored) {
                const parsed = JSON.parse(stored);
                const migrated = parsed.map((p: any) => ({
                    ...p,
                    iconName: p.iconName || (p.category === "Supplies" ? "Droplets" : p.category === "Service" ? "Settings" : "Printer")
                }));
                setProducts(migrated);
            }
        };
        loadProducts();
        window.addEventListener("storage", loadProducts);
        return () => window.removeEventListener("storage", loadProducts);
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ShopContent
                products={products}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                addedToCart={addedToCart}
                setAddedToCart={setAddedToCart}
                router={router}
            />
        </Suspense>
    );
}

function ShopContent({
    products,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedProduct,
    setSelectedProduct,
    addedToCart,
    setAddedToCart,
    router
}: any) {
    const searchParams = useSearchParams();

    useEffect(() => {
        const query = searchParams.get("q");
        if (query) {
            setSearchQuery(query);
        }
    }, [searchParams, setSearchQuery]);

    const categories = ["All", ...Array.from(new Set(products.map((p: any) => p.category)))];

    const filteredProducts = products.filter((p: any) => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const addToCart = (product: any, e: React.MouseEvent) => {
        e.stopPropagation();
        const cart = JSON.parse(localStorage.getItem("jrpl_cart") || "[]");
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
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-grow py-12 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Header */}
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Lucknow Store</h1>
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-widest mt-1">Official JRPL Regional Store</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 mb-10 pb-8 border-b border-slate-100">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search store..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-2 bg-slate-50 border border-slate-300 rounded text-sm focus:bg-white focus:ring-2 focus:ring-green-100 focus:border-green-600 outline-none transition-all"
                            />
                        </div>
                        <div className="flex bg-slate-50 p-1 rounded gap-1 overflow-x-auto w-full md:w-auto">
                            {categories.map((cat: any) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${selectedCategory === cat ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product: any) => (
                            <div
                                key={product.id}
                                className="enterprise-card enterprise-card-hover rounded-lg overflow-hidden group cursor-pointer relative"
                                onClick={() => setSelectedProduct(product)}
                            >
                                <div className={`relative aspect-square ${product.bgColor || 'bg-slate-50'} flex items-center justify-center m-2 rounded transition-colors overflow-hidden`}>
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
                                            className="bg-slate-900 text-white p-2 rounded shadow-sm hover:bg-slate-800 transition-all active:scale-95"
                                        >
                                            {addedToCart === product.id ? <Check size={16} /> : <ShoppingCart size={16} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="py-32 text-center bg-gray-50 rounded-[3rem] border border-dashed border-gray-100 mt-12">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 text-gray-200 shadow-xl">
                                <Search size={48} />
                            </div>
                            <h2 className="text-3xl font-black text-[#0f172a]">No Products Found</h2>
                            <p className="text-gray-400 mt-4 font-bold uppercase tracking-widest text-xs">Try different keywords or categories</p>
                            <button
                                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                                className="mt-10 px-8 py-4 bg-[#0f172a] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black transition-all"
                            >
                                View All Products
                            </button>
                        </div>
                    )}
                </div>
            </main>

            {/* Detail Modal */}
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
                                {selectedProduct.description || "The highest quality printer component sourced specifically for our Lucknow regional service center."}
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
                                    className="flex-1 bg-green-600 text-white py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-green-700 transition-colors shadow-sm active:scale-95 flex items-center justify-center gap-2"
                                >
                                    Buy Now
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
