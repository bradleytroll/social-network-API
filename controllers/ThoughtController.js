const { Thought, User } = require('../models');

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


// createThought(req, res) {
//     Thought.create(req.body)
//         .then((Thought) => {
//             return User.findByIdAndUpdate(
//             req.body.userId,
//             { $push: { thoughts: Thought._id } },
//             { new: true }
//           );
//         })
//         .catch(err => {
//             console.log(err);
//             return res.status(500).json(err);
//         });
// },


// createThought(req, res) {
//     Thought.create(req.body)
//     .then(thought => {
//         //console.log(thought);
//         return User.findByIdAndUpdate(
//         req.params.id, req.body,
//         console.log(req.params.id, req.body),
//         // Code is breaking here. New thoughts are being added and can be shown through a GET request, but still receiving 404 error and undefined for console log
//         // Need to find user by id and update thoughts array
//         { $push: { thoughts: thought._id }},
//         { new: true }
//     );
//     })
//     .then (user => {
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.json({ message: 'Thought created successfully'})
//     })
//     .catch(err => res.status(500).json(err));
// }, 

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
    Thought.findByIdAndUpdate(req.params.thoughtId, { $push: { reactions: req.body } }, { new: true, runValidators: true })
       .then(thought => {
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID' });
            }
            res.json(thought);
        })
       .catch(err => res.status(500).json(err));
},

// Remove a reaction from a thought
removeReaction(req, res) {
    Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true })
       .then(thought => {
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID' });
            }
            res.json(thought);
        })
       .catch(err => res.status(500).json(err));
}

};