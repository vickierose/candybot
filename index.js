require('dotenv').config();
const CandyBot = require('./src/candybot');

const options = {
  token: process.env.BOT_TOKEN,
  name: process.env.BOT_NAME
};

const candybot = new CandyBot(options);
candybot.run();