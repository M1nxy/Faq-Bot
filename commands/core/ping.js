module.exports = {
  name: 'ping',
  aliases: ['lag'],
  category: 'Info',
  utilisation: '{prefix}Ping',

  execute(client, message) {
    try {
      message.channel.send('Loading data').then(async (msg) => {
        msg.edit(`🏓  Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
      })
    }
    catch{
      message.channel.send('Failed To Get Ping')
    }
  },
};