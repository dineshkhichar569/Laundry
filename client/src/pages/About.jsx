import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Truck,
  Clock3,
  Leaf,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

function About() {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Pickup & Delivery",
      text: "Convenient doorstep pickup and delivery that saves your time and effort.",
    },
    {
      icon: <Clock3 className="w-6 h-6" />,
      title: "24-48 Hour Turnaround",
      text: "Fast and reliable service so your clothes come back fresh and ready.",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-Friendly Care",
      text: "We use gentle products and modern cleaning methods for better fabric care.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Transparent Pricing",
      text: "Clear and simple pricing with no hidden charges or surprises.",
    },
  ];

  const points = [
    "Free pickup and delivery",
    "Affordable and transparent pricing",
    "Professional handling for every garment",
    "Quick turnaround with reliable service",
    "Customer-first support and smooth experience",
    "Eco-friendly products and careful cleaning",
  ];

  return (
    <div className="min-h-screen bg-[#edf5fa] overflow-hidden">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-80px] left-[-50px] h-[220px] w-[220px] rounded-full bg-pink-300/20 blur-3xl" />
          <div className="absolute top-[70px] right-[8%] h-[260px] w-[260px] rounded-full bg-fuchsia-300/20 blur-3xl" />
          <div className="absolute bottom-[-20px] left-[35%] h-[180px] w-[180px] rounded-full bg-sky-300/20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 md:pt-20 pb-12 md:pb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#ef27c7]" />
            Premium laundry services at your doorstep
          </div>

          <h1 className="mt-6 text-[30px] sm:text-[42px] lg:text-[54px] leading-[1.05] font-extrabold tracking-[-0.03em] text-slate-900">
            About <span className="text-[#ef27c7]">LaundryWallah</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg leading-8 text-slate-500">
            We make laundry simple, reliable, and stress-free with premium care,
            quick turnaround, and service built around your daily life.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="rounded-[30px] border border-white/70 bg-white/80 backdrop-blur-xl p-5 sm:p-9 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Our Story
            </p>

            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900">
              Built to make laundry easier
            </h2>

            <div className="mt-3 space-y-5 text-slate-600 leading-1">
              <p>
                LaundryWallah started in 2023 with a simple mission: make
                laundry easy and affordable for everyone. What began as a single
                neighborhood service has grown into a trusted name for hundreds
                of happy customers.
              </p>

              <p>
                We use eco-friendly detergents, modern equipment, and careful
                handling to make sure every garment comes back cleaner, fresher,
                and ready to wear.
              </p>

              <p>
                Our focus is simple save your time, reduce your stress, and
                deliver a service experience that feels smooth from pickup to
                delivery.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] bg-[#ef27c7] p-7 sm:p-8 text-white shadow-[0_18px_45px_rgba(239,39,199,0.20)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                Our Mission
              </p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold leading-tight">
                Professional care with everyday convenience
              </h3>
              <p className="mt-3 leading-1 text-white/85">
                To save you time by handling your laundry with the same care you
                would but with the speed, consistency, and convenience of a
                professional service.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-[24px] border border-white/70 bg-white/80 backdrop-blur-sm p-3 text-center shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
                <div className="text-2xl font-extrabold text-[#ef27c7]">240+</div>
                <div className="mt-1 text-sm text-slate-500">Happy Customers</div>
              </div>

              <div className="rounded-[24px] border border-white/70 bg-white/80 backdrop-blur-sm p-3 text-center shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
                <div className="text-2xl font-extrabold text-[#ef27c7]">15+</div>
                <div className="mt-1 text-sm text-slate-500">Services</div>
              </div>

              <div className="rounded-[24px] border border-white/70 bg-white/80 backdrop-blur-sm p-3 text-center shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
                <div className="text-2xl font-extrabold text-[#ef27c7]">2+ Yrs</div>
                <div className="mt-1 text-sm text-slate-500">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Everything you need in one reliable laundry service
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/70 bg-white/80 backdrop-blur-sm p-7 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fdf2f8] to-[#eef6ff] text-[#ef27c7] shadow-sm">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-500 leading-7 text-[15px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Promise section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="rounded-[32px] border border-white/70 bg-white/80 backdrop-blur-xl p-4 sm:p-9 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                What you get
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
                Simple service, clear pricing, dependable results
              </h2>
              <p className="mt-4 text-slate-500 leading-8">
                Every order is handled carefully, cleaned professionally, and
                returned neatly packed so the entire experience feels smooth and
                worth it.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[22px] bg-[#f8fbfd] border border-slate-200 p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#fdf2f8] text-[#ef27c7]">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <p className="text-slate-700 font-medium leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-10 pt-6 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto rounded-[36px] bg-gradient-to-r from-[#df09b5] via-[#e400b9] to-[#ef27c7] px-4 sm:px-8 lg:px-12 py-10 md:py-12 shadow-[0_25px_60px_rgba(228,0,185,0.22)] relative overflow-hidden">
          <div className="absolute top-[-50px] right-[-50px] h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-[-60px] left-[-30px] h-44 w-44 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-6">
            <div>
              <p className="text-white/80 font-medium uppercase tracking-[0.2em] text-xs sm:text-sm">
                Ready to get started
              </p>
              <h3 className="mt-3 text-white font-extrabold leading-tight text-[25px] sm:text-[40px] lg:text-[48px]">
                Let us take care of your laundry
              </h3>
              <p className="mt-3 text-white/80 text-base sm:text-lg leading-1 max-w-2xl">
                Book a service today and enjoy fresh, clean clothes without the
                hassle.
              </p>
            </div>

            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 h-12 sm:h-14 rounded-2xl bg-white text-[#e400b9] font-bold shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-slate-50"
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;