const { Schema, model } = require('mongoose');

const userSchema = new Schema(
	{

		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minLength: 5,
			maxLength: 20,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [
				/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
				'Invalid e-mail address'
			]
		},
		thoughts: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Thought'
			}
		],
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User'
			}
		]
	},
	{
		toJSON: {
			virtuals: true,
			getters: true
		},
		id: false
	}
);
userSchema.virtual('friendCount').get(function () {
	return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
