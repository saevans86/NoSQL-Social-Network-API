const router = require('express').Router();

const {
    getThoughts,
    getThought,
    postThought,
    putThought,
    deleteThought,
    
   
} = require('../../controllers/thoughtController.js')

router.route('/').get(getThoughts).post(postThought)
router.route('/:thoughtTextId')
    .get(getThought)
    .get(putThought)
    .get(deleteThought)
 
   
const {
    postReaction,
    deleteReaction,
} = require('../../controllers/thoughtController.js')
router.route('/').post(postReaction).delete(deleteReaction)
router.route('/:treactionId')
    .get(postReaction)
    .get(deleteReaction)

module.exports = router