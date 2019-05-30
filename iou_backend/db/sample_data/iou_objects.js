use iou_app;

db.tasks.insertMany(
  [
    { "task": "Babysitting", "value": 5 },
    { "task": "Painting", "value": 10 },
    { "task": "Gardening", "value": 8 },
    { "task": "Cleaning Kitchen", "value": 15 }
  ]
);

db.users.insertMany(
  [
    {
      "name": "Keith",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 0,
          "completedTasks": []
        }
      ]
    },
    {
      "name": "Ben",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 0,
          "completedTasks": []
        }
      ]
    },
    {
      "name": "Reka",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 0,
          "completedTasks": []
        }
      ]
    },
    {
      "name": "Matthew",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 0,
          "completedTasks": []
        }
      ]
    },
    {
      "name": "Euan",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 0,
          "completedTasks": []
        }
      ]
    },
    {
      "name": "Rose",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 0,
          "completedTasks": []
        }
      ]
    },
    {
      "name": "Hamish",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 0,
          "completedTasks": []
        }
      ]
    },
    {
      "name": "Rod",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 0,
          "completedTasks": []
        }
      ]
    },
    {
      "name": "Pawel",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 0,
          "completedTasks": []
        }
      ]
    },
    {
      "name": "James",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 0,
          "completedTasks": []
        }
      ]
    },
    {
      "name": "Kris",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 0,
          "completedTasks": []
        }
      ]
    },
    {
      "name": "Sian",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 0,
          "completedTasks": []
        }
      ]
    }
  ]
);
