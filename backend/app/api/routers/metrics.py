from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from app.db.session import get_db
from app.schemas.schemas import Metric, MetricCreate
from app.repositories import metric_repo

router = APIRouter()

@router.get("/{app_id}/metrics", response_model=List[Metric])
def read_metrics(app_id: int, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return metric_repo.get_metrics(db, app_id=app_id, skip=skip, limit=limit)

@router.post("/metrics", response_model=Metric)
def create_metric(metric_in: MetricCreate, db: Session = Depends(get_db)):
    return metric_repo.create_metric(db=db, metric=metric_in)
