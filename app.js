const startBot = require('./src/bot');

console.clear(); // eslint-disable-line no-console

// run main app loop
startBot()
  .then(console.log) // eslint-disable-line no-console
  .catch(console.error); // eslint-disable-line no-console
