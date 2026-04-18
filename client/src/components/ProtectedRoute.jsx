import { Navigate } from "react-router-dom";
import { isLoggedIn, isAdmin } from "../utils/auth";

function ProtectedRoute({ children, adminOnly }) {
  if (!isLoggedIn()) return <Navigate to="/login" />;
  if (adminOnly && !isAdmin()) return <Navigate to="/" />;

  return children;
}

export default ProtectedRoute;
