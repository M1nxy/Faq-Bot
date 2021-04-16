module.exports = {
  name: 'docs',
  aliases: ['documents'],
  category: 'Development',
  utilisation: '{prefix]Docs',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};