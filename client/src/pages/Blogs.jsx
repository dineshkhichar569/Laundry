import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../api/differentApis/blogs/getAllBlogs.api";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs()
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Laundry Tips & Blog</h1>
      <p className="text-center text-gray-600 mb-10">
        Expert advice to keep your clothes looking great
      </p>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blog posts yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <Link
              key={b._id}
              to={`/blog/${b.slug}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-br from-brandLight to-brand text-white text-6xl grid place-items-center">
                📝
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{b.excerpt}</p>
                <p className="text-xs text-gray-400 mt-3">
                  By {b.author} • {new Date(b.createdAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blog;