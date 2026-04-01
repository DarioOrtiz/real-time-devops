import strawberry
from typing import List
from app.repositories import app_repo
from app.db.session import SessionLocal

@strawberry.type
class AppType:
    id: int
    name: str
    owner: str
    repo: str
    status: str

@strawberry.type
class Query:
    @strawberry.field
    def applications(self) -> List[AppType]:
        db = SessionLocal()
        try:
            apps = app_repo.get_applications(db)
            return [AppType(id=a.id, name=a.name, owner=a.owner, repo=a.repo, status=a.status) for a in apps]
        finally:
            db.close()

schema = strawberry.Schema(query=Query)
