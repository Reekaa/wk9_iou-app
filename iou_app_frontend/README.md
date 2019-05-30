Matthew, Reka and Euan

# IOU

This app allows users to keep track of favours that users do for each other. Favours have a value and the overall value of favours provided by each user is visible to all users.

## MVP:

On loading the site the user must be able to enter a task completed and who that task was performed for.

## Extensions:

- View a table of users and their current overall IOU ratings.
- Select a user and view the favours they have done for you and the favours you have done for them.
- Users should be able to add new tasks.
- Users should be able to create a profile and state the tasks they are good at.
- Users should be able to vote to allocate a value to a new type of task.
- Users can rate how well others have done a task.


## Setup instructions:
- Clone the repository from GitHub
- Anywhere in the terminal run the following command to start MongoDB:

          mongod

- To populate the database with sample data, navigate to the /wk9_iou-app/iou_backend/db/sample_data directory and run the following command:

          mongo < iou_objects.js

- In the terminal, navigate to the iou_backend directory and run the following commands:

          npm install
          npm start

- Navigate to the iou_frontend directory and run the following commands:

          npm install
          npm start
