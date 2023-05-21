const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const users = [
    {
        username: 'Barry',
        email: 'barry1@gmail.com'
    },
    {
        username: 'Catalina',
        email: 'catalina1@gmail.com'
    },
    {
        username: 'Doris',
        email: 'doris1@gmail.com'
    },
    {
        username: 'Gary',
        email: 'gary1@gmail.com'
    },
    {
        username: 'Harry',
        email: 'harry1@gmail.com'
    },
    {
        username: 'Irene',
        email: 'irene1@gmail.com'
    },
    {
        username: 'Jordan',
        email: 'jordan1@gmail.com'
    }
];

const thoughts = [
    {
        thoughtText: 'I like bananas',
                
        username: 'Barry',
    },
    {
        thoughtText: 'can we go bowling',
                
        username: 'Catalina',
    },
    {
        thoughtText: 'wanna meet at starbucks',
                
        username: 'Doris',
    },
    {
        thoughtText: 'I dislike marvel',
                
        username: 'Gary',
    },
    {
        thoughtText: 'lets go skydiving',
                
        username: 'Harry',
    },
    {
        thoughtText: 'how many birds are in the sky',
                
        username: 'Irene',
    },
    {
        thoughtText: 'i love to eat pasta',
                
        username: 'Jordan',
    },
];


connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

connection.once('open', async () => {
    console.log('Connected to MongoDB');
    
    
  try {
    await Thought.deleteMany({});
    await User.deleteMany({});

    const seededUsers = await User.insertMany(users);

    for (const thought of thoughts) {
      const user = seededUsers.find((user) => user.username === thought.username);
      thought.userId = user._id;
      await Thought.create(thought);
    }

    console.log('Seeding complete! 🌱');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    process.exit(0);
  }
});