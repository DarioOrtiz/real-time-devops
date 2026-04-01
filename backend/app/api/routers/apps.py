from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.db.session import get_db
from app.schemas.schemas import Application, ApplicationCreate
from app.repositories import app_repo

router = APIRouter()

@router.get("/", response_model=List[Application])
def read_applications(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    apps = app_repo.get_applications(db, skip=skip, limit=limit)
    return apps

@router.post("/", response_model=Application)
def create_application(app_in: ApplicationCreate, db: Session = Depends(get_db)):
    return app_repo.create_application(db=db, app=app_in)

@router.get("/{app_id}", response_model=Application)
def read_application(app_id: int, db: Session = Depends(get_db)):
    app = app_repo.get_application(db, app_id=app_id)
    if app is None:
        raise HTTPException(status_code=404, detail="Application not found")
    return app

@router.delete("/{app_id}", response_model=Application)
def delete_application(app_id: int, db: Session = Depends(get_db)):
    app = app_repo.delete_application(db, app_id=app_id)
    if app is None:
        raise HTTPException(status_code=404, detail="Application not found")
    return app
