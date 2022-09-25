const { Schema, model } = require('mongoose');
const moment = require("moment");

// Schema to create User model
const userSchema = new Schema(
  {
    username: { type: String, required: [true, 'Username required'], unique: true, trim: true},
    email: { type: String, required: [true, 'Email required'], match: /.+\@.+\..+/, unique: true},
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        _id: { type: String, ref: 'user' } //model self reference
      },
    ],
  },
  {
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that retrieves the length of the user's friends.
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
