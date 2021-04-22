module.exports = {
  name: 'ios',
  aliases: ['iphone', 'ipad', 'ipod'],
  category: 'Jailbreaks',
  utilisation: '{prefix}IOS [version]',

  execute(client, message, args) {

    if (!args[0]) return message.channel.send(`Please specify a version!`);

    try {
      const result = {
        color: client.info.ios[args[0]].color,
        author: {
          name: 'FAQ BOT - iOS Info'
        },
        description: `How to jailbreak iOS ${args[0]}`,
        thumbnail: {
          url: client.info.ios[args[0]].image,
        },
        fields: client.info.ios[args[0]].fields,
        timestamp: new Date(),
        footer: {
          text: "MinxterYT's FAQ Bot",
          icon_url: 'https://cdn.discordapp.com/avatars/719292655963734056/5ac32a24129a2d2a6762f824204180aa.webp',
        },
      };

      message.channel.send({ embed: result });

    }
    catch (err) {
      message.channel.send("Results Not Found!");
      return;
    }

  },
};