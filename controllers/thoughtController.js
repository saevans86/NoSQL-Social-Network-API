const { Thoughts, Reactions } = require('../models')

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thoughts.find()
            res.json(thoughts)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async getThought(req, res) {
        try {
            const thought = Thoughts.findOne({ _id: req.params.thoughtTextId })
                .select('-__v')
            if (!thought) {
                return res.status(404).json({ message: 'No data found for that user ID.' })
            }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async postThought(req, res) {
        try {
            const addThought = await Thoughts.create(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            )
            res.json(addThought)
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    async putThought(req, res) {
        try {
            const updateThought = await Thoughts.findOneAndUpdate(
                { _id: req.params.thoughtTextId },
                { $set: req.body },
                { runValidators: true, new: true }
            )
            if (!updateThought) {
                res.status(400).json({ message: 'No Thoughts found' })
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async deleteReaction(req, res) {
        try {
            const deleteReaction = await Thoughts.findOneAndDelete({ _id: req.params.thoughtTextId });

            if (!deleteReaction) {
                res.status(404).json({ message: 'Thoughts not found' });
            }

            await Thoughts.deleteMany({ _id: { $in: deleteReaction.thoughtTextId } });
            res.json({ message: 'Deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async postReaction(req, res) {
    try {
        const postReaction = await Reactions.create(
            { _id: req.params.thoughtTextId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        res.json(postReaction)
    } catch (err) {
        return res.status(500).json(err)
    }
    },
        async deleteThought(req, res) {
        try {
            const deleteThought = await Reactions.findOneAndDelete({ _id: req.params.reactionId });

            if (!deleteThought) {
                res.status(404).json({ message: 'Thoughts not found' });
            }

            await Reactions.deleteMany({ _id: { $in: deleteThought.reactionId } });
            res.json({ message: 'Deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    }

