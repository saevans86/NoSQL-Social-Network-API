const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
	{
		reactionId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId()
		},
		reactionBody: {
			type: String,
			required: true,
			maxLength: 280
		},
		username: {
			type: String,
			required: true
		},
		createdAt: {
			type: Date,
			default: Date.now,
			toJSON: {
				virtuals: true
			}
		}
	},
	{
		toJSON: {
			getters: true
		}
	}
);
const thoughtSchema = new Schema(
	{
		username: {
			type: String,
			required: true
		},
		thoughtText: {
			type: String,
			required: true,
			maxLength: 280,
			minLength: 1
		},
		createdAt: {
			type: Date,
			default: Date.now
		},
		reactions: [reactionSchema]
	},
	{
		toJSON: {
			virtuals: true,
			getters: true
		},
		id: false
	}
);

thoughtSchema.virtual('reactionCount').get(function () {
	return this.reactions.length;
});

const Thoughts = model('Thought', thoughtSchema);

module.exports = Thoughts;
