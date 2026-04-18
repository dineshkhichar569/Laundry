import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  CalendarDays,
  Package2,
  ArrowRight,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { getMyBookings } from "../api/differentApis/bookings/getMyBookings.api";
import { cancelBooking } from "../api/differentApis/bookings/cancelBooking.api";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  function load() {
    setLoading(true);
    getMyBookings()
      .then((res) => setBookings(res.data || []))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    load();
  }, []);

  async function cancel(id) {
    if (!window.confirm("Cancel this booking?")) return;

    try {
      await cancelBooking(id);
      load();
    } catch (err) {
      console.log(err);
    }
  }

  const activeCount = useMemo(
    () =>
      bookings.filter(
        (b) => b.status !== "delivered" && b.status !== "cancelled",
      ).length,
    [bookings],
  );

  const completedCount = useMemo(
    () => bookings.filter((b) => b.status === "delivered").length,
    [bookings],
  );

  const statusMeta = {
    pending: {
      className: "bg-yellow-100 text-yellow-800 border-yellow-200",
      label: "Pending",
    },
    confirmed: {
      className: "bg-blue-100 text-blue-800 border-blue-200",
      label: "Confirmed",
    },
    "in-progress": {
      className: "bg-purple-100 text-purple-800 border-purple-200",
      label: "In Progress",
    },
    delivered: {
      className: "bg-green-100 text-green-800 border-green-200",
      label: "Delivered",
    },
    cancelled: {
      className: "bg-red-100 text-red-800 border-red-200",
      label: "Cancelled",
    },
  };

  return (
    <div className="min-h-screen bg-[#edf5fa] overflow-hidden text-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-80px] h-[280px] w-[280px] rounded-full bg-pink-300/25 blur-3xl" />
        <div className="absolute top-[80px] right-[8%] h-[340px] w-[340px] rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="absolute bottom-[40px] left-[40%] h-[220px] w-[220px] rounded-full bg-sky-300/25 blur-3xl" />
      </div>

      <section className="relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 md:pt-20 pb-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#ef27c7]" />
              Track every order in one place
            </div>

            <h1 className="mt-5 text-[30px] sm:text-[44px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-slate-900">
              My <span className="text-[#ef27c7]">Bookings</span>
            </h1>

            <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg leading-8 text-slate-500">
              View tracking details, order items, booking status, and manage
              active laundry pickups with ease.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-2 lg:gap-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_8px_25px_rgba(15,23,42,0.04)]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-50 to-sky-50 text-[#ef27c7] flex items-center justify-center">
                <Package2 className="w-5 h-5" />
              </div>
              <p className="mt-4 text-sm text-slate-400">Total Bookings</p>
              <p className="mt-1 text-3xl font-extrabold text-slate-900">
                {bookings.length}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_8px_25px_rgba(15,23,42,0.04)]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 text-amber-600 flex items-center justify-center">
                <Clock3 className="w-5 h-5" />
              </div>
              <p className="mt-4 text-sm text-slate-400">Active Orders</p>
              <p className="mt-1 text-3xl font-extrabold text-slate-900">
                {activeCount}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_8px_25px_rgba(15,23,42,0.04)]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 text-green-600 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className="mt-4 text-sm text-slate-400">Completed</p>
              <p className="mt-1 text-3xl font-extrabold text-slate-900">
                {completedCount}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 md:pb-24">
        {loading ? (
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="h-5 w-40 rounded bg-slate-100 animate-pulse" />
                  <div className="h-7 w-24 rounded-full bg-slate-100 animate-pulse" />
                </div>
                <div className="mt-5 h-4 w-full rounded bg-slate-100 animate-pulse" />
                <div className="mt-2 h-4 w-3/4 rounded bg-slate-100 animate-pulse" />
                <div className="mt-6 flex items-center justify-between">
                  <div className="h-4 w-28 rounded bg-slate-100 animate-pulse" />
                  <div className="h-6 w-16 rounded bg-slate-100 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : bookings.length === 0 ? (
          <div className="rounded-2xl border border-white/70 bg-white/75 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-10 text-center">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-50 to-sky-50 text-[#ef27c7] flex items-center justify-center shadow-sm">
              <Package2 className="w-6 h-6" />
            </div>

            <h2 className="mt-5 text-2xl font-extrabold text-slate-900">
              No bookings yet
            </h2>

            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Your laundry bookings will appear here once you schedule your
              first pickup.
            </p>

            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 mt-6 px-6 h-12 rounded-xl bg-[#ef27c7] text-white font-bold shadow-[0_14px_30px_rgba(239,39,199,0.24)] hover:-translate-y-0.5 transition"
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((b) => {
              const meta = statusMeta[b.status] || {
                className: "bg-gray-100 text-gray-700 border-gray-200",
                label: b.status,
              };

              return (
                <div
                  key={b._id}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(15,23,42,0.07)]"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 font-semibold">
                        Tracking ID
                      </p>
                      <p className="mt-1 font-mono text-sm sm:text-base font-bold text-[#ef27c7] break-all">
                        {b.trackingId}
                      </p>
                    </div>

                    <span
                      className={`inline-flex items-center self-start px-3 py-1 rounded-full text-[11px] font-semibold uppercase border ${meta.className}`}
                    >
                      {meta.label}
                    </span>
                  </div>

                  <div className="mt-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 font-semibold">
                      Order Items
                    </p>
                    <p className="mt-2 text-sm sm:text-base text-slate-600 leading-7">
                      {b.items?.length
                        ? b.items
                            .map((i) => `${i.name} x${i.quantity}`)
                            .join(", ")
                        : "No items listed"}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <CalendarDays className="w-4 h-4" />
                      {new Date(b.createdAt).toLocaleDateString()}
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-xl sm:text-2xl font-extrabold text-slate-900">
                        ₹{b.total}
                      </span>

                      {b.status !== "delivered" && b.status !== "cancelled" && (
                        <button
                          onClick={() => cancel(b._id)}
                          className="inline-flex items-center gap-2 px-4 h-10 rounded-xl border border-red-200 bg-red-50 text-red-600 text-sm font-semibold hover:bg-red-100 transition"
                        >
                          <XCircle className="w-4 h-4" />
                          Cancel booking
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default MyBookings;
