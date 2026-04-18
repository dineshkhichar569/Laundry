import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllServices } from "../api/differentApis/services/getAllServices.api";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getAllServices()
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s._id} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-5xl mb-3">{s.icon}</div>
            <h3 className="font-bold text-xl">{s.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{s.description}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-2xl font-bold text-brand">₹{s.price}</span>
              <Link to="/book" className="px-4 py-2 bg-brand text-white rounded-lg text-sm font-semibold">
                Book
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;