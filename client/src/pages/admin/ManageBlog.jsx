import { useEffect, useState } from "react";
import { getAllBlogs } from "../../api/differentApis/blogs/getAllBlogs.api";
import { addBlog } from "../../api/differentApis/blogs/addBlog.api";
import { deleteBlog } from "../../api/differentApis/blogs/deleteBlog.api";

function ManageBlog() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", excerpt: "", content: "", author: "Admin" });

  function load() {
    getAllBlogs()
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => { load(); }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addBlog(form);
      setForm({ title: "", excerpt: "", content: "", author: "Admin" });
      load();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this blog post?")) return;
    await deleteBlog(id);
    load();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Manage Blog</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm mb-8 space-y-3">
        <h3 className="font-bold text-lg">Add new blog post</h3>
        <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required className="w-full px-4 py-2 border rounded-lg" />
        <input placeholder="Excerpt (short summary)" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} required className="w-full px-4 py-2 border rounded-lg" />
        <textarea placeholder="Full content" rows={5} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} required className="w-full px-4 py-2 border rounded-lg" />
        <input placeholder="Author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
        <button className="px-6 py-2 bg-brand text-white rounded-lg font-semibold">
          Publish Blog
        </button>
      </form>

      <div className="space-y-3">
        {blogs.map((b) => (
          <div key={b._id} className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-start">
            <div>
              <h3 className="font-bold">{b.title}</h3>
              <p className="text-sm text-gray-600">{b.excerpt}</p>
              <p className="text-xs text-gray-400 mt-1">
                By {b.author} • {new Date(b.createdAt).toLocaleDateString()}
              </p>
            </div>
            <button onClick={() => handleDelete(b._id)} className="text-red-600 text-sm font-semibold">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageBlog;