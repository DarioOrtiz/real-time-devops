# app/create_tables.py
from app.db.session import engine
from app.models import Base  # Base = declarative_base()
from app.models.models import User, Application, Deployment, Metric  # Importa tus modelos para que se registren en Base.metadata

# Esto crea todas las tablas definidas en tus modelos
Base.metadata.create_all(bind=engine)

print("✅ Tablas creadas correctamente!")