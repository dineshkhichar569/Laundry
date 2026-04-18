import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Clock3,
  CheckCircle2,
  Truck,
  CalendarDays,
  PackageCheck,
  CircleDot,
} from "lucide-react";
import { getMyBookings } from "../api/differentApis/bookings/getMyBookings.api";
import { getUser } from "../utils/auth";

function Dashboard() {
  const user = getUser();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyBookings()
      .then((res) => setBookings(res.data || []))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const active = useMemo(
    () =>
      bookings.filter(
        (b) => b.status !== "delivered" && b.status !== "cancelled",
      ).length,
    [bookings],
  );

  const completed = useMemo(
    () => bookings.filter((b) => b.status === "delivered").length,
    [bookings],
  );

  const cancelled = useMemo(
    () => bookings.filter((b) => b.status === "cancelled").length,
    [bookings],
  );

  const recentBookings = useMemo(() => bookings.slice(0, 5), [bookings]);

  const completionRate = bookings.length
    ? Math.round((completed / bookings.length) * 100)
    : 0;

  function formatDate(date) {
    if (!date) return "Not scheduled";
    return new Date(date).toLocaleDateString();
  }

  function getStatusMeta(status) {
    const s = (status || "").toLowerCase();

    if (s === "delivered") {
      return {
        label: "Delivered",
        className: "bg-emerald-50 text-emerald-700 border-emerald-200",
      };
    }

    if (s === "cancelled") {
      return {
        label: "Cancelled",
        className: "bg-red-50 text-red-700 border-red-200",
      };
    }

    if (s === "picked" || s === "picked up") {
      return {
        label: "Picked Up",
        className: "bg-sky-50 text-sky-700 border-sky-200",
      };
    }

    if (s === "processing" || s === "in progress") {
      return {
        label: "Processing",
        className: "bg-amber-50 text-amber-700 border-amber-200",
      };
    }

    return {
      label: status || "Pending",
      className: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
    };
  }

  const stats = [
    {
      title: "Total Orders",
      value: bookings.length,
      icon: <ShoppingBag className="w-5 h-5" />,
      iconWrap: "bg-[#fdf2f8] text-[#ef27c7]",
    },
    {
      title: "Active Orders",
      value: active,
      icon: <Clock3 className="w-5 h-5" />,
      iconWrap: "bg-[#fff7ed] text-amber-600",
    },
    {
      title: "Completed",
      value: completed,
      icon: <CheckCircle2 className="w-5 h-5" />,
      iconWrap: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Cancelled",
      value: cancelled,
      icon: <CircleDot className="w-5 h-5" />,
      iconWrap: "bg-red-50 text-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#eef5fb] relative overflow-hidden">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute top-16 right-0 h-80 w-80 rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 md:pt-14 pb-16 md:pb-24">
        {/* top hero */}
        <div className="grid xl:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="rounded-2xl border border-white/70 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.07)] p-4 sm:p-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fdf2f8] text-[#ef27c7] px-4 py-2 text-sm font-bold">
              <Sparkles className="w-4 h-4" />
              Personal Dashboard
            </div>

            <h1 className="mt-6 text-[30px] sm:text-[44px] lg:text-[52px] leading-[0.95] font-extrabold tracking-[-0.04em] text-slate-900">
              Welcome back,
              <br />
              <span className="text-[#ef27c7]">{user?.name || "User"}</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-1 text-slate-500">
              Track your laundry journey, manage new pickups, and monitor your
              current orders from one premium dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 px-3 md:gap-6 h-10 md:h-14 rounded-xl md:rounded-2xl bg-[#ef27c7] text-white font-bold shadow-[0_18px_40px_rgba(239,39,199,0.28)] transition hover:-translate-y-1"
              >
                Book New Pickup
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/my-bookings"
                className="inline-flex items-center justify-center px-3 md:gap-6 h-10 md:h-14 rounded-xl md:rounded-2xl bg-white text-slate-800 font-bold border border-slate-200 shadow-sm transition hover:bg-slate-50"
              >
                View My Orders
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-[#f8fbfd] border border-white/1 p-4"
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.iconWrap}`}
                  >
                    {item.icon}
                  </div>
                  <p className="mt-4 text-sm text-slate-400">{item.title}</p>
                  <p className="mt-1 text-2xl font-extrabold text-slate-900">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* right big panel */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white shadow-[0_28px_70px_rgba(15,23,42,0.20)] p-4 sm:p-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-pink-500/10 blur-2xl" />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.22em] text-white/55 font-semibold">
                Overview
              </p>

              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold leading-tight">
                Your laundry performance
              </h2>

              <div className="mt-8 flex items-center gap-6">
                <div
                  className="relative h-28 w-28 rounded-full grid place-items-center"
                  style={{
                    background: `conic-gradient(#ff4fd8 ${completionRate}%, rgba(255,255,255,0.10) ${completionRate}% 100%)`,
                  }}
                >
                  <div className="h-[92px] w-[92px] rounded-full bg-slate-900 grid place-items-center">
                    <div className="text-center">
                      <div className="text-2xl font-extrabold">
                        {completionRate}%
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                        Done
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-white/60">
                    Completed successfully
                  </p>
                  <p className="mt-2 text-2xl font-extrabold">
                    {completed} of {bookings.length || 0} orders
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    A quick snapshot of your finished laundry bookings.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-white/10 grid place-items-center text-[#ff7ddd]">
                        <Truck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/55">Active orders</p>
                        <p className="font-bold text-lg">{active}</p>
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/45">
                      Live
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-white/10 grid place-items-center text-[#ff7ddd]">
                        <PackageCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/55">Latest status</p>
                        <p className="font-bold text-lg capitalize">
                          {bookings[0]?.status || "No orders yet"}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/45">
                      Current
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#df09b5] via-[#e400b9] to-[#ef27c7] p-5 shadow-[0_18px_40px_rgba(228,0,185,0.18)]">
                <p className="text-xs uppercase tracking-[0.2em] text-white/75">
                  Quick Note
                </p>
                <p className="mt-2 text-lg font-bold">
                  {active > 0
                    ? `You have ${active} active booking${active > 1 ? "s" : ""} right now.`
                    : "No active bookings right now."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="mt-6 grid xl:grid-cols-[0.72fr_1.28fr] gap-6">
          {/* quick actions / flow */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/70 bg-white/85 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.07)] p-4 sm:p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold">
                Quick Actions
              </p>

              <div className="mt-6 space-y-4">
                <Link
                  to="/book"
                  className="group flex items-center justify-between rounded-2xl bg-[#f8fbfd] border border-white/1 p-4 transition hover:bg-white"
                >
                  <div>
                    <p className="font-extrabold text-slate-900">
                      Schedule pickup
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Book your next laundry collection
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#ef27c7] transition group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/my-bookings"
                  className="group flex items-center justify-between rounded-2xl bg-[#f8fbfd] border border-white/1 p-4 transition hover:bg-white"
                >
                  <div>
                    <p className="font-extrabold text-slate-900">
                      Manage bookings
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      View all statuses and details
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#ef27c7] transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/85 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.07)] p-4 sm:p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold">
                Service Flow
              </p>

              <div className="mt-6 space-y-5">
                {[
                  "Pickup scheduled",
                  "Clothes collected",
                  "Cleaning in process",
                  "Delivered to doorstep",
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 rounded-full bg-[#fdf2f8] text-[#ef27c7] grid place-items-center font-bold">
                        {i + 1}
                      </div>
                      {i !== 3 && (
                        <div className="mt-2 h-8 w-px bg-slate-200" />
                      )}
                    </div>

                    <div className="pt-1">
                      <p className="font-bold text-slate-900">{step}</p>
                      <p className="text-sm text-slate-500 mt-1">
                        Smooth and transparent progress through every stage.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* recent orders */}
          <div className="rounded-2xl border border-white/70 bg-white/85 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.07)] p-4 sm:p-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold">
                  Recent Orders
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Booking activity
                </h2>
              </div>

              <Link
                to="/my-bookings"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#ef27c7]"
              >
                View all
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {loading ? (
              <div className="mt-8 space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-100 bg-[#f8fbfd] p-4"
                  >
                    <div className="h-5 w-44 rounded bg-slate-100 animate-pulse" />
                    <div className="mt-3 h-4 w-28 rounded bg-slate-100 animate-pulse" />
                    <div className="mt-4 h-10 w-full rounded bg-slate-100 animate-pulse" />
                  </div>
                ))}
              </div>
            ) : recentBookings.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-[#f8fbfd] p-10 text-center">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  No orders yet
                </h3>
                <p className="mt-3 max-w-lg mx-auto text-slate-500 leading-7">
                  Your bookings will appear here once you schedule your first
                  pickup.
                </p>
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-2 mt-6 px-6 h-12 rounded-2xl bg-[#ef27c7] text-white font-bold shadow-[0_18px_40px_rgba(239,39,199,0.24)] transition hover:-translate-y-1"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="mt-8 space-y-4">
                {recentBookings.map((booking, index) => {
                  const statusMeta = getStatusMeta(booking.status);

                  return (
                    <div
                      key={booking._id || index}
                      className="rounded-2xl border border-slate-300 bg-[#f8fbfd] p-4 transition hover:bg-white"
                    >
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="text-xl font-extrabold text-slate-900">
                              {booking.serviceName ||
                                booking.service?.name ||
                                `Booking #${index + 1}`}
                            </h3>

                            <span
                              className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${statusMeta.className}`}
                            >
                              {statusMeta.label}
                            </span>
                          </div>

                          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                            <span className="inline-flex items-center gap-2">
                              <CalendarDays className="w-4 h-4" />
                              Created: {formatDate(booking.createdAt)}
                            </span>

                            <span className="inline-flex items-center gap-2">
                              <Truck className="w-4 h-4" />
                              Pickup: {formatDate(booking.pickupDate)}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                            Order
                          </p>
                          <p className="mt-1 font-bold text-slate-900">
                            #{String(index + 1).padStart(2, "0")}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            booking.status === "delivered"
                              ? "w-full bg-emerald-500"
                              : booking.status === "processing" ||
                                  booking.status === "in progress"
                                ? "w-2/3 bg-amber-400"
                                : booking.status === "picked" ||
                                    booking.status === "picked up"
                                  ? "w-1/2 bg-sky-500"
                                  : booking.status === "cancelled"
                                    ? "w-full bg-red-400"
                                    : "w-1/4 bg-[#ef27c7]"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
