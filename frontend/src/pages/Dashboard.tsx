import React from "react";
import { useDashboard } from "../hooks/useDashboard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Dashboard: React.FC = () => {
  const { apps, deployments, metrics, loading } = useDashboard();

  if (loading) {
    return <div>Loading dashboard...</div>;
  }

  // Mapear métricas reales al formato que Recharts espera
  const chartData =
    metrics.length > 0
      ? metrics.map((m, index) => ({
          name: m.timestamp || `#${index + 1}`, // si no hay timestamp, usamos un índice
          cpu: m.cpu_usage,
          memory: m.memory_usage,
        }))
      : [
          { name: "00:00", cpu: 30, memory: 45 },
          { name: "04:00", cpu: 20, memory: 35 },
          { name: "08:00", cpu: 65, memory: 60 },
          { name: "12:00", cpu: 85, memory: 80 },
          { name: "16:00", cpu: 55, memory: 65 },
          { name: "20:00", cpu: 40, memory: 50 },
        ];

  return (
    <div className="space-y-6">
      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm">Total Apps</h3>
          <p className="text-3xl font-bold">{apps.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm">Active Deployments</h3>
          <p className="text-3xl font-bold">{deployments.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm">Metrics Records</h3>
          <p className="text-3xl font-bold">{metrics.length}</p>
        </div>
      </div>

      {/* Gráfico de métricas */}
      <div className="bg-white p-6 rounded-xl shadow-sm h-[400px]">
        <h3 className="text-gray-800 font-semibold mb-4">System Metrics</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="cpu" stroke="#3b82f6" strokeWidth={3} />
            <Line type="monotone" dataKey="memory" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};