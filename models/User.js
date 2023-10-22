const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thought')
// const friends = require('./User')

const userSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    userame: {
        type: String,
        required: true, 
        unique: true,
        trimmed: true,
        maxLength: 20,
        minLength: 5,
        // not sure a default would be needed since everything is based on user
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`]
        //unsure if will work with regex, will re-work if needed
        //may need to work in validator per async custom validators
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    },
    thoughts: [thoughtsSchema],
    friends: [userSchema],

    toJSON: {
        getters: true
    }


})
const User = model('user', userSchema);

module.exports = User;