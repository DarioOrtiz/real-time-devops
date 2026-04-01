import api from './api';

export interface App {
    id: string | number;
    name: string;
    status: string;
    [key: string]: unknown;
}

export interface Metric {
    name: string;     
    cpu: number;
    memory: number;
    deployments?: number;
    responseTime?: number; // Optional, assumed for the average response time card
    [key: string]: unknown;
}

export interface Deployment {
    id: string | number;
    app_id: string | number;
    status: string;
    [key: string]: unknown;
}

export const dashboardService = {
    getApps: async (): Promise<App[]> => {
        const response = await api.get('/apps');
        return response.data;
    },

    getMetrics: async (): Promise<Metric[]> => {
        const response = await api.get('/metrics');
        return response.data;
    },

    getDeployments: async (): Promise<Deployment[]> => {
        const response = await api.get('/deployments');
        return response.data;
    }
};
