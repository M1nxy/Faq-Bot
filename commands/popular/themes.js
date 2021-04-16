module.exports = {
  name: 'themes',
  aliases: [],
  category: 'Popular',
  utilisation: '{prefix]Themes',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};