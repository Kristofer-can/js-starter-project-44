#!/usr/bin/env node

import readlineSync from 'readline-sync'; // eslint-disable-line import/extensions

const fistPlay = (rule, playCALC) => {
  console.log('Welcome to the Brain Games!'); // eslint-disable-line no-console
  const name = readlineSync.question('May I have your name? '); // eslint-disable-line no-console
  console.log(`Hello, ${name}!`); // eslint-disable-line no-console
  rule();
  let counter = 1;
  const sp = [];
  while (counter < 4) {
    const [query, ans] = playCALC();
    console.log(`Question: ${query}`); // eslint-disable-line no-console
    const answe = readlineSync.question('Your answer: '); // eslint-disable-line no-console
    sp.push([Number(answe), ans]);
    if (Number(answe) !== Number(ans)) {
      break;
    }
    counter += 1;
    console.log('Correct!'); // eslint-disable-line no-console
  }
  if (counter === 4) {
    console.log(`Congratulations, ${name}!`); // eslint-disable-line no-console
  } else {
    console.log(
      `"${sp.at(-1)[0]}" is wrong answer ;(. Correct answer was "${
        sp.at(-1)[1]
      }".`,
    ); // eslint-disable-line no-console
    console.log(`Let's try again, ${name}!`); // eslint-disable-line no-console
  }
};

export { fistPlay };
