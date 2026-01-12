import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceGrid from "@/components/ServiceGrid";
import Footer from "@/components/Footer";
import { CheckCircle, Shield, Clock, Award } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />

        <ServiceGrid />

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Choose Jaysan Resource?</h2>
              <p className="mt-4 text-lg text-gray-500">Fast, reliable, and premium services for your home and office.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Verified Experts", icon: Shield, desc: "All our technicians undergo rigorous background checks and training." },
                { title: "Superior Quality", icon: Award, desc: "We use premium materials and industry-standard tools for every job." },
                { title: "Timely Service", icon: Clock, desc: "Punctuality is our priority. We value your time as much as you do." },
                { title: "Customer Support", icon: CheckCircle, desc: "24/7 dedicated support for all your queries and complaint resolutions." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-[#002E6E] mb-6">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[2.5rem] bg-[#002E6E] overflow-hidden p-8 sm:p-16 lg:p-24 shadow-2xl">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-400 opacity-20 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-100 opacity-10 blur-[100px] rounded-full" />

              <div className="relative z-10 lg:flex lg:items-center lg:justify-between">
                <div className="lg:max-w-xl text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    Have a specific issue?<br />
                    <span className="text-blue-300">We're here to help.</span>
                  </h2>
                  <p className="mt-6 text-lg sm:text-xl text-blue-100">
                    Register your complaint or feedback and our team will get back to you within 24 hours.
                  </p>
                </div>
                <div className="mt-10 lg:mt-0 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/complaint"
                    className="bg-white text-[#002E6E] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl active:scale-95 text-center"
                  >
                    Register Complaint
                  </a>
                  <button className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm text-center">
                    Contact Support
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
