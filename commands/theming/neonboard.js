module.exports = {
  name: 'neonboard',
  aliases: ['nb'],
  category: 'Theming',
  utilisation: '{prefix}Neonboard',

  execute(client, message, args) {
    try {
      const result = {
        color: '#666666',
        author: {
          name: 'FAQ BOT - Neonboard'
        },
        description: `A modern theming engine for ios with all the standard features and more\n\n Currently supports iOS 7-14\n\n*Disclaimer*:\n It's known to be quite buggy but will save you a lot of battery drain incomparison to other theming engines.`,
        thumbnail: {
          url: 'https://raw.githubusercontent.com/ArtikusHG/NeonBoard-Lite/master/neonboardprefs/Resources/Theme.png',
        },
        fields: [
          {
            name: 'Neonboard',
            value: '[Add Repo](https://package-manager-links.minxteryt.repl.co/?repo=https://artikushg.github.io/)',
            inline: true,
          },
          {
            name: 'Neonboard Lite',
            value: '[Add Repo](https://package-manager-links.minxteryt.repl.co/?repo=https://artikushg.github.io/)',
            inline: true,
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