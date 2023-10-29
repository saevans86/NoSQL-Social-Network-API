const { Schema, model } = require('mongoose');

//provides a regex to match the email to. 
var validateEmail = function (email) {
	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
};
const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minLength: 5,
			maxLength: 20
		},
		email: {
			type: String,
			required: true,
			unique: true,
			
				validate: [validateEmail, 'Please fill a valid email address'],
				match: [
					/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
					'Please fill a valid email address'
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
