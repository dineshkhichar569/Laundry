import { createContext, useContext, useEffect, useState } from "react";
import { apiRequest } from "../api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      apiRequest("/auth/me")
        .then(setUser)
        .catch(() => localStorage.removeItem("token"))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  async function login(email, password) {
    const data = await apiRequest("/auth/login", "POST", { email, password });
    localStorage.setItem("token", data.token);
    setUser(data);
  }

  async function register(info) {
    const data = await apiRequest("/auth/register", "POST", info);
    localStorage.setItem("token", data.token);
    setUser(data);
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
