"use client";
import React, { useEffect, useState } from "react";

const Loading = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-b from-[#4C35DD] to-[#6B3BDD] flex items-center justify-center">
      <div className="relative w-32 h-32 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
        <span className="text-white text-2xl font-bold tracking-[0.2em]">
          LOGO
        </span>
        <div className="absolute inset-0 rounded-full border-t-2 border-white/30 animate-spin" />
      </div>
      <span className="text-white/70 absolute bottom-6">name</span>
    </div>
  );
};

export default Loading;
