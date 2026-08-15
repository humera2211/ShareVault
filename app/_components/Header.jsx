import Image from "next/image";
import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#0f1219] to-[#1a1f2e] border-b border-white/10 backdrop-blur-xl">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex justify-center items-center cursor-pointer">
              {/* Lock Icon - GROUP FOR HOVER */}
              <div className="group relative mr-2">
                {/* Glow Effect - ONLY ON LOCK */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#d4a817]/40 to-purple-500/40 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <LockKeyhole
                  className="relative text-[#F3F1EA] group-hover:text-[#d4a817] transition-colors duration-300"
                  size={28}
                />
              </div>

              <h1 className="text-[#d4a817] text-3xl font-bold">
                Share{" "}
                <span className="text-3xl text-[#F3F1EA] font-bold">Vault</span>
              </h1>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  href="/"
                  className="font-semibold text-[#F3F1EA] hover:text-[#d4a817] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/upload"
                  className="font-semibold text-[#F3F1EA] hover:text-[#d4a817] transition-colors duration-300"
                >
                  Upload
                </Link>
              </li>

              <li>
                <Link
                  href="/files"
                  className="font-semibold text-[#F3F1EA] hover:text-[#d4a817] transition-colors duration-300"
                >
                  Files
                </Link>
              </li>

              <li>
                <Link
                  href="/upload"
                  className="font-semibold text-[#F3F1EA] hover:text-[#d4a817] transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {/* Logged Out */}
            <SignedOut>
              <div className="flex gap-4">
                <Link
                  href="/sign-in"
                  className="rounded-lg bg-gradient-to-r from-[#d4a817] to-[#c49b16] px-5 py-2.5 text-sm font-medium text-black hover:shadow-lg hover:shadow-[#d4a817]/50 transition-all duration-300 active:scale-95"
                >
                  Login
                </Link>

                <Link
                  href="/sign-up"
                  className="hidden sm:block rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] px-5 py-2.5 text-sm font-medium text-[#F3F1EA] transition-all duration-300"
                >
                  Register
                </Link>
              </div>
            </SignedOut>

            {/* Logged In */}
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            {/* Mobile Menu */}
            <button className="block rounded-sm p-2.5 text-white md:hidden hover:bg-white/10 transition-colors duration-300">
              <span className="sr-only">Toggle menu</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
