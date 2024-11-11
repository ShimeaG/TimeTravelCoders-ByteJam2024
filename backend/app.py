from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import or_
from models import Events, Years, db_session
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///history.db'
db = SQLAlchemy(app)

CORS(app)

# Flask API routes
@app.route('/years', methods=['GET'])
def get_years():
    # Query all years
    years = db_session.query(Years).all()

    # Convert the query result to a list of dictionaries
    years_list = [
        {
            "year_id": year.year_id,
            "event_year": year.event_year
        }
        for year in years
    ]

    # Return the result as JSON
    return jsonify(years_list)

from flask import request, jsonify
from models import Events  # Assuming your Events model is imported here

@app.route('/getEvents', methods=['GET'])
def get_events():
    # Get the 'year' parameter from the query string
    year = request.args.get('year')

    # If 'year' parameter is not provided, return an error message
    if not year:
        return jsonify({"error": "Year parameter is required"}), 400

    # Query the database for events with the given 'year'
    events = db_session.query(Events).filter(Events.year_id == year).all()

    # Convert the query result to a list of dictionaries
    events_list = [
        {
            'event_id': event.event_id,
            'event_name': event.event_title,  # Assuming your model has these attributes
            'event_desc': event.event_desc,
            'event_img': event.event_image_url,
        }
        for event in events
    ]

    # Return the result as JSON
    return jsonify(events_list)


@app.route('/yearSubmit', methods=['POST'])
def submit_year():
    # Parse the JSON data from the request
    data = request.get_json()

    # Extract event_year from the data
    event_year = data.get('eventYear')

    # Check if event_year is provided
    if not event_year:
        return jsonify({"error": "Event year is required"}), 400

    # Create a new year entry without specifying year_id, as it is auto-incremented
    new_year = Years(event_year=event_year)

    # Add and commit the new entry to the database
    db_session.add(new_year)
    db_session.commit()

    # Return a success response with the new year data
    return jsonify({"eventYear": event_year, "message": "Year added successfully"}), 201


@app.route('/submitEvent', methods=['POST'])
def submit_event():
    # Parse the JSON data from the request
    data = request.get_json()

    year_id = data.get('yearId')
    event_title = data.get('eventTitle')
    event_desc = data.get('eventDesc')
    event_image = data.get('eventImage')

    # Validate required fields
    if not year_id or not event_title:
        return jsonify({"error": "Year ID and Event Title are required"}), 400

    # Create a new event entry
    new_event = Events(
        year_id=year_id,
        event_title=event_title,
        event_desc=event_desc,
        event_image_url=event_image
    )

    # Add and commit the new entry to the database
    db_session.add(new_event)
    db_session.commit()

    # Return a success response with the new event data
    return jsonify({
        "eventId": new_event.event_id,
        "yearId": new_event.year_id,
        "eventTitle": new_event.event_title,
        "eventDesc": new_event.event_desc,
        "eventImage": new_event.event_image_url,
        "message": "Event added successfully"
    }), 201


if __name__ == '__main__':
    app.run(debug=True, port=5000)