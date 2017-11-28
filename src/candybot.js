const Bot = require('slackbots');
const options = require('../private-config')

const candyBot = new Bot(options);

candyBot.on('start', () => {
  const params = {
    icon_url: 'http://res.cloudinary.com/dfmb0wsun/image/upload/v1511885082/candygirl_msrc4a.jpg',
    as_user: false
  }
  candyBot.postMessageToChannel('general', 'Hi, sweethearts!', params)
})