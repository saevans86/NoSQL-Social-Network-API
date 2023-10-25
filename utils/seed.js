// const connection = require('../config/connection');
// const { User, Reactions, Thoughts } = require('../models');
// const { randomUserData } = require('./data');

// connection.on('error', (err) => console.error(err));

// connection.once('open', async () => {
// 	console.log('Connected');

// 	try {
// 		await User.collection.drop();
// 		await Reactions.collection.drop();
// 		await Thoughts.collection.drop();

// 		const users = [];
// 		const reactions = [];
// 		const thoughts = [];

// 		for (let i = 0; i < 10; i++) {
// 			const userData = randomUserData();
// 			const user = await User.create(userData);
// 			users.push(user);
// 		}

// 		for (let i = 0; i < 20; i++) {
// 			const user = users[i % users.length];
// 			const reactionData = randomUserData(); 
// 			const thoughtData = randomUserData(); 

// 			const reaction = await Reactions.create(reactionData);
// 			const thought = await Thoughts.create({
// 				...thoughtData,
// 				username: user.username,
// 				user: user._id,
// 				email: user._id
// 			});
 
// 			users.push(user)
// 			reactions.push(reaction);
// 			thoughts.push(thought);
// 		}

// 		console.table(users);
// 		console.table(reactions);
// 		console.table(thoughts);
// 	} catch (err) {
// 		console.error('An error occurred:', err);
// 	} finally {
// 		process.exit(0);
// 	}
// });
