const router = require('express').Router();

const {
	getThoughts,
	getThought,
	putThought,
	deleteThought,
	postThought,
	postReaction,
	
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts).post(postThought);
router
	.route('/:Id')
	.get(getThought)
	.put(putThought)
	.delete(deleteThought);
	

router.route('/:thoughtsId/reactions').post(postReaction);



module.exports = router;
