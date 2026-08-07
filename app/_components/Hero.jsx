import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] bg-[#14161A] text-[#F3F1EA]">
      <div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h1 className="font-bold text-5xl lg:text-7xl leading-tight tracking-tight">
            Upload,
            <br />
            Save &
            <br />
            <span className="text-[#C9A227]">Share Files</span>
            <br />
            Securely.
          </h1>

          <p className="mt-8 text-lg text-gray-400 max-w-lg leading-8">
            Drag and drop your files directly into your private vault, protect
            them with passwords, and securely share them with anyone using a
            simple link or email.
          </p>
        </div>

        {/* Right Illustration */}
        <div className="relative flex items-center justify-center w-[420px] h-[420px]">
          {/* Outer Ring */}
          <div className="absolute w-full h-full rounded-full border border-[#2C313B] " />

          {/* Middle Ring */}
          <div className="absolute w-[340px] h-[340px] rounded-full border border-[#2C313B] " />

          {/* Tick Marks */}
          <div className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-[#3A4048] animate-[spin_45s_linear_infinite_reverse]" />

          {/* Center Safe */}
          <div className="relative w-44 h-44 rounded-full bg-[#1B1F26] border border-[#2C313B] flex items-center justify-center shadow-2xl animate-[spin_45s_linear_infinite]">
            {/* Needle */}
            <div className="absolute w-1 h-16 bg-[#C9A227] rounded-full -translate-y-8 origin-bottom animate-pulse" />

            {/* Center */}
            <div className="w-8 h-8 rounded-full bg-[#C9A227]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
