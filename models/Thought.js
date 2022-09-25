const { Schema, model } = require('mongoose');
//create the reactionSchema to be related to the though
const reactionSchema = new Schema(
  {
    reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId(),},
    reactionBody:{ type: String, required: [true, 'Thought required'], maxlength:[280, 'Max lenght 280'],},
    username: { type: String, required: true,},
    createdAt: { type: Date, default: Date.now,},
  });

// Schema to create Though model
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: [true, 'Thought required'], maxlength:[280, 'Max lenght 280'], minlength: 1,},
    createdAt: { type: Date, default: Date.now,},
    username: { type: String, required: true,},
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
  }
);

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
