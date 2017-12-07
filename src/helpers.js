const helpers = {
  checkIfHasText (msg) {
    return msg.type === 'message';
  },
  checkIfNotFromBot (msg, botId) { // put in botId this.user.id
    return msg.user !== botId;
  },
  checkIfBotMentioned (text, botId, botName) {
    const lcBotId = botId.toLowerCase();
    return text.indexOf(lcBotId > -1) || text.indexOf(botName > -1);
  }
};

module.exports = helpers;
