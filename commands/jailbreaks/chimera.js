module.exports = {
  name: 'chimera',
  aliases: [],
  category: 'Jailbreaks',
  utilisation: '{prefix]Chimera',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};