module.exports = {
  name: 'altstore',
  aliases: [],
  category: 'Apps',
  utilisation: '{prefix]Altstore',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};