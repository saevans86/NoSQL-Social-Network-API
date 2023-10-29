const { User, Thoughts } = require('../models');

module.exports = {
	async getUsers(req, res) {
		try {
			const users = await User.find();
			res.json(users);
			console.log(users);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async getUser(req, res) {
		try {
			const user = await User.findOne({ _id: req.params.usersId }).select('-__v');
			if (!user) {
				return res.status(404).json({ message: 'No data found for that user ID.' });
			}
				console.log(user);
			res.json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async createUser(req, res) {
		try {
			const newUser = await User.create(req.body);
			res.json(newUser);
		} catch (err) {
			return res.status(500).json(err);
		}
	},
	async updateUser(req, res) {
		try {
			const updateUser = await User.findOneAndUpdate(
				{ _id: req.params.usersId },
				{ $set: req.body },
				{ runValidators: true, new: true }
			);
			console.log('User updated')
			if (!updateUser) {
				res.status(400).json({ message: 'No user found' });
			}
			res.json(updateUser);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async deleteUser(req, res) {
		try {
			const userId = req.params.usersId;

			const deleteUser = await User.findOneAndDelete({ _id: userId });

			if (!deleteUser) {
				return res.status(404).json({ message: 'User not found' });
			}
			const removeThoughts = await Thoughts.deleteMany({
				username: deleteUser.username
			});
			if (!removeThoughts) {
				return res.status(404).json({ message: 'Thoughts not found for the user' });
			}

			res.json({ message: 'User and associated thoughts deleted' });
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async addFriend(req, res) {
		try {
			const newFriend = await User.findOneAndUpdate(
				{ _id: req.params.usersId },
				{ $addToSet: { friends: req.body } },
				{ runValidators: true, new: true }
			);
console.log(newFriend, 'Added')
			if (!newFriend) {
				return res.status(404)({ meessage: 'not found' });
			}
			res.json(newFriend);
		} catch (err) {
			return res.status(500).json(err);
		}
	},
	async removeFriend(req, res) {
		try {
			const userId = req.params.usersId;
			const friendId = req.params.friendsId;

			const updatedUser = await User.findOneAndUpdate(
				{ _id: userId },
				{ $pull: { friends: friendId } },
				{ runValidators: true, new: true }
			);
 console.log('Friend removed')
			if (!updatedUser) {
				return res.status(404).json({ message: 'User not found' });
			}

			res.json(updatedUser);
		} catch (err) {
			return res.status(500).json(err);
		}
	}
};
