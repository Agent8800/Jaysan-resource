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
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-1000 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative w-48 h-48 mb-8">
        <Image
          src="/logo.png"
          alt="Jaysan Resource"
          fill
          className="object-contain"
        />
      </div>

      <div className="w-64 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#3D5300] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase">
        Loading Excellence
      </p>
    </div>
  );
}
