module.exports = {
  name: 'abypass',
  aliases: [],
  category: 'Detection',
  utilisation: '{prefix]Abypass',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};