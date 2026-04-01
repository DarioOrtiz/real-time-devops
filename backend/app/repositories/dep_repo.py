from sqlalchemy.orm import Session
from app.models.models import Deployment
from app.schemas.schemas import DeploymentCreate

def get_deployments(db: Session, app_id: int, skip: int = 0, limit: int = 100):
    return db.query(Deployment).filter(Deployment.application_id == app_id).offset(skip).limit(limit).all()

def create_deployment(db: Session, deployment: DeploymentCreate):
    db_deployment = Deployment(**deployment.model_dump())
    db.add(db_deployment)
    db.commit()
    db.refresh(db_deployment)
    return db_deployment
