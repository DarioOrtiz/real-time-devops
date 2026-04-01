import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Application } from "../types";

export const Applications: React.FC = () => {
  const [apps, setApps] = useState<Application[]>([]);

  useEffect(() => {
    api.get<Application[]>("/apps").then(res => setApps(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Applications</h2>
      <ul className="list-disc pl-6">
        {apps.map(app => (
          <li key={app.id}>{app.name}</li>
        ))}
      </ul>
    </div>
  );
};