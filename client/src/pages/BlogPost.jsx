import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  User2,
  Clock3,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { getBlogBySlug } from "../api/differentApis/blogs/getBlogBySlug.api";

function BlogPost() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getBlogBySlug(slug)
      .then((res) => setBlog(res.data))
      .catch((err) => setError(err.response?.data?.message || "Not found"));
  }, [slug]);

  const readTime = useMemo(() => {
    const text = blog?.content || blog?.excerpt || "";
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.ceil(words / 180))} min read`;
  }, [blog]);

  if (error) {
    return (
      <div className="min-h-screen bg-[#eef5fa] px-4 sm:px-6 lg:px-10 py-16">
        <div className="max-w-4xl mx-auto rounded-[34px] bg-white/85 border border-white/70 p-10 md:p-14 shadow-[0_20px_60px_rgba(15,23,42,0.07)] text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-slate-900">
            {error}
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            We couldn’t load this article.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mt-8 h-12 px-6 rounded-2xl bg-[#ef27c7] text-white font-bold shadow-[0_18px_35px_rgba(239,39,199,0.28)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#eef5fa] px-4 sm:px-6 lg:px-10 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="h-10 w-36 rounded bg-slate-100 animate-pulse" />
          <div className="mt-8 rounded-[34px] overflow-hidden bg-white/85 border border-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.07)]">
            <div className="h-[320px] md:h-[430px] bg-slate-100 animate-pulse" />
            <div className="p-8 md:p-12">
              <div className="h-5 w-64 rounded bg-slate-100 animate-pulse" />
              <div className="mt-6 h-12 w-4/5 rounded bg-slate-100 animate-pulse" />
              <div className="mt-3 h-12 w-2/3 rounded bg-slate-100 animate-pulse" />
              <div className="mt-8 h-4 w-full rounded bg-slate-100 animate-pulse" />
              <div className="mt-3 h-4 w-5/6 rounded bg-slate-100 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const paragraphs = (blog.content || "")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-[#eef5fa] text-slate-900 overflow-hidden">
      <section className="relative px-4 sm:px-6 lg:px-10 pt-10 md:pt-14 pb-16 md:pb-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-pink-300/20 blur-3xl" />
          <div className="absolute top-24 right-0 w-80 h-80 rounded-full bg-fuchsia-300/20 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-sky-300/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-4 py-2 border border-white/70 shadow-sm text-sm font-semibold text-slate-700 hover:text-[#ef27c7] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mt-8 rounded-2xl bg-white/85 border border-white/70 overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.07)]">
            {/* Hero */}
            <div className="relative min-h-[300px] md:min-h-[300px] bg-gradient-to-br from-[#ffd9f4] via-[#fdf2f8] to-[#dbeafe] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.75),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.55),transparent_35%)]" />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#ef27c7] shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Editorial
              </div>

              <div className="absolute right-8 top-10 w-24 h-24 rounded-full border border-white/60" />
              <div className="absolute left-10 bottom-8 text-[110px] md:text-[160px] leading-none">
                📝
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              <div className="max-w-full">
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <User2 className="w-4 h-4" />
                    {blog.author || "LaundryWallah"}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="w-4 h-4" />
                    {readTime}
                  </span>
                </div>

                <h1 className="mt-6 text-[30px] sm:text-[44px] leading-[0.98] font-black tracking-[-0.04em] text-slate-900">
                  {blog.title}
                </h1>

                {blog.excerpt && (
                  <p className="mt-6 text-[18px] sm:text-[20px] leading-1 text-slate-600 max-w-3xl border-l-4 border-[#ef27c7] pl-5">
                    {blog.excerpt}
                  </p>
                )}
              </div>

                {/* Main article */}
              <div className="mt-10 ">
                <article className="min-w-full">
                  <div className="rounded-2xl ">
                    <div className="prose prose-slate max-w-none">
                      <div className="space-y-6 text-[17px] sm:text-[18px] leading-1 text-slate-700">
                        {paragraphs.length > 0 ? (
                          paragraphs.map((para, index) => (
                            <p key={index}>{para}</p>
                          ))
                        ) : (
                          <p>{blog.content}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl bg-[#ef27c7] text-white p-3 sm:p-6 shadow-[0_24px_50px_rgba(239,39,199,0.22)]">
                    <p className="text-white/70 uppercase tracking-[0.18em] text-xs font-bold">
                      Continue exploring
                    </p>
                    <h3 className="mt-3 text-2xl sm:text-3xl font-black tracking-[-0.03em]">
                      Need help beyond the article?
                    </h3>
                    <p className="mt-3 text-white/85 leading-7 max-w-2xl">
                      Book a pickup or explore laundry services designed for
                      daily wear, premium garments, and family loads.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link
                        to="/services"
                        className="inline-flex items-center justify-center h-10 md:h-12 px-3 md:px-6 rounded-xl md:rounded-2xl bg-white text-[#ef27c7] font-bold"
                      >
                        Explore Services
                      </Link>
                      <Link
                        to="/book"
                        className="inline-flex items-center justify-center gap-2 h-10 md:h-12 px-3 md:px-6 rounded-xl md:rounded-2xl border border-white/30 text-white font-bold"
                      >
                        Book Now
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPost;