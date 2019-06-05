use iou_app;

db.tasks.insertMany(
  [
    { "task": "Babysitting", "value": 10 },
    { "task": "Painting", "value": 10 },
    { "task": "Gardening", "value": 10 },
    { "task": "Cleaning Kitchen", "value": 10 }
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
          "karma": 10,
          "completedTasks": [
            {
              "task": "Babysitting",
              "value": 10,
              "whoFor": "Reka",
              "karma": 10,
              "date": "2019-06-05T20:56:56.526Z",
              "cost": {
                "hours": 1
              }
            }
          ]
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
          "karma": -30,
          "completedTasks": []
        }
      ],
      "isCurrent": false,
      "avatar": "./images/reka.JPG"
    },
    {
      "name": "Matthew",
      "skill": "gardening",
      "userprofile": "I'm a keen gardener and if you're lucky I'll keep you supplied with delicious veg all through the summer. My strawberries are second to none!",
      "groups": [
        {
          "groupName": "SW2",
          "karma": -20,
          "completedTasks": [],
          "requestedTasks": []
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
          "karma": -30,
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
          "karma": 20,
          "completedTasks": [
            {
              "task": "Painting",
              "value": 10,
              "whoFor": "Matthew",
              "karma": 20,
              "date": "2019-06-04T20:56:56.526Z",
              "cost": {
                "hours": 2
              }
            }
          ]
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
          "karma": 30,
          "completedTasks": [
            {
              "task": "Gardening",
              "value": 10,
              "whoFor": "Euan",
              "karma": 30,
              "date": "2019-06-03T20:56:56.526Z",
              "cost": {
                "hours": 3
              }
            }

          ]
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
          "karma": -20,
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
          "karma": 20,
          "completedTasks": [
            {
              {
                "task": "Cleaning",
                "value": 10,
                "whoFor": "Rod",
                "karma": 20,
                "date": "2019-06-02T20:56:56.526Z",
                "cost": {
                  "hours": 2
                }
              }
            }
          ]
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
          "karma": 20,
          "completedTasks": [
            {
              "task": "DIY",
              "value": 10,
              "whoFor": "Reka",
              "karma": 20,
              "date": "2019-06-01T20:56:56.526Z",
              "cost": {
                "hours": 2
              }
            }
          ]
        }
      ],
      "isCurrent": false,
      "avatar": "./images/sian.JPG"
    }
  ]
);
