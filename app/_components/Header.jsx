import React from 'react'
import Image from 'next/image';
const Header = () => {
  return (
    <div>
      <header className="bg-white  border-b">
        <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

          <Image src="/logo.svg" alt="Share vault" width={50} height={50} className='w-auto h-auto' priority />

            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-blue-500 font-semibold"
                    href="/"
                  >
                    {" "}
                    Home{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-blue-500 font-semibold"
                    href="/upload"
                  >
                    {" "}
                    Upload{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-blue-500 font-semibold"
                    href="/"
                  >
                    {" "}
                    Contact Us{" "}
                  </a>
                </li>
              </ul>
            </nav>


            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
                  href="/sign-in"
                >
                  Login
                </a>
                <a
                  className="hidden rounded-md bg-gray-200 px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:text-blue-600/75 sm:block"
                  href="/sign-up"
                >
                  Register
                </a>
              </div>
              <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  aria-hidden="true"
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
    </div>
  );
}

export default Header