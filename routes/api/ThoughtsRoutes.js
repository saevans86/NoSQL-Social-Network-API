const router = require('express').Router();

const {
    getThoughts,
    getThought,
    postThought,
    putThought,
    deleteThought,
    
   
} = require('../../controllers/thoughtController.js')

router.route('/').get(getThoughts)
router.route('/:thoughtsId').get(getThought)
    .put(putThought)
    .delete(deleteThought)
  
 
router.route('/').post(postThought)
   
// const {
//     postReaction,
//     deleteReaction,
// } = require('../../controllers/thoughtController.js')
// router.route('/:id').post(postReaction).delete(deleteReaction)

module.exports = router