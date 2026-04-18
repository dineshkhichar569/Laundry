function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">About LaundryWallah</h1>
      <p className="text-center text-gray-600 mb-10">
        Premium laundry services at your doorstep
      </p>

      <div className="bg-white p-8 rounded-xl shadow-sm space-y-4">
        <h2 className="text-2xl font-bold">Our Story</h2>
        <p className="text-gray-600">
          LaundryWallah started in 2023 with a simple mission: make laundry easy and
          affordable for everyone. What began as a single neighborhood service has grown
          into a trusted name for hundreds of happy customers.
        </p>
        <p className="text-gray-600">
          We use eco-friendly detergents, modern equipment, and careful handling to make
          sure every garment we touch comes back cleaner, fresher, and ready to wear.
        </p>

        <h2 className="text-2xl font-bold pt-4">Our Mission</h2>
        <p className="text-gray-600">
          To save you time by handling your laundry with the same care you would — but
          with the speed and convenience only professionals can deliver.
        </p>

        <h2 className="text-2xl font-bold pt-4">Why Choose Us?</h2>
        <ul className="space-y-2 text-gray-600">
          <li>✅ Free pickup and delivery</li>
          <li>✅ 24-48 hour turnaround</li>
          <li>✅ Eco-friendly cleaning products</li>
          <li>✅ Transparent pricing — no hidden fees</li>
          <li>✅ 100% satisfaction guarantee</li>
        </ul>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        <div className="bg-white p-6 rounded-xl text-center shadow-sm">
          <div className="text-3xl font-bold text-brand">240+</div>
          <div className="text-sm text-gray-600">Happy Customers</div>
        </div>
        <div className="bg-white p-6 rounded-xl text-center shadow-sm">
          <div className="text-3xl font-bold text-brand">15+</div>
          <div className="text-sm text-gray-600">Services Offered</div>
        </div>
        <div className="bg-white p-6 rounded-xl text-center shadow-sm">
          <div className="text-3xl font-bold text-brand">2+ Yrs</div>
          <div className="text-sm text-gray-600">Experience</div>
        </div>
      </div>
    </div>
  );
}

export default About;