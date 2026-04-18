import { useState } from "react";

const faqs = [
  {
    q: "How do I schedule a pickup?",
    a: "Sign up, log in, go to the Book page, pick your services, fill in pickup details, and confirm. We'll come to your doorstep on the scheduled date.",
  },
  {
    q: "What are your working hours?",
    a: "We operate Monday to Saturday, 7 AM to 9 PM, and Sunday 9 AM to 6 PM.",
  },
  {
    q: "How long does laundry take?",
    a: "Standard turnaround is 24-48 hours from pickup. Express service is available for an extra fee.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash on delivery, UPI, credit/debit cards, and all major digital wallets.",
  },
  {
    q: "Is pickup and delivery free?",
    a: "Yes! Pickup and delivery are completely free for all orders above ₹200.",
  },
  {
    q: "What if my clothes get damaged?",
    a: "We take full responsibility. Contact us within 48 hours and we'll either compensate or repair the item.",
  },
  {
    q: "Can I cancel a booking?",
    a: "Yes, you can cancel any booking from your 'My Bookings' page as long as it hasn't been picked up yet.",
  },
  {
    q: "Do you handle delicate fabrics?",
    a: "Absolutely. We offer specialized care for silk, wool, leather, suede, and wedding dresses.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
      <p className="text-center text-gray-600 mb-10">
        Everything you need to know about our services
      </p>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => toggle(i)}
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50"
            >
              <span className="font-semibold">{faq.q}</span>
              <span className="text-brand text-xl">{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-4 text-gray-600 text-sm border-t pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;