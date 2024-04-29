// const { Schema, Types, model } = require('mongoose');

// const userSchema = new Schema({
//   username: {
//     type: String,
//     unique: true,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     match: [/.+\@.+\..+/, 'Please enter a valid email address']
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 8,
//     select: false // Excluding password from query results by default
//   },
//   friends: [{
//     type: Types.ObjectId,
//     ref: 'User'
//   }],
//   savedThoughts: [{
//     type: Types.ObjectId,
//     ref: 'Thought'
//   }]
// }, {
//   timestamps: true // Automatically manage createdAt and updatedAt fields
// });

// const User = model('User', userSchema);

// function validateEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// }

// module.exports = { User, validateEmail };





const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address'] // Simple regex; consider using a library for production
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    toJSON: {
        virtuals: true
    },
    id: false,
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Virtual to count the number of friends
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// Pre-save hook to hash the password
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Method to validate password with hashed password stored in the database
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
