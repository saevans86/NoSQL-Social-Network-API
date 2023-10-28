const { Thoughts, User } = require('../models');



module.exports = {
	async getThoughts(req, res) {
		try {
			const thoughts = await Thoughts.find()
			res.json(thoughts);
		} catch (err) { 
			res.status(500).json(err);
		}
	},
	async getThought(req, res) {
		try {
			const getThought = await Thoughts.findOne({
				_id: req.params.Id
			}).select('-__v');
			if (!getThought) {
				return res.status(404).json({ message: 'Not found! ' });
			}

			res.json(getThought);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async postThought(req, res) {
		try {
			const thoughtText = await Thoughts.create(req.body);
			// console.log(req.body)
			const user = await User.findOneAndUpdate(
				{ username: req.body.username },
				{ $addToSet: { thoughtText: thoughtText.thoughtText } },
				{ runValidators: true, new: true }
			);
			// console.log(req.body);
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

	async putThought(req, res) {
		try {
			const updateThought = await Thoughts.findOneAndUpdate(
				{ _id: req.params.Id },
				{ $set: req.body },
				{ new: true }
			);
			console.log(updateThought);
			if (!updateThought) {
				res.status(400).json({ message: 'No Thoughts found' });
			}
			res.json(updateThought);
		} catch (err) {
			res.status(500).json(err);
		}
	},
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
	async postReaction(req, res) {
		try {
			// console.log(req.body);

			const addReactions = await Thoughts.findOneAndUpdate(
				{ _id: req.params.thoughtsId },
				{ $addToSet: { reactions: req.body } },
				{ runValidators: true, new: true }
			);
			console.log(req.body);

			if (!addReactions) {
				return res.status(404).json({ message: ' Reaction not posted.' });
			}

			res.json(addReactions);
		} catch (err) {
			return res.status(500).json(err);
		}
	},
	async deleteReaction(req, res) {
		try {
			const deleteReaction = await Reactions.findOneAndDelete({
				_id: req.params.reactionId
			});

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
