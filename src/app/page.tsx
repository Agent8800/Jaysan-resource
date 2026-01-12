import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceGrid from "@/components/ServiceGrid";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import { CheckCircle, Shield, Clock, Award, Printer } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />

        <ServiceGrid />

        <ProductSection />

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Why Trust Jaysan Printer Services?</h2>
              <p className="mt-4 text-lg text-gray-500">Industry-certified experts dedicated to your printing efficiency.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Certified Techs", icon: Shield, desc: "Our technicians are factory-trained for enterprise laser and plotter maintenance." },
                { title: "Genuine Parts", icon: Award, desc: "We only use original manufacturer (OEM) parts and high-grade consumables." },
                { title: "Rapid Response", icon: Clock, desc: "Minimizing downtime with 4-hour response times for critical business accounts." },
                { title: "Full Management", icon: CheckCircle, desc: "Managed print services (MPS) to optimize your printing costs and logistics." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-olive-50 text-[#3D5300] mb-6">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[2.5rem] bg-[#3D5300] overflow-hidden p-8 sm:p-16 lg:p-24 shadow-2xl">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-olive-400 opacity-20 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-white opacity-10 blur-[100px] rounded-full" />

              <div className="relative z-10 lg:flex lg:items-center lg:justify-between">
                <div className="lg:max-w-xl text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    Printer down?<br />
                    <span className="text-olive-200">We'll fix it today.</span>
                  </h2>
                  <p className="mt-6 text-lg sm:text-xl text-white/80">
                    Register your service request now and get a certified technician at your office within 4 hours.
                  </p>
                </div>
                <div className="mt-10 lg:mt-0 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/complaint"
                    className="bg-white text-[#3D5300] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl active:scale-95 text-center"
                  >
                    Book Service
                  </a>
                  <button className="bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/5 transition-all backdrop-blur-sm text-center">
                    Request Quote
                  </button>
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
