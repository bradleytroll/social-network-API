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




// const mongoose = require('mongoose');
// const { Schema } = mongoose; // Corrected destructuring

// const reactionSchema = new Schema({
//     reactionId: {
//         type: Schema.Types.ObjectId,
//         default: () => new mongoose.Types.ObjectId() 
//     },
//     reactionBody: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength: 280
//     },
//     username: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//         get: createdAtVal => createdAtVal.toString() 
//     }
// }, {
//     toJSON: {
//         virtuals: true,
//         getters: true
//     }
// });

// module.exports = reactionSchema; // Export the schema, not a model?
