import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Check, ArrowRight } from "lucide-react";
function Pricing() {

  const plans = [
    {
      name: "Basic",
      price: "499",
      period: "/mo",
      popular: false,
      features: [
        "5 garments / week",
        "Free pickup & delivery",
        "Standard turnaround",
      ],
      buttonStyle:
        "border-2 border-[#ef27c7] text-[#ef27c7] bg-white hover:bg-[#fdf2f8]",
    },
    {
      name: "Premium",
      price: "999",
      period: "/mo",
      popular: true,
      features: [
        "15 garments / week",
        "Free pickup & delivery",
        "Express turnaround",
        "Stain treatment included",
      ],
      buttonStyle:
        "bg-white text-[#e400b9] hover:bg-slate-50 shadow-[0_14px_30px_rgba(255,255,255,0.22)]",
    },
    {
      name: "Family",
      price: "1,799",
      period: "/mo",
      popular: false,
      features: [
        "Unlimited garments",
        "Free pickup & delivery",
        "Express turnaround",
        "All services included",
      ],
      buttonStyle:
        "border-2 border-[#ef27c7] text-[#ef27c7] bg-white hover:bg-[#fdf2f8]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#edf5fa] overflow-hidden text-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-80px] left-[-50px] h-[220px] w-[220px] rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute top-[70px] right-[8%] h-[260px] w-[260px] rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="absolute bottom-[-20px] left-[35%] h-[180px] w-[180px] rounded-full bg-sky-300/20 blur-3xl" />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 md:pb-24 pt-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#ef27c7]" />
            Simple and transparent pricing
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Choose the plan that works for you
          </h2>

          <p className="mt-4 text-slate-500 text-base sm:text-lg leading-8">
            Flexible monthly plans for individuals, professionals, and families.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 transition duration-300 ${
                plan.popular
                  ? "bg-gradient-to-br from-[#df09b5] via-[#e400b9] to-[#ef27c7] text-white shadow-[0_25px_60px_rgba(228,0,185,0.22)] md:-translate-y-2"
                  : "border border-slate-100 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(239,39,199,0.12)] hover:border-pink-100"
              }`}
            >
              {plan.popular && (
                <div className="inline-flex items-center rounded-full bg-white text-[#e400b9] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em]">
                  Most Popular
                </div>
              )}

              <h3
                className={`mt-4 text-lg sm:text-xl font-extrabold ${
                  plan.popular ? "text-white" : "text-slate-900"
                }`}
              >
                {plan.name}
              </h3>

              <p
                className={`mt-4 flex items-end gap-1 ${
                  plan.popular ? "text-white" : "text-slate-900"
                }`}
              >
                <span className="text-3xl sm:text-4xl font-extrabold">
                  ₹{plan.price}
                </span>
                <span
                  className={`mb-1 text-sm ${
                    plan.popular ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  {plan.period}
                </span>
              </p>

              <ul className="mt-6 space-y-3.5">
                {plan.features.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 text-sm leading-6 ${
                      plan.popular ? "text-white/90" : "text-slate-600"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ${
                        plan.popular
                          ? "bg-white/20 text-white"
                          : "bg-[#fdf2f8] text-[#ef27c7]"
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/book"
                className={`mt-8 h-12 rounded-xl font-bold inline-flex items-center justify-center gap-2 w-full text-sm sm:text-base transition ${plan.buttonStyle}`}
              >
                Choose {plan.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto rounded-3xl bg-white/75 border border-white/70 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] px-6 sm:px-8 lg:px-12 py-10 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Need help choosing?
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Book a service or contact us for custom pricing
            </h3>
            <p className="mt-3 text-slate-500 leading-7 max-w-2xl">
              Perfect for bulk orders, office wear, family laundry, and special
              fabric care.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-[#ef27c7] text-white font-bold shadow-[0_14px_30px_rgba(239,39,199,0.24)] hover:-translate-y-0.5 transition"
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 h-12 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold hover:bg-slate-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;