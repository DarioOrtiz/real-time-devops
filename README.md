# Full-Stack DevOps Dashboard (FSDD)

A professional Full-Stack DevOps Dashboard built to manage and monitor application deployments and metrics in real-time.

## Tech Stack
- **Backend**: Python, FastAPI, SQLAlchemy, PostgreSQL, Redis, Pytest
- **Frontend**: React, TypeScript, Tailwind CSS, Recharts, Vite
- **Infrastructure**: Docker, Docker Compose, GitHub Actions

## Features
- **Application Management**: Full CRUD for registered applications.
- **Deployment Tracking**: Track active and pending deployments.
- **Real-Time Metrics**: View CPU, Memory, and Response times with websockets and rich dynamic charts.
- **GraphQL APIs**: Extensible data querying.
- **Modern UI**: Polished Tailwind-based interface.

## Quick Start

### Run with Docker Compose (Recommended)
You can launch the entire stack (Postgres, Redis, Backend API, Frontend App) via Docker Compose:

```bash
cd docker
docker-compose up --build -d
```
- Frontend: `http://localhost`
- Backend API Docs: `http://localhost:8000/docs`
- Backend GraphQL: `http://localhost:8000/graphql`

### Run Locally

**Backend**:
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend**:
```bash
cd frontend
npm install
npm run dev
```

## Testing
The backend contains a `pytest` suite for validating functionality.
```bash
cd backend
pytest
```
