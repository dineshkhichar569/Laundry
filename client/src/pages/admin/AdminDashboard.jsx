import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStats } from "../../api/differentApis/admin/getStats.api";

function AdminDashboard() {
  const [stats, setStats] = useState({ users: 0, bookings: 0, services: 0, revenue: 0 });

  useEffect(() => {
    getStats()
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  const cards = [
    { label: "Total Users", value: stats.users, icon: "👥", color: "bg-blue-100" },
    { label: "Total Bookings", value: stats.bookings, icon: "📦", color: "bg-yellow-100" },
    { label: "Services", value: stats.services, icon: "🧺", color: "bg-purple-100" },
    { label: "Revenue", value: `₹${stats.revenue}`, icon: "💰", color: "bg-green-100" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">Manage your laundry business</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((c) => (
          <div key={c.label} className={`${c.color} p-6 rounded-xl`}>
            <div className="text-3xl mb-2">{c.icon}</div>
            <p className="text-sm text-gray-700">{c.label}</p>
            <p className="text-2xl font-bold">{c.value}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/admin/services" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
          <div className="text-3xl mb-2">🧺</div>
          <h3 className="font-bold">Manage Services</h3>
        </Link>
        <Link to="/admin/bookings" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
          <div className="text-3xl mb-2">📦</div>
          <h3 className="font-bold">Manage Bookings</h3>
        </Link>
        <Link to="/admin/users" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
          <div className="text-3xl mb-2">👥</div>
          <h3 className="font-bold">Manage Users</h3>
        </Link>
        <Link to="/admin/blog" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
          <div className="text-3xl mb-2">📝</div>
          <h3 className="font-bold">Manage Blog</h3>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;