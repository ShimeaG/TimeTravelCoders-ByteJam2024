import os
from sqlalchemy import create_engine, Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

basedir = os.path.abspath(os.path.dirname(__file__))
database_path = os.path.join(basedir, 'database', 'history.db')
os.makedirs(os.path.dirname(database_path), exist_ok=True)

engine = create_engine(f'sqlite:///{database_path}', echo=True)
Base = declarative_base()


# Define the Years model (equivalent to the Django model)
class Years(Base):
    __tablename__ = 'years'

    year_id = Column(Integer, primary_key=True, autoincrement=True)
    event_year = Column(Integer)

    # Relationship with Events model
    events = relationship('Events', back_populates='year')


# Define the Events model (equivalent to the Django model)
class Events(Base):
    __tablename__ = 'events'

    event_id = Column(Integer, primary_key=True, autoincrement=True)
    year_id = Column(Integer, ForeignKey('years.year_id'))
    event_title = Column(Text, default="New Historical Event", nullable=False)
    event_desc = Column(Text, default="New event in history", nullable=False)
    event_image_url = Column(String(30), nullable=False)

    # Relationship with the Years model
    year = relationship('Years', back_populates='events')

    def __str__(self):
        return self.event_title


Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
db_session = Session()
