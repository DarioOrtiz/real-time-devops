// src/pages/RegisterPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth/authService";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState(""); // 🔑 cambiar username → email
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await registerUser({ email, password }); // 🔑 enviar email
      alert(response.message || "Usuario registrado con éxito");
      navigate("/login");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Ocurrió un error desconocido");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          className="w-full bg-primary-500 text-white py-2 rounded hover:bg-primary-600 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Registrando..." : "Register"}
        </button>

        <p className="mt-4 text-center text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-primary-500 font-medium hover:underline"
          >
            Inicia sesión
          </button>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;