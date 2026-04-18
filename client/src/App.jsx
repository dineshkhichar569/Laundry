import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Services from "./pages/Services";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import FAQ from "./pages/FAQ";
// import Pricing from "./pages/Pricing";
// import Reviews from "./pages/Reviews";
// import Blog from "./pages/Blog";
// import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Book from "./pages/Book";
import Dashboard from "./pages/Dashboard";
import MyBookings from "./pages/MyBookings";
import TrackOrder from "./pages/TrackOrder";
// import NotFound from "./pages/NotFound";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import ManageServices from "./pages/admin/ManageServices";
// import ManageBookings from "./pages/admin/ManageBookings";
// import ManageUsers from "./pages/admin/ManageUsers";
// import ManageBlog from "./pages/admin/ManageBlog";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/faq" element={<FAQ />} /> */}
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          {/* <Route path="/reviews" element={<Reviews />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
          <Route path="/track" element={<TrackOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/book"
            element={
              <ProtectedRoute>
                <Book />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-bookings"
            element={
              <ProtectedRoute>
                <MyBookings />
              </ProtectedRoute>
            }
          />

          {/* <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly>
                <AdminDashboard />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/admin/services"
            element={
              <ProtectedRoute adminOnly>
                <ManageServices />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/admin/bookings"
            element={
              <ProtectedRoute adminOnly>
                <ManageBookings />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/admin/users"
            element={
              <ProtectedRoute adminOnly>
                <ManageUsers />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/admin/blog"
            element={
              <ProtectedRoute adminOnly>
                <ManageBlog />
              </ProtectedRoute>
            }
          /> */}

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
