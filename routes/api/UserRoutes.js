const router = require('express').Router();

const {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
	addFriend,
	removeFriend,
	
} = require('../../controllers/userController.js');
router.route('/').get(getUsers).post(createUser)
router.route('/:usersId').get(getUser).put(updateUser).delete(deleteUser);

router.route('/:usersId/friends').post(addFriend);

router.route('/:usersId/friends/:friendsId').delete(removeFriend);


module.exports = router;
