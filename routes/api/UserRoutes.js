const router = require('express').Router();

const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController.js')
router.route('/').get(getUsers).post(createUser)
router.route('/:userId')
    .get(getUser)
    .get(updateUser)
    .get(deleteUser)

module.exports = router