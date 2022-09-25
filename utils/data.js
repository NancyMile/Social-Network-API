const names = [
  'Peyton',
  'Hopkins',
  'Rihanna',
  'Antoine',
  'Hanna',
  'Virginia',
  'Cooper',
  'Kamora',
  'Carrillo',
  'Bailey',
  'Bowers',
  'Alanna',
  'Spence',
  'Keegan',
  'Hanson',
  'Conner',
  'Obrien',
  'Riya',
  'Coleman',
 'Rishi',
 'Bradford',
 'Javon',
 'Stephens',
 'Krause',
];

const thoughts = [
'The scream in your head will never be out of breath.',
'Do fish in water have their hidden life where they go to school, hang out, study, and get married?',
'If everyone had roller skates instead of feet, would there be cars or would they go rollerblading everywhere?',
'We will never know what memories we had as children and we will never remember them.',
'We know our parents for whole our life, while they know us only part of their lives.',
'Someone was born at this very moment, and someone lost his life at this very moment.',
'Our brain has never experienced some things, and yet it can tailor a scenario in its head as if it had happened.',
'If the tomato is a fruit, then ketchup is the jam.',
'If I were a book, what title would I have?',
'Valentine’s Day is known for its red color, red roses, red hearts … Would it be strange if another color was used for Valentine’s Day instead of red? And why red? Why does red associate us with love?',
'The hospital where you were born is the only building you left without entering.',
'Humans invented the sounds produced by dinosaurs.',
'Maybe it’s better not to kill the spider, because if I kill him, his family and friends can come to the funeral and in that way, I will summon many more spiders.',
'Who invented the words and names of certain objects and how did it occur to someone to call a chair just like that – “chair”?',
'How does our voice in our head sound?',
'There is only one life, it should be used in the best way!',
'Time passes too fast, create today a day to remember.',
'Appreciate every moment you are in because it will become a memory.',
'We cannot change the past, but we can create a beautiful present.',
'Don’t wait for anything and don’t chase after anything. Everything comes when it should.',
'Get out of your comfort zone. Your risk writes the most beautiful stories.',
'So many beautiful things await you. Embrace them with a smile.',
'Create your happiness and don’t let anyone take it away from you.',
'Your life is only in your hands.',
'Be different and stand out from the crowd. You were made for big things.',
'Everything that costs you your peace is too expensive.',
'When you radiate positive energy, beautiful things will happen.',
'Be the difference and the bright color in this gray world.',
'Everything is possible if you believe enough.',
];
const users = [];
const getNamePart = () => names[Math.floor(Math.random() * names.length)];
const getRandomName = () => `${getNamePart()}`;

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
// Function to generate random thoughts that we can add to user object.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughts),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};
//export functions to be used on seed
module.exports = {getRandomName, getRandomThoughts};