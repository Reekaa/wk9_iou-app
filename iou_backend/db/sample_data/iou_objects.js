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
      "userprofile": "The guitar is my big passion in life and I love helping people learn to play.",
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
      "userprofile": "If you want to improve yuor swimming I can help you out. Just don't ask to borrow my GB athletics t-shirt!",
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
      "userprofile": "When I'm not coding, I love going out for walks. I can take your dog with me!",
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
      "userprofile": "I'm pretty tall, so cleaning windows is no hassle. Happy to help any time!",
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
      "userprofile": "Kids love me and my friends say I'm really responsible. I'd be happy to do some babnysitting for you.",
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
      "userprofile": "In a past life I was an artist so I enjoy getting out a paint brush, even if it's only to paint a wall.",
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
      "userprofile": "I'm a keen photographer and I've photographed a few weddings in my time. I can make you an album you'll keep forever.",
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
      "userprofile": "It's not always easy to keep life simple, but if you need some support I'm here to help.",
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
      "userprofile": "It can be a real pain to pick up your weekly shop, so I like to help out by collecting shopping for my friends.",
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
      "userprofile": "The piano is a great starting point for learning any musical instrument. If you'd like a few lessons, let me know.",
      "groups": [
        {
          "groupName": "SW2",
          "karma": 20,
          "completedTasks": [
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
          ]
        }
      ],
      "isCurrent": false,
      "avatar": "./images/kris.JPG"
    },
    {
      "name": "Sian",
      "skill": "proofreading",
      "userprofile": "I love writing, and since I love reading too I'd be happy to help proofread your work.",
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
