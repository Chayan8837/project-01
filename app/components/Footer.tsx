"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, MessageCircle, Ticket } from "lucide-react";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname(); 

  return (
    <div className="bg-white flex gap-8 px-8 items-center justify-between fixed w-full bottom-2 rounded-full max-w-screen-lg mx-auto left-0 right-0 shadow-lg">
      {/* Home Button */}
      <button
        onClick={() => router.push("/")}
        className="flex flex-col items-center"
      >
        <div
          className={`p-2 rounded-full flex items-center justify-center ${
            pathname === "/" ? "bg-[#4333c0] text-white" : "text-[#6C3CDD] hover:bg-[#4333c0] hover:text-white"
          }`}
        >
          <Home className="w-4 h-4" />
        </div>
        <span className="text-xs text-gray-600">Home</span>
      </button>

      {/* Chats Button */}
      <button
        onClick={() => router.push("/chat")}
        className="flex flex-col items-center py-2"
      >
        <div
          className={`p-2 rounded-full flex items-center justify-center ${
            pathname === "/chat" ? "bg-[#4333c0] text-white" : "text-[#6C3CDD] hover:bg-[#4333c0] hover:text-white"
          }`}
        >
          <MessageCircle className="w-4 h-4" />
        </div>
        <span className="text-xs text-gray-600">Chats</span>
      </button>

      {/* Tickets Button */}
      <button
        onClick={() => router.push("/ticket")}
        className="flex flex-col items-center py-2"
      >
        <div
          className={`p-2 rounded-full flex items-center justify-center ${
            pathname === "/ticket" ? "bg-[#4333c0] text-white" : "text-[#6C3CDD] hover:bg-[#4333c0] hover:text-white"
          }`}
        >
          <Ticket className="w-4 h-4" />
        </div>
        <span className="text-xs text-gray-600">Tickets</span>
      </button>
    </div>
  );
};

export default Footer;
