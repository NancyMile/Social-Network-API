const { constants } = require('buffer');
const connection = require('../config/connection');
const { Thought, User } = require('../models');
const {getRandomName, getRandomThoughts}= require('./data');

console.log(getRandomName());
connection.on('error', (err) => err);
//delete records
connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < 20; i++) {
    const username = getRandomName();
    const email = username+"@test"+i+".com";
    users.push({
      username,
      email,
    });
  }

  await User.collection.insertMany(users);
  console.log(users);
  process.exit(0);
});