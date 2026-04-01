// src/types.ts
export interface Application {
  id: number;
  name: string;
}

export interface Deployment {
  id: number;
  app_id: number;
  status: string;
}

export interface Metric {
  cpu_usage: number;
  memory_usage: number;
  timestamp: string; 
  type: "cpu" | "memory";
  value: number;
  appName?: string; 
  timeStamp?: string; 
}