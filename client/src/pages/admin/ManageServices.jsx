import { useEffect, useState } from "react";
import { getAllServices } from "../../api/differentApis/services/getAllServices.api";
import { addService } from "../../api/differentApis/services/addService.api";
import { updateService } from "../../api/differentApis/services/updateService.api";
import { deleteService } from "../../api/differentApis/services/deleteService.api";

function ManageServices() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", icon: "🧺", description: "" });
  const [editingId, setEditingId] = useState(null);

  function load() {
    getAllServices()
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => { load(); }, []);

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
    setForm({ name: s.name, price: s.price, icon: s.icon, description: s.description });
    setEditingId(s._id);
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this service?")) return;
    await deleteService(id);
    load();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Manage Services</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm mb-8 grid md:grid-cols-2 gap-3">
        <input placeholder="Service name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="px-4 py-2 border rounded-lg" />
        <input type="number" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required className="px-4 py-2 border rounded-lg" />
        <input placeholder="Icon (emoji)" value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} className="px-4 py-2 border rounded-lg" />
        <input placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="px-4 py-2 border rounded-lg" />
        <button className="md:col-span-2 py-2 bg-brand text-white rounded-lg font-semibold">
          {editingId ? "Update Service" : "Add Service"}
        </button>
      </form>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Service</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s._id} className="border-t">
                <td className="px-4 py-3">
                  <span className="mr-2">{s.icon}</span>
                  <strong>{s.name}</strong>
                  <p className="text-xs text-gray-500">{s.description}</p>
                </td>
                <td className="px-4 py-3 font-bold text-brand">₹{s.price}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button onClick={() => handleEdit(s)} className="text-blue-600 text-sm font-semibold">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(s._id)} className="text-red-600 text-sm font-semibold">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageServices;