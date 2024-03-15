#!/usr/bin/env node

import readlineSync from 'readline-sync'; // eslint-disable-line import/extensions

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const play = () => {
  console.log('Welcome to the Brain Games!'); // eslint-disable-line no-console
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`); // eslint-disable-line no-console
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // eslint-disable-line no-console
  let counter = 1;
  while (counter < 4) {
    const number = getRandomNumber(1, 101);
    console.log(`Question: ${number}!`); // eslint-disable-line no-console
    const answer = readlineSync.question('Your answer: '); // eslint-disable-line no-console
    const rezult = number % 2 === 0 ? 'yes' : 'no';
    if (answer !== rezult) {
      break;
    }
    counter += 1;
    console.log('Correct!'); // eslint-disable-line no-console
  }
  if (counter === 4) {
    console.log(`Congratulations, ${name}!`); // eslint-disable-line no-console
  } else {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'."); // eslint-disable-line no-console
    console.log(`Let's try again, ${name}!`); // eslint-disable-line no-console
  }
};

play();
