module.exports = {
  name: 'anemone',
  aliases: [],
  category: 'Theming',
  utilisation: '{prefix}Anemone',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};