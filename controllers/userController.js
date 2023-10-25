const { User } = require('../models');

module.exports = {
	async getUsers(req, res) {
		try {
			const users = await User.find();
			res.json(users);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async getUser(req, res) {
		try {
			const user = await User.findOne({ _id: req.params.id }).select('-__v');
			if (!user) {
				return res.status(404).json({ message: 'No data found for that user ID.' });
			}
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
				{ _id: req.params.id },
				{ $set: req.body },
				{runValidators: true, new: true}
			);
			if (!updateUser) {
				res.status(400).json({ message: 'No user found' });
			}
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async deleteUser(req, res) {
		try {
			const deleteUser = await User.findOneAndDelete({ _id: req.params.id });

			if (!deleteUser) {
				res.status(404).json({ message: 'User not found' });
			}

			await User.deleteMany({ _id: { $in: deleteUser.id } });
			res.json({ message: 'Deleted' });
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async addFriend(req, res) {
		try {
			const newFriend = await User.findOneAndUpdate(
                {
                    _id: req.body.id,
                    username: req.body.username,
                },
				{ $addToSet: { friends: req.body.id } },

				{
					runValidators: true,
					new: true,
					upsert: true
				}
			);

			res.json(newFriend);
		} catch (err) {
			return res.status(500).json(err);
		}
    }
    
    
};
