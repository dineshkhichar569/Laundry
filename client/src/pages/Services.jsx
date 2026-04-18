import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { getAllServices } from "../api/differentApis/services/getAllServices.api";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllServices()
      .then((res) => {
        setServices(res.data || []);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#edf5fa] overflow-hidden text-slate-900">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-80px] left-[-60px] h-[220px] w-[220px] rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute top-[90px] right-[8%] h-[260px] w-[260px] rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="absolute bottom-[-40px] left-[35%] h-[200px] w-[200px] rounded-full bg-sky-300/20 blur-3xl" />
      </div>

      <section className="relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 md:pt-20 pb-10 md:pb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#ef27c7]" />
            Premium care for every fabric
          </div>

          <h1 className="mt-5 text-[30px] sm:text-[42px] lg:text-[54px] leading-[1.05] font-extrabold tracking-[-0.03em] text-slate-900">
            Our <span className="text-[#ef27c7]">Laundry Services</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg leading-0 text-slate-500">
            Choose from premium dry cleaning, wash and fold, ironing, and more.
            Fast pickup, professional care, and reliable delivery for every order.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 md:pb-24">
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/70 bg-white/80 backdrop-blur-sm p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)]"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-100 animate-pulse" />
                <div className="mt-5 h-5 w-36 rounded bg-slate-100 animate-pulse" />
                <div className="mt-3 h-4 w-full rounded bg-slate-100 animate-pulse" />
                <div className="mt-2 h-4 w-5/6 rounded bg-slate-100 animate-pulse" />
                <div className="mt-6 flex items-center justify-between">
                  <div className="h-7 w-16 rounded bg-slate-100 animate-pulse" />
                  <div className="h-12 w-28 rounded-xl bg-slate-100 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : services.length === 0 ? (
          <div className="rounded-2xl border border-white/70 bg-white/75 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-10 text-center">
            <h2 className="text-2xl font-extrabold text-slate-900">
              No services available right now
            </h2>
            <p className="mt-3 text-slate-500">
              Please check back later or contact us for custom laundry requests.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center mt-6 px-6 h-12 rounded-xl bg-[#ef27c7] text-white font-bold shadow-[0_14px_30px_rgba(239,39,199,0.24)] hover:-translate-y-0.5 transition"
            >
              Contact Us
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((s, index) => (
              <div
                key={s._id}
                className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(239,39,199,0.12)] hover:border-pink-100"
              >
                <div className="absolute top-5 right-5 text-xs font-bold text-slate-200 group-hover:text-pink-200 transition">
                  0{index + 1}
                </div>

                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-50 to-sky-50 text-[#ef27c7] flex items-center justify-center text-3xl shadow-sm transition duration-300 group-hover:scale-110">
                  {s.icon || "🧺"}
                </div>

                <h3 className="mt-5 text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                  {s.name}
                </h3>

                <p className="mt-2.5 text-slate-500 leading-6 text-sm min-h-[72px]">
                  {s.description}
                </p>

                <div className="mt-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 font-semibold">
                      Starting at
                    </p>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#ef27c7]">
                      ₹{s.price}
                    </span>
                  </div>

                  <Link
                    to="/book"
                    className="inline-flex items-center gap-2 px-3 h-10 md:h-12 md:px-6 rounded-xl bg-[#ef27c7] text-white text-sm sm:text-base font-bold shadow-[0_14px_30px_rgba(239,39,199,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(239,39,199,0.30)]"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="mt-5 h-px w-10 bg-gradient-to-r from-[#ef27c7] to-transparent" />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Services;