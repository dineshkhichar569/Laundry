import { useEffect, useMemo, useState } from "react";
import { Sparkles, Users, ShieldCheck, Mail, Phone } from "lucide-react";
import { getAllUsers } from "../../api/differentApis/admin/getAllUsers.api";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllUsers()
      .then((res) => setUsers(res.data || []))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const stats = useMemo(() => {
    const admins = users.filter((u) => u.role === "admin").length;
    const customers = users.filter((u) => u.role !== "admin").length;

    return {
      total: users.length,
      admins,
      customers,
    };
  }, [users]);

  return (
    <div className="min-h-screen bg-[#edf5fa] overflow-hidden text-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-80px] h-[280px] w-[280px] rounded-full bg-pink-300/25 blur-3xl" />
        <div className="absolute top-[80px] right-[8%] h-[340px] w-[340px] rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="absolute bottom-[40px] left-[40%] h-[220px] w-[220px] rounded-full bg-sky-300/25 blur-3xl" />
      </div>

      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 md:pt-20 pb-10 md:pb-12">
          <div className="mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#ef27c7]" />
              Admin user manager
            </div>

            <h1 className="mt-5 text-[30px] sm:text-[44px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-slate-900">
              Manage <span className="text-[#ef27c7]">Users</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base text-center sm:text-lg leading-8 text-slate-500">
              View all registered users, monitor admin access, and keep track of
              customer accounts in one clean dashboard.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-2xl bg-[#f8fbfd] border border-white p-5">
              <p className="text-sm text-slate-400">Total Users</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {stats.total}
              </p>
            </div>
            <div className="rounded-2xl bg-[#f8fbfd] border border-white p-5">
              <p className="text-sm text-slate-400">Customers</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {stats.customers}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f8fbfd] border border-white p-5">
              <p className="text-sm text-slate-400">Admins</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {stats.admins}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 md:pb-24">
        <div className="rounded-2xl border border-white/70 bg-white/85 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="px-4 sm:px-6 pt-8 pb-5 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                User directory
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                All users
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-500">
              View registered users and their roles.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px]">
              <thead className="bg-[#f8fbfd] border-y border-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Role
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
                        <div className="h-5 w-52 rounded bg-slate-100 animate-pulse" />
                      </td>
                      <td className="px-6 py-5">
                        <div className="h-5 w-24 rounded bg-slate-100 animate-pulse" />
                      </td>
                      <td className="px-6 py-5">
                        <div className="h-7 w-20 rounded-full bg-slate-100 animate-pulse" />
                      </td>
                    </tr>
                  ))
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-14 text-center">
                      <p className="text-lg font-bold text-slate-900">
                        No users found
                      </p>
                      <p className="mt-2 text-sm text-slate-500">
                        Registered users will appear here.
                      </p>
                    </td>
                  </tr>
                ) : (
                  users.map((u) => (
                    <tr
                      key={u._id}
                      className="border-b border-slate-100 hover:bg-[#fcfdff] transition"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-50 to-sky-50 text-[#ef27c7] flex items-center justify-center">
                            <Users className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">
                              {u.name}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="inline-flex items-center gap-2 text-sm text-slate-600">
                          <Mail className="w-4 h-4 text-slate-400" />
                          {u.email}
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="inline-flex items-center gap-2 text-sm text-slate-600">
                          <Phone className="w-4 h-4 text-slate-400" />
                          {u.phone || "-"}
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase border ${
                            u.role === "admin"
                              ? "bg-purple-100 text-purple-800 border-purple-200"
                              : "bg-gray-100 text-gray-700 border-gray-200"
                          }`}
                        >
                          {u.role === "admin" && (
                            <ShieldCheck className="w-3.5 h-3.5" />
                          )}
                          {u.role}
                        </span>
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

export default ManageUsers;
