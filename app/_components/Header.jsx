import Image from "next/image";
import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="bg-zinc-800 border-b border-gray-900">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex justify-center items-center">
              <LockKeyhole className="mr-2 text-[#F3F1EA]" />
              <h1 className="text-[#C9A227] text-3xl font-bold">
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
                  className="font-semibold text-[#F3F1EA] hover:text-[#C9A227]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/upload"
                  className="font-semibold text-[#F3F1EA] hover:text-[#C9A227]"
                >
                  Upload
                </Link>
              </li>

              <li>
                <Link
                  href="/files"
                  className="font-semibold text-[#F3F1EA] hover:text-[#C9A227]"
                >
                  Files
                </Link>
              </li>

              <li>
                <Link
                  href="/upload"
                  className="font-semibold text-[#F3F1EA] hover:text-[#C9A227]"
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
                  className="rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  Login
                </Link>

                <Link
                  href="/sign-up"
                  className="hidden sm:block rounded-md bg-gray-200 px-5 py-2.5 text-sm font-medium text-blue-600 hover:bg-gray-300"
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
            <button className="block rounded-sm  p-2.5 text-white md:hidden">
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
