import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUser, isAdmin, logout } from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const user = getUser();

  function handleLogout() {
    logout();
    navigate("/");
    window.location.reload();
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-brand">
          🧺 LaundryWallah
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-semibold">
          <li><Link to="/" className="hover:text-brand">Home</Link></li>
          <li><Link to="/services" className="hover:text-brand">Services</Link></li>
          <li><Link to="/pricing" className="hover:text-brand">Pricing</Link></li>
          <li><Link to="/blog" className="hover:text-brand">Blog</Link></li>
          <li><Link to="/about" className="hover:text-brand">About</Link></li>
          <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
        </ul>

        <div className="hidden md:flex gap-3">
          {user ? (
            <>
              <Link to="/dashboard" className="px-4 py-2 bg-brandLight text-brandDark rounded-lg font-semibold">
                {user.name}
              </Link>
              {isAdmin() && (
                <Link to="/admin" className="px-4 py-2 bg-gray-200 rounded-lg font-semibold">Admin</Link>
              )}
              <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 text-gray-700 font-semibold">Login</Link>
              <Link to="/signup" className="px-4 py-2 bg-brand text-white rounded-lg">Sign Up</Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-2">
          <Link to="/" onClick={() => setOpen(false)} className="block py-2 font-semibold text-gray-700">Home</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="block py-2 font-semibold text-gray-700">Services</Link>
          <Link to="/pricing" onClick={() => setOpen(false)} className="block py-2 font-semibold text-gray-700">Pricing</Link>
          <Link to="/blog" onClick={() => setOpen(false)} className="block py-2 font-semibold text-gray-700">Blog</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block py-2 font-semibold text-gray-700">About</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block py-2 font-semibold text-gray-700">Contact</Link>
          {user ? (
            <>
              <Link to="/dashboard" onClick={() => setOpen(false)} className="block py-2 text-brand font-semibold">Dashboard</Link>
              <button onClick={handleLogout} className="block py-2 text-red-500 font-semibold">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)} className="block py-2 font-semibold">Login</Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="block py-2 text-brand font-semibold">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;