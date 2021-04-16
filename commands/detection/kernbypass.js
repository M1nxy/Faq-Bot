module.exports = {
  name: 'kernbypass',
  aliases: ['kb'],
  category: 'Detection',
  utilisation: '{prefix]Kernbypass',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};