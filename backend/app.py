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




if __name__ == '__main__':
    app.run(debug=True, port=5000)