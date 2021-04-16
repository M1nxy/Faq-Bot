module.exports = {
  name: 'zebra',
  aliases: [],
  category: 'PackageManagers',
  utilisation: '{prefix]Zebra',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};