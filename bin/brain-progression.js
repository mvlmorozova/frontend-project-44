#!/usr/bin/env node

import readlineSync from 'readline-sync';
import game, { randomNumber } from '../src/index.js';

const firstSent = 'What number is missing in the progression?';
console.log('brain-progression\n');

const gameRound = () => {
  const count = randomNumber(5, 12);
  const firstNum = randomNumber(1, 25);
  const step = randomNumber(1, 10);
  const spacePos = randomNumber(0, count);
  const progMass = [];
  let hiddenMember;
  for (let i = 0; i < count; i += 1) {
    if (i !== spacePos) {
      const item = `${firstNum + step * i}`;
      progMass.push(item);
    } else {
      progMass.push('..');
      hiddenMember = `${firstNum + step * i}`;
    }
  }
  const rightAnswer = hiddenMember;
  const progStr = progMass.join(' ');
  console.log(`Question: ${progStr}`);
  const answer = readlineSync.question('Your answer: ');
  return [answer, rightAnswer];
};

game(gameRound, firstSent);
