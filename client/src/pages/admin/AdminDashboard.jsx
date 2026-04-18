import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Users,
  Package,
  WashingMachine,
  IndianRupee,
  ArrowRight,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { getStats } from "../../api/differentApis/admin/getStats.api";

function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    bookings: 0,
    services: 0,
    revenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStats()
      .then((res) => setStats(res.data || {}))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    {
      label: "Total Users",
      value: stats.users,
      icon: <Users className="w-5 h-5" />,
      iconWrap: "bg-blue-50 text-blue-600",
    },
    {
      label: "Total Bookings",
      value: stats.bookings,
      icon: <Package className="w-5 h-5" />,
      iconWrap: "bg-yellow-50 text-amber-600",
    },
    {
      label: "Services",
      value: stats.services,
      icon: <WashingMachine className="w-5 h-5" />,
      iconWrap: "bg-purple-50 text-purple-600",
    },
    {
      label: "Revenue",
      value: `₹${stats.revenue}`,
      icon: <IndianRupee className="w-5 h-5" />,
      iconWrap: "bg-green-50 text-green-600",
    },
  ];

  const actions = [
    {
      title: "Manage Services",
      text: "Create, edit, and organize laundry services.",
      to: "/admin/services",
      icon: <WashingMachine className="w-5 h-5" />,
    },
    {
      title: "Manage Bookings",
      text: "View and update booking flow and statuses.",
      to: "/admin/bookings",
      icon: <Package className="w-5 h-5" />,
    },
    {
      title: "Manage Users",
      text: "Control accounts and monitor platform users.",
      to: "/admin/users",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Manage Blog",
      text: "Publish and update articles and content.",
      to: "/admin/blog",
      icon: <FileText className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#edf5fa] overflow-hidden text-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-80px] h-[280px] w-[280px] rounded-full bg-pink-300/25 blur-3xl" />
        <div className="absolute top-[80px] right-[8%] h-[340px] w-[340px] rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="absolute bottom-[40px] left-[40%] h-[220px] w-[220px] rounded-full bg-sky-300/25 blur-3xl" />
      </div>

      <section className="relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-10 pt-14 md:pt-20 pb-10 md:pb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#ef27c7]" />
            Admin control center
          </div>

          <h1 className="mt-5 text-[30px] sm:text-[44px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-slate-900">
            Admin <span className="text-[#ef27c7]">Dashboard</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base text-center sm:text-lg leading-8 text-slate-500">
            Manage your laundry business, monitor platform growth, and handle
            services, bookings, users, and content from one place.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 md:pb-24">
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-3 lg:gap-6">
          {cards.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)]"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.iconWrap}`}
              >
                {c.icon}
              </div>
              <p className="mt-4 text-sm text-slate-400">{c.label}</p>
              <p className="mt-1 text-3xl font-extrabold text-slate-900">
                {loading ? "..." : c.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ef27c7] shadow-sm border border-pink-100">
              Quick actions
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Manage every core area
            </h2>

            <p className="mt-4 text-slate-500 text-base sm:text-lg leading-8">
              Jump directly into the admin tools you use most often.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
            {actions.map((item, i) => (
              <Link
                key={item.title}
                to={item.to}
                className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(239,39,199,0.12)] hover:border-pink-100"
              >

                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-50 to-sky-50 text-[#ef27c7] flex items-center justify-center shadow-sm transition duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg sm:text-xl font-extrabold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-slate-500 leading-6 text-sm">
                  {item.text}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#ef27c7]">
                  Open section
                  <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
                </div>

                <div className="mt-5 h-px w-10 bg-gradient-to-r from-[#ef27c7] to-transparent" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
