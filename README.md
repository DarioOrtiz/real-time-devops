Real-Time DevOps Dashboard

🔹 Descripción

Real-Time DevOps Dashboard es un proyecto fullstack que permite monitorear aplicaciones y sus métricas en tiempo real. Incluye:

Backend con FastAPI para manejo de aplicaciones, despliegues y métricas.
Frontend con React + TypeScript y Recharts para visualización de gráficos.
Dashboard interactivo con métricas de CPU, memoria y tiempos de respuesta.
Menú lateral para navegar entre Dashboard, Applications, Metrics y Settings.

🔹 Tecnologías

Backend:

Python 3.10+
FastAPI
SQLAlchemy
Uvicorn
PostgreSQL (opcional)

Frontend:

React 18 + TypeScript
Tailwind CSS
Recharts (para gráficos)
React Router v6

DevOps / Otros:

GitHub
Docker (opcional)
npm / Node.js
🔹 Instalación
Backend
Ir a la carpeta backend:
cd backend
Crear entorno virtual:
python -m venv venv
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows
Instalar dependencias:
pip install -r requirements.txt
Ejecutar el servidor:
uvicorn app.main:app --reload

El backend correrá en http://localhost:8000.

Frontend
Ir a la carpeta frontend:
cd frontend
Instalar dependencias:
npm install
Ejecutar la aplicación:
npm run dev

El frontend correrá en http://localhost:5173 (o el puerto que Vite indique).

🔹 Endpoints API

El backend expone los siguientes endpoints (Swagger disponible en http://localhost:8000/docs):

Apps

Método	Endpoint	Descripción
GET	/api/v1/apps/	Listar aplicaciones
POST	/api/v1/apps/	Crear aplicación
GET	/api/v1/apps/{id}	Leer aplicación
DELETE	/api/v1/apps/{id}	Eliminar aplicación

Deployments

Método	Endpoint	Descripción
GET	/api/v1/{app_id}/deployments	Listar despliegues de una app
POST	/api/v1/deployments	Crear despliegue

Metrics

Método	Endpoint	Descripción
GET	/api/v1/{app_id}/metrics	Listar métricas de una app
POST	/api/v1/metrics	Crear métrica
🔹 Estructura del proyecto
fullstack-devops-dashboard/
│
├─ backend/                  # FastAPI backend
│  ├─ app/
│  │  ├─ main.py
│  │  ├─ models.py
│  │  ├─ routers/
│  │  └─ services/
│  └─ requirements.txt
│
├─ frontend/                 # React frontend
│  ├─ src/
│  │  ├─ pages/
│  │  │  ├─ Dashboard.tsx
│  │  │  ├─ Applications.tsx
│  │  │  ├─ Metrics.tsx
│  │  │  └─ Settings.tsx
│  │  ├─ components/
│  │  │  ├─ Sidebar.tsx
│  │  │  ├─ Header.tsx
│  │  │  └─ DashboardLayout.tsx
│  │  ├─ hooks/
│  │  │  └─ useDashboard.ts
│  │  └─ services/
│  │     └─ api.ts
│  └─ package.json
│
└─ README.md
🔹 Uso
Levantar backend (uvicorn) y frontend (npm run dev) en paralelo.
Abrir navegador en http://localhost:5173.
Navegar por el Dashboard, Applications, Metrics y Settings.
Visualizar métricas en tiempo real en gráficos interactivos.
🔹 Contribuciones
Hacer fork del repositorio
Crear branch para tu feature: git checkout -b feature/nombre-feature
Hacer commit: git commit -m "Descripción del cambio"
Subir a tu fork: git push origin feature/nombre-feature
Crear Pull Request en el repo original