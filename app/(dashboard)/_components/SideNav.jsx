"use client";
import { File, Upload , LockKeyhole } from "lucide-react";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const SideNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "files",
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#14161A] border-r border-zinc-800">
      {/* Logo */}
      <Link href="/">
        <div className="flex justify-center items-center pt-1">
          <LockKeyhole className="mr-2 text-[#F3F1EA]" />
          <h1 className="text-[#C9A227] text-3xl font-bold">
            Share{" "}
            <span className="text-3xl text-[#F3F1EA] font-bold">Vault</span>
          </h1>
        </div>
      </Link>
      <div className="mt-6 flex flex-col">
        {menuList.map((item, key) => (
          <Link
            key={item.id}
            href={`/${item.path}`}
            onClick={() => setActiveIndex(key)}
            className={`flex items-center gap-4 w-full py-5 px-8 transition-all duration-200
      ${
        activeIndex === key
          ? "bg-[#2A2D34] text-[#C9A227] border-l-4 border-[#C9A227]"
          : "text-gray-300 hover:bg-[#21252D] hover:text-white"
      }`}
          >
            <item.icon size={24} />
            <span className="text-lg font-medium">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
