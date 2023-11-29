#!/usr/bin/env node

import readlineSync from 'readline-sync';
import game, { randomNumber } from '../src/index.js';

console.log('brain-even\n');

const firstSent = 'Answer "yes" if the number is even, otherwise answer "no".';


const gameRound = () => {
  const answers = [];
  const num = randomNumber(1, 50);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  answers.push(answer);
  const rightAnswer = parseInt(num, 10) % 2 === 0 ? 'yes' : 'no';
  answers.push(rightAnswer);
  return answers;
};

game(gameRound, firstSent);
