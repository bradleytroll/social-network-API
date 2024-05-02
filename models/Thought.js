const { Schema, Types, model } = require('mongoose');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => createdAtVal.toString()
  },
  username: {
    type: String,
    required: true
  },
  reactions: [{
    type: Types.ObjectId,
    ref: 'Reaction'
  }]
}, {
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: true,
  timestamps: true
});

// Virtual to count the number of reactions
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;


