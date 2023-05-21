const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const users = [
    {
        username: 'Barry',
        email: 'barry1@gmail.com'
    },
    {
        username: 'Catalina',
        email: 'catalina1l@gmail.com'
    },
    {
        username: 'Doris',
        email: 'doris1@gmail.com'
    },
    {
        username: 'Eric',
        email: 'eric1@gmail.com'
    },
    {
        username: 'Favio',
        email: 'favio1@gmail.com'
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
    },
    {
        username: 'Kate',
        email: 'kate1@gmail.com'
    },
    {
        username: 'Larry',
        email: 'larry1@gmail.com'
    },
    {
        username: 'Mary',
        email: 'mary1@gmail.com'
    },
    {
        username: 'Nate',
        email: 'nate1@gmail.com'
    },
    {
        username: 'Oscar',
        email: 'oscar1@gmail.com'
    },
  ]
  

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});
    await User.insertMany(users);

    const seededUsers = await User.insertMany(users);

  for (const user of seededUsers) {
    const friendCount = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    await User.findByIdAndUpdate(user._id, { friendCount });
  }
    console.info('Seeding complete! 🌱');
    process.exit(0);
  });
  