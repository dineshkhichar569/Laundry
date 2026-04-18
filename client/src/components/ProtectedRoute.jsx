import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, adminOnly }) {
  const { user, loading } = useAuth();

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  if (adminOnly && user.role !== "admin") return <Navigate to="/" />;

  return children;
}

export default ProtectedRoute;
