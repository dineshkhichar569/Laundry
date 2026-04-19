import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, isAdmin, logout } from "../utils/auth";
import { Menu, X, Sparkles, User, Shield, LogOut } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const user = getUser();

  function handleLogout() {
    logout();
    navigate("/");
    window.location.reload();
  }

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Pricing", to: "/pricing" },
    { label: "Blog", to: "/blog" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/50 bg-[#edf5fa]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="h-[84px] flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#ef27c7] to-[#e400b9] text-white flex items-center justify-center shadow-[0_12px_30px_rgba(239,39,199,0.28)] text-2xl">
              🧺
            </div>

            <div className="leading-tight">
              <div className="text-[22px] font-extrabold tracking-[-0.03em] text-slate-900">
                LaundryWallah
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
                <Sparkles className="w-3.5 h-3.5 text-[#ef27c7]" />
                Fresh care at your doorstep
              </div>
            </div>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="px-4 py-2 rounded-full text-[15px] font-semibold text-slate-700 transition hover:bg-[#ef27c7]/10 hover:text-[#ef27c7]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 px-4 h-11 rounded-xl bg-white text-slate-800 border border-white/80 shadow-sm font-semibold hover:shadow-md transition"
                >
                  <User className="w-4 h-4 text-[#ef27c7]" />
                  {user.name}
                </Link>

                {isAdmin() && (
                  <Link
                    to="/admin"
                    className="inline-flex items-center gap-2 px-4 h-11 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
                  >
                    <Shield className="w-4 h-4" />
                    Admin
                  </Link>
                )}

                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-2 px-4 h-11 rounded-xl bg-[#ef4444] text-white font-semibold shadow-sm hover:bg-[#dc2626] transition"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 h-11 inline-flex items-center rounded-xl text-slate-700 font-semibold hover:bg-white/80 transition"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="px-5 h-11 inline-flex items-center rounded-xl bg-[#ef27c7] text-white font-bold shadow-[0_14px_30px_rgba(239,39,199,0.25)] hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(239,39,199,0.30)] transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden h-11 w-11 rounded-xl bg-white/80 border border-white/80 text-slate-800 flex items-center justify-center shadow-sm"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-out ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 top-[84px] bg-white/10 backdrop-blur-md transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Dropdown panel */}
        <div
          className={`relative mx-4 mt-3 rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.14)] transition-all duration-300 ease-out ${
            open
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-3 opacity-0 scale-[0.98]"
          }`}
        >
          <div className="p-3 space-y-2">
            <div className="grid gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl border px-4 py-3 text-[15px] font-semibold shadow-sm transition-all duration-200 active:scale-[0.98] ${
                    location.pathname === item.to
                      ? "border-[#ef27c7]/20 bg-[#ef27c7]/10 text-[#ef27c7] shadow-[0_10px_24px_rgba(239,39,199,0.12)]"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#ef27c7]/15 hover:bg-[#ef27c7]/6 hover:text-[#ef27c7]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="h-px bg-slate-200/80 my-2" />

            <div className="space-y-2">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-slate-800 font-semibold border border-slate-200/70 hover:bg-white transition"
                  >
                    <User className="w-4 h-4 text-[#ef27c7]" />
                    Dashboard
                  </Link>

                  {isAdmin() && (
                    <Link
                      to="/admin"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-2xl bg-slate-900 px-4 py-3 text-white font-semibold hover:bg-slate-800 transition"
                    >
                      <Shield className="w-4 h-4" />
                      Admin
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 rounded-2xl bg-red-500 px-4 py-3 text-white font-semibold hover:bg-red-600 transition"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl bg-slate-50 px-4 py-3 text-slate-700 font-semibold border border-slate-200/70 hover:bg-white transition"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl bg-[#ef27c7] px-4 py-3 text-white font-bold text-center shadow-[0_14px_30px_rgba(239,39,199,0.22)] hover:shadow-[0_18px_35px_rgba(239,39,199,0.28)] transition"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
