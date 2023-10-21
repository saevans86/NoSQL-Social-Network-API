const { Schema, model } = require('mongoose');
const reactions = require('./Reactions')

const thoughtSchema = new Schema({
    // thoughtText: {
    //     type: Schema.Types.ObjectId,
    //     default: () => new Types.ObjectId(),
    // },
    thoughtText: {
        type: String,
        required: true,
        unique: true,
        maxLength: 280,
        minLength: 1,
    },
    createdAt: {
        type: String,
        type: Date, default: Date.now, 
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactions],
    toJSON: {
        getters: true
    }


})
const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;