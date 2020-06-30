const startBot = require("./src/bot");

console.clear();

// run main app loop
startBot()
  .catch(console.error)
  .then(() => console.log("An error occurred!"));
