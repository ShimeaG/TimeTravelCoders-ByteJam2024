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


if __name__ == '__main__':
    app.run(debug=True, port=5000)