module.exports = {
  name: 'flyjb',
  aliases: [],
  category: 'Detection',
  utilisation: '{prefix]Flyjb',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};