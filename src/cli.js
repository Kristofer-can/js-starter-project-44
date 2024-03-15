import readlineSync from 'readline-sync'; // eslint-disable-line import/extensions

export default () => {
  console.log('brain-games'); // eslint-disable-line no-console
  console.log('Welcome to the Brain Games!'); // eslint-disable-line no-console
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`); // eslint-disable-line no-console
};
