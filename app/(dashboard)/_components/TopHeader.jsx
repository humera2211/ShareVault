import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="my-1 p-4 h-16 border-b flex justify-between items-center">
      <div className="w-8">
        <Menu className="md:hidden cursor-pointer" />
      </div>

      <UserButton />
    </div>
  );
};

export default TopHeader;
