const connection = require('../config/connection');
const { User, Reactions, Thoughts } = require('../models');
const { randomUser, randomizer } = require('./data');

connection.on('error', (err) => console.error(err));

connection.once('open', async () => {
    console.log('Connected');

    try {
        await User.collection.drop();
        await Reactions.collection.drop();
        await Thoughts.collection.drop();
        // await User.deleteMany({});
        // await Reactions.deleteMany({});
        // await Thoughts.deleteMany({});

        const users = [];

        for (let i = 0; i < 10; i++) {
            const user = randomUser();
            const createdUser = await User.create(user);
            users.push(createdUser);
        }

        const reactions = [];
        const thoughts = [];

        for (let i = 0; i < 20; i++) {
            const user = users[i % users.length];
            const reaction = randomizer(1); 
            const thought = randomizer(1); 

            const createdReaction = await Reactions.create(reaction);
            const createdThought = await Thoughts.create({
                ...thought,
                username: user.username, 
                user: user._id, 
            });

            reactions.push(createdReaction);
            thoughts.push(createdThought);
        }

        console.table(users);
        console.table(reactions);
        console.table(thoughts);

    } catch (err) {
        console.error("An error occurred:", err);
    } finally {
        process.exit(0);
    }
});
