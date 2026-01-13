"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 5; // Faster loading
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ${progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative w-64 h-32 mb-12 animate-pulse">
        <Image
          src="/logo.png"
          alt="JRPL Logo"
          fill
          className="object-contain"
        />
      </div>

      <div className="w-80 h-1.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-[#22c55e] to-[#4f46e5] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-6 text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase">
        Initializing JRPL Store
      </p>
    </div>
  );
}
