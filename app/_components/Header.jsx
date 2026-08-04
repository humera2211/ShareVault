import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Share Vault"
              width={50}
              height={50}
              className="w-auto h-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  href="/"
                  className="font-semibold text-gray-500 hover:text-blue-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/upload"
                  className="font-semibold text-gray-500 hover:text-blue-500"
                >
                  Upload
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="font-semibold text-gray-500 hover:text-blue-500"
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
            <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 md:hidden">
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
