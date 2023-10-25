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
router.route('/:usersId').get(getUser).put(updateUser).delete(deleteUser);

router.route('/:usersId/friends/:friendsId').put(addFriend);
		// .delete(deleteFriends);

module.exports = router
