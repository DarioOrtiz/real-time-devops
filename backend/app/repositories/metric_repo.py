from sqlalchemy.orm import Session
from app.models.models import Metric
from app.schemas.schemas import MetricCreate

def get_metrics(db: Session, app_id: int, skip: int = 0, limit: int = 100):
    return db.query(Metric).filter(Metric.application_id == app_id).offset(skip).limit(limit).all()

def create_metric(db: Session, metric: MetricCreate):
    db_metric = Metric(**metric.model_dump())
    db.add(db_metric)
    db.commit()
    db.refresh(db_metric)
    return db_metric
