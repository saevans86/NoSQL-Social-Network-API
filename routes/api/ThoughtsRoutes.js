const router = require('express').Router();

const {
	getThoughts,
	getThought,
	putThought,
	deleteThought,
	postThought
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts).post(postThought);
router
	.route('/:thoughtsId')
	.get(getThought)
	.put(putThought)
	.delete(deleteThought);

// const {
//     postReaction,
//     deleteReaction,
// } = require('../../controllers/thoughtController.js')
// router.route('/:id').post(postReaction).delete(deleteReaction)

module.exports = router;
