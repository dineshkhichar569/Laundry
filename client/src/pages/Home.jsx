import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Revitalize your clothes with{" "}
            <span className="text-brand">expert laundry services!</span>
          </h1>
          <p className="mt-4 text-gray-600">
            From premium dry cleaning to swift wash and fold, we deliver care
            and convenience. Schedule a pickup today!
          </p>
          <Link
            to="/book"
            className="inline-block mt-6 px-6 py-3 bg-brand text-white rounded-xl font-semibold hover:bg-brandDark"
          >
            Book a service today!
          </Link>
        </div>
        <div className="text-center text-9xl">🧺</div>
      </section>

      {/* Stats */}
      <section className="bg-brandDark text-white py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-4 text-center">
          <h2 className="text-2xl font-bold">Our Achievements</h2>
          <div>
            <div className="text-3xl font-bold">15+</div>
            <div className="text-sm">Services</div>
          </div>
          <div>
            <div className="text-3xl font-bold">240+</div>
            <div className="text-sm">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold">2+ Yrs</div>
            <div className="text-sm">Experience</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why choose us?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "✨",
              title: "Premium Services",
              text: "Top quality dry cleaning.",
            },
            {
              icon: "⏰",
              title: "Quick Support",
              text: "24/7 customer support.",
            },
            {
              icon: "🚚",
              title: "Free Delivery",
              text: "Pickup and drop at your door.",
            },
            { icon: "💰", title: "Affordable", text: "Transparent prices." },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-white p-6 rounded-xl text-center shadow-sm"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-3">Ready for fresh clothes?</h2>
        <Link
          to="/book"
          className="inline-block px-8 py-3 bg-white text-brand rounded-xl font-semibold"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}

export default Home;
