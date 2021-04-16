module.exports = {
  name: 'repositories',
  aliases: ['repos'],
  category: 'Popular',
  utilisation: '{prefix]repos',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};