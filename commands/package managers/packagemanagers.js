module.exports = {
  name: 'packagemanagers',
  aliases: ['pm'],
  category: 'PackageManagers',
  utilisation: '{prefix]PackageManagers',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};