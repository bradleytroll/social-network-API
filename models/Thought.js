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
  id: false,
  timestamps: true
});

// Virtual to count the number of reactions
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;





// const mongoose = require('mongoose');
// const { Schema } = mongoose; // Corrected destructuring
// const reactionSchema = require('./Reaction');

// const thoughtSchema = new Schema({
//     thoughtText: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength: 280
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//         get: createdAtVal => createdAtVal.toString() // Consider using toISOString() for standard format
//     },
//     username: {
//         type: String,
//         required: true
//     },
//     reactions: [reactionSchema]  // Correctly using the reaction schema as a subdocument
// }, {
//     toJSON: {
//         virtuals: true,
//         getters: true
//     }
// });

// // Uncomment and use the virtual for reactionCount
// thoughtSchema.virtual('reactionCount').get(function() {
//     return this.reactions.length;
// });

// const Thought = mongoose.model('Thought', thoughtSchema);

// module.exports = Thought;
