import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-full px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 -mt-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              <strong className="text-indigo-600">Upload , save </strong>
              and
              <strong className="text-indigo-600"> share</strong> your
              files in one place
            </h1>
            <p className="mt-7 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Drag and drop your files directly on our cloud and share it with your friends securely with password and send it on email.
            </p>
            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="/upload"
              >
                Get Started
              </a>
              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero