import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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

  if (error) return <div className="p-10 text-center">{error}</div>;
  if (!blog) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link to="/blog" className="text-brand font-semibold text-sm mb-4 inline-block">
        ← Back to blog
      </Link>
      <div className="h-52 bg-gradient-to-br from-brandLight to-brand text-white text-7xl grid place-items-center rounded-xl mb-6">
        📝
      </div>
      <h1 className="text-4xl font-bold mb-3">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-8">
        By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogPost;