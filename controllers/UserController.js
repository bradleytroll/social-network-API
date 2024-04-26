const { User, Thoughts, Reaction } = require('../models');

module.exports = {
    getAllUsers(req, res) {
        User.find({})
        .populate('thoughts')
        .populate('friends')
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err));
    }, 
//START HERE







}