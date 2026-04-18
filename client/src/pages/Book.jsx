import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../api";

function Book() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [cart, setCart] = useState([]);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest("/services").then(setServices);
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

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  async function handleBook(e) {
    e.preventDefault();
    setError("");
    if (cart.length === 0) return setError("Please add services to cart");

    try {
      const booking = await apiRequest("/bookings", "POST", {
        items: cart,
        phone,
        address,
        pickupDate,
      });
      alert(`Booking successful! Tracking ID: ${booking.trackingId}`);
      navigate("/my-bookings");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-6">
      {/* Services */}
      <div className="lg:col-span-2 bg-white p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Pick services</h2>
        <div className="space-y-3">
          {services.map((s) => (
            <div
              key={s._id}
              className="flex items-center justify-between border-b py-3"
            >
              <div>
                <p className="font-semibold">
                  {s.icon} {s.name}
                </p>
                <p className="text-brand font-bold">₹{s.price}</p>
              </div>
              <button
                onClick={() => addToCart(s)}
                className="px-4 py-2 bg-brandLight text-brandDark rounded-lg font-semibold text-sm"
              >
                + Add
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart + Form */}
      <div className="space-y-4">
        <div className="bg-white p-5 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Cart ({cart.length})</h3>
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-4 text-sm">Cart empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center py-2"
              >
                <div className="text-sm">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))
          )}
          <div className="flex justify-between mt-3 pt-3 border-t font-bold">
            <span>Total</span>
            <span className="text-brand">₹{total}</span>
          </div>
        </div>

        <form
          onSubmit={handleBook}
          className="bg-white p-5 rounded-xl space-y-3"
        >
          <h3 className="font-bold text-lg">Pickup Details</h3>
          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-brand text-white rounded-lg font-semibold"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default Book;
