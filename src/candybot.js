const Bot = require('slackbots');
const helpers = require('./helpers');
const candies = require('./candies');

class CandyBot extends Bot {
  constructor (params) {
    super(params);
    this.params = params;
    this.params.name = params.name || 'candybot';

    this.user = null;
    this.otherParams = {
      as_user: true
    };
  }

  run () {
    this.on('start', this.onStart);
    this.on('message', this.onMessage);
  }

  onStart () {
    this.loadBotUser();
    this.postMessageToChannel(this.channels[0].name, 'Hi, sweethearts! Do you wanna know your heroic candy for today? Then ask me!', this.otherParams);
  }

  loadBotUser () {
    this.user = this.users.filter(user =>
      user.name === this.name
    )[0];
  }

  onMessage (msg) {
    if (
      helpers.checkIfHasText(msg) &&
      helpers.checkIfNotFromBot(msg, this.user.id)
    ) {
      const msgText = msg.text.toLowerCase();

      if(helpers.checkIfBotMentioned(msgText, this.user.id, this.name)){
        this.sendHeroicCandy(msg);
      }
    }
  }

  getChannelNameById (channelId) {
    return this.channels.find(channel => channel.id === channelId).name;
  }

  sendHeroicCandy (msg) {
    const heroicCandy = helpers.pickHeroicCandy(candies);
    this.postMessageToChannel(this.getChannelNameById(msg.channel), `Your heroic candy today is "${heroicCandy}"!`, this.otherParams);
  }
}

module.exports = CandyBot;
