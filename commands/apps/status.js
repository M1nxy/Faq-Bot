const fetch = require("node-fetch");

module.exports = {
  name: 'status',
  aliases: ['jailbreaks.app'],
  category: 'Apps',
  utilisation: '{prefix]Status',

  execute(client, message, args) {
    try {
      fetch("https://jailbreaks.app/status.php")
        .then(res => res.json())
        .then(body => {
          let color
          let status
          if (body.status == "Signed") {
            color = '#2ECC71';
            status = `Jailbreaks.app is currently Signed!`;
          }
          else if (body.status == "Revoked") {
            color = '#E74C3C';
            status = `Jailbreaks.app is currently Revoked!`;
          }
          else {
            color = '#000000';
            status = `Jailbreaks.app is currently Unavailable!`;
          }
          message.channel.send({
            embed: {
              author: {
                name: 'FAQ BOT - Jailbreaks.apps'
              },
              title: "Status",
              description: status,
              color: color,
              footer: {
                text: "MinxterYT's FAQ Bot - Jailbreaks.app Status",
                icon_url: 'https://jailbreaks.app/img/Jailbreaks.png',
              },
              timestamp: new Date(),
            }
          })
        })
    }
    catch{
      return
    }

  },
};