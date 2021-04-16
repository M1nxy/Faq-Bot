module.exports = {
  name: 'auxilia',
  aliases: [],
  category: 'PackageManagers',
  utilisation: '{prefix]Auxilia',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};