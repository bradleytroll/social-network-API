const { Thought, User, Reaction } = require('../models');

module.exports = {

// get all thoughts
getAllThoughts(req, res) {
 
    Thought.find({})
        .then(thoughts => res.json(thoughts))
        .catch(err => res.status(500).json(err));
},

// Get a single thought by ID
getThoughtById(req, res) {
    Thought.findById(req.params.id)
        .then(thought => {
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID' });  
            }
            res.json(thought);
        })
        .catch(err => res.status(500).json(err));
},

// Create a new thought
createThought(req, res) {
    Thought.create(req.body)
    .then(thought => {
        console.log('Created thought:', thought);
        return User.findByIdAndUpdate(
            req.params.id,
            { $push: { thoughts: thought._id }},
            { new: true }
        );
    })
    .then(user => {
        if (!user) {
            console.log('No user found with ID:', req.params.id);
            return res.status(404).json({ message: 'User not found' });
        }
        console.log('Updated user:', user);
        res.json({ message: 'Thought created successfully' });
    })
    .catch(err => {
        console.error('Error in createThought:', err);
        res.status(500).json(err);
    });
},

// Update thought by ID
updateThought(req, res) {
    Thought.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
    .then(thought => {
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID' });
            }
            res.json(thought);
        })
        .catch(err => res.status(500).json(err));
},

// Delete thought by ID
deleteThought(req, res) {
    Thought.findByIdAndDelete(req.params.id)
    .then(thought => {
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID' });
            }
            res.json({ message: 'Thought deleted successfully' });
        })
        .catch(err => res.status(500).json(err));
},

// Add a reaction to a thought
addReaction(req, res) {
    Reaction.create({
        reactionBody: req.body.reactionBody,
        username: req.body.username
    })
    .then(reaction => {
        return Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $push: { reactions: reaction._id } },
            { new: true, runValidators: true }
        );
    })
    .then(thought => {
        if (!thought) {
            return res.status(404).json({ message: 'No thought found with that ID' });
        }
        res.json(thought);
    })
    .catch(err => {
        console.error('Error adding reaction:', err);
        res.status(500).json(err);
    });
},

// Remove a reaction from a thought
removeReaction(req, res) {
    const { thoughtId, reactionId } = req.params;

    Thought.findByIdAndUpdate(
        thoughtId,
        { $pull: { reactions: { _id: reactionId } } }, 
        { new: true }  
    .then(thought => {
        if (!thought) {
            return res.status(404).json({ message: 'No thought found with that ID' });
        }
        res.json({ message: 'Reaction removed successfully', thought });
    }))
    .catch(err => {
        console.error('Error removing reaction:', err);
        res.status(500).json(err);
    });
},

}