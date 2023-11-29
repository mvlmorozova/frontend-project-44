#!/usr/bin/env node

import readlineSync from 'readline-sync';
import game, { randomNumber } from '../src/index.js';

const firstSent = 'Find the greatest common divisor of given numbers.';
console.log('brain-gcd\n');

const calculate = (a, b) => {
  let min;
  let max;
  if (b > a) {
    max = b;
    min = a;
  } else {
    max = a;
    min = b;
  }
  const flag = true;
  while (flag) {
    const rez = max % min;
    if (rez === 0) return min;
    max = min;
    min = rez;
  }
  return 0;
};

const gameRound = () => {
  const firstNumber = randomNumber(0, 50);
  const secondNumber = randomNumber(0, 50);
  const rightAnswer = calculate(firstNumber, secondNumber);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = readlineSync.question('Your answer: ');
  return [answer, rightAnswer]; 
};

game(gameRound, firstSent);
