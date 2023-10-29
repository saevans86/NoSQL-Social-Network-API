const { Thoughts, User } = require('../models');

module.exports = {
	//get method for all thoughts
	async getThoughts(req, res) {
		try {
			const thoughts = await Thoughts.find();
			res.json(thoughts);
			// console.log(thoughts)
		} catch (err) {
			res.status(500).json(err);
		}
	},
	//get method for a single thought by its ID
	async getThought(req, res) {
		try {
			const getThought = await Thoughts.findOne({
				_id: req.params.Id
			}).select('-__v');
			if (!getThought) {
				return res.status(404).json({ message: 'Not found! ' });
			}
			console.log(getThought);
			res.json(getThought);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	//adds new thought to the DB by username, then adds the thoughtText to the user, then validates the data, and posts it as new data
	async postThought(req, res) {
		try {
			const thoughtText = await Thoughts.create(req.body);
			const user = await User.findOneAndUpdate(
				{ username: req.body.username },
				{ $addToSet: { thoughtText: thoughtText.thoughtText } },
				{ runValidators: true, new: true }
			);
			// console.log(thoughtText, 'Added');
			if (!user) {
				return res
					.status(404)
					.json({ message: 'thought posted, not posted to user.' });
			}
			res.json(thoughtText);
		} catch (err) {
			console.error(err);
			return res.status(500).json(err);
		}
	},

	// updates a single thought by the thoughtId
	async putThought(req, res) {
		try {
			const updateThought = await Thoughts.findOneAndUpdate(
				{ _id: req.params.Id },
				{ $set: req.body },
				{ new: true }
			);
			// console.log(updateThought, 'Updated');
			if (!updateThought) {
				res.status(400).json({ message: 'No Thoughts found' });
			}
			res.json(updateThought);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	//delete a single thought by its ID
	async deleteThought(req, res) {
		try {
			const deleteThought = await Thoughts.findOneAndDelete({
				_id: req.params.Id
			});

			if (!deleteThought) {
				res.status(404).json({ message: 'Thoughts not found' });
			}

			res.json({ message: 'Deleted' });
		} catch (err) {
			res.status(500).json(err);
		}
	},
	//adds a reaction to a user post by the thought Id, then adding a reaction. 
	async postReaction(req, res) {
		try {
			const addReactions = await Thoughts.findOneAndUpdate(
				{ _id: req.params.thoughtsId },
				{ $addToSet: { reactions: req.body } },
				{ runValidators: true, new: true }
			);
			// console.log(addReactions, 'Posted');

			if (!addReactions) {
				return res.status(404).json({ message: ' Reaction not posted.' });
			}

			res.json(addReactions);
		} catch (err) {
			return res.status(500).json(err);
		}
	},
	//delete reaction by a its ID
	async deleteReaction(req, res) {
		try {
			const deleteReaction = await Reactions.findOneAndDelete({
				_id: req.params.reactionId
			});

			console.log('Deleted');
			if (!deleteReaction) {
				res.status(404).json({ message: 'Reaction not found' });
			}

			await Reactions.deleteMany({ _id: { $in: deleteReaction.id } });
			res.json({ message: 'Deleted' });
		} catch (err) {
			res.status(500).json(err);
		}
	}
};
