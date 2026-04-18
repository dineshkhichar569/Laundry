import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-[#edf5fa] border-t border-white/60 overflow-hidden">
      <div className="absolute top-0 left-0 h-40 w-40 rounded-full bg-pink-300/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-sky-300/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 pb-8 relative z-10">
        <div className="rounded-[32px] border border-white/70 bg-white/70 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-6 sm:p-8 lg:p-10">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#ef27c7] to-[#e400b9] text-white flex items-center justify-center shadow-[0_12px_30px_rgba(239,39,199,0.28)] text-2xl">
                  🧺
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-slate-900">
                    LaundryWallah
                  </h3>
                  <p className="text-sm text-slate-500">
                    Premium laundry care at your doorstep.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600 max-w-sm">
                Fast pickup, careful cleaning, neat packaging, and reliable
                delivery for every order.
              </p>

              <Link
                to="/book"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#ef27c7] px-5 py-3 text-white font-bold shadow-[0_14px_30px_rgba(239,39,199,0.24)] hover:-translate-y-0.5 transition"
              >
                Book Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <h4 className="text-lg font-extrabold text-slate-900 mb-4">
                Quick Links
              </h4>

              <ul className="space-y-3 text-[15px] text-slate-600">
                <li>
                  <Link className="hover:text-[#ef27c7] transition" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[#ef27c7] transition"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-[#ef27c7] transition" to="/faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-[#ef27c7] transition" to="/track">
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-extrabold text-slate-900 mb-4">
                Contact
              </h4>

              <div className="space-y-4 text-[15px] text-slate-600">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#ef27c7] mt-0.5" />
                  <span>mail@laundrywallah.com</span>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#ef27c7] mt-0.5" />
                  <span>+91 9123456780</span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#ef27c7] mt-0.5" />
                  <span>Fast pickup & doorstep delivery</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-extrabold text-slate-900 mb-4">
                Follow us
              </h4>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="h-11 w-11 rounded-xl bg-[#fdf2f8] text-[#ef27c7] flex items-center justify-center shadow-sm hover:-translate-y-1 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="h-11 w-11 rounded-xl bg-[#eef6ff] text-slate-700 flex items-center justify-center shadow-sm hover:-translate-y-1 transition"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="h-11 w-11 rounded-xl bg-[#eef6ff] text-slate-700 flex items-center justify-center shadow-sm hover:-translate-y-1 transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="h-11 w-11 rounded-xl bg-[#fff1f2] text-slate-700 flex items-center justify-center shadow-sm hover:-translate-y-1 transition"
                  aria-label="Youtube"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-5 rounded-2xl bg-[#edf5fa] border border-white px-4 py-4">
                <p className="text-sm font-semibold text-slate-800">
                  Service Hours
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Mon - Sun · 8:00 AM to 9:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200/70 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} LaundryWallah. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link to="/privacy" className="hover:text-[#ef27c7] transition">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-[#ef27c7] transition">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
