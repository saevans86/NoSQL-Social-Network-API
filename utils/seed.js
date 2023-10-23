const connection = require('../config/connection');
const { User, Reactions, Thoughts } = require('../models');
const { randomUser, randomizer } = require('./data');

connection.on('error', (err) => console.error(err));

connection.once('open', async () => {
    console.log('Connected');

    await User.collection.drop();
    await Reactions.collection.drop();
    await Thoughts.collection.drop();

    const users = [];
    for (let i = 0; i < 10; i++) { 
        const user = randomUser(); 
        users.push(user);
    }

    await User.collection.insertMany(users);

    const reactions = [];
    const thoughts = [];

    for (let i = 0; i < 20; i++) { 
        const reaction = randomizer(); 
        reactions.push(reaction);

        const thought = randomizer(); 
        thoughts.push(thought);
    }

    await Reactions.collection.insertMany(reactions);
    await Thoughts.collection.insertMany(thoughts);

    process.exit(0);
});
