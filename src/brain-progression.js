#!/usr/bin/env node

import readlineSync from 'readline-sync';
import game, { randomNumber } from './index.js';

export default () => {
  const firstSent = 'What number is missing in the progression?';
  console.log('brain-progression\n');

  const gameRound = () => {
    const count = randomNumber(5, 12);
    const first = randomNumber(1, 25);
    const difference = randomNumber(1, 10);
    const hiddenMemberIndex = randomNumber(0, count - 1);
    const progMass = [];
    let hiddenMember;
    for (let i = 0; i < count; i += 1) {
      if (i !== hiddenMemberIndex) {
        const item = String(first + difference * i);
        progMass.push(item);
      } else {
        progMass.push('..');
        hiddenMember = String(first + difference * i);
      }
    }
    const progStr = progMass.join(' ');
    console.log(`Question: ${progStr}`);
    const answer = readlineSync.question('Your answer: ');
    return [answer, hiddenMember];
  };

  game(gameRound, firstSent);
};
