// // //unsure if needed as of yet

// const { Reactions, Thoughts } = require('../models');

// module.exports = {

// 	async postReaction(req, res) {
// 		try {
// 			const reactionBody = await Reactions.create(req.body);
// 			console.log(reactionBody);
//             const updateThought = await Thoughts.findOneAndUpdate(
            
//                 {_id: req.body.reactionsId},
// 				{ username: req.body.username },
// 				{ $addToSet: { reactionBody: reactionBody.reactionBody } },
// 				{ new: true }
// 			);
// 			console.log(req.body);

// 			if (!updateThought) {
// 				return res.status(404).json({ message: ' Reaction not posted to thought' });
// 			}

// 			res.json(reactionBody);
// 		} catch (err) {
// 			return res.status(500).json(err);
// 		}
// 	},
// 	async deleteReaction(req, res) {
// 		try {
// 			const deleteReaction = await Reactions.findOneAndDelete({
// 				_id: req.params.reactionId
// 			});

// 			if (!deleteReaction) {
// 				res.status(404).json({ message: 'Reaction not found' });
// 			}

// 			await Reactions.deleteMany({ _id: { $in: deleteReaction.id } });
// 			res.json({ message: 'Deleted' });
// 		} catch (err) {
// 			res.status(500).json(err);
// 		}
// 	},
// 		async getReactions(req, res) {
// 			try {
// 				const reactions = await Reactions.find();

// 				res.json(reactions);
// 			} catch (err) {
// 				res.status(500).json(err);
// 			}
// 		},
// };
