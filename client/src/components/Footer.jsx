import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-xl font-bold text-brand mb-2">🧺 LaundryWallah</h3>
          <p className="text-sm text-gray-600">Premium laundry care at your doorstep.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/track">Track Order</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-gray-600">mail@laundrywallah.com</p>
          <p className="text-sm text-gray-600">+91 9123456780</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow us</h4>
          <div className="flex gap-3 text-xl">
            <span>📷</span><span>🐦</span><span>📘</span><span>▶️</span>
          </div>
        </div>
      </div>
      <div className="text-center py-4 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} LaundryWallah. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;