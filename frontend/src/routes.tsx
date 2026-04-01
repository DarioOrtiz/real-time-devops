import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
// Aquí podrías importar otras páginas cuando las tengas
// import { Applications } from "./pages/Applications";
// import { Metrics } from "./pages/Metrics";
// import { Settings } from "./pages/Settings";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Rutas futuras */}
        {/* <Route path="/applications" element={<Applications />} /> */}
        {/* <Route path="/metrics" element={<Metrics />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </Router>
  );
};