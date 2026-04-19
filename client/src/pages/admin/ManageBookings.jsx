import { useEffect, useMemo, useState } from "react";
import {
  Sparkles,
  Package,
  Clock3,
  CheckCircle2,
  XCircle,
  CalendarDays,
  User2,
} from "lucide-react";
import { getAllBookings } from "../../api/differentApis/admin/getAllBookings.api";
import { updateBookingStatus } from "../../api/differentApis/admin/updateBookingStatus.api";

const statuses = [
  "pending",
  "confirmed",
  "in-progress",
  "delivered",
  "cancelled",
];

function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  function load() {
    setLoading(true);
    getAllBookings()
      .then((res) => setBookings(res.data || []))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    load();
  }, []);

  async function handleStatusChange(id, status) {
    await updateBookingStatus(id, status);
    load();
  }

  const counts = useMemo(() => {
    return {
      total: bookings.length,
      pending: bookings.filter((b) => b.status === "pending").length,
      active: bookings.filter(
        (b) => b.status === "confirmed" || b.status === "in-progress",
      ).length,
      delivered: bookings.filter((b) => b.status === "delivered").length,
      cancelled: bookings.filter((b) => b.status === "cancelled").length,
    };
  }, [bookings]);

  const statusMeta = {
    pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    confirmed: "bg-blue-100 text-blue-800 border-blue-200",
    "in-progress": "bg-purple-100 text-purple-800 border-purple-200",
    delivered: "bg-green-100 text-green-800 border-green-200",
    cancelled: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <div className="min-h-screen bg-[#edf5fa] overflow-hidden text-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-80px] h-[280px] w-[280px] rounded-full bg-pink-300/25 blur-3xl" />
        <div className="absolute top-[80px] right-[8%] h-[340px] w-[340px] rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="absolute bottom-[40px] left-[40%] h-[220px] w-[220px] rounded-full bg-sky-300/25 blur-3xl" />
      </div>

      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 md:pt-20 pb-10 md:pb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#ef27c7]" />
              Admin order control
            </div>

            <h1 className="mt-5 text-[30px] sm:text-[44px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-slate-900">
              Manage <span className="text-[#ef27c7]">Bookings</span>
            </h1>

            <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg leading-1 text-slate-500">
              Monitor every laundry order, update statuses, and manage the
              complete delivery flow from one place.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-5 grid-cols-3 gap-2 lg:gap-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-3 md:p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-50 to-sky-50 text-[#ef27c7] flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              <p className="mt-4 text-sm text-slate-400">Total Bookings</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {counts.total}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-3 md:p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)]">
              <div className="w-12 h-12 rounded-xl bg-yellow-50 text-yellow-700 flex items-center justify-center">
                <Clock3 className="w-5 h-5" />
              </div>
              <p className="mt-4 text-sm text-slate-400">Pending</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {counts.pending}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-3 md:p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)]">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Clock3 className="w-5 h-5" />
              </div>
              <p className="mt-4 text-sm text-slate-400">Active</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {counts.active}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-3 md:p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)]">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-700 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className="mt-4 text-sm text-slate-400">Delivered</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {counts.delivered}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-3 md:p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)]">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <XCircle className="w-5 h-5" />
              </div>
              <p className="mt-4 text-sm text-slate-400">Cancelled</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {counts.cancelled}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 md:pb-24">
        <div className="thin-scrollbar h-[600px] overflow-y-auto rounded-2xl border border-white/70 bg-white/85 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="px-4 sm:px-6 pt-8 pb-5 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Order list
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                All bookings
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-500">
              Update each booking status directly from the table.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px]">
              <thead className="bg-[#f8fbfd] border-y border-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Tracking
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Items
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Total
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  [...Array(6)].map((_, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="px-6 py-5">
                        <div className="h-5 w-32 rounded bg-slate-100 animate-pulse" />
                      </td>
                      <td className="px-6 py-5">
                        <div className="h-5 w-28 rounded bg-slate-100 animate-pulse" />
                      </td>
                      <td className="px-6 py-5">
                        <div className="h-5 w-56 rounded bg-slate-100 animate-pulse" />
                      </td>
                      <td className="px-6 py-5">
                        <div className="h-5 w-16 rounded bg-slate-100 animate-pulse" />
                      </td>
                      <td className="px-6 py-5">
                        <div className="h-10 w-36 rounded-xl bg-slate-100 animate-pulse" />
                      </td>
                      <td className="px-6 py-5">
                        <div className="h-5 w-20 rounded bg-slate-100 animate-pulse" />
                      </td>
                    </tr>
                  ))
                ) : bookings.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-14 text-center">
                      <p className="text-lg font-bold text-slate-900">
                        No bookings found
                      </p>
                      <p className="mt-2 text-sm text-slate-500">
                        Booking records will appear here when customers place
                        orders.
                      </p>
                    </td>
                  </tr>
                ) : (
                  bookings.map((b) => (
                    <tr
                      key={b._id}
                      className="border-b border-slate-100 hover:bg-[#fcfdff] transition"
                    >
                      <td className="px-6 py-5">
                        <p className="font-mono text-sm font-bold text-[#ef27c7]">
                          {b.trackingId}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-50 to-sky-50 text-[#ef27c7] flex items-center justify-center">
                            <User2 className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">
                              {b.userName}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">
                              {b.phone}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600 max-w-[320px]">
                        {b.items
                          .map((i) => `${i.name} x${i.quantity}`)
                          .join(", ")}
                      </td>

                      <td className="px-6 py-5">
                        <span className="text-lg font-extrabold text-slate-900">
                          ₹{b.total}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex flex-col gap-2">
                          <span
                            className={`inline-flex self-start px-3 py-1 rounded-full text-[11px] font-semibold uppercase border ${
                              statusMeta[b.status] ||
                              "bg-gray-100 text-gray-700 border-gray-200"
                            }`}
                          >
                            {b.status}
                          </span>

                          <select
                            value={b.status}
                            onChange={(e) =>
                              handleStatusChange(b._id, e.target.value)
                            }
                            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-[#ef27c7] focus:ring-4 focus:ring-[#ef27c7]/10"
                          >
                            {statuses.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                          <CalendarDays className="w-4 h-4" />
                          {new Date(b.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ManageBookings;
