function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const rule = () => {
  console.log('What number is missing in the progression?'); // eslint-disable-line no-console
};

const playCALC = () => {
  const long = getRandomNumber(5, 16);
  const number = getRandomNumber(1, 21);
  const step = getRandomNumber(2, 6);
  const list = [];
  list.push(number);
  for (let i = 0; i < long; i += 1) {
    list.push(list[i] + step);
  }
  const replacement = getRandomNumber(0, long);
  const rezult = list[replacement];
  list[replacement] = '..';
  return [`${list.join(' ')}`, String(rezult)];
};

export { rule, playCALC };
