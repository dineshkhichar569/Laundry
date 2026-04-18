import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Mail, LockKeyhole } from "lucide-react";
import { login } from "../api/differentApis/auth/login.api";
import { saveUser } from "../utils/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await login({ email, password });
      saveUser(res.data);
      navigate("/dashboard");
      window.location.reload();
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  }

  return (
    <div className="bg-[#edf5fa] overflow-hidden text-slate-900 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-80px] h-[280px] w-[280px] rounded-full bg-pink-300/25 blur-3xl" />
        <div className="absolute top-[80px] right-[8%] h-[340px] w-[340px] rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="absolute bottom-[40px] left-[40%] h-[220px] w-[220px] rounded-full bg-sky-300/25 blur-3xl" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-14 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-[660px] mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#ef27c7]" />
              Welcome back
            </div>

            <h1 className="mt-5 text-[30px] sm:text-[44px] lg:text-[52px] font-extrabold tracking-[-0.03em] leading-[1.05] text-slate-900">
              Login to your{" "}
              <span className="text-[#ef27c7]">LaundryWallah</span> account
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-7 text-slate-500 max-w-[500px] mx-auto">
              Manage bookings, schedule pickups, and track every laundry order
              from one place.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-white/70 bg-white/85 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 rounded-xl border border-slate-200 bg-[#f8fbfd] pl-11 pr-4 text-sm sm:text-base outline-none transition focus:border-[#ef27c7] focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <LockKeyhole className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full h-12 rounded-xl border border-slate-200 bg-[#f8fbfd] pl-11 pr-4 text-sm sm:text-base outline-none transition focus:border-[#ef27c7] focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
                  />
                </div>
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="group w-full h-12 rounded-xl bg-[#ef27c7] text-white text-sm sm:text-base font-bold shadow-[0_14px_32px_rgba(239,39,199,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(239,39,199,0.4)] flex items-center justify-center gap-2"
              >
                Login
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>

            <p className="text-center mt-5 text-sm text-slate-500">
              No account?{" "}
              <Link
                to="/signup"
                className="text-[#ef27c7] font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
