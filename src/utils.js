const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports.ask = (text) => new Promise((resolve) => {
  rl.question(text, (input) => resolve(input));
});

module.exports.shutdown = () => {
  rl.close();
};
