const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
  reactionBody: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => createdAtVal.toString()
  }
}, {
  toJSON: {
    getters: true
  },
  id: false,
  timestamps: true
});

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;

