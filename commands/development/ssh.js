module.exports = {
  name: 'ssh',
  aliases: ['files', 'ftp', 'remote'],
  category: 'Development',
  utilisation: '{prefix]SSH',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};