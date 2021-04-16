module.exports = {
  name: 'installer',
  aliases: [],
  category: 'PackageManagers',
  utilisation: '{prefix]Installer',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};