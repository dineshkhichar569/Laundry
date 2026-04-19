import { Link } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";

function NotFound() {
  return (
    <section className="min-h-[calc(100vh-168px)] bg-[#edf5fa] px-4 py-10 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ef27c7]/15 bg-[#ef27c7]/10 px-4 py-2 text-sm font-semibold text-[#ef27c7]">
              <SearchX className="w-4 h-4" />
              Page not found
            </div>

            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.05em] text-slate-900">
              404
            </h1>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-slate-900">
              Oops! This page went missing.
            </h2>

            <p className="mt-4 max-w-xl text-base sm:text-lg leading-8 text-slate-600">
              The page you are looking for does not exist, may have been moved,
              or the link may be incorrect. Let’s get you back to something useful.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#ef27c7] px-6 py-3.5 text-white font-bold shadow-[0_16px_35px_rgba(239,39,199,0.28)] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(239,39,199,0.35)] transition"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-slate-800 font-semibold shadow-sm hover:bg-slate-50 transition"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <Link
                to="/services"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 hover:text-[#ef27c7] hover:border-[#ef27c7]/20 transition"
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 hover:text-[#ef27c7] hover:border-[#ef27c7]/20 transition"
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 hover:text-[#ef27c7] hover:border-[#ef27c7]/20 transition"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 hover:text-[#ef27c7] hover:border-[#ef27c7]/20 transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right card */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#ef27c7]/20 to-transparent blur-3xl" />
            <div className="relative rounded-[32px] border border-white/70 bg-white p-6 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="rounded-[28px] bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 sm:p-10">
                <div className="flex items-center justify-center">
                  <div className="h-28 w-28 rounded-[30px] bg-gradient-to-br from-[#ef27c7] to-[#e400b9] text-white flex items-center justify-center shadow-[0_18px_40px_rgba(239,39,199,0.28)]">
                    <span className="text-5xl font-black">?</span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                    <div className="text-sm font-semibold text-slate-500">
                      Possible reasons
                    </div>
                    <div className="mt-2 text-slate-700 leading-7">
                      Wrong URL, broken link, deleted page, or direct refresh on
                      a route before rewrite configuration.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                    <div className="text-sm font-semibold text-slate-500">
                      Quick fix
                    </div>
                    <div className="mt-2 text-slate-700 leading-7">
                      Go home, check the URL, or navigate using the menu.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;