import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { apiRequest } from "../api";

function Dashboard() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    apiRequest("/bookings/mine")
      .then(setBookings)
      .catch(() => {});
  }, []);

  const active = bookings.filter(
    (b) => b.status !== "delivered" && b.status !== "cancelled",
  ).length;
  const completed = bookings.filter((b) => b.status === "delivered").length;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Hi, {user?.name} 👋</h1>
      <p className="text-gray-600 mb-8">Welcome to your dashboard</p>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Total Bookings</p>
          <p className="text-2xl font-bold">{bookings.length}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Active</p>
          <p className="text-2xl font-bold">{active}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Completed</p>
          <p className="text-2xl font-bold">{completed}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Link
          to="/book"
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md"
        >
          <h3 className="font-bold text-lg">Book new pickup →</h3>
          <p className="text-sm text-gray-600">Schedule a laundry pickup</p>
        </Link>
        <Link
          to="/my-bookings"
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md"
        >
          <h3 className="font-bold text-lg">My bookings →</h3>
          <p className="text-sm text-gray-600">See orders and status</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
