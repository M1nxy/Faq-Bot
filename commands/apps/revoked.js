module.exports = {
  name: 'revoked',
  aliases: ['signed', 'signitures', 'sign'],
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