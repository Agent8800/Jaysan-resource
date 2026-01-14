import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceGrid from "@/components/ServiceGrid";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import { CheckCircle, Shield, Clock, Award, Printer, ShoppingBag, Wrench } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />

        <ServiceGrid />

        <ProductSection />

        {/* Why Choose Us Section */}
        <section className="bg-white py-20 sm:py-32 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Why Choose JRPL?</h2>
              <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto font-medium">Your regional experts for all things printer. We combine speed with unmatched quality.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Genuine Parts", icon: Shield, color: "text-green-600" },
                { title: "Expert Techs", icon: Award, color: "text-slate-900" },
                { title: "Fast Turnaround", icon: Clock, color: "text-amber-500" },
                { title: "Trusted Store", icon: CheckCircle, color: "text-green-600" },
              ].map((item, i) => (
                <div key={i} className="enterprise-card enterprise-card-hover rounded-lg p-10 flex flex-col items-center justify-center text-center">
                  <div className={`w-12 h-12 rounded bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-sm ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="relative rounded-lg bg-slate-900 overflow-hidden p-8 sm:p-16 shadow-xl">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-green-500/10 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-slate-500/10 blur-[100px] rounded-full" />

              <div className="relative z-10 lg:flex lg:items-center lg:justify-between text-center lg:text-left">
                <div className="lg:max-w-xl">
                  <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                    Facing Printer <br />
                    <span className="text-green-500">Issues Today?</span>
                  </h2>
                  <p className="mt-6 text-lg text-slate-400 mb-8 max-w-sm mx-auto lg:mx-0 font-medium">
                    Quick diagnostics, expert repairs, and genuine supplies. Let's get your printing back on track.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                      href="/complaint"
                      className="bg-green-600 text-white px-8 py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg shadow-green-900/40 text-center active:scale-95"
                    >
                      Book a Repair
                    </Link>
                    <Link
                      href="/shop"
                      className="bg-white/10 border border-white/10 text-white px-8 py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all text-center active:scale-95"
                    >
                      Visit Store
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block relative w-64 h-64">
                  <Printer size={200} className="text-white opacity-5 absolute inset-0 m-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
