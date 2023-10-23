const router = require('express').Router();

const {
    getThoughts,
    getThought,
    postThought,
    putThought,
    deleteThought,
    postReaction,
   
} = require('../../controllers/thoughtController.js')
router.route('/').get(getThoughts).post(postThought)
router.route('/:userId')
    .get(getThought)
    .get(putThought)
    .get(deleteThought)
    .get(postReaction)
   

module.exports = router