const Bot = require('slackbots');

class CandyBot extends Bot {
  constructor (params) {
    super(params);
    this.params = params;
    this.params.name = params.name || 'candybot';

    this.user = null;
    this.otherParams = {
      icon_url: process.env.BOT_AVATAR,
      as_user: false
    };
  }

  run () {
    this.on('start', this.onStart);
  }

  onStart () {
    this.postMessageToChannel('general', 'Hi, sweethearts!', this.otherParams);
  }
}

module.exports = CandyBot;
