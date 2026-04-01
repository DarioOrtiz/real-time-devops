// src/App.tsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { AuthProvider } from "./context/AuthContext"; // <-- importar el AuthProvider

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;