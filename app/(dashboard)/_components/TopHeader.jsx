import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="p-4 h-16 border-b border-zinc-800 flex justify-between items-center">
      <div className="w-8">
        <Menu className="md:hidden cursor-pointer" />
      </div>

      <UserButton />
    </div>
  );
};

export default TopHeader;
