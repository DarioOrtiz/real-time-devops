import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Metric } from "../types";

export const Metrics: React.FC = () => {
  const [metrics, setMetrics] = useState<Metric[]>([]);

  useEffect(() => {
    api.get<Metric[]>("/metrics").then(res => setMetrics(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Metrics</h2>
      <ul className="list-disc pl-6">
        {metrics.map((m, i) => (
          <li key={i}>{`${m.timestamp} | ${m.type}: ${m.value}`}</li>
        ))}
      </ul>
    </div>
  );
};