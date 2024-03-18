function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const rule = () => {
  console.log('What is the result of the expression?'); // eslint-disable-line no-console
};

const playCALC = () => {
  const operation = ['+', '-', '*'];
  const one = getRandomNumber(-100, 101);
  const two = getRandomNumber(0, 101);
  const action = getRandomNumber(0, 3);
  let rezult = 0;
  switch (action) {
    case 0:
      rezult = one + two;
      break;
    case 1:
      rezult = one - two;
      break;
    case 2:
      rezult = one * two;
      break;
    default:
      break;
  }
  return [`${one} ${operation[action]} ${two}`, String(rezult)];
};

export { rule, playCALC };
