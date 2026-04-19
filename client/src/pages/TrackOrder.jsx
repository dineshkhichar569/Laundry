import { useState } from "react";
import { Search, PackageCheck, BadgeIndianRupee, CalendarDays, PackageX } from "lucide-react";
import { trackBooking } from "../api/differentApis/bookings/trackBooking.api";

function TrackOrder() {
  const [trackingId, setTrackingId] = useState("");
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleTrack(e) {
    e.preventDefault();
    setError("");
    setBooking(null);
    setLoading(true);

    try {
      const res = await trackBooking(trackingId.trim());
      setBooking(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Tracking ID not found");
    } finally {
      setLoading(false);
    }
  }

  const statusColors = {
    pending: "bg-amber-100 text-amber-700",
    confirmed: "bg-sky-100 text-sky-700",
    picked: "bg-violet-100 text-violet-700",
    processing: "bg-blue-100 text-blue-700",
    out_for_delivery: "bg-fuchsia-100 text-fuchsia-700",
    delivered: "bg-emerald-100 text-emerald-700",
    cancelled: "bg-red-100 text-red-600",
  };

  const statusClass =
    statusColors[booking?.status] || "bg-slate-100 text-slate-700";

  return (
    <section className="min-h-[calc(100vh-168px)] bg-[#edf5fa] px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-[32px] border border-white/70 bg-white p-5 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.07)]">
          <div className="flex items-start gap-4 mb-8">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#ef27c7] to-[#e400b9] text-white flex items-center justify-center shadow-[0_14px_30px_rgba(239,39,199,0.25)]">
              <Search className="w-6 h-6" />
            </div>

            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#ef27c7]">
                Order Tracking
              </p>
              <h1 className="text-3xl sm:text-4xl font-black tracking-[-0.04em] text-slate-900">
                Track Your Order
              </h1>
              <p className="mt-2 text-slate-500 text-sm sm:text-base">
                Enter your tracking ID to check the latest laundry order status.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleTrack}
            className="flex flex-col sm:flex-row gap-3 mb-6"
          >
            <div className="relative flex-1">
              <input
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter tracking ID (e.g. LW12345)"
                required
                className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50 pl-4 pr-4 text-slate-800 outline-none transition focus:border-[#ef27c7]/30 focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="h-14 px-6 rounded-2xl bg-[#ef27c7] text-white font-bold shadow-[0_14px_30px_rgba(239,39,199,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(239,39,199,0.28)] transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Tracking..." : "Track Order"}
            </button>
          </form>

          {error && (
            <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-red-600 font-medium">
              {error}
            </div>
          )}

          {!booking && !error && !loading && (
            <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/70 px-6 py-10 text-center">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <PackageX className="w-7 h-7 text-slate-400" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-800">
                No order tracked yet
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Enter a valid tracking ID above to see your booking details.
              </p>
            </div>
          )}

          {booking && (
            <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 sm:p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Tracking ID
                  </p>
                  <p className="mt-1 text-lg sm:text-xl font-black tracking-wide text-slate-900 font-mono">
                    {booking.trackingId}
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Total Amount
                  </p>
                  <p className="mt-1 text-2xl font-black text-slate-900">
                    ₹{booking.total}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold mb-2">
                    <PackageCheck className="w-4 h-4 text-[#ef27c7]" />
                    Current Status
                  </div>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-bold capitalize ${statusClass}`}
                  >
                    {booking.status?.replaceAll("_", " ")}
                  </span>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold mb-2">
                    <CalendarDays className="w-4 h-4 text-[#ef27c7]" />
                    Booked On
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    {new Date(booking.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold mb-3">
                  <BadgeIndianRupee className="w-4 h-4 text-[#ef27c7]" />
                  Ordered Items
                </div>

                <div className="space-y-3">
                  {booking.items?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      <p className="font-semibold text-slate-800">
                        {item.name}
                      </p>
                      <span className="text-sm font-bold text-slate-500">
                        x{item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TrackOrder;