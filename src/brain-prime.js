#!/usr/bin/env node

import readlineSync from 'readline-sync';
import game, { randomNumber } from './index.js';

export default () => {
  const firstSent = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log('brain-prime\n');

  const calculate = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return 'no';
    }
    return 'yes';
  };

  const gameRound = () => {
    const number = randomNumber(1, 50);
    const rightAnswer = calculate(number);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    return [answer, rightAnswer];
  };

  game(gameRound, firstSent);
};
