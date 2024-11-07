from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from sqlalchemy import select

from models import Base, engine, Years, Events, db_session

app = FastAPI()


# Dependency to get the database session
def get_db():
    db = db_session()
    try:
        yield db
    finally:
        db.close()


# Route to get all years
@app.get("/years/", response_model=list)
def get_years(db: Session = Depends(get_db)):
    years = db.execute(select(Years)).scalars().all()
    return years


# Route to create a new year
@app.post("/years/", response_model=Years)
def create_year(event_year: int, db: Session = Depends(get_db)):
    new_year = Years(event_year=event_year)
    db.add(new_year)
    db.commit()
    db.refresh(new_year)
    return new_year


# Route to get all events for a specific year
@app.get("/years/{year_id}/events/", response_model=list)
def get_events_for_year(year_id: int, db: Session = Depends(get_db)):
    year = db.query(Years).filter(Years.year_id == year_id).first()
    if year is None:
        raise HTTPException(status_code=404, detail="Year not found")
    return year.events


# Route to create a new event for a specific year
@app.post("/years/{year_id}/events/", response_model=Events)
def create_event(year_id: int, event_title: str, event_desc: str, event_image_url: str, db: Session = Depends(get_db)):
    year = db.query(Years).filter(Years.year_id == year_id).first()
    if year is None:
        raise HTTPException(status_code=404, detail="Year not found")

    new_event = Events(
        year_id=year_id,
        event_title=event_title,
        event_desc=event_desc,
        event_image_url=event_image_url
    )
    db.add(new_event)
    db.commit()
    db.refresh(new_event)
    return new_event


# Route to get a specific event by its ID
@app.get("/events/{event_id}", response_model=Events)
def get_event(event_id: int, db: Session = Depends(get_db)):
    event = db.query(Events).filter(Events.event_id == event_id).first()
    if event is None:
        raise HTTPException(status_code=404, detail="Event not found")
    return event


# Route to update an event
@app.put("/events/{event_id}", response_model=Events)
def update_event(event_id: int, event_title: str, event_desc: str, event_image_url: str, db: Session = Depends(get_db)):
    event = db.query(Events).filter(Events.event_id == event_id).first()
    if event is None:
        raise HTTPException(status_code=404, detail="Event not found")

    event.event_title = event_title
    event.event_desc = event_desc
    event.event_image_url = event_image_url
    db.commit()
    db.refresh(event)
    return event


# Route to delete a specific event
@app.delete("/events/{event_id}", response_model=Events)
def delete_event(event_id: int, db: Session = Depends(get_db)):
    event = db.query(Events).filter(Events.event_id == event_id).first()
    if event is None:
        raise HTTPException(status_code=404, detail="Event not found")

    db.delete(event)
    db.commit()
    return event


# Route to delete a year (along with its events)
@app.delete("/years/{year_id}", response_model=Years)
def delete_year(year_id: int, db: Session = Depends(get_db)):
    year = db.query(Years).filter(Years.year_id == year_id).first()
    if year is None:
        raise HTTPException(status_code=404, detail="Year not found")

    db.delete(year)
    db.commit()
    return year
