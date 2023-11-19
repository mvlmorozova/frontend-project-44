import start from './cli.js';

const game = (gameRound, sentence) => {
  const name = start();
  console.log(sentence);
  for (let i = 0; i < 3; i += 1) {
    const [answer, rightAnswer] = gameRound();
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export const randomNumber = (a, b) => Math.floor((Math.random() * (b - a + 1)) + a);

export default game;
