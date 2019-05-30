use iou_app;

db.tasks.insertMany(
  [
    { "task": "babysitting", "value": 5 },
    { "task": "painting", "value": 10 },
    { "task": "gardening", "value": 8 },
    { "task": "cleaning kitchen", "value": 15 }
  ]
);


db.users.insertMany(
  [
    {
      "name": "Keith",
      "karma": 0,
      "completedTasks": []
    },
    {
      "name": "Ben",
      "karma": 0,
      "completedTasks": []
    },
    {
      "name": "Reka",
      "karma": 0,
      "completedTasks": []
    },
    {
      "name": "Matthew",
      "karma": 0,
      "completedTasks": []
    },
    {
      "name": "Euan",
      "karma": 0,
      "completedTasks": []
    },
    {
      "name": "Rose",
      "karma": 0,
      "completedTasks": []
    },
    {
      "name": "Hamish",
      "karma": 0,
      "completedTasks": []
    },
    {
      "name": "Rod",
      "karma": 0,
      "completedTasks": []
    },
    {
      "name": "Pawel",
      "karma": 0,
      "completedTasks": []
    },
    {
      "name": "James",
      "karma": 0,
      "completedTasks": []
    },
    {
      "name": "Kris",
      "karma": 0,
      "completedTasks": []
    },
    {
      "name": "Sian",
      "karma": 0,
      "completedTasks": []
    }
  ]
);
