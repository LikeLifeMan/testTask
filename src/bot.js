const questions = require("./questions");
const { ask, shutdown } = require("./utils");

/*
   class bot (uses as state machine)
*/
class Bot {
  constructor(botData) {
    this.currentQuestion = botData;
  }

  /*
    set tree with questions
  */
  setQuestions(botData) {
    this.currentQuestion = botData;
  }

  /*
    check for last question in tree
  */
  isNextQuestion() {
    return !!this.currentQuestion && !this.isLastInTree();
  }

  /*
    print current question with variants and info
  */
  showQuestion() {
    if (this.currentQuestion) {
      console.log(this.currentQuestion.question, "\n");
      if (this.currentQuestion.info) {
        console.log(this.currentQuestion.info, "\n");
      }
      if (
        Array.isArray(this.currentQuestion.variants) &&
        this.currentQuestion.variants.length > 0
      ) {
        console.log(
          this.currentQuestion.variants
            .map((item, i) => {
              return i + "  " + item.question;
            })
            .join("\n")
        );
      }
    }
  }

  /*
    try apply user input
      if index correct - jump to next state and return true
      otherwise return false
  */
  applyAnswer(index) {
    let answer = this.currentQuestion.variants[index];
    if (answer) {
      this.currentQuestion = answer;
      return true;
    }
    return false;
  }

  /*
    check for variants on a question
  */
  isLastInTree() {
    return (
      !Array.isArray(this.currentQuestion.variants) ||
      this.currentQuestion.variants.length == 0
    );
  }
}

/*
  create bot with init data
*/
bot = new Bot(questions);

/*
  Bot main loop
*/
async function startBot() {
  while (true) {
    bot.showQuestion(); // print question and variants with indexes
    /*
      verification - that the current question is the last one
      requiring user input
    */
    if (bot.isNextQuestion()) {
      let ans = await ask("\nYou choise: "); // wait user input with prompt

      if (ans == "exit") {
        shutdown(); // exit if user input 'exit'
      }

      /*
        try apply user choice
      */
      if (!bot.applyAnswer(ans)) {
        console.log("I don't understand, please repeat!\n");
      }
    } else {
      console.log("THE END\n");
      /*
        set questions for repeat from start
      */
      bot.setQuestions(questions);
    }
  }
}

module.exports = startBot;
