const router = require('express').Router();
const thoughts = require('./ThoughtsRoutes');
const users = require('./UserRoutes');

//thoughts and users endpoints 
router.use('/thoughts', thoughts);
router.use('/users', users)

module.exports = router;
