"use client";
import { File, Upload } from "lucide-react";
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
    <div>
      <div className="p-3 border-b-2">
        <Image src="/logo.svg" alt="share vault" height={50} width={50} className="w-auto h-auto" priority />
      </div>
      <div className="flex flex-col float-left mt-4 w-full ">
        {menuList.map((item, key) => (
          <Link
            href={item.path}
            onClick={() => setActiveIndex(key)}
            key={item.id}
            className={`flex w-full items-center gap-3 p-4 px-6 border-b hover:bg-blue-200 ${activeIndex === key ? "bg-blue-200 text-blue-500" : ""}`}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
