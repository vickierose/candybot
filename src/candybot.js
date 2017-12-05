const Bot = require('slackbots');

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
    if (msg.text) {
      const msgText = msg.text.toLowerCase();
      if (msgText.indexOf(this.name) > -1) {
        this.postMessageToChannel(this.channels[0].name, 'Your heroic candy today is Rafaello!', this.otherParams);
      }
    }
  }
}

module.exports = CandyBot;
