/* eslint-disable no-console */
const questions = require('./questions');
const { ask, shutdown } = require('./utils');

/**
 *  class bot (uses as state machine)
 */
class Bot {
  constructor() {
    this.currentQuestion = null;
  }

  /**
   *  set tree with questions
   */
  setQuestions(botData) {
    this.currentQuestion = botData;
  }

  /**
   *  check for last question in tree
   *  (if element have only one child - that is the answer)
   */
  isNextQuestionAvailable() {
    return !!this.currentQuestion && Array.isArray(this.currentQuestion.childs)
      && this.currentQuestion.childs.length > 1;
  }

  /**
   *  print current question with childs and title
   */
  showQuestion() {
    if (!this.currentQuestion) {
      return;
    }
    if (this.isNextQuestionAvailable()) {
      // print question with variants
      console.log(this.currentQuestion.title, '\n');
      if (
        Array.isArray(this.currentQuestion.childs)
        && this.currentQuestion.childs.length > 1
      ) {
        console.log(
          this.currentQuestion.childs
            .map((item, i) => `${i}  ${item.title}`)
            .join('\n'),
        );
      }
    } else if (
      Array.isArray(this.currentQuestion.childs) && this.currentQuestion.childs.length > 0
    ) {
      // print answer
      console.log(this.currentQuestion.childs[0].title, '\n');
    }
  }

  /**
   *  try apply user input
   *    if index correct - jump to next state and return true
   *    otherwise return false
   */
  applyAnswer(index) {
    const answer = this.currentQuestion.childs[index];
    if (answer) {
      this.currentQuestion = answer;
      return true;
    }
    return false;
  }
}

/**
 *  create bot with init data
 */
const bot = new Bot();
bot.setQuestions(questions);

/**
 *  Bot main loop
 */
async function startBot() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    bot.showQuestion(); // print question and childs with indexes
    /**
     *  verification - that the current question is the last one
     *  requiring user input
     */
    if (bot.isNextQuestionAvailable()) {
      // eslint-disable-next-line no-await-in-loop
      const ans = await ask('\nYou choise: '); // wait user input with prompt

      // check if user want to exit
      if (ans === 'exit') {
        shutdown(); // exit if user input 'exit'
        break;
      }

      // try apply user choice
      if (!bot.applyAnswer(ans)) {
        console.log("I don't understand, please repeat!\n");
      }
    } else {
      console.log('THE END\n');
      bot.setQuestions(questions);
    }
  }
  return '\nGood bye!'; // or new Promise.resolve('\nGood bye!');
}

module.exports = startBot;
