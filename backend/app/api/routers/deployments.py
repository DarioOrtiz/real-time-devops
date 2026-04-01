from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from app.db.session import get_db
from app.schemas.schemas import Deployment, DeploymentCreate
from app.repositories import dep_repo

router = APIRouter()

@router.get("/{app_id}/deployments", response_model=List[Deployment])
def read_deployments(app_id: int, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return dep_repo.get_deployments(db, app_id=app_id, skip=skip, limit=limit)

@router.post("/deployments", response_model=Deployment)
def create_deployment(deployment_in: DeploymentCreate, db: Session = Depends(get_db)):
    return dep_repo.create_deployment(db=db, deployment=deployment_in)
