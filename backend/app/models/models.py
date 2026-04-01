from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Float, Enum as SQLEnum
from sqlalchemy.orm import relationship
from datetime import datetime
import enum
from .base import Base

class Role(str, enum.Enum):
    ADMIN = "admin"
    USER = "user"

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    role = Column(SQLEnum(Role), default=Role.USER)

class Application(Base):
    __tablename__ = "applications"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), index=True, nullable=False)
    owner = Column(String(255), nullable=False)
    repo = Column(String(255), nullable=False)
    language = Column(String(100))
    status = Column(String(50), default="active")
    deployments = relationship("Deployment", back_populates="application", cascade="all, delete")
    metrics = relationship("Metric", back_populates="application", cascade="all, delete")

class EnvironmentEnum(str, enum.Enum):
    PRODUCTION = "production"
    STAGING = "staging"
    DEVELOPMENT = "development"

class Deployment(Base):
    __tablename__ = "deployments"
    id = Column(Integer, primary_key=True, index=True)
    version = Column(String(50), nullable=False)
    environment = Column(SQLEnum(EnvironmentEnum), default=EnvironmentEnum.DEVELOPMENT)
    status = Column(String(50), default="pending")
    timestamp = Column(DateTime, default=datetime.utcnow)
    application_id = Column(Integer, ForeignKey("applications.id"))
    application = relationship("Application", back_populates="deployments")

class Metric(Base):
    __tablename__ = "metrics"
    id = Column(Integer, primary_key=True, index=True)
    cpu_usage = Column(Float, nullable=False)
    memory_usage = Column(Float, nullable=False)
    response_time = Column(Float, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)
    application_id = Column(Integer, ForeignKey("applications.id"))
    application = relationship("Application", back_populates="metrics")
