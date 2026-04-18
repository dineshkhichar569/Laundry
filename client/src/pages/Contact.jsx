import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Contact form:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Get in Touch</h1>
      <p className="text-center text-gray-600 mb-10">
        Have a question or feedback? We'd love to hear from you.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-xl shadow-sm space-y-5">
          <h2 className="text-2xl font-bold mb-3">Contact Info</h2>
          <div>
            <p className="font-semibold">📍 Address</p>
            <p className="text-gray-600 text-sm">
              123 Clean Street, Dehradun,<br />Uttarakhand 248001
            </p>
          </div>
          <div>
            <p className="font-semibold">📞 Phone</p>
            <p className="text-gray-600 text-sm">+91 9123456780</p>
          </div>
          <div>
            <p className="font-semibold">📧 Email</p>
            <p className="text-gray-600 text-sm">mail@laundrywallah.com</p>
          </div>
          <div>
            <p className="font-semibold">🕐 Hours</p>
            <p className="text-gray-600 text-sm">
              Mon - Sat: 7 AM - 9 PM<br />Sun: 9 AM - 6 PM
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm space-y-4">
          <h2 className="text-2xl font-bold mb-3">Send a Message</h2>
          <input
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />
          <textarea
            placeholder="Your message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />
          <button type="submit" className="w-full py-3 bg-brand text-white rounded-lg font-semibold">
            Send Message
          </button>
          {sent && <p className="text-green-600 text-sm text-center">Thanks! We'll get back to you soon.</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;