const { Schema, model } = require('mongoose');
const moment = require("moment");
//Initially I thought was creating  the reation schema here as on class 18
//create the reactionSchema to be related to the though
const reactionSchema = new Schema(
  {
    reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId(),},
    reactionBody:{ type: String, required: [true, 'Reaction required'], maxlength:[280, 'Max lenght 280'],},
    username: { type: String,},
    createdAt: { type: Date, default: Date.now,get: (date)=>moment(date).format("DD,MM,YYYY hh:mm")},
  });

// Schema to create Though model
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: [true, 'Thought required'], maxlength:[280, 'Max lenght 280'], minlength: 1,},
    createdAt: { type: Date, default: Date.now, get: (date)=>moment(date).format("DD,MM,YYYY hh:mm")},
    username: { type: String, required: true,},
    reactions: [reactionSchema],
    },
  {
    toJSON: {
      virtuals: true,
      getters:true,
    },
    id: false,
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
  }
);

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

// Uses model to create new instance including subdocument
const reactionData = [
  { reactionBody: 'Awesome', },
  { reactionBody: 'Interesting',},
  { reactionBody: 'Cool',},
];

Thought.create({ thoughtText: 'Testing Thoughts', reactions: reactionData }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

module.exports = Thought;
