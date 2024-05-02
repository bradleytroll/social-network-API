const router = require('express').Router();


const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/ThoughtController');

router.get('/', getAllThoughts);  //working
router.get('/:id', getThoughtById); //working
router.post('/:id', createThought); // not working - see notes in Thought Controller.js
router.put('/:id', updateThought); //working
router.delete('/:id', deleteThought); //working
router.post('/:thoughtId/reactions', addReaction);
router.delete('/:thoughtId/reactions', removeReaction);

module.exports = router;

