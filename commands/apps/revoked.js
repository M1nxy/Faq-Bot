module.exports = {
  name: 'revoked',
  aliases: ['sign', 'signitures'],
  category: 'Apps',
  utilisation: '{prefix]Revoked',

  execute(client, message, args) {
    try {
      message.channel.send('Coming Soon™')
    }
    catch (err) {
      return;
    }

  },
};