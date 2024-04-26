const router = require('express').Router();
//const { Thought, User } = require('../../models');

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/ThoughtController');

router.get('/', getAllThoughts);
router.get('/:id', getThoughtById);
router.post('/', createThought);
router.put('/:id', updateThought);
router.delete('/:id', deleteThought);
router.post('/:thoughtId/reactions', addReaction);
router.delete('/:thoughtId/reactions', removeReaction);

module.exports = router;


// // GET all thoughts
// router.get('/', async (req, res) => {
//     try {
//         const thoughts = await Thought.find();
//         res.status(200).json(thoughts);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // GET a single thought by its _id
// router.get('/:id', async (req, res) => {
//     try {
//         const thought = await Thought.findById(req.params.id);
//         if (!thought) {
//             res.status(404).json({ message: 'No thought found with this id!' });
//             return;
//         }
//         res.status(200).json(thought);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


// // POST a new thought
// router.post('/', async (req, res) => {
//     try {
//         const newThought = await Thought.create(req.body);
//         await User.findByIdAndUpdate(
//             req.body.userId,
//             { $push: { thoughts: newThought._id } },
//             { new: true }
//         );
//         res.status(200).json(newThought);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // PUT to update a thought by its _id
// router.put('/:id', async (req, res) => {
//     try {
//         const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedThought) {
//             res.status(404).json({ message: 'No thought found with this id!' });
//             return;
//         }
//         res.status(200).json(updatedThought);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // DELETE to remove thought by its _id  
// router.delete('/:id', async (req, res) => {
//     try {
//         const deletedThought = await Thought.findByIdAndDelete(req.params.id);
//         if (!deletedThought) {
//             res.status(404).json({ message: 'No thought found with this id!' });
//             return;
//         }
//         res.status(200).json(deletedThought);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // POST to add a new reaction to a thought
// router.post('/:thoughtId/reactions', async (req, res) => {
//     try {
//         const updatedThought = await Thought.findByIdAndUpdate(
//             req.params.thoughtId,
//             { $push: { reactions: req.body } },
//             { new: true, runValidators: true }
//         );
//         res.status(200).json(updatedThought);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }); 

// // DELETE to remove a reaction from a thought
// router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
//     try {
//         const updatedThought = await Thought.findByIdAndUpdate(
//             req.params.thoughtId,
//             { $pull: { reactions: { reactionId: req.params.reactionId } } },
//             { new: true }
//         );
//         res.status(200).json(updatedThought);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }); 

// module.exports = router;