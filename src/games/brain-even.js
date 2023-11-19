#!/usr/bin/env node

import readlineSync from 'readline-sync';
import game from '../src/index.js';

console.log('brain-even\n');

const firstSent = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameRound = () => {
  const answers = [];
  const question = readlineSync.question('Question: ');
  const answer = readlineSync.question('Your answer: ');
  answers.push(answer);
  const rightAnswer = parseInt(question, 10) % 2 === 0 ? 'yes' : 'no';
  answers.push(rightAnswer);
  return answers;
};

game(gameRound, firstSent);
