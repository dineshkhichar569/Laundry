import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowRight,
  CheckCircle2,
  MessageSquareText,
} from "lucide-react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Contact form:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  const contactCards = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Visit Us",
      text: "123 Clean Street, Dehradun, Uttarakhand 248001",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      text: "+91 9123456780",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      text: "mail@laundrywallah.com",
    },
    {
      icon: <Clock3 className="w-5 h-5" />,
      title: "Working Hours",
      text: "Mon - Sat: 7 AM - 9 PM | Sun: 9 AM - 6 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-[#eaf3f8] overflow-hidden">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute top-24 right-0 h-80 w-80 rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />
      </div>

      {/* top hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 md:pt-20 pb-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#ef27c7]" />
              Fast replies. Friendly support.
            </div>

            <h1 className="mt-6 text-[30px] sm:text-[46px] lg:text-[52px] leading-[0.98] font-extrabold tracking-[-0.04em] text-slate-900">
              Let’s talk about
              <br />
              your <span className="text-[#ef27c7]">laundry needs</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-1 text-slate-500">
              Need a pickup, custom pricing, bulk order support, or just have a
              question? Reach out and our team will help you quickly.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 px-6 h-14 rounded-2xl bg-[#ef27c7] text-white font-bold shadow-[0_18px_40px_rgba(239,39,199,0.28)] hover:-translate-y-1 transition"
              >
                Book a Pickup
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+919123456780"
                className="inline-flex items-center justify-center gap-2 px-6 h-14 rounded-2xl bg-white/80 backdrop-blur border border-white text-slate-800 font-bold shadow-sm hover:bg-white transition"
              >
                <Phone className="w-4 h-4 text-[#ef27c7]" />
                Call Now
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/70 bg-white/75 backdrop-blur-xl p-4 sm:p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Quick contact
                  </p>
                  <h2 className="mt-2 text-xl sm:text-2xl font-extrabold text-slate-900">
                    We usually reply within a few hours
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fdf2f8] to-[#eef6ff] text-[#ef27c7] shadow-sm">
                  <MessageSquareText className="w-6 h-6" />
                </div>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#f8fbfd] border border-white/1 p-3">
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="mt-2 text-base font-bold text-slate-900">
                    +91 9123456780
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f8fbfd] border border-white/1 p-3">
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="mt-2 text-base font-bold text-slate-900 break-all">
                    mail@laundrywallah.com
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f8fbfd] border border-white.1 p-3 sm:col-span-2">
                  <p className="text-sm text-slate-400">Address</p>
                  <p className="mt-2 text-base font-bold text-slate-900">
                    123 Clean Street, Dehradun, Uttarakhand 248001
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#df09b5] via-[#e400b9] to-[#ef27c7] p-5 text-white shadow-[0_18px_40px_rgba(228,0,185,0.20)]">
                <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                  Service Hours
                </p>
                <p className="mt-2 text-lg font-bold">
                  Mon - Sat: 7 AM - 9 PM
                </p>
                <p className="text-white/85">Sun: 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* main contact block */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 md:pb-24">
        <div className="grid xl:grid-cols-[0.9fr_1.1fr] gap-6">
          {/* left panel */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 sm:p-6 shadow-[0_25px_60px_rgba(15,23,42,0.18)] overflow-hidden relative">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-pink-500/10 blur-2xl" />

            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                Contact Details
              </p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold leading-tight">
                Reach us through any channel
              </h3>
              <p className="mt-4 text-white/70 leading-1">
                Whether it is a quick question, urgent pickup request, or
                service issue, we are here to help.
              </p>

              <div className="mt-8 space-y-4">
                {contactCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#ff7ddd]">
                        {item.icon}
                      </div>

                      <div>
                        <p className="text-sm text-white/55">{item.title}</p>
                        <p className="mt-1 font-semibold leading-7 text-white">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3 text-center">
                  <div className="text-xl font-extrabold text-[#ff7ddd]">
                    240+
                  </div>
                  <div className="mt-1 text-xs text-white/60">Customers</div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3 text-center">
                  <div className="text-xl font-extrabold text-[#ff7ddd]">
                    15+
                  </div>
                  <div className="mt-1 text-xs text-white/60">Services</div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3 text-center">
                  <div className="text-xl font-extrabold text-[#ff7ddd]">
                    2+ Yrs
                  </div>
                  <div className="mt-1 text-xs text-white/60">Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* right form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/70 bg-white/85 backdrop-blur-xl p-4 sm:p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
          >
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Send a message
                </p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
                  Tell us what you need
                </h2>
              </div>

              <div className="rounded-full bg-[#fdf2f8] px-4 py-2 text-sm font-bold text-[#ef27c7]">
                Friendly support
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-slate-500 leading-8">
              Share your question, service request, or feedback and we will get
              back to you shortly.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-1">
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  required
                  className="w-full h-14 rounded-2xl border border-slate-200 bg-[#f8fbfd] px-4 text-slate-800 outline-none transition focus:border-[#ef27c7] focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  required
                  className="w-full h-14 rounded-2xl border border-slate-200 bg-[#f8fbfd] px-4 text-slate-800 outline-none transition focus:border-[#ef27c7] focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write your message here..."
                  rows={8}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  className="w-full rounded-[24px] border border-slate-200 bg-[#f8fbfd] px-4 py-4 text-slate-800 outline-none resize-none transition focus:border-[#ef27c7] focus:bg-white focus:ring-4 focus:ring-[#ef27c7]/10"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 h-14 rounded-2xl bg-[#ef27c7] text-white font-bold shadow-[0_18px_40px_rgba(239,39,199,0.28)] hover:-translate-y-1 transition"
              >
                Send Message
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-sm text-slate-400 text-center">
                Usually replies within a few hours during service time.
              </p>
            </div>

            {sent && (
              <div className="mt-6 flex items-center gap-3 rounded-[24px] border border-green-200 bg-green-50 px-5 py-4 text-green-700">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold">Message sent successfully</p>
                  <p className="text-sm text-green-700/80">
                    Thanks! We’ll get back to you soon.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;