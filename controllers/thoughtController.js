const { Thoughts, Reactions } = require('../models');

module.exports = {
	async getThoughts(req, res) {
		try {
			const thoughts = await Thoughts.find();
			res.json(thoughts);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async getThought(req, res) {
		try {
			const thought = Thoughts.findOne({ _id: req.params.id }).select('-__v');
			if (!thought) {
				return res.status(404).json({ message: 'No data found for that user ID.' });
			}
			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async postThought(req, res) {
		try {
			const addThought = await Thoughts.create(
				req.body,	
			);
			res.json(addThought);
		} catch (err) {
			return res.status(500).json(err);
		}
	},
	async putThought(req, res) {
		try {
			const updateThought = await Thoughts.findOneAndUpdate(
				{ _id: req.params.id },
				{ $set: req.body },
				{ runValidators: true, new: true }
			);
			if (!updateThought) {
				res.status(400).json({ message: 'No Thoughts found' });
			}
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async deleteThought(req, res) {
		try {
			const deleteThought = await Thoughts.findOneAndDelete({
				_id: req.params.id
			});

			if (!deleteThought) {
				res.status(404).json({ message: 'Thoughts not found' });
			}

			await Thoughts.deleteMany({ _id: { $in: deleteThought.id } });
			res.json({ message: 'Deleted' });
		} catch (err) {
			res.status(500).json(err);
		}
	},

	async postReaction(req, res) {
		try {
			const postReaction = await Reactions.create(
				{ _id: req.params.id },
				{ $set: req.body },
				{ runValidators: true, new: true }
			);
			res.json(postReaction);
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
