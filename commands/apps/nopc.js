module.exports = {
  name: 'nopc',
  aliases: [],
  category: 'Apps',
  utilisation: '{prefix]NoPC',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};