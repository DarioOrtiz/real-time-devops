from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from strawberry.fastapi import GraphQLRouter

from app.core.config import settings
from app.api.routers import apps, deployments, metrics
from app.api.graphql import schema
from app.api.websockets import router as ws_router
from app.core.config import settings


app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Set all CORS enabled origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health_check():
    return {"status": "ok", "app": settings.PROJECT_NAME}

# Routers
app.include_router(apps.router, prefix=f"{settings.API_V1_STR}/apps", tags=["apps"])
app.include_router(deployments.router, prefix=f"{settings.API_V1_STR}", tags=["deployments"])
app.include_router(metrics.router, prefix=f"{settings.API_V1_STR}", tags=["metrics"])

# WebSockets
app.include_router(ws_router, tags=["websockets"])

# GraphQL
graphql_app = GraphQLRouter(schema)
app.include_router(graphql_app, prefix="/graphql")
