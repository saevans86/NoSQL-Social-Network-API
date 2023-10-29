const router = require('express').Router();
const apiRoutes = require('./api'); 

//main api route
router.use('/api', apiRoutes);

//if incorrect route is hit, insomnia will notify you that an incorrect route was hit
router.use((req, res) => res.send('Incorrect Router'));

module.exports = router;
