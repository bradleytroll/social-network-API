const { User, Thought } = require('../models');

module.exports = {
    getAllUsers(req, res) {
        User.find({})
        .populate('thoughts')
        .populate('friends')
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err));
    }, 


    // GET a single user by its _id
    getUserById(req, res) {
        User.findById(req.params.id)
            .populate('thoughts')
            .populate('friends')
            .then (user => {
                if (!user) {
                    return res.status(404).json({ message: 'No user found with this id.'})
                }
                res.json(user)
                })
                .catch(err => res.status(500).json(err));
            }, 
    
    // Create new user
    createUser(req, res) {
        User.create(req.body)
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
    },

    // Update user by ID
    updateUser(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: 'No user found with this id' });
                }
                res.json(user)
            })
            .catch(err => res.status(500).json(err));
    }, 
    
    // Delete user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.id })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id' });
            }
            return Thought.deleteMany({ _id: { $in: user.thoughts } });
        })
        .then(() => res.json({ message: "User and thoughts deleted" }))      
        .catch(err => res.status(500).json(err));
    },

    // Add friend
    addFriend(req, res) {
        User.findByIdAndUpdate(
            req.params.userId,
            { $addToSet: { friends: req.params.friendId }},
            { new: true }
        ).then(user => {
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id' });
            }
            res.json(user);
        }).catch(err => res.status(500).json(err));
    },

    // Delete friend
    removeFriend(req, res) {
        User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { friends: req.params.friendId }},
            { new: true }
        ).then(user => {
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id'})
            }
            res.json(user);
        }).catch(err => res.status(500).json(err));
    }
  };







