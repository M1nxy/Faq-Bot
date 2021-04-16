module.exports = {
  name: 'tweaks',
  aliases: [],
  category: 'Popular',
  utilisation: '{prefix]Tweaks',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};