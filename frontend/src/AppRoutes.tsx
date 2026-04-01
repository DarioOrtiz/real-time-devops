import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { Applications } from "./pages/Applications";
import { Metrics } from "./pages/Metrics";
import { Settings } from "./pages/Settings";
import { DashboardLayout } from "./components/layout/DashboardLayout";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>

      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};