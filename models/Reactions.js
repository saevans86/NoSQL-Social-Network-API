const { Schema, model } = require('mongoose');


const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        type: Date, default: Date.now,
    },
    toJSON: {
        getters: true
    }


})
const Reactions = model('reactions', reactionSchema);

module.exports = Reactions;