module.exports = {
  name: 'ping',
  aliases: ['lag'],
  category: 'Info',
  utilisation: '{prefix}Ping',

  execute(client, message) {
    message.channel.send(`🏓 Pong! - Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  },
};