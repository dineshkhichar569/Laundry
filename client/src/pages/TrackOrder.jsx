import { useState } from "react";
import { trackBooking } from "../api/differentApis/bookings/trackBooking.api";

function TrackOrder() {
  const [trackingId, setTrackingId] = useState("");
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");

  async function handleTrack(e) {
    e.preventDefault();
    setError(""); setBooking(null);
    try {
      const res = await trackBooking(trackingId);
      setBooking(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Not found");
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Track Your Order</h1>
      <form onSubmit={handleTrack} className="flex gap-2 mb-6">
        <input
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          placeholder="Enter tracking ID (e.g. LW12345)"
          required
          className="flex-1 px-4 py-3 border rounded-lg"
        />
        <button className="px-6 py-3 bg-brand text-white rounded-lg font-semibold">
          Track
        </button>
      </form>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {booking && (
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-xs text-gray-500">Tracking ID</p>
              <p className="font-mono font-bold">{booking.trackingId}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Total</p>
              <p className="font-bold">₹{booking.total}</p>
            </div>
          </div>
          <p className="mb-3">
            <strong>Status:</strong>{" "}
            <span className="px-3 py-1 rounded-full bg-brandLight text-brandDark text-sm font-semibold capitalize">
              {booking.status}
            </span>
          </p>
          <p className="text-sm text-gray-600">
            <strong>Items:</strong> {booking.items.map((i) => `${i.name} x${i.quantity}`).join(", ")}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Booked on:</strong> {new Date(booking.createdAt).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}

export default TrackOrder;