module.exports = {
  name: 'sileo',
  aliases: [],
  category: 'PackageManagers',
  utilisation: '{prefix]Sileo',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};