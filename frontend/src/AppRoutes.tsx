// src/AppRoutes.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { Applications } from "./pages/Applications";
import { Metrics } from "./pages/Metrics";
import { Settings } from "./pages/Settings";
import { DashboardLayout } from "./components/layout/DashboardLayout";

import { PrivateRoute } from "./components/PrivateRoute";
import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";



export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Rutas privadas protegidas */}
      <Route
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Redirigir rutas desconocidas */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};