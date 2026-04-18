import { Link } from "react-router-dom";
import {
  Truck,
  Headset,
  BadgeDollarSign,
  WashingMachine,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function Home() {
  const features = [
    {
      icon: <WashingMachine strokeWidth={2.2} className="w-12 h-12" />,
      title: "Premium Services",
      text: "Elevate your wardrobe with our meticulous dry cleaning, ensuring garments look and feel as good as new.",
    },
    {
      icon: <Headset strokeWidth={2.2} className="w-12 h-12" />,
      title: "Quick Support",
      text: "Friendly and responsive assistance for bookings, updates, and every laundry need along the way.",
    },
    {
      icon: <Truck strokeWidth={2.2} className="w-12 h-12" />,
      title: "Hassle Free Delivery",
      text: "Convenient pickup and doorstep delivery that saves time and keeps your routine stress-free.",
    },
    {
      icon: <BadgeDollarSign strokeWidth={2.2} className="w-12 h-12" />,
      title: "Affordable Prices",
      text: "Transparent pricing with quality service, so you get premium care without overpaying.",
    },
  ];

  return (
    <div className="bg-[#edf5fa] overflow-hidden text-slate-900">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-120px] left-[-80px] h-[280px] w-[280px] rounded-full bg-pink-300/20 blur-3xl" />
          <div className="absolute top-[80px] right-[8%] h-[320px] w-[320px] rounded-full bg-fuchsia-300/20 blur-3xl" />
          <div className="absolute bottom-[40px] left-[40%] h-[220px] w-[220px] rounded-full bg-sky-300/20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 md:pt-20 pb-16 md:pb-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="max-w-[650px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 backdrop-blur px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <Sparkles className="w-4 h-4 text-fuchsia-500" />
              Fresh clothes, delivered with care
            </div>

            <h1 className="mt-6 text-[42px] leading-[1.08] sm:text-[54px] lg:text-[70px] font-extrabold tracking-[-0.03em] text-[#3b3b3f]">
              Revitalize Your Clothes
              <br />
              with Expert
              <br />
              <span className="text-[#ef27c7]">Laundry Services!</span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[20px] leading-8 text-slate-500 max-w-[640px]">
              From premium dry cleaning to swift wash and fold, we deliver care
              and convenience. Schedule a pickup and rediscover the freshness of
              your clothes today.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 px-8 h-14 sm:h-16 rounded-2xl bg-[#ef27c7] text-white text-base sm:text-lg font-bold shadow-[0_18px_40px_rgba(239,39,199,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(239,39,199,0.35)]"
              >
                Book a service today!
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="flex items-center gap-3 text-sm sm:text-base text-slate-600">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#edf5fa]" />
                  <div className="w-10 h-10 rounded-full bg-pink-100 border-2 border-[#edf5fa]" />
                  <div className="w-10 h-10 rounded-full bg-sky-100 border-2 border-[#edf5fa]" />
                </div>
                <span>
                  Trusted by <span className="font-bold text-slate-800">240+</span>{" "}
                  happy customers
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-[560px] min-h-[360px] sm:min-h-[480px] flex items-center justify-center">
              <div className="absolute inset-x-12 inset-y-12 rounded-full bg-white/60 blur-2xl" />
              <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-br from-pink-200/50 via-white/40 to-sky-200/40 blur-2xl" />

              <img
                src="/wash.png"
                alt="Laundry machine"
                className="relative z-10 w-full max-w-[500px] object-contain drop-shadow-[0_28px_55px_rgba(0,0,0,0.12)] animate-[float_4s_ease-in-out_infinite]"
              />

              <div className="absolute bottom-6 left-2 sm:left-6 z-20 rounded-2xl bg-white/80 backdrop-blur-md shadow-xl px-4 py-3 border border-white/80">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Pickup
                </p>
                <p className="text-sm sm:text-base font-bold text-slate-800">
                  Same-day available
                </p>
              </div>

              <div className="absolute top-8 right-2 sm:right-4 z-20 rounded-2xl bg-[#ef27c7] text-white shadow-xl px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                  Quality
                </p>
                <p className="text-sm sm:text-base font-bold">
                  Premium care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#e400b9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute left-[-60px] top-[-30px] h-40 w-40 rounded-full border border-white/30" />
          <div className="absolute right-[-20px] bottom-[-40px] h-48 w-48 rounded-full border border-white/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] rounded-[28px] overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm">
            <div className="px-6 py-8 md:px-10 flex items-center justify-center md:justify-start bg-transparent">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#231f20] text-center md:text-left">
                Our Achievements
              </h2>
            </div>

            <div className="px-6 py-8 text-center border-t md:border-t-0 md:border-l border-white/30">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#231f20]">
                15+
              </div>
              <div className="mt-2 text-sm sm:text-base text-black">
                Laundry Services
              </div>
            </div>

            <div className="px-6 py-8 text-center border-t md:border-t-0 md:border-l border-white/30">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#231f20]">
                240+
              </div>
              <div className="mt-2 text-sm sm:text-base text-black">
                Happy Customers
              </div>
            </div>

            <div className="px-6 py-8 text-center border-t md:border-t-0 md:border-l border-white/30">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#231f20]">
                2+ Yrs
              </div>
              <div className="mt-2 text-sm sm:text-base text-black">
                Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm border border-slate-100">
            Why choose us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Laundry service that feels simple, fast, and reliable
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg leading-8">
            Every order is handled with care, packed professionally, and
            delivered back fresh and ready to wear.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-[28px] border border-white/70 bg-white/80 backdrop-blur-sm p-7 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fdf2f8] to-[#eef6ff] text-[#ef27c7] flex items-center justify-center shadow-sm transition duration-300 group-hover:scale-110">
                {f.icon}
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                {f.title}
              </h3>

              <p className="mt-3 text-slate-500 leading-7 text-[15px]">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 sm:px-6 lg:px-10 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto rounded-[36px] bg-gradient-to-r from-[#df09b5] via-[#e400b9] to-[#ef27c7] px-6 sm:px-8 lg:px-12 py-10 md:py-14 shadow-[0_25px_60px_rgba(228,0,185,0.22)] relative overflow-hidden">
          <div className="absolute top-[-50px] right-[-50px] h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-[-60px] left-[-30px] h-44 w-44 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10 grid lg:grid-cols-[1.1fr_1.2fr] gap-10 items-center">
            <div>
              <p className="text-white/80 font-medium uppercase tracking-[0.22em] text-xs sm:text-sm">
                Stay updated
              </p>
              <h2 className="mt-3 text-white font-extrabold leading-tight text-[34px] sm:text-[46px] lg:text-[56px]">
                Subscribe to our newsletter
              </h2>
              <p className="mt-4 text-white/80 text-base sm:text-lg leading-8 max-w-xl">
                Get offers, care tips, service updates, and helpful reminders
                straight to your inbox.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full h-14 sm:h-[72px] rounded-2xl px-5 sm:px-6 bg-white/10 border border-white/30 text-white placeholder:text-white/75 text-base sm:text-lg outline-none backdrop-blur-md focus:border-white focus:bg-white/15"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-14 sm:h-[72px] rounded-2xl px-5 sm:px-6 bg-white/10 border border-white/30 text-white placeholder:text-white/75 text-base sm:text-lg outline-none backdrop-blur-md focus:border-white focus:bg-white/15"
                />
              </div>

              <button
                type="submit"
                className="h-14 sm:h-[72px] min-w-[180px] sm:min-w-[260px] rounded-2xl bg-white text-[#e400b9] text-base sm:text-xl font-bold shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-slate-50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;