import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Phone,
  MapPin,
  CalendarDays,
  ShoppingBag,
  Plus,
  Trash2,
} from "lucide-react";
import { getAllServices } from "../api/differentApis/services/getAllServices.api";
import { createBooking } from "../api/differentApis/bookings/createBooking.api";

function Book() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [cart, setCart] = useState([]);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getAllServices()
      .then((res) => setServices(res.data || []))
      .catch((err) => console.log(err));
  }, []);

  function addToCart(service) {
    const existing = cart.find((i) => i.name === service.name);

    if (existing) {
      setCart(
        cart.map((i) =>
          i.name === service.name ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      );
    } else {
      setCart([
        ...cart,
        { name: service.name, price: service.price, quantity: 1 },
      ]);
    }
  }

  function removeFromCart(name) {
    setCart(cart.filter((i) => i.name !== name));
  }

  const total = useMemo(
    () => cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [cart],
  );

  async function handleBook(e) {
    e.preventDefault();
    setError("");

    if (cart.length === 0) {
      return setError("Please add services to cart");
    }

    try {
      const res = await createBooking({
        items: cart,
        phone,
        address,
        pickupDate,
      });

      alert(`Booking successful! Tracking ID: ${res.data.trackingId}`);
      navigate("/my-bookings");
    } catch (err) {
      setError(err.response?.data?.message || "Booking failed");
    }
  }

  return (
    <div className="min-h-screen bg-[#edf5fa] overflow-hidden text-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-80px] h-[280px] w-[280px] rounded-full bg-pink-300/25 blur-3xl" />
        <div className="absolute top-[80px] right-[8%] h-[340px] w-[340px] rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="absolute bottom-[40px] left-[40%] h-[220px] w-[220px] rounded-full bg-sky-300/25 blur-3xl" />
      </div>

      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 md:pt-20 pb-10 md:pb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#ef27c7]" />
              Quick pickup booking
            </div>

            <h1 className="mt-5 text-[30px] sm:text-[44px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-slate-900">
              Book your <span className="text-[#ef27c7]">laundry pickup</span>
            </h1>

            <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg leading-1 text-slate-500">
              Pick your services, add pickup details, and confirm your order in
              one smooth flow.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          {/* Services */}
          <div className="rounded-2xl border border-white/70 bg-white/85 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
                  Step 1
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Pick services
                </h2>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-[#fdf2f8] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ef27c7]">
                <ShoppingBag className="w-3.5 h-3.5" />
                {services.length} Services
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {services.map((s, index) => (
                <div
                  key={s._id}
                  className="group rounded-2xl border border-slate-100 bg-[#f8fbfd] p-5 transition duration-300 hover:bg-white hover:border-pink-100 hover:shadow-[0_10px_25px_rgba(239,39,199,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-50 to-sky-50 text-[#ef27c7] flex items-center justify-center text-2xl shadow-sm shrink-0">
                        {s.icon || "🧺"}
                      </div>

                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-slate-400">
                          Service {index + 1}
                        </p>
                        <h3 className="mt-1 text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                          {s.name}
                        </h3>
                        {s.description && (
                          <p className="mt-2 text-sm leading-6 text-slate-500">
                            {s.description}
                          </p>
                        )}
                        <p className="mt-3 text-xl font-extrabold text-[#ef27c7]">
                          ₹{s.price}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => addToCart(s)}
                      className="shrink-0 inline-flex items-center gap-2 px-4 h-11 rounded-xl bg-[#ef27c7] text-white text-sm font-bold shadow-[0_14px_30px_rgba(239,39,199,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(239,39,199,0.30)]"
                    >
                      <Plus className="w-4 h-4" />
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order summary + form */}
          <div className="rounded-3xl border border-white/70 bg-white/85 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-6 sm:p-8 h-fit lg:sticky lg:top-24">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
              Step 2
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Confirm booking
            </h2>

            {/* Cart */}
            <div className="mt-8 rounded-2xl bg-[#f8fbfd] border border-white p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-extrabold text-slate-900">
                  Cart ({cart.length})
                </h3>
                <span className="text-sm font-semibold text-slate-400">
                  Summary
                </span>
              </div>

              {cart.length === 0 ? (
                <p className="text-sm text-slate-500 text-center py-8">
                  Cart is empty
                </p>
              ) : (
                <div className="mt-4 space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-start justify-between gap-3 rounded-xl bg-white border border-slate-100 p-4"
                    >
                      <div className="min-w-0">
                        <p className="font-bold text-slate-900 text-sm sm:text-base">
                          {item.name}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          ₹{item.price} × {item.quantity}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="shrink-0 inline-flex items-center gap-1 text-red-500 text-sm font-semibold hover:text-red-600 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-200">
                <span className="text-sm font-semibold text-slate-500">
                  Total
                </span>
                <span className="text-2xl font-extrabold text-[#ef27c7]">
                  ₹{total}
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleBook} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full h-12 rounded-xl border border-slate-200 bg-[#f8fbfd] pl-11 pr-4 text-sm sm:text-base outline-none transition focus:border-[#ef27c7] focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Address
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    placeholder="Enter pickup address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="w-full h-12 rounded-xl border border-slate-200 bg-[#f8fbfd] pl-11 pr-4 text-sm sm:text-base outline-none transition focus:border-[#ef27c7] focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Pickup Date
                </label>
                <div className="relative">
                  <CalendarDays className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
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
                Confirm Booking
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Book;
