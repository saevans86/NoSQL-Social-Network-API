const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280,
        minLength: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }], 
});

thoughtSchema.virtual('reactionCount').get(function () {
	return this.reactions.length;
});



const Thoughts = model('Thought', thoughtSchema);

module.exports = Thoughts;
