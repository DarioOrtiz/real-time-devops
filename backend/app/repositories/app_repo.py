from sqlalchemy.orm import Session
from app.models.models import Application
from app.schemas.schemas import ApplicationCreate

def get_applications(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Application).offset(skip).limit(limit).all()

def get_application(db: Session, app_id: int):
    return db.query(Application).filter(Application.id == app_id).first()

def create_application(db: Session, app: ApplicationCreate):
    db_app = Application(**app.model_dump())
    db.add(db_app)
    db.commit()
    db.refresh(db_app)
    return db_app

def delete_application(db: Session, app_id: int):
    db_app = db.query(Application).filter(Application.id == app_id).first()
    if db_app:
        db.delete(db_app)
        db.commit()
    return db_app
