export interface UserCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token?: string;
  message?: string;
}

export const API_URL = "http://localhost:8000/api/v1/auth";

export const registerUser = async (user: UserCredentials) => {
  const res = await fetch(`http://localhost:8000/api/v1/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.detail || "Error registrando usuario");
  }
  return res.json();
};

// Login
export const loginUser = async (user: UserCredentials): Promise<AuthResponse> => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail || "Error en login");
  }

  return data; // { token: "..." }
};