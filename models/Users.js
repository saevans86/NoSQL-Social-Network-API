const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thoughts')
const reactions = require('./Reactions')

const userSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    userame: {
        type: String,
        required: true, 
        maxLength: 20,
        minLength: 5,
        // not sure a default would be needed since everything is based on user
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    },
    thoughts: [thoughtsSchema],
    thoughts: [reactions],

    toJSON: {
        getters: true
    }


})
const User = model('user', userSchema);

module.exports = User;