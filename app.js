/* eslint-disable no-console */
const startBot = require('./src/bot');

console.clear();
console.log('Type "exit" to exit from program', '\n');

// run main app loop
startBot()
  .then(console.log)
  .catch(console.error);
