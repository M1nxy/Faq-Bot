module.exports = {
  name: 'check',
  aliases: [],
  category: 'Jailbreaks',
  utilisation: '{prefix]Check',

  execute(client, message, args) {
    try {
      const result = {
        color: '#ff69b4',
        author: {
          name: 'FAQ BOT'
        },
        description: `Check whether or not you can jailbreak your device`,
        thumbnail: {
          url: 'https://i.imgur.com/UlMfTf6.png',
        },
        fields: [
          {
            name: 'Old devices',
            value: '[canijailbreak](https://canijailbreak.com)',
          },
          {
            name: 'New devices',
            value: '[canijailbreak2](https://canijailbreak2.com)',
          }
        ],
        timestamp: new Date(),
        footer: {
          text: "MinxterYT's FAQ Bot - Ash.#0007",
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