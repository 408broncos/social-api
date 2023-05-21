const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const users = [
    {
        username: 'Barry1',
        email: 'barry11@gmail.com'
    },
    {
        username: 'Catalina1',
        email: 'catalina11@gmail.com'
    },
    {
        username: 'Doris1',
        email: 'doris11@gmail.com'
    },
    {
        username: 'Eric1',
        email: 'eric11@gmail.com'
    },
    {
        username: 'Favio1',
        email: 'favio11@gmail.com'
    },
    {
        username: 'Gary',
        email: 'gary11@gmail.com'
    },
    {
        username: 'Harry1',
        email: 'harry11@gmail.com'
    },
    {
        username: 'Irene',
        email: 'irene11@gmail.com'
    },
    {
        username: 'Jordan1',
        email: 'jordan11@gmail.com'
    },
    {
        username: 'Kate1',
        email: 'kate11@gmail.com'
    },
    {
        username: 'Larry1',
        email: 'larry11@gmail.com'
    },
    {
        username: 'Mary1',
        email: 'mary11@gmail.com'
    },
    {
        username: 'Nate1',
        email: 'nate11@gmail.com',
        thoughtText: 'How many jelly beans are there in the world',
    },
    {
        username: 'Oscar1',
        email: 'oscar11@gmail.com'
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

        for (const user of seededUsers) {
            const friendCount = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            await User.findByIdAndUpdate(user._id, { friendCount: friendCount });
          }

        console.log('Seeding complete! 🌱');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        process.exit(0);
    }
});