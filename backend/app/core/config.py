from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List

class Settings(BaseSettings):
    PROJECT_NAME: str = "Full-Stack DevOps Dashboard"
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = "very_secret_key_change_in_production"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7 # 7 days
    
    # DATABASE
    POSTGRES_USER: str = "postgres"
    POSTGRES_PASSWORD: str = "postgres"
    POSTGRES_SERVER: str = "127.0.0.1"  # antes "db"
    POSTGRES_PORT: str = "5432"
    POSTGRES_DB: str = "fsdd"
    
    @property
    def SQLALCHEMY_DATABASE_URI(self) -> str:
        return f"postgresql://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@{self.POSTGRES_SERVER}:{self.POSTGRES_PORT}/{self.POSTGRES_DB}"
    
    # REDIS
    REDIS_HOST: str = "127.0.0.1"  # antes "redis"
    REDIS_PORT: int = 6379
    
    @property
    def REDIS_URL(self) -> str:
        return f"redis://{self.REDIS_HOST}:{self.REDIS_PORT}/0"

    CORS_ORIGINS: List[str] = ["http://localhost:5173", "http://localhost:3000"]
    
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra='ignore')

settings = Settings()
