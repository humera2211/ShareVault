import React from "react";
import SideNav from "./_components/SideNav";
import TopHeader from "./_components/TopHeader";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#14161A] text-white">
      <div className="hidden md:flex md:w-64 h-full border-r border-[#2C313B] fixed inset-y-0 z-50 bg-[#14161A]">
        <SideNav />
      </div>

      <div className="md:ml-64 min-h-screen bg-[#14161A]">
        <TopHeader />
        <main className="bg-[#14161A] min-h-[calc(100vh-64px)]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default layout;
