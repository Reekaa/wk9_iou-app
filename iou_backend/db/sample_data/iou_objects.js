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
          "karma": 20,
          "completedTasks": [
            {
              "task": "Painting",
              "value": 10,
              "whoFor": "Reka",
              "karma": 20,
              "date": "2019-06-04T16:04:36.163Z",
              "cost": {
                "hours": 2
              }
            }
          ]
        }
      ],
      "isCurrent": false
    }
    ,
    {
      "name": "Ben",
      "skill": "giving swimming lessons",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 30,
          "completedTasks": [
            {
              "task": "Babysitting",
              "value": 10,
              "whoFor": "Matthew",
              "karma": 30,
              "date": "2019-06-03T16:04:36.163Z",
              "cost": {
                "hours": 3
              }
            }
          ]
        }
      ],
      "isCurrent": false
    },
    {
      "name": "Reka",
      "skill": "dog walking",
      "groups": [
        {
          "groupName": "SW2",
          "karma": -20,
          "completedTasks": []
        }
      ],
      "isCurrent": false
    },
    {
      "name": "Matthew",
      "skill": "gardening",
      "userprofile": "I'm a keen gardener and if you're lucky I'll keep you supplied with delicious veg all through the summer. My strawberries are second to none!",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 0,
          "completedTasks": [
            {
              "task": "Gardening",
              "value": 10,
              "whoFor": "Euan",
              "karma": 10,
              "date": "2019-05-29T16:02:36.163Z",
              "cost": {
                "hours": 1
              }
            },
            {
              "task": "Gardening",
              "value": 10,
              "whoFor": "Hamish",
              "karma": 20,
              "date": "2019-06-01T16:04:36.163Z",
              "cost": {
                "hours": 2
              }
            }
          ],
          "requestedTasks": [
            {
              "task": "Painting"
            },
            {
              "task": "Cleaning"
            }
          ]
        }
      ],
      "isCurrent": false
    },
    {
      "name": "Euan",
      "skill": "cleaning windows",
      "groups": [
        {
          "groupName": "SW2",
          "karma": -10,
          "completedTasks": []
        }
      ],
      "isCurrent": false
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
      "isCurrent": false
    },
    {
      "name": "Hamish",
      "skill": "painting and decorating",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 10,
          "completedTasks": [
            {
              "task": "Cleaning",
              "value": 10,
              "whoFor": "Rose",
              "karma": 30,
              "date": "2019-05-27T16:04:36.163Z",
              "cost": {
                "hours": 3
              }
            }
          ]
        }
      ],
      "isCurrent": false
    },
    {
      "name": "Rod",
      "skill": "photographing events",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 20,
          "completedTasks": [
            {
              "task": "Gardening",
              "value": 10,
              "whoFor": "Sian",
              "karma": 20,
              "date": "2019-05-27T16:04:36.163Z",
              "cost": {
                "hours": 2
              }
            }
          ]
        }
      ],
      "isCurrent": false
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
      "isCurrent": false
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
      "isCurrent": false
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
      "isCurrent": false
    },
    {
      "name": "Sian",
      "skill": "proofreading",
      "groups": [
        {
          "groupName": "SW2",
          "karma": -20,
          "completedTasks": []
        }
      ],
      "isCurrent": false
    }
  ]
);
