import { useEffect, useState } from "react";
import { getAllReviews } from "../api/differentApis/reviews/getAllReviews.api";
import { addReview } from "../api/differentApis/reviews/addReview.api";
import { isLoggedIn } from "../utils/auth";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const loggedIn = isLoggedIn();

  function load() {
    getAllReviews()
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => { load(); }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await addReview({ rating, comment });
      setComment("");
      setRating(5);
      load();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to post review");
    }
  }

  function stars(n) {
    return "⭐".repeat(n);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">What Our Customers Say</h1>
      <p className="text-center text-gray-600 mb-10">
        Real reviews from real customers
      </p>

      {/* Submit form */}
      {loggedIn ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm mb-8 space-y-3">
          <h3 className="font-bold text-lg">Leave a review</h3>
          <div>
            <label className="text-sm text-gray-600 block mb-1">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
              <option value={4}>⭐⭐⭐⭐ (4)</option>
              <option value={3}>⭐⭐⭐ (3)</option>
              <option value={2}>⭐⭐ (2)</option>
              <option value={1}>⭐ (1)</option>
            </select>
          </div>
          <textarea
            placeholder="Share your experience..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            rows={3}
            className="w-full px-4 py-2 border rounded-lg"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="px-6 py-2 bg-brand text-white rounded-lg font-semibold">
            Post Review
          </button>
        </form>
      ) : (
        <div className="bg-brandLight p-4 rounded-xl text-center mb-8 text-brandDark">
          Login to leave a review
        </div>
      )}

      {/* Reviews list */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500">No reviews yet. Be the first!</p>
        ) : (
          reviews.map((r) => (
            <div key={r._id} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-bold">{r.userName}</p>
                  <p className="text-sm">{stars(r.rating)}</p>
                </div>
                <p className="text-xs text-gray-400">
                  {new Date(r.createdAt).toLocaleDateString()}
                </p>
              </div>
              <p className="text-gray-600">{r.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Reviews;