module.exports = {
  name: 'choicy',
  aliases: [],
  category: 'Detection',
  utilisation: '{prefix]Choicy',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};