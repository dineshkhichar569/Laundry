import { useEffect, useState } from "react";
import { getMyBookings } from "../api/differentApis/bookings/getMyBookings.api";
import { cancelBooking } from "../api/differentApis/bookings/cancelBooking.api";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  function load() {
    getMyBookings()
      .then((res) => setBookings(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => { load(); }, []);

  async function cancel(id) {
    if (!window.confirm("Cancel this booking?")) return;
    await cancelBooking(id);
    load();
  }

  const statusColor = {
    pending: "bg-yellow-100 text-yellow-800",
    confirmed: "bg-blue-100 text-blue-800",
    "in-progress": "bg-purple-100 text-purple-800",
    delivered: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
      {bookings.length === 0 ? (
        <div className="bg-white p-10 rounded-xl text-center text-gray-500">
          No bookings yet
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((b) => (
            <div key={b._id} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-xs text-gray-500">Tracking ID</p>
                  <p className="font-mono font-bold text-brand">{b.trackingId}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${statusColor[b.status] || "bg-gray-100"}`}>
                  {b.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                {b.items.map((i) => `${i.name} x${i.quantity}`).join(", ")}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {new Date(b.createdAt).toLocaleDateString()}
                </span>
                <span className="font-bold text-lg">₹{b.total}</span>
              </div>
              {b.status !== "delivered" && b.status !== "cancelled" && (
                <button onClick={() => cancel(b._id)} className="mt-3 text-sm text-red-600 font-semibold">
                  Cancel booking
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;