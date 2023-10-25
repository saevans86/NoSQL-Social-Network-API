const router = require('express').Router();

const {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
	addFriend,
} = require('../../controllers/userController.js');
router.route('/').get(getUsers).post(createUser)
router
	.route('/:id')
	.get(getUser)
	.put(updateUser)
	.delete(deleteUser)
router.route('/:id/friends/:id').put(addFriend)
		// .delete(deleteFriends);

module.exports = router
