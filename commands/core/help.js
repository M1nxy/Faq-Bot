module.exports = {
  name: 'help',
  aliases: [],
  category: 'Core',
  utilisation: '{prefix}Help <command name>',

  execute(client, message, args) {
    if (!args[0]) {

      const jailbreaks = message.client.commands.filter(x => x.category == 'Jailbreaks').map((x) => '`' + x.name + '`').join(', ');
      const theming = message.client.commands.filter(x => x.category == 'Theming').map((x) => '`' + x.name + '`').join(', ');
      const detection = message.client.commands.filter(x => x.category == 'Detection').map((x) => '`' + x.name + '`').join(', ');
      const packagemanagers = message.client.commands.filter(x => x.category == 'PackageManagers').map((x) => '`' + x.name + '`').join(', ');
      const popular = message.client.commands.filter(x => x.category == 'Popular').map((x) => '`' + x.name + '`').join(', ');
      const apps = message.client.commands.filter(x => x.category == 'Apps').map((x) => '`' + x.name + '`').join(', ');
      const development = message.client.commands.filter(x => x.category == 'Development').map((x) => '`' + x.name + '`').join(', ');

      message.channel.send({
        embed: {
          thumbnail: {
            url: 'https://i.imgur.com/fBppuzg.png',
          },
          color: 'DARK_GREY',
          author: { name: 'Help Menu' },
          footer: { text: "MinxterYT's Faq Bot" },
          fields: [
            { name: 'Jailbreaks', value: jailbreaks },
            { name: 'Theming', value: theming },
            { name: 'Detection', value: detection },
            { name: 'Package Managers', value: packagemanagers },
            { name: 'Popular', value: popular },
            { name: 'Development', value: development },
            { name: 'Apps', value: apps },
          ],
          timestamp: new Date(),
        },
      });

    }
    else {
      const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));
      if (!command) return message.channel.send(`Unrecognized command!`);
      message.channel.send({
        embed: {
          color: 'DARK_GREY',
          author: { name: 'Help Menu' },
          footer: { text: 'By MinxterYT' },
          fields: [
            { name: 'Name', value: command.name, inline: true },
            { name: 'Category', value: command.category, inline: true },
            { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
            { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
          ],
          timestamp: new Date(),
          description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
        }
      }
      );
    };
  },
};