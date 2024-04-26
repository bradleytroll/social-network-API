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

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/:userId/friends/:friendId', addFriend);
router.delete('/:userId/friends/:friendId', removeFriend);

module.exports = router;

// GET all users
// router.get('/', async (req, res) => {
//     try {
//         const users = await User.find().populate('thoughts').populate('friends');
//         res.status(200).json(users);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // GET a single user by its _id
// router.get('/:id', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
//         if (!user) {
//             res.status(404).json({ message: 'No user found with this id!' });
//             return;
//         }
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // POST a new user
// router.post('/', async (req, res) => {
//     try {
//         const newUser = await User.create(req.body);
//         res.status(200).json(newUser);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // PUT to update a user by its _id
// router.put('/:id', async (req, res) => {
//     try {
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.status(200).json(updatedUser);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // DELETE to remove user by its _id
// router.delete('/:id', async (req, res) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.id);
//         if (!user) {
//             res.status(404).json({ message: 'No user found with this id!' });
//             return;
//         }
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // POST to add a new friend to a user's friend list
// router.post('/:userId/friends/:friendId', async (req, res) => {
//     try {
//         const updatedUser = await User.findByIdAndUpdate(
//             req.params.userId,
//             { $push: { friends: req.params.friendId } },
//             { new: true }
//         );
//         if (!updatedUser) {
//             res.status(404).json({ message: 'No user found with this id!' });
//             return;
//         }
//         res.status(200).json(updatedUser);
//         return;
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }
// );

// // DELETE to remove a friend from a user's friend list
// router.delete('/:userId/friends/:friendId', async (req, res) => {
//     try {
//         const updatedUser = await User.findByIdAndUpdate(
//             req.params.userId,
//             { $pull: { friends: req.params.friendId } },
//             { new: true }
//         );
//         if (!updatedUser) {
//             res.status(404).json({ message: 'No user found with this id!' });
//             return;
//         }
//         res.status(200).json(updatedUser);
//         return;
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }
// );

// module.exports = router;