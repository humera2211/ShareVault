import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden flex-col justify-center bg-indigo-300 p-12 text-white lg:flex">
          <h1 className="text-5xl font-bold">
            Share<span className="text-indigo-600">Vault</span>
          </h1>

          <p className="mt-6 text-lg text-indigo-100">
            Create your account and start securely sharing files in seconds.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl"></span>
              <p>Secure Authentication</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl"></span>
              <p>Upload & Share Files Easily</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl"></span>
              <p>Fast, Reliable & Cloud Powered</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center bg-white p-8 md:p-12">
          <SignUp />
        </div>
      </div>
    </div>
  );
}




