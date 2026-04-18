import { useEffect, useState } from "react";
import { getAllBookings } from "../../api/differentApis/admin/getAllBookings.api";
import { updateBookingStatus } from "../../api/differentApis/admin/updateBookingStatus.api";

const statuses = ["pending", "confirmed", "in-progress", "delivered", "cancelled"];

function ManageBookings() {
  const [bookings, setBookings] = useState([]);

  function load() {
    getAllBookings()
      .then((res) => setBookings(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => { load(); }, []);

  async function handleStatusChange(id, status) {
    await updateBookingStatus(id, status);
    load();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Manage Bookings</h1>

      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm">Tracking</th>
              <th className="px-4 py-3 text-left text-sm">Customer</th>
              <th className="px-4 py-3 text-left text-sm">Items</th>
              <th className="px-4 py-3 text-left text-sm">Total</th>
              <th className="px-4 py-3 text-left text-sm">Status</th>
              <th className="px-4 py-3 text-left text-sm">Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id} className="border-t">
                <td className="px-4 py-3 font-mono text-sm">{b.trackingId}</td>
                <td className="px-4 py-3 text-sm">
                  <p className="font-semibold">{b.userName}</p>
                  <p className="text-xs text-gray-500">{b.phone}</p>
                </td>
                <td className="px-4 py-3 text-xs text-gray-600">
                  {b.items.map((i) => `${i.name} x${i.quantity}`).join(", ")}
                </td>
                <td className="px-4 py-3 font-bold">₹{b.total}</td>
                <td className="px-4 py-3">
                  <select
                    value={b.status}
                    onChange={(e) => handleStatusChange(b._id, e.target.value)}
                    className="px-2 py-1 border rounded text-sm"
                  >
                    {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </td>
                <td className="px-4 py-3 text-xs text-gray-500">
                  {new Date(b.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageBookings;