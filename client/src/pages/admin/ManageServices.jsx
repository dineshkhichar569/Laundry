import { useEffect, useState } from "react";
import {
  Sparkles,
  ArrowRight,
  WashingMachine,
  IndianRupee,
  PenSquare,
  Trash2,
  Pencil,
} from "lucide-react";
import { getAllServices } from "../../api/differentApis/services/getAllServices.api";
import { addService } from "../../api/differentApis/services/addService.api";
import { updateService } from "../../api/differentApis/services/updateService.api";
import { deleteService } from "../../api/differentApis/services/deleteService.api";

function ManageServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    price: "",
    icon: "🧺",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);

  function load() {
    setLoading(true);
    getAllServices()
      .then((res) => setServices(res.data || []))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    load();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (editingId) {
        await updateService(editingId, form);
      } else {
        await addService(form);
      }

      setForm({ name: "", price: "", icon: "🧺", description: "" });
      setEditingId(null);
      load();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  }

  function handleEdit(s) {
    setForm({
      name: s.name,
      price: s.price,
      icon: s.icon,
      description: s.description,
    });
    setEditingId(s._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this service?")) return;
    await deleteService(id);
    load();
  }

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
              Admin service manager
            </div>

            <h1 className="mt-5 text-[30px] sm:text-[44px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-slate-900">
              Manage <span className="text-[#ef27c7]">Services</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base text-center sm:text-lg leading-8 text-slate-500">
              Add new laundry services, update pricing, and keep your service list clean, consistent, and ready for bookings.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#f8fbfd] border border-white p-5">
              <p className="text-sm text-slate-400">Total Services</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {services.length}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f8fbfd] border border-white p-5">
              <p className="text-sm text-slate-400">Mode</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {editingId ? "Edit" : "Create"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 md:pb-24">
        <div className="grid xl:grid-cols-[0.95fr_1.05fr] gap-6">
          <div className="rounded-2xl border border-white/70 bg-white/85 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-50 to-sky-50 text-[#ef27c7] flex items-center justify-center shadow-sm">
                <PenSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                  Service form
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {editingId ? "Update service" : "Add new service"}
                </h2>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid md:grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Service name
                </label>
                <input
                  placeholder="Service name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full h-12 rounded-xl border border-slate-200 bg-[#f8fbfd] px-4 text-sm sm:text-base outline-none transition focus:border-[#ef27c7] focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Price
                </label>
                <div className="relative">
                  <IndianRupee className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="number"
                    placeholder="Price"
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                    required
                    className="w-full h-12 rounded-xl border border-slate-200 bg-[#f8fbfd] pl-10 pr-4 text-sm sm:text-base outline-none transition focus:border-[#ef27c7] focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Icon
                </label>
                <input
                  placeholder="Icon (emoji)"
                  value={form.icon}
                  onChange={(e) => setForm({ ...form, icon: e.target.value })}
                  className="w-full h-12 rounded-xl border border-slate-200 bg-[#f8fbfd] px-4 text-sm sm:text-base outline-none transition focus:border-[#ef27c7] focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Description
                </label>
                <input
                  placeholder="Description"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  className="w-full h-12 rounded-xl border border-slate-200 bg-[#f8fbfd] px-4 text-sm sm:text-base outline-none transition focus:border-[#ef27c7] focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
                />
              </div>

              <button className="md:col-span-2 group inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-[#ef27c7] text-white text-sm sm:text-base font-bold shadow-[0_14px_32px_rgba(239,39,199,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(239,39,199,0.4)]">
                {editingId ? "Update Service" : "Add Service"}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/85 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-50 to-sky-50 text-[#ef27c7] flex items-center justify-center shadow-sm">
                <WashingMachine className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                  Existing services
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Service list
                </h2>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {loading ? (
                [...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-100 bg-[#f8fbfd] p-5"
                  >
                    <div className="h-5 w-32 rounded bg-slate-100 animate-pulse" />
                    <div className="mt-3 h-4 w-full rounded bg-slate-100 animate-pulse" />
                    <div className="mt-2 h-4 w-24 rounded bg-slate-100 animate-pulse" />
                  </div>
                ))
              ) : services.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-[#f8fbfd] p-10 text-center">
                  <p className="text-lg font-bold text-slate-900">
                    No services found
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Add your first laundry service to get started.
                  </p>
                </div>
              ) : (
                services.map((s, index) => (
                  <div
                    key={s._id}
                    className="group rounded-2xl border border-slate-100 bg-[#f8fbfd] p-5 transition duration-300 hover:bg-white hover:border-pink-100 hover:shadow-[0_10px_25px_rgba(239,39,199,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-50 to-sky-50 text-[#ef27c7] flex items-center justify-center text-2xl shadow-sm shrink-0">
                          {s.icon || "🧺"}
                        </div>

                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 font-semibold">
                            Service {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-1 text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                            {s.name}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-slate-500">
                            {s.description}
                          </p>
                          <p className="mt-3 text-xl font-extrabold text-[#ef27c7]">
                            ₹{s.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                        <button
                          onClick={() => handleEdit(s)}
                          className="inline-flex items-center gap-2 px-4 h-10 rounded-xl border border-blue-200 bg-blue-50 text-blue-600 text-sm font-semibold hover:bg-blue-100 transition"
                        >
                          <Pencil className="w-4 h-4" />
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(s._id)}
                          className="inline-flex items-center gap-2 px-4 h-10 rounded-xl border border-red-200 bg-red-50 text-red-600 text-sm font-semibold hover:bg-red-100 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ManageServices;
