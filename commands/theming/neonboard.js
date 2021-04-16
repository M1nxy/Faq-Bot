module.exports = {
  name: 'neonboard',
  aliases: ['nb'],
  category: 'Theming',
  utilisation: '{prefix}Neonboard',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};