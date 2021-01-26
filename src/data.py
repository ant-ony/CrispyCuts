from sqlalchemy import create_engine, Column, Integer, Date, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship

Base = declarative_base()

class User(Base):
    __tablename__ = "userbase"

    id = Column('id', Integer, primary_key=True)
    firstName = Column('firstName', String)
    lastName = Column('lastName', String)
    sex = Column('sex', String)
    email = Column('email', String)
    addressId = Column('addressId', String, ForeignKey=True)
    role = Column('role', String)
    createdAt = Column('createdAt', Date)
    updatedAt = Column('updatedAt', Date)
    passwordHash = Column('password', String)
    phone = Column('phone', Integer)
    rating = Column('rating', Integer)
    profilePictureId = Column('profilePictureId', Integer, ForeignKey=True)
    # username = Column('username', String, unique=True)

# do other classes tomorrow

engine = create_engine('postgres:///users.db', echo=True)
Base.metadata.create_all(bind=engine)
Session = sessionmaker(bind=engine)

session = Session()


# Can turn this into a function:
# user = User()
# user.id = 0
# user.username = "ape"

# session.add(user)
# session.commit()

session.close()