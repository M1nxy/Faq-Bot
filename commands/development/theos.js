module.exports = {
  name: 'theos',
  aliases: ['compiler'],
  category: 'Development',
  utilisation: '{prefix]Theos',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};