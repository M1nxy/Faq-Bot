module.exports = {
  name: 'github',
  aliases: ['examples'],
  category: 'Development',
  utilisation: '{prefix]Github',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};