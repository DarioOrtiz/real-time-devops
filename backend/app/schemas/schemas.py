from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime
from app.models.models import Role, EnvironmentEnum

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class UserBase(BaseModel):
    email: EmailStr
    role: Role = Role.USER

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int

    class Config:
        orm_mode = True
        use_enum_values = True  

class ApplicationBase(BaseModel):
    name: str
    owner: str
    repo: str
    language: Optional[str] = None
    status: Optional[str] = "active"

class ApplicationCreate(ApplicationBase):
    pass

class Application(ApplicationBase):
    id: int
    class Config:
        from_attributes = True

class DeploymentBase(BaseModel):
    version: str
    environment: EnvironmentEnum = EnvironmentEnum.DEVELOPMENT
    status: Optional[str] = "pending"

class DeploymentCreate(DeploymentBase):
    application_id: int

class Deployment(DeploymentBase):
    id: int
    timestamp: datetime
    application_id: int
    class Config:
        from_attributes = True

class MetricBase(BaseModel):
    cpu_usage: float
    memory_usage: float
    response_time: float

class MetricCreate(MetricBase):
    application_id: int

class Metric(MetricBase):
    id: int
    timestamp: datetime
    application_id: int
    class Config:
        from_attributes = True
