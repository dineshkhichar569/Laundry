import { useEffect, useState } from "react";
import {
  Sparkles,
  ArrowRight,
  PenSquare,
  FileText,
  User2,
  Trash2,
  CalendarDays,
} from "lucide-react";
import { getAllBlogs } from "../../api/differentApis/blogs/getAllBlogs.api";
import { addBlog } from "../../api/differentApis/blogs/addBlog.api";
import { deleteBlog } from "../../api/differentApis/blogs/deleteBlog.api";

function ManageBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "Admin",
  });

  function load() {
    setLoading(true);
    getAllBlogs()
      .then((res) => setBlogs(res.data || []))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    load();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await addBlog(form);
      setForm({
        title: "",
        excerpt: "",
        content: "",
        author: "Admin",
      });
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
              Admin content manager
            </div>

            <h1 className="mt-5 text-[30px] sm:text-[44px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-slate-900">
              Manage <span className="text-[#ef27c7]">Blog</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base text-center sm:text-lg leading-8 text-slate-500">
              Publish new articles, manage existing posts, and keep your blog
              fresh with laundry tips, offers, and helpful guides.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#f8fbfd] border border-white p-5">
              <p className="text-sm text-slate-400">Total Posts</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {blogs.length}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f8fbfd] border border-white p-5">
              <p className="text-sm text-slate-400">Default Author</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {form.author || "Admin"}
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
                  Create post
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Add new blog post
                </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Title
                </label>
                <input
                  placeholder="Enter blog title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                  className="w-full h-12 rounded-xl border border-slate-200 bg-[#f8fbfd] px-4 text-sm sm:text-base outline-none transition focus:border-[#ef27c7] focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Excerpt
                </label>
                <input
                  placeholder="Short summary"
                  value={form.excerpt}
                  onChange={(e) =>
                    setForm({ ...form, excerpt: e.target.value })
                  }
                  required
                  className="w-full h-12 rounded-xl border border-slate-200 bg-[#f8fbfd] px-4 text-sm sm:text-base outline-none transition focus:border-[#ef27c7] focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Content
                </label>
                <textarea
                  placeholder="Write full blog content"
                  rows={7}
                  value={form.content}
                  onChange={(e) =>
                    setForm({ ...form, content: e.target.value })
                  }
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-[#f8fbfd] px-4 py-3 text-sm sm:text-base outline-none resize-none transition focus:border-[#ef27c7] focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Author
                </label>
                <input
                  placeholder="Author name"
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  className="w-full h-12 rounded-xl border border-slate-200 bg-[#f8fbfd] px-4 text-sm sm:text-base outline-none transition focus:border-[#ef27c7] focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
                />
              </div>

              <button className="group inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-[#ef27c7] text-white text-sm sm:text-base font-bold shadow-[0_14px_32px_rgba(239,39,199,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(239,39,199,0.4)]">
                Publish Blog
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/85 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-50 to-sky-50 text-[#ef27c7] flex items-center justify-center shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                  Existing posts
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Published blog posts
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
                    <div className="h-5 w-40 rounded bg-slate-100 animate-pulse" />
                    <div className="mt-3 h-4 w-full rounded bg-slate-100 animate-pulse" />
                    <div className="mt-2 h-4 w-3/4 rounded bg-slate-100 animate-pulse" />
                  </div>
                ))
              ) : blogs.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-[#f8fbfd] p-10 text-center">
                  <p className="text-lg font-bold text-slate-900">
                    No blog posts yet
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Your published articles will appear here.
                  </p>
                </div>
              ) : (
                blogs.map((b, index) => (
                  <div
                    key={b._id}
                    className="group rounded-2xl border border-slate-100 bg-[#f8fbfd] p-5 transition duration-300 hover:bg-white hover:border-pink-100 hover:shadow-[0_10px_25px_rgba(239,39,199,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 font-semibold">
                          Post {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-1 text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                          {b.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {b.excerpt}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
                          <span className="inline-flex items-center gap-2">
                            <User2 className="w-4 h-4" />
                            {b.author}
                          </span>

                          <span className="inline-flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" />
                            {new Date(b.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDelete(b._id)}
                        className="shrink-0 inline-flex items-center gap-2 px-4 h-10 rounded-xl border border-red-200 bg-red-50 text-red-600 text-sm font-semibold hover:bg-red-100 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
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

export default ManageBlog;
