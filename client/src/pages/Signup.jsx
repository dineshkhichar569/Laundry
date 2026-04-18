import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/differentApis/auth/register.api";
import { saveUser } from "../utils/auth";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await register(form);
      saveUser(res.data);
      navigate("/dashboard");
      window.location.reload();
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-sm w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" />
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
          <input name="password" type="password" placeholder="Password (min 6 chars)" value={form.password} onChange={handleChange} required minLength={6} className="w-full px-4 py-3 border rounded-lg" />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full py-3 bg-brand text-white rounded-lg font-semibold">
            Create Account
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Have an account? <Link to="/login" className="text-brand font-semibold">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;