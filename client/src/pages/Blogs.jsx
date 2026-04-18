import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, CalendarDays, User2 } from "lucide-react";
import { getAllBlogs } from "../api/differentApis/blogs/getAllBlogs.api";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBlogs()
      .then((res) => setBlogs(res.data || []))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#edf5fa] overflow-hidden text-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-80px] left-[-50px] h-[220px] w-[220px] rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute top-[70px] right-[8%] h-[260px] w-[260px] rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="absolute bottom-[-20px] left-[35%] h-[180px] w-[180px] rounded-full bg-sky-300/20 blur-3xl" />
      </div>

      <section className="relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 md:pt-20 pb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#ef27c7]" />
            Expert tips and clothing care guides
          </div>

          <h1 className="mt-5 text-[30px] sm:text-[42px] lg:text-[54px] leading-[1.05] font-extrabold tracking-[-0.03em] text-slate-900">
            Laundry Tips & <span className="text-[#ef27c7]">Blog</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg leading-8 text-slate-500">
            Discover fabric care advice, washing tips, stain removal guides, and
            smart ways to keep your clothes fresh for longer.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 md:pb-24">
        {loading ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/70 bg-white/80 backdrop-blur-sm overflow-hidden shadow-[0_8px_25px_rgba(15,23,42,0.04)]"
              >
                <div className="h-52 bg-slate-100 animate-pulse" />
                <div className="p-6">
                  <div className="h-5 w-3/4 rounded bg-slate-100 animate-pulse" />
                  <div className="mt-4 h-4 w-full rounded bg-slate-100 animate-pulse" />
                  <div className="mt-2 h-4 w-5/6 rounded bg-slate-100 animate-pulse" />
                  <div className="mt-6 h-4 w-1/2 rounded bg-slate-100 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <div className="rounded-2xl border border-white/70 bg-white/75 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-10 text-center">
            <h2 className="text-2xl font-extrabold text-slate-900">
              No blog posts yet
            </h2>
            <p className="mt-3 text-slate-500">
              Fresh laundry tips and articles will appear here soon.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 mt-6 px-6 h-12 rounded-xl bg-[#ef27c7] text-white font-bold shadow-[0_14px_30px_rgba(239,39,199,0.24)] hover:-translate-y-0.5 transition"
            >
              Explore Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
            {blogs.map((b, index) => (
              <Link
                key={b._id}
                to={`/blog/${b.slug}`}
                className="group rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(239,39,199,0.12)] hover:border-pink-100"
              >
                <div className="relative h-56 bg-gradient-to-br from-[#fbcfe8] via-[#fdf2f8] to-[#dbeafe] flex items-center justify-center overflow-hidden">
                  <div className="absolute top-5 left-5 rounded-full bg-white/80 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#ef27c7] shadow-sm">
                    Article {index + 1}
                  </div>

                  <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-white/40 blur-2xl" />
                  <div className="absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-white/30 blur-2xl" />

                  <div className="text-7xl transition duration-300 group-hover:scale-110">
                    📝
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-extrabold leading-tight text-slate-900 group-hover:text-[#ef27c7] transition">
                    {b.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-slate-500 line-clamp-3 min-h-[72px]">
                    {b.excerpt ||
                      "Read this article for practical laundry care tips and fabric guidance."}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
                    <span className="inline-flex items-center gap-2">
                      <User2 className="w-4 h-4" />
                      {b.author || "LaundryWallah"}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      {new Date(b.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#ef27c7]">
                    Read article
                    <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
                  </div>

                  <div className="mt-5 h-px w-10 bg-gradient-to-r from-[#ef27c7] to-transparent" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Blog;