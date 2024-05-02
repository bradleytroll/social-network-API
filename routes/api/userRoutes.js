const router = require('express').Router();
// const { User, Thought } = require('../../models');

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/UserController');

router.get('/', getAllUsers); // working
router.get('/:id', getUserById); // working
router.post('/', createUser);  // working
router.put('/:id', updateUser); // working
router.delete('/:id', deleteUser); // working
router.post('/:userId/friends/:friendId', addFriend);
router.delete('/:userId/friends/:friendId', removeFriend);

module.exports = router;
