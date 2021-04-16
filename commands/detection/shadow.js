module.exports = {
  name: 'shadow',
  aliases: [],
  category: 'Detection',
  utilisation: '{prefix]Shadow',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};