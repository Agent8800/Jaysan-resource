import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceGrid from "@/components/ServiceGrid";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import { CheckCircle, Shield, Clock, Award, Printer, ShoppingBag, Wrench } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />

        <ServiceGrid />

        <ProductSection />

        {/* Why Choose Us Section */}
        <section className="bg-white py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">Why Choose JRPL?</h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Your regional experts for all things printer. We combine speed with unmatched quality.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Genuine Parts", icon: Shield, desc: "We only use original manufacturer (OEM) parts and high-grade consumables.", color: "text-[#22c55e]" },
                { title: "Expert Techs", icon: Award, desc: "Our technicians have over 15 years of experience with all major printer brands.", color: "text-[#4f46e5]" },
                { title: "Fast Turnaround", icon: Clock, desc: "Most repairs are completed on the same day or within 24 hours.", color: "text-[#f59e0b]" },
                { title: "Trusted Service", icon: CheckCircle, desc: "Thousands of satisfied local businesses and home-office customers.", color: "text-[#22c55e]" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
                  <div className={`p-3 rounded-2xl bg-white w-fit mb-6 shadow-sm ${item.color}`}>
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[3rem] bg-[#0f172a] overflow-hidden p-8 sm:p-16 lg:p-24 shadow-2xl">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#22c55e]/20 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[#4f46e5]/20 blur-[100px] rounded-full" />

              <div className="relative z-10 lg:flex lg:items-center lg:justify-between text-center lg:text-left">
                <div className="lg:max-w-2xl">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                    Facing Printer <br />
                    <span className="text-[#22c55e]">Issues Today?</span>
                  </h2>
                  <p className="mt-8 text-xl text-white/60 mb-10 max-w-lg mx-auto lg:mx-0">
                    Quick diagnostics, expert repairs, and genuine supplies. Let's get your printing back on track.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                      href="/complaint"
                      className="bg-[#22c55e] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#16a34a] transition-all shadow-xl shadow-green-900/40 text-center"
                    >
                      Book a Repair
                    </Link>
                    <Link
                      href="/shop"
                      className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm text-center"
                    >
                      Visit Shop
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block relative w-96 h-96">
                  <Printer size={300} className="text-white opacity-10 absolute inset-0 m-auto" />
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
