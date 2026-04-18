const API_URL = "http://localhost:8080/api";

export async function apiRequest(endpoint, method = "GET", body = null) {
  const token = localStorage.getItem("token");

  const options = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (token) options.headers.Authorization = `Bearer ${token}`;
  if (body) options.body = JSON.stringify(body);

  const res = await fetch(API_URL + endpoint, options);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Error");
  return data;
}