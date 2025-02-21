"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Footer from "../components/Footer";


export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<1 | 2>(1);
  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen(2);
    }, 2000);
  }, [currentScreen]);

  return (
    <div className="h-screen w-full  mx-auto bg-gradient-to-b from-[#4C35DD] to-[#6B3BDD]">
      
        <div className="h-full flex flex-col">
         
          {/* Content */}
          <div className="flex-1 bg-[#c8bce4] p-4 space-y-6">
            <div>
              <h1 className="text-[#1E2875] text-xl font-semibold">
                Hello User!
             
              </h1>
              <h1 className="text-[#1E2875] text-xl font-semibold">
             
                How can we help?
              </h1>
            </div>

            <div className="bg-[#1a1b4b] text-white p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-4xl p-5">👋</span>
                <p className="font-medium leading-tight text-2xl">
                  Ask Anything, Get Answers in Under 2 Minutes - Instantly with
                  vBot!
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                placeholder="Start chatting!"
                className="w-full h-11 px-4 pr-10 rounded-full border border-gray-200 focus:outline-none focus:border-[#6C3CDD]"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-2xl">
                ›
              </span>
            </div>
            {/* Message Bubble */}

            <div className="space-y-4 ">
              <h2 className="text-lg font-semibold text-gray-900">
                Search for Help?
              </h2>
              <div className="bg-white  rounded-md">
                <div className="relative p-5 ">
                  <input
                    placeholder="Search your Query"
                    className="w-full  h-11 pl-5   rounded-3xl border border-gray-200 focus:outline-none focus:border-[#6C3CDD]"
                  />
                  <Search className="absolute right-8 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-2">
                  {[
                    "How does vBot work?",
                    "What happens if vBot can't answer a question?",
                    "Does vBot support multiple languages?",
                    "Can I customize vBot for my business?",
                  ].map((question, i) => (
                    <button
                      key={i}
                      className="w-full p-3 text-left text-black hover:bg-gray-50 rounded-lg flex items-center justify-between group"
                    >
                      <span>{question}</span>
                      <span className="text-black group-hover:translate-x-0.5 transition-transform">
                        ›
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            
            <Footer />
          


        </div>
        </div>

    
    </div>
  );
}

