module.exports = {
  name: 'winterboard',
  aliases: ['wb'],
  category: 'Theming',
  utilisation: '{prefix}Winterboard',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};