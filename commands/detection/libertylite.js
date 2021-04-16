module.exports = {
  name: 'libertylite',
  aliases: ['ll', 'liberty'],
  category: 'Detection',
  utilisation: '{prefix]Libertylite',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};