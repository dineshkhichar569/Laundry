import { useState } from "react";
import { HelpCircle, Plus, Minus, Sparkles } from "lucide-react";

const faqs = [
  {
    q: "How do I schedule a pickup?",
    a: "Sign up, log in, go to the Book page, select your services, enter your pickup details, and confirm your booking. Our team will arrive at your doorstep on the scheduled date and time.",
  },
  {
    q: "What are your working hours?",
    a: "We operate Monday to Saturday from 7 AM to 9 PM, and on Sunday from 9 AM to 6 PM.",
  },
  {
    q: "How long does laundry take?",
    a: "Our standard turnaround time is usually 24 to 48 hours after pickup. We also offer express service for urgent orders at an additional charge.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash on delivery, UPI, credit cards, debit cards, and all major digital wallets for your convenience.",
  },
  {
    q: "Is pickup and delivery free?",
    a: "Yes, pickup and delivery are completely free for all orders above ₹200.",
  },
  {
    q: "What if my clothes get damaged?",
    a: "We handle every garment with care. If any issue occurs, contact us within 48 hours and we will review the case for repair, replacement, or compensation as per our policy.",
  },
  {
    q: "Can I cancel a booking?",
    a: "Yes, you can cancel a booking from your My Bookings page as long as it has not been picked up yet.",
  },
  {
    q: "Do you handle delicate fabrics?",
    a: "Yes, we provide specialized care for delicate garments such as silk, wool, suede, leather, and wedding dresses.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="min-h-[calc(100vh-168px)] bg-[#edf5fa] px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl border border-white/70 bg-white p-4 sm:p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)]">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-[#ef27c7] to-[#e400b9] text-white flex items-center justify-center shadow-[0_14px_30px_rgba(239,39,199,0.25)]">
              <HelpCircle className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#ef27c7]/15 bg-[#ef27c7]/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ef27c7]">
              <Sparkles className="w-3.5 h-3.5" />
              Help Center
            </div>

            <h1 className="mt-5 text-[30px] sm:text-[44px] lg:text-[52px] font-black tracking-[-0.04em] text-slate-900">
              Frequently Asked Questions
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-1 text-slate-500">
              Everything you need to know about our laundry services, bookings,
              pickup, delivery, and garment care.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#ef27c7]/20 bg-[#ef27c7]/[0.04] shadow-[0_16px_35px_rgba(239,39,199,0.08)]"
                      : "border-slate-200 bg-white shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left sm:px-6"
                  >
                    <span className="text-[15px] sm:text-[17px] font-bold text-slate-800 pr-2">
                      {faq.q}
                    </span>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition ${
                        isOpen
                          ? "bg-[#ef27c7] text-white shadow-[0_10px_24px_rgba(239,39,199,0.22)]"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <div className="h-px bg-slate-200 mb-4" />
                        <p className="text-sm sm:text-[15px] leading-7 text-slate-600">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-slate-50 px-6 py-6 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Still have questions?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-500">
              Contact our support team and we will help you with bookings,
              pricing, pickup, delivery, or garment care.
            </p>
            <a
              href="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-2xl bg-[#ef27c7] px-6 py-3 text-white font-bold shadow-[0_14px_30px_rgba(239,39,199,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(239,39,199,0.28)] transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
