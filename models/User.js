const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength: 20,
        minLength: 5,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

userSchema.set('toJSON', { getters: true });

const User = model('User', userSchema);

module.exports = User;
