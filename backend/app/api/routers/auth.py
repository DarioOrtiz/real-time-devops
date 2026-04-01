from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.schemas import UserCreate, User
from app.models.models import User as UserModel
from app.db.session import get_db
from passlib.hash import argon2
from passlib.hash import bcrypt

router = APIRouter()


def get_password_hash(password: str) -> str:
    return argon2.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return bcrypt.verify(plain_password.encode("utf-8")[:72], hashed_password)


@router.post("/register", response_model=User)
def register(user: UserCreate, db: Session = Depends(get_db)):

    if not user.email or not user.password:
        raise HTTPException(status_code=400, detail="Email y password son requeridos")

    existing_user = db.query(UserModel).filter(UserModel.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")

    new_user = UserModel(
        email=user.email,
        hashed_password=get_password_hash(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user