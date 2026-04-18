import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllServices } from "../api/differentApis/services/getAllServices.api";

function Pricing() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getAllServices()
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
      <p className="text-center text-gray-600 mb-10">
        No hidden fees. Pay only for what you need.
      </p>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-10">
        <table className="w-full">
          <thead className="bg-brand text-white">
            <tr>
              <th className="px-6 py-4 text-left">Service</th>
              <th className="px-6 py-4 text-center">Turnaround</th>
              <th className="px-6 py-4 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s, i) => (
              <tr key={s._id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-6 py-4 font-semibold">
                  {s.icon} {s.name}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">
                  24-48 hrs
                </td>
                <td className="px-6 py-4 text-right font-bold text-brand">
                  ₹{s.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-center mb-6">Subscription Plans</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-1">Basic</h3>
          <p className="text-3xl font-bold text-brand mb-4">₹499<span className="text-sm text-gray-500 font-normal">/mo</span></p>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>✓ 5 garments / week</li>
            <li>✓ Free pickup & delivery</li>
            <li>✓ Standard turnaround</li>
          </ul>
          <Link to="/book" className="block text-center py-2 border-2 border-brand text-brand rounded-lg font-semibold">
            Choose Basic
          </Link>
        </div>

        <div className="bg-brand text-white p-6 rounded-xl shadow-lg transform scale-105">
          <div className="text-xs font-bold mb-2 bg-white text-brand inline-block px-2 py-1 rounded">POPULAR</div>
          <h3 className="text-xl font-bold mb-1">Premium</h3>
          <p className="text-3xl font-bold mb-4">₹999<span className="text-sm font-normal opacity-80">/mo</span></p>
          <ul className="space-y-2 text-sm mb-6 opacity-90">
            <li>✓ 15 garments / week</li>
            <li>✓ Free pickup & delivery</li>
            <li>✓ Express turnaround</li>
            <li>✓ Stain treatment included</li>
          </ul>
          <Link to="/book" className="block text-center py-2 bg-white text-brand rounded-lg font-semibold">
            Choose Premium
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-1">Family</h3>
          <p className="text-3xl font-bold text-brand mb-4">₹1,799<span className="text-sm text-gray-500 font-normal">/mo</span></p>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>✓ Unlimited garments</li>
            <li>✓ Free pickup & delivery</li>
            <li>✓ Express turnaround</li>
            <li>✓ All services included</li>
          </ul>
          <Link to="/book" className="block text-center py-2 border-2 border-brand text-brand rounded-lg font-semibold">
            Choose Family
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing;