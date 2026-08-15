import React from "react";
import { ArrowRight, Mail, QrCode, LockKeyhole, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-[#0a0e1a] via-[#0f1219] to-[#1a1f2e] text-[#F3F1EA] relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#d4a817]/15 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-10" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #ffffff 1px, transparent 1px), linear-gradient(0deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h1 className="font-bold text-5xl lg:text-7xl leading-tight tracking-tight">
            Upload,
            <br />
            Save &
            <br />
            <span className="text-[#d4a817]">Share Files</span>
            <br />
            Securely.
          </h1>

          <p className="mt-8 text-lg text-gray-400 max-w-lg leading-8">
            Drag and drop your files directly into your private vault, protect
            them with passwords, and securely share them with anyone using a
            simple link or email.
          </p>
        </div>

        {/* Right Illustration - HOVER GROUP */}
        <div className="group relative flex items-center justify-center w-[440px] h-[440px]">
          {/* Glow Effects - ONLY ON HOVER */}
          <div className="absolute -inset-20 bg-[#d4a817]/20 rounded-full blur-lg opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          <div className="absolute -inset-32 bg-blue-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-15 transition-opacity duration-700" />

          {/* Outer Ring */}
          <div className="absolute w-full h-full rounded-full border border-[#2C313B] group-hover:border-[#d4a817]/50 transition-colors duration-500" />

          {/* Middle Ring */}
          <div className="absolute w-[340px] h-[340px] rounded-full border border-[#2C313B] group-hover:border-[#d4a817]/40 transition-colors duration-500" />

          {/* Tick Marks */}
          <div className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-[#3A4048] animate-[spin_45s_linear_infinite_reverse]" />

          {/* Center Safe */}
          <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-[#1B1F26] to-[#0f1219] border border-white/10 flex items-center justify-center shadow-2xl animate-[spin_45s_linear_infinite] backdrop-blur-xl transition-all duration-500 group-hover:border-[#d4a817]/50 group-hover:shadow-[0_0_40px_rgba(212,168,23,0.4)]">
            {/* Outer glow on safe - HOVER ONLY */}
            <div className="absolute -inset-3 bg-gradient-to-r from-[#d4a817]/40 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Needle */}
            <div className="absolute w-1 h-16 bg-gradient-to-b from-[#d4a817] to-[#c49b16] rounded-full -translate-y-8 origin-bottom shadow-[#d4a817]/50" />

            {/* Center */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4a817] to-[#c49b16] shadow-lg " />
          </div>

          {/* Feature Circle - Top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 group">
            <div className="relative flex flex-col items-center gap-2">
              <div className="relative p-3 rounded-full bg-white/[0.08] border border-white/[0.1] hover:border-[#d4a817]/50 transition-all duration-300 group-hover:bg-white/[0.12] group-hover:shadow-lg group-hover:shadow-[#d4a817]/30">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-[#d4a817]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail
                  className="relative text-[#d4a817] group-hover:scale-110 transition-transform duration-300"
                  size={20}
                />
              </div>
              <span className="text-xs font-semibold text-gray-300 whitespace-nowrap text-center">
                Email Share
              </span>
            </div>
          </div>

          {/* Feature Circle - Right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 group">
            <div className="relative flex flex-col items-center gap-2">
              <div className="relative p-3 rounded-full bg-white/[0.08] border border-white/[0.1] hover:border-[#d4a817]/50 transition-all duration-300 group-hover:bg-white/[0.12] group-hover:shadow-lg group-hover:shadow-[#d4a817]/30">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-[#d4a817]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <QrCode
                  className="relative text-[#d4a817] group-hover:scale-110 transition-transform duration-300"
                  size={20}
                />
              </div>
              <span className="text-xs font-semibold text-gray-300 whitespace-nowrap text-center">
                QR Share
              </span>
            </div>
          </div>

          {/* Feature Circle - Bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-12 group">
            <div className="relative flex flex-col items-center gap-2">
              <div className="relative p-3 rounded-full bg-white/[0.08] border border-white/[0.1] hover:border-[#d4a817]/50 transition-all duration-300 group-hover:bg-white/[0.12] group-hover:shadow-lg group-hover:shadow-[#d4a817]/30">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#d4a817]/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <LockKeyhole
                  className="relative text-[#d4a817] group-hover:scale-110 transition-transform duration-300"
                  size={20}
                />
              </div>
              <span className="text-xs font-semibold text-gray-300 whitespace-nowrap text-center">
                Password Protection
              </span>
            </div>
          </div>

          {/* Feature Circle - Left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 group">
            <div className="relative flex flex-col items-center gap-2">
              <div className="relative p-3 rounded-full bg-white/[0.08] border border-white/[0.1] hover:border-[#d4a817]/50 transition-all duration-300 group-hover:bg-white/[0.12] group-hover:shadow-lg group-hover:shadow-[#d4a817]/30">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-[#d4a817]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Clock
                  className="relative text-[#d4a817] group-hover:scale-110 transition-transform duration-300"
                  size={20}
                />
              </div>
              <span className="text-xs font-semibold text-gray-300 whitespace-nowrap text-center">
                24 Hrs link expiry
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
