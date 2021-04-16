module.exports = {
  name: 'theming',
  aliases: [],
  category: 'Theming',
  utilisation: '{prefix}Theming',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};