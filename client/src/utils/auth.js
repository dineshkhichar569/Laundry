export function saveUser(userData) {
  localStorage.setItem("token", userData.token);
  localStorage.setItem("user", JSON.stringify({
    _id: userData._id,
    name: userData.name,
    email: userData.email,
    role: userData.role,
  }));
}

export function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function getToken() {
  return localStorage.getItem("token");
}

export function isLoggedIn() {
  return !!localStorage.getItem("token");
}

export function isAdmin() {
  const user = getUser();
  return user?.role === "admin";
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}