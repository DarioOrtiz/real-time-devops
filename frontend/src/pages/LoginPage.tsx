// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Ocurrió un error desconocido");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <label className="block mb-2 font-medium">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-6"
          required
        />

        <button
          type="submit"
          className="w-full bg-primary-500 text-white py-2 rounded hover:bg-primary-600 transition"
        >
          Login
        </button>

        {/* Link para registrarse */}
        <p className="mt-4 text-center text-gray-600">
          ¿No tienes cuenta?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-primary-500 font-medium hover:underline"
          >
            Regístrate
          </button>
        </p>
      </form>
    </div>
  );
};