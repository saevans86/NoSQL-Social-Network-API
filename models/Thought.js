const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280,
        minLength: 1,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }], 
});

thoughtSchema.virtual('Virtual').get(function () {
    return 'Virtual value';
});

thoughtSchema.set('toJSON', { getters: true }); 

const Thoughts = model('Thought', thoughtSchema);

module.exports = Thoughts;
