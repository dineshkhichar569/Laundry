import { Link } from "react-router-dom";
import {
  Truck,
  Headset,
  BadgeDollarSign,
  WashingMachine,
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
} from "lucide-react";

function Home() {
  const features = [
    {
      icon: <WashingMachine strokeWidth={2} className="w-8 h-8" />,
      title: "Premium Services",
      text: "Meticulous dry cleaning that keeps your garments looking and feeling brand new, every single time.",
    },
    {
      icon: <Headset strokeWidth={2} className="w-8 h-8" />,
      title: "Quick Support",
      text: "Friendly, responsive help for bookings, updates, and any laundry need along the way.",
    },
    {
      icon: <Truck strokeWidth={2} className="w-8 h-8" />,
      title: "Hassle Free Delivery",
      text: "Convenient pickup and doorstep delivery that saves time and keeps your routine stress-free.",
    },
    {
      icon: <BadgeDollarSign strokeWidth={2} className="w-8 h-8" />,
      title: "Affordable Prices",
      text: "Transparent pricing with premium quality — you get great care without overpaying.",
    },
  ];

  const stats = [
    { value: "15+", label: "Laundry Services" },
    { value: "240+", label: "Happy Customers" },
    { value: "2+ Yrs", label: "Experience" },
    { value: "24hr", label: "Turnaround" },
  ];

  return (
    <div className="bg-[#edf5fa] overflow-hidden text-slate-900">
      {/* Soft blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-80px] h-[280px] w-[280px] rounded-full bg-pink-300/25 blur-3xl" />
        <div className="absolute top-[80px] right-[8%] h-[340px] w-[340px] rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="absolute bottom-[40px] left-[40%] h-[220px] w-[220px] rounded-full bg-sky-300/25 blur-3xl" />
      </div>
      
      {/* ===================== HERO ===================== */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 md:pt-20 pb-16 md:pb-24 grid md:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center relative z-10">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-500" />
              Fresh clothes, delivered with care
            </div>

            <h1 className="mt-5 text-[30px] leading-[1.1] sm:text-[34px] lg:text-[46px] font-extrabold tracking-[-0.025em] text-[#3b3b3f]">
              Revitalize Your Clothes with Expert{" "}
              <span className="text-[#ef27c7] relative inline-block">
                Laundry Services
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 5 Q 50 0 100 4 T 200 3"
                    stroke="#ef27c7"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.35"
                  />
                </svg>
              </span>
              !
            </h1>

            <p className="mt-5 text-[15px] sm:text-[17px] leading-relaxed text-slate-500 max-w-[560px]">
              From premium dry cleaning to swift wash and fold, we deliver care
              and convenience. Schedule a pickup and rediscover the freshness of
              your clothes today.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                to="/book"
                className="group inline-flex items-center justify-center gap-2 px-3 h-10 sm:h-14 rounded-xl bg-[#ef27c7] text-white text-sm sm:text-base font-bold shadow-[0_14px_32px_rgba(239,39,199,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(239,39,199,0.4)]"
              >
                Book a service today!
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 h-12 sm:h-14 px-5 text-sm sm:text-base font-semibold text-slate-700 hover:text-[#ef27c7] transition"
              >
                View all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 border-2 border-[#edf5fa]" />
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-200 to-sky-300 border-2 border-[#edf5fa]" />
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-fuchsia-200 to-fuchsia-300 border-2 border-[#edf5fa]" />
                  <div className="w-9 h-9 rounded-full bg-white border-2 border-[#edf5fa] text-[10px] font-bold text-slate-600 flex items-center justify-center">
                    +240
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="ml-1 text-xs font-bold text-slate-700">
                      4.9
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">from 240+ customers</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Free pickup &amp; delivery
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              {/* Glow layers */}
              <div className="absolute inset-8 rounded-full bg-white/50 blur-2xl" />
              <div className="absolute w-[85%] h-[85%] rounded-full bg-gradient-to-br from-pink-200/60 via-white/40 to-sky-200/50 blur-2xl" />

              <img
                src="/wash.png"
                alt="Laundry machine"
                className="relative z-10 w-full max-w-[440px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)] animate-[float_4s_ease-in-out_infinite]"
              />

              {/* Floating cards */}
              <div className="absolute bottom-4 left-0 sm:left-4 z-20 rounded-xl bg-white/90 backdrop-blur-md shadow-xl px-4 py-2.5 border border-white/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                      Pickup
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      Same-day available
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-0 sm:right-2 z-20 rounded-xl bg-[#ef27c7] text-white shadow-xl px-4 py-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/80 font-semibold">
                      Quality
                    </p>
                    <p className="text-sm font-bold">Premium care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="relative overflow-hidden">

        <div className="max-w-full mx-auto py-10 md:py-12 relative z-10 ">
          <div className="grid grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] overflow-hidden border border-white/25 bg-white/10 backdrop-blur-sm bg-gradient-to-r from-[#df09b5] via-[#e400b9] to-[#ef27c7]">
            {/* Heading cell */}
            <div className="col-span-2 md:col-span-1 px-4 py-6 md:py-8 flex flex-col justify-center bg-white/5">
              <p className="text-white/70 text-center text-[11px] uppercase tracking-[0.2em] font-semibold mb-1">
                Trusted performance
              </p>
              <h2 className="text-2xl text-center sm:text-3xl font-extrabold text-white leading-tight">
                Our Achievements
              </h2>
            </div>

            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-6 md:py-8 text-center border-t md:border-t-0 md:border-l border-white/20 ${
                  i === 1 ? "border-l border-white/20" : ""
                }`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-sm">
                  {s.value}
                </div>
                <div className="mt-1.5 text-xs sm:text-sm text-white/85 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURES ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ef27c7] shadow-sm border border-pink-100">
            Why choose us
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Laundry that feels{" "}
            <span className="text-[#ef27c7]">simple and reliable</span>
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg leading-7">
            Every order is handled with care, packed professionally, and
            delivered back fresh and ready to wear.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(239,39,199,0.12)] hover:border-pink-100"
            >
              <div className="absolute top-5 right-5 text-xs font-bold text-slate-200 group-hover:text-pink-200 transition">
                0{i + 1}
              </div>

              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-50 to-sky-50 text-[#ef27c7] flex items-center justify-center shadow-sm transition duration-300 group-hover:scale-110 group-hover:from-pink-100 group-hover:to-pink-50">
                {f.icon}
              </div>

              <h3 className="mt-5 text-lg sm:text-xl font-extrabold text-slate-900">
                {f.title}
              </h3>

              <p className="mt-2.5 text-slate-500 leading-6 text-sm">
                {f.text}
              </p>

              <div className="mt-5 h-px w-10 bg-gradient-to-r from-[#ef27c7] to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* ===================== NEWSLETTER ===================== */}
      <section className="px-4 sm:px-6 lg:px-10 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-[#df09b5] via-[#e400b9] to-[#ef27c7] px-6 sm:px-10 lg:px-14 py-10 md:py-14 shadow-[0_25px_60px_rgba(228,0,185,0.25)] relative overflow-hidden">
          {/* decorative */}
          <div className="absolute top-[-60px] right-[-60px] h-52 w-52 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-[-80px] left-[-40px] h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute top-6 right-8 text-white/15">
            <Sparkles className="w-24 h-24" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-block text-white/90 font-bold uppercase tracking-[0.22em] text-[11px] bg-white/15 rounded-full px-3 py-1 backdrop-blur border border-white/20">
                Stay updated
              </span>
              <h2 className="mt-4 text-white font-extrabold leading-[1.1] text-[28px] sm:text-[36px] lg:text-[44px] tracking-tight">
                Subscribe to our newsletter
              </h2>
              <p className="mt-3 text-white/85 text-sm sm:text-base leading-7 max-w-md">
                Get offers, care tips, service updates, and helpful reminders
                straight to your inbox — no spam, ever.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/85">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Weekly tips
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Exclusive offers
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Unsubscribe anytime
                </div>
              </div>
            </div>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your full name"
                className="w-full h-12 sm:h-14 rounded-xl px-5 bg-white/15 border border-white/30 text-white placeholder:text-white/70 text-sm sm:text-base outline-none backdrop-blur-md focus:border-white focus:bg-white/20 transition"
              />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-12 sm:h-14 rounded-xl px-5 bg-white/15 border border-white/30 text-white placeholder:text-white/70 text-sm sm:text-base outline-none backdrop-blur-md focus:border-white focus:bg-white/20 transition"
              />
              <button
                type="submit"
                className="group w-full h-12 sm:h-14 rounded-xl bg-white text-[#e400b9] text-sm sm:text-base font-bold shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-slate-50 flex items-center justify-center gap-2"
              >
                Subscribe to newsletter
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs text-white/70 pt-1">
                🔒 We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
