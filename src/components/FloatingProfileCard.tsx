"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { MapPin, Wifi, Mail } from "lucide-react";

export function FloatingProfileCard() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Makassar",
          hour12: true,
          hour: "numeric",
          minute: "2-digit",
        })
      );
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="group fixed top-0 left-1/2 -translate-x-1/2 z-50 select-none">
      <div className="relative overflow-hidden rounded-b-[28px] bg-[#050505] shadow-xl border border-white/10 border-t-0 transition-all duration-300 ease-out h-[72px] group-hover:h-[132px] w-[340px] sm:w-[430px] cursor-default">
        
        {/* First Row (Always visible) */}
        <div className="absolute top-0 left-0 w-full h-[72px] flex items-center justify-between px-5">
          <div className="flex items-center gap-3.5">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/20">
              <Image
                src="/profile.jpeg"
                alt={portfolioData.owner.name}
                fill
                className="object-cover"
                sizes="40px"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-white text-[15px] font-semibold leading-tight tracking-tight">
                {portfolioData.owner.name}
              </span>
              <span className="text-[13px] text-white/50 leading-tight">
                {portfolioData.owner.role}
              </span>
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-end justify-center">
            <span className="text-white/80 text-[14px] font-medium tabular-nums leading-tight">
              {mounted ? time : ""}
            </span>
            <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">
              WITA
            </span>
          </div>
        </div>

        {/* Revealed Content (Visible on hover) */}
        <div className="absolute top-[72px] left-0 w-full px-5 pb-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
          <div className="flex flex-col gap-2 pt-1 border-t border-white/10">
            <div className="flex items-center justify-between text-[13px]">
              <span className="text-white/40 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Location</span>
              <span className="text-white/80">{portfolioData.owner.location}</span>
            </div>
            <div className="flex items-center justify-between text-[13px]">
              <span className="text-white/40 flex items-center gap-1.5"><Wifi className="w-3.5 h-3.5" /> Weather</span>
              <span className="text-white/80">ID • 28°C, Clear sky</span>
            </div>
            <div className="flex items-center justify-between text-[13px]">
              <span className="text-white/40 flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> Status</span>
              <div className="flex items-center gap-2">
                <span className="relative flex w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-500" />
                </span>
                <span className="text-emerald-400 font-medium">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
