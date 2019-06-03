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
      "skill": "giving guitar lessons",
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
      "skill": "giving swimming lessons",
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
      "skill": "dog walking",
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
      "skill": "gardening",
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
      "skill": "cleaning windows",
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
      "skill": "babysitting",
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
      "skill": "painting and decorating",
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
      "skill": "photographing events",
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
      "skill": "providing spiritual support",
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
      "skill": "picking up people's shopping",
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
      "skill": "giving piano lessons",
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
      "skill": "proofreading",
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
