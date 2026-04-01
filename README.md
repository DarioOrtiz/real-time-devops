# Real-Time DevOps Dashboard

## 🔹 Descripción

Real-Time DevOps Dashboard es un proyecto fullstack que permite monitorear aplicaciones y sus métricas en tiempo real.

Incluye:

- Backend con FastAPI para manejo de aplicaciones, despliegues, métricas y registro de usuarios.  
- Frontend con React + TypeScript y Recharts para visualización de gráficos.  
- Dashboard interactivo con métricas de CPU, memoria y tiempos de respuesta.  
- Menú lateral para navegar entre Dashboard, Applications, Metrics y Settings.  

## 🔹 Tecnologías

**Backend:**

- Python 3.10+  
- FastAPI  
- SQLAlchemy  
- Uvicorn  
- PostgreSQL (opcional)  
- Passlib (Argon2 para hashing de passwords)  

**Frontend:**

- React 18 + TypeScript  
- Tailwind CSS  
- Recharts (para gráficos)  
- React Router v6  

**DevOps / Otros:**

- GitHub  
- Docker (opcional)  
- npm / Node.js  

## 🔹 Instalación Backend

```bash
cd backend

# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# Linux / Mac
source venv/bin/activate
# Windows
venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar servidor
uvicorn app.main:app --reload
```

El backend correrá en: http://localhost:8000

🔹 Instalación Frontend
```bash
cd frontend

# Instalar dependencias
npm install

# Ejecutar aplicación
npm run dev
```
El frontend correrá en: http://localhost:5173 (o el puerto que Vite indique)

🔹 Registro y manejo de usuarios

El backend permite registrar y autenticar usuarios.

Endpoints de usuarios
Método	Endpoint	Descripción
POST	/api/v1/auth/register	Registrar un nuevo usuario
POST	/api/v1/auth/login	Login de usuario (devuelve JWT)
GET	/api/v1/auth/me	Obtener información del usuario autenticado

🔹 Nota: Las contraseñas ahora se almacenan de forma segura usando Argon2. Se recomienda truncar passwords largas si es necesario.

Ejemplo de registro
```bash
curl -X POST http://localhost:8000/api/v1/auth/register \
-H "Content-Type: application/json" \
-d '{"email": "usuario@example.com", "password": "MiPasswordSeguro123"}'
```
🔹 Endpoints API

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

Swagger disponible en: http://localhost:8000/docs

🔹 Estructura del proyecto
```bash
fullstack-devops-dashboard/
├─ backend/ # FastAPI backend
│ ├─ app/
│ │ ├─ main.py
│ │ ├─ models.py
│ │ ├─ routers/
│ │ └─ services/
│ └─ requirements.txt
├─ frontend/ # React frontend
│ ├─ src/
│ │ ├─ pages/
│ │ │ ├─ Dashboard.tsx
│ │ │ ├─ Applications.tsx
│ │ │ ├─ Metrics.tsx
│ │ │ └─ Settings.tsx
│ │ ├─ components/
│ │ │ ├─ Sidebar.tsx
│ │ │ ├─ Header.tsx
│ │ │ └─ DashboardLayout.tsx
│ │ ├─ hooks/
│ │ │ └─ useDashboard.ts
│ │ └─ services/
│ │   └─ api.ts
│ └─ package.json
└─ README.md
```
🔹 Uso

Levantar backend (uvicorn) y frontend (npm run dev) en paralelo.

Abrir navegador en http://localhost:5173 y navegar por Dashboard, Applications, Metrics y Settings.

Visualizar métricas en tiempo real en gráficos interactivos.
