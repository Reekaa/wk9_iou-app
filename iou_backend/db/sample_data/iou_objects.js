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
      ],
      "isCurrent": false,
      "avatar": "./images/keith.JPG"
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
      ],
      "isCurrent": false,
      "avatar": "./images/ben.JPG"
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
      ],
      "isCurrent": false,
      "avatar": "./images/reka.JPG"
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
      ],
      "isCurrent": false,
      "avatar": "./images/matthew.JPG"
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
      ],
      "isCurrent": false,
      "avatar": "./images/euan.JPG"
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
      ],
      "isCurrent": false,
      "avatar": "./images/rose.JPG"
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
      ],
      "isCurrent": false,
      "avatar": "./images/hamish.JPG"
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
      ],
      "isCurrent": false,
      "avatar": "./images/rod.JPG"
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
      ],
      "isCurrent": false,
      "avatar": "./images/pawel.JPG"
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
      ],
      "isCurrent": false,
      "avatar": "./images/james.JPG"
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
      ],
      "isCurrent": false,
      "avatar": "./images/kris.JPG"
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
      ],
      "isCurrent": false,
      "avatar": "./images/sian.JPG"
    }
  ]
);
