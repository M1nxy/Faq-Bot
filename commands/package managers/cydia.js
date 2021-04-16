module.exports = {
  name: 'cydia',
  aliases: [],
  category: 'PackageManagers',
  utilisation: '{prefix]Cydia',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};