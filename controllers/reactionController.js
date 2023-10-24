// //unsure if needed as of yet

// const { Reactions } = require('..');

// module.exports = {
// 	async getUsers(req, res) {
// 		try {
// 			const users = await Reactions.find();
// 			res.json(users);
// 		} catch (err) {
// 			res.status(500).json(err);
// 		}
// 	},
// 	async getUser(req, res) {
// 		try {
// 			const user = Reactions.findOne({ _id: req.params.userId }).select('-__v');
// 			if (!user) {
// 				return res.status(404).json({ message: 'No data found for that user ID.' });
// 			}
// 			res.json(user);
// 		} catch (err) {
// 			res.status(500).json(err);
// 		}
// 	},
// 	async createUser(req, res) {
// 		try {
// 			const newUser = await Reactions.create(req.body);
// 			res.json(newUser);
// 		} catch (err) {
// 			return res.status(500).json(err);
// 		}
// 	},
// 	async updateUser(req, res) {
// 		try {
// 			const updateUser = await Reactions.findOneAndUpdate(
// 				{ _id: req.params.usersId },
// 				{ $set: req.body },
// 				{ runValidators: true, new: true }
// 			);
// 			if (!updateUser) {
// 				res.status(400).json({ message: 'No user found' });
// 			}
// 		} catch (err) {
// 			res.status(500).json(err);
// 		}
// 	},
// 	async deleteUser(req, res) {
// 		try {
// 			const deleteUser = await Reactions.findOneAndDelete({
// 				_id: req.params.userId
// 			});

// 			if (!deleteUser) {
// 				res.status(404).json({ message: 'User not found' });
// 			}

// 			await Reactions.deleteMany({ _id: { $in: deleteUser.user } });
// 			res.json({ message: 'Deleted' });
// 		} catch (err) {
// 			res.status(500).json(err);
// 		}
// 	}
// };
