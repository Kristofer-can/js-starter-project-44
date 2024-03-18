function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const rule = () => {
  console.log("Find the greatest common divisor of given numbers."); // eslint-disable-line no-console
};

const playCALC = () => {
  const operation = ["+", "-", "*"];
  const one = getRandomNumber(1, 101);
  const two = getRandomNumber(1, 101);
  let rezult = 1;
  if (one == two) {
    rezult = one;
  } else {
    const little = one > two ? two : one;
    const big = one < two ? two : one;
    if (big % little === 0) {
      rezult = little;
    } else {
      let counter = 2;
      while (counter < little / 2) {
        if (little % counter === 0 && big % counter === 0 && counter > rezult) {
          rezult = counter;
        }
        counter += 1;
      }
    }
  }
  return [`${one} ${two}`, rezult];
};

export { rule, playCALC };
