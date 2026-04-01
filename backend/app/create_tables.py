from app.db.session import engine
from app.models import Base  
from app.models.models import User, Application, Deployment, Metric 
Base.metadata.create_all(bind=engine)

print("✅ Tablas creadas correctamente!")