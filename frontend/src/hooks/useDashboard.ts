import { useEffect, useState } from "react";
import api from "../services/api";
import { Application, Deployment, Metric } from "../types";

export const useDashboard = () => {
  const [apps, setApps] = useState<Application[]>([]);
  const [deployments, setDeployments] = useState<Deployment[]>([]);
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appsRes = await api.get<Application[]>("/apps");
        const appsData = appsRes.data;
        setApps(appsData);

        const deploymentsRes = await Promise.all(
          appsData.map(async (app) => {
            const res = await api.get<Deployment[]>(`/${app.id}/deployments`);
            return res.data;
          })
        );
        setDeployments(deploymentsRes.flat());

        const metricsRes = await Promise.all(
          appsData.map(async (app) => {
            const res = await api.get<Metric[]>(`/${app.id}/metrics`);
            return res.data.map((m) => ({ ...m, appName: app.name }));
          })
        );
        setMetrics(metricsRes.flat());
      } catch (error) {
        console.error("Error loading dashboard data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { apps, deployments, metrics, loading };
};