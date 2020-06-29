const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports.ask = function(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, input => resolve(input));
  });
};

module.exports.shutdown = function() {
  rl.close();
  process.exit(0);
};
