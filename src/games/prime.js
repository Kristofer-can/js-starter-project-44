function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const rule = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".'); // eslint-disable-line no-console
};

const playCALC = () => {
  const number = getRandomNumber(1, 101);
  let rezult = 1;
  for (rezult; rezult < number / 2; rezult += 1) {
    if (number % rezult === 0 && rezult > 1) {
      return [`${number}`, 'no'];
    }
  }
  return [`${number}`, 'yes'];
};

export { rule, playCALC };
