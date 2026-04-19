import { useEffect, useMemo, useState } from "react";
import { Star, MessageSquareQuote, Sparkles, Send, ShieldCheck } from "lucide-react";
import { getAllReviews } from "../api/differentApis/reviews/getAllReviews.api";
import { addReview } from "../api/differentApis/reviews/addReview.api";
import { isLoggedIn } from "../utils/auth";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const loggedIn = isLoggedIn();

  async function load() {
    try {
      setLoading(true);
      const res = await getAllReviews();
      setReviews(res.data || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      setSubmitting(true);
      await addReview({ rating, comment });
      setComment("");
      setRating(5);
      load();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to post review");
    } finally {
      setSubmitting(false);
    }
  }

  const averageRating = useMemo(() => {
    if (!reviews.length) return 0;
    const total = reviews.reduce((sum, item) => sum + item.rating, 0);
    return (total / reviews.length).toFixed(1);
  }, [reviews]);

  function renderStars(n, size = "w-4 h-4") {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= n
                ? "fill-amber-400 text-amber-400"
                : "fill-slate-200 text-slate-200"
            }`}
          />
        ))}
      </div>
    );
  }

  return (
    <section className="min-h-[calc(100vh-168px)] bg-[#edf5fa] px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl border border-white/70 bg-white p-4 sm:p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)]">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-[#ef27c7] to-[#e400b9] text-white flex items-center justify-center shadow-[0_14px_30px_rgba(239,39,199,0.25)]">
              <MessageSquareQuote className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#ef27c7]/15 bg-[#ef27c7]/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ef27c7]">
              <Sparkles className="w-3.5 h-3.5" />
              Customer Feedback
            </div>

            <h1 className="mt-5 text-[30px] sm:text-[44px] lg:text-[52px] font-black tracking-[-0.04em] text-slate-900">
              What Our Customers Say
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-7 text-slate-500">
              Real reviews from real customers who trust LaundryWallah for
              clean, fresh, and perfectly cared-for clothes.
            </p>
          </div>

          {/* Summary */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">Average Rating</p>
              <div className="mt-2 flex items-end gap-3">
                <h3 className="text-4xl font-black text-slate-900">{averageRating}</h3>
                <span className="text-slate-400 font-medium mb-1">/ 5.0</span>
              </div>
              <div className="mt-3">{renderStars(Math.round(Number(averageRating)), "w-5 h-5")}</div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">Total Reviews</p>
              <h3 className="mt-2 text-4xl font-black text-slate-900">{reviews.length}</h3>
              <p className="mt-3 text-sm text-slate-500">
                Feedback shared by our happy customers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-800 font-bold">
                <ShieldCheck className="w-5 h-5 text-[#ef27c7]" />
                Verified care
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                We value genuine feedback and use it to improve pickup, washing,
                finishing, and delivery experience.
              </p>
            </div>
          </div>

          {/* Review Form */}
          <div className="mt-10">
            {loggedIn ? (
              <form
                onSubmit={handleSubmit}
                className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 sm:p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Leave a review
                  </h3>
                  <span className="rounded-full bg-[#ef27c7]/8 px-3 py-1 text-xs font-bold text-[#ef27c7]">
                    Share your experience
                  </span>
                </div>

                <div className="mt-5 grid gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-600">
                      Rating
                    </label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="w-full h-12 rounded-2xl border border-slate-200 bg-white px-4 text-slate-800 outline-none transition focus:border-[#ef27c7]/30 focus:ring-4 focus:ring-[#ef27c7]/10"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
                      <option value={4}>⭐⭐⭐⭐ (4)</option>
                      <option value={3}>⭐⭐⭐ (3)</option>
                      <option value={2}>⭐⭐ (2)</option>
                      <option value={1}>⭐ (1)</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-600">
                      Your review
                    </label>
                    <textarea
                      placeholder="Tell us about your experience..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      required
                      rows={4}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#ef27c7]/30 focus:ring-4 focus:ring-[#ef27c7]/10"
                    />
                  </div>

                  {error && (
                    <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                      {error}
                    </p>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 rounded-2xl bg-[#ef27c7] px-6 py-3 text-white font-bold shadow-[0_14px_30px_rgba(239,39,199,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(239,39,199,0.28)] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      <Send className="w-4 h-4" />
                      {submitting ? "Posting..." : "Post Review"}
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="rounded-[28px] border border-[#ef27c7]/15 bg-[#ef27c7]/8 px-6 py-5 text-center">
                <p className="text-sm sm:text-base font-semibold text-[#c218a3]">
                  Login to leave a review and share your experience.
                </p>
              </div>
            )}
          </div>

          {/* Reviews List */}
          <div className="mt-10">
            {loading ? (
              <div className="grid gap-4 md:grid-cols-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm animate-pulse"
                  >
                    <div className="h-4 w-28 rounded bg-slate-200" />
                    <div className="mt-3 h-3 w-20 rounded bg-slate-200" />
                    <div className="mt-5 space-y-2">
                      <div className="h-3 w-full rounded bg-slate-200" />
                      <div className="h-3 w-[90%] rounded bg-slate-200" />
                      <div className="h-3 w-[70%] rounded bg-slate-200" />
                    </div>
                  </div>
                ))}
              </div>
            ) : reviews.length === 0 ? (
              <div className="rounded-[28px] border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">
                <h3 className="text-xl font-bold text-slate-800">
                  No reviews yet
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-500">
                  Be the first to share your experience with LaundryWallah.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {reviews.map((r) => (
                  <div
                    key={r._id}
                    className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(15,23,42,0.07)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-extrabold text-slate-900">
                          {r.userName}
                        </p>
                        <div className="mt-2">{renderStars(r.rating)}</div>
                      </div>

                      <p className="shrink-0 text-xs font-medium text-slate-400">
                        {new Date(r.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <p className="mt-4 text-[15px] leading-7 text-slate-600">
                      {r.comment}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;