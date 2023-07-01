# TASK LIST 
---
# Description
      Full-Stack webapp that allows you to preform CRUD operations to keep track of your daily tasks.
---
# Demo
    - List and Mark off Completed Tasks
     
    - Add New Tasks
     
    - Delete Tasks
     
    - Update Tasks

---
# Technologies
      Python, React, postgreSQL Flask, SQLalchemy

---
# Set-up

## Backend 

      We use a virtual environment to make sure our packages are independently used for this project only. 
      Basically we are isolating pip installs.

      We use pipenv to set up virtual environment
      - pip install pipenv
      - pipenv shell

      Next open command pallet and go to "Python select interpreter" and add the VE location as seen below.

![Alt text](image.png) 

      Here we install the packages needed for the app
      - pipenv install flask flask-sqlalchemy psycopg2 python-dotenv flask-cors

      Next we can run our app using and add the file .flaskenv to set up debug mode and other helpful commands
      - flask run

## Frontend

      Create boiler plate react app in frontend folder

      - npx create-react-app frontend

      Go to frontend dir and add some libraries
      - cd frontend
      - npm i axios date-fns

      start up dev server     
      - npm start
---
# Possible Future Improvements

      - Track and Generate statistics
      - Calender to visually see consistence