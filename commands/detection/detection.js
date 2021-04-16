module.exports = {
  name: 'detection',
  aliases: ['detection', 'detect', 'detected'],
  category: 'Detection',
  utilisation: '{prefix]Detection',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};