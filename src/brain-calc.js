#!/usr/bin/env node

import readlineSync from 'readline-sync';
import game, { randomNumber } from './index.js';

export default () => {
  const firstSent = 'What is the result of the expression?';
  console.log('brain-calc\n');

  const randomOperator = () => {
    const operations = ['-', '+', '*'];
    const index = randomNumber(0, operations.length - 1);
    return operations[index];
  };

  const calculate = (firstNumber, secondNumber, operation) => {
    switch (operation) {
      case '+':
        return firstNumber + secondNumber;
      case '-':
        return firstNumber - secondNumber;
      case '*':
        return firstNumber * secondNumber;
      default:
        break;
    }
    return 0;
  };

  const gameRound = () => {
    const firstNumber = randomNumber(0, 10);
    const secondNumber = randomNumber(0, 10);
    const operator = randomOperator();
    const rightAnswer = calculate(firstNumber, secondNumber, operator);
    console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
    const answer = readlineSync.question('Your answer: ');
    return [parseInt(answer, 10), rightAnswer];
  };

  game(gameRound, firstSent);
};
