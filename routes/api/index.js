const router = require('express').Router();
const reactions = require('./ReactionsRoutes');
const thoughts = require('./ThoughtsRoutes');
const users = require('./UserRoutes');

router.use('/reactions', reactions);
router.use('/thoughts', thoughts);
router.use('/users', users)

module.exports = router;
