from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS
# import psycopg2
import os 
from dotenv import load_dotenv
load_dotenv()
# url = os.getenv("DATABASE_URL")
# connection =psycopg2.connect(url)
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)

# Creating a model named User. In postgres it will show up as a table.
# This table has columns for id, username, and email 
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    # constructor method  
    def __init__(self, username, email):
        self.username = username
        self.email = email
    
    # check if the username exists 
    def exists(username):
         return User.query.filter_by(username=username).first() is not None

class Event(db.Model):
   id = db.Column(db.Integer, primary_key=True)
   description = db.Column(db.String(100), nullable=False)
   created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
   
   def __repr__(self):
      return f"Event: {self.description}"
   
   # constructor method
   def __init__(self, description):
      self.description = description
   
   def exists(description):
      return Event.query.filter_by(description=description).first() is not None
   
def format_event(event):
   return {
      "description": event.description,
      "id": event.id,
      "created_at": event.created_at
   }

class Habit(db.Model):
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(100), nullable=False)
   description = db.Column(db.String(100), nullable=False)
   
   
app.app_context().push()
db.create_all()

@app.route('/hello')
def hello():
   return "Hey!"

# Create an event
@app.route('/events', methods=['POST'])
def create_event():
   # Retrieve the description from the JSON payload
   description = request.json['description']
   # Create a new Event object with the provided description
   event = Event(description)
   # Add the event to the database
   db.session.add(event)
   # Commit the changes to the database
   db.session.commit()
   # Return the formatted representation of the created event
   return format_event(event)

# Get all events
@app.route('/events', methods=['GET'])
def get_events():
   # Retrieve all events from the database, ordered by ID in ascending order
   events = Event.query.order_by(Event.id.asc()).all()
   # Create an empty list to store formatted events
   event_list = []
   # Iterate through each event and format it using the format_event() function
   for event in events:
      event_list.append(format_event(event))
   # Return a JSON object containing the list of formatted events
   return {'events': event_list}

# Get a single event
# the /<id> suggests we will put in a query perimeter
@app.route('/events/<id>', methods=['GET'])
def get_event(id):
   # Retrieve the event with the specified ID from the database
   event = Event.query.filter_by(id=id).one()
   # Format the event using the format_event() function
   formatted_event = format_event(event)
   # Return a JSON object containing the formatted event
   return {'events': formatted_event}

# delete an event
@app.route('/events/<id>', methods=['DELETE'])
def delete_event(id):
   # Retrieve the event with the specified ID from the database
   event = Event.query.filter_by(id=id).one()
   # Delete the event from the database
   db.session.delete(event)
   # Commit the changes to the database
   db.session.commit()
   # Return a message confirming the deletion of the event
   return f'Event {id} has been deleted!'

# update an event
@app.route('/events/<id>', methods=['PUT'])
def update_event(id):
   # Retrieve the event with the specified ID from the database
   event = Event.query.filter_by(id=id)
   # Retrieve the updated description from the JSON payload
   description = request.json['description']
   # Update the event's description and created_at attributes
   event.update(dict(description=description, created_at=datetime.utcnow()))
   # Commit the changes to the database
   db.session.commit()
   # Return a JSON object containing the updated event
   return {'event': format_event(event.one())}


if __name__ == '__main__':
    app.run()