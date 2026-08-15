import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0f1219] to-[#1a1f2e]">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4a817]/15 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-20" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #ffffff 1px, transparent 1px), linear-gradient(0deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main container - ROW LAYOUT */}
      <div className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between">
          {/* LEFT SIDE - Branding */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex lg:flex items-center justify-center lg:justify-start mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#d4a817] to-blue-500 rounded-2xl blur opacity-30" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#151619]/80 backdrop-blur-xl">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="4"
                      y="10"
                      width="16"
                      height="10"
                      rx="2"
                      stroke="#d4a817"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 10V7a4 4 0 0 1 8 0v3"
                      stroke="#d4a817"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="ml-4 lg:ml-4 text-3xl lg:text-4xl font-black tracking-tight">
                <span className="text-[#d4a817]">Share</span>
                <span className="text-white">Vault</span>
              </h1>
            </div>

            <p className="text-gray-400 text-lg mb-8">
              Create your account and start securely sharing files in seconds
            </p>

            <div className="space-y-4 hidden lg:block">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#d4a817"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    Secure Authentication
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Industry-leading security for your account
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#d4a817"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    Upload & Share Files Easily
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Simple drag-and-drop interface
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#d4a817"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    Fast, Reliable & Cloud Powered
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Enterprise-grade infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Sign Up Card */}
          <div className="w-full lg:w-1/2 max-w-md lg:max-w-lg px-0">
            <div className="relative group">
              {/* Gradient border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#d4a817]/50 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />

              <div className="relative bg-[#0f1219]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 lg:p-10 shadow-2xl">
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a817] to-transparent" />

                <SignUp
                  appearance={{
                    variables: {
                      colorPrimary: "#d4a817",
                      colorText: "#f5f5f5",
                      colorTextSecondary: "#a0a0a0",
                      colorBackground: "#0f1219",
                      colorInputBackground: "#1a1f2e",
                      colorInputText: "#f5f5f5",
                      borderRadius: "8px",
                    },

                    elements: {
                      rootBox: "w-full",
                      card: "w-full bg-transparent shadow-none border-0 p-0",
                      headerTitle: "text-2xl font-bold text-white text-center",
                      headerSubtitle: "mt-2 text-sm text-gray-400 text-center",

                      socialButtonsBlockButton:
                        "h-12 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-sm",
                      socialButtonsBlockButtonText:
                        "text-sm font-semibold text-gray-200",

                      dividerLine: "bg-white/10",
                      dividerText: "text-xs font-medium text-gray-500",

                      formFieldLabel:
                        "text-sm font-semibold text-gray-300 mb-2.5",
                      formFieldInput:
                        "h-12 rounded-lg border border-white/10 bg-[#1a1f2e] text-white shadow-none transition-all duration-200 placeholder:text-gray-600 focus:border-[#d4a817]/50 focus:ring-2 focus:ring-[#d4a817]/20 focus:bg-[#1f2430]",

                      formButtonPrimary:
                        "h-12 rounded-lg bg-gradient-to-r from-[#d4a817] to-[#c49b16] text-sm font-bold text-black shadow-lg shadow-[#d4a817]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#d4a817]/50 active:scale-95",

                      footerActionText: "text-sm text-gray-400",
                      footerActionLink:
                        "font-semibold text-[#d4a817] hover:text-[#e5bf23] transition-colors",

                      identityPreviewText: "text-gray-300",
                      identityPreviewEditButton: "text-[#d4a817]",

                      formFieldInputShowPasswordButton:
                        "text-gray-500 hover:text-gray-300 transition-colors",

                      alert:
                        "rounded-lg border border-red-500/30 bg-red-500/10 backdrop-blur-sm",
                      formFieldErrorText: "text-sm text-red-400",
                    },
                  }}
                />

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
              </div>
            </div>

            {/* Footer */}
            <p className="mt-6 text-center text-xs text-gray-500 px-4 lg:px-0">
              By signing up, you agree to our{" "}
              <a
                href="#"
                className="text-[#d4a817] hover:text-[#e5bf23] transition-colors"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-[#d4a817] hover:text-[#e5bf23] transition-colors"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
