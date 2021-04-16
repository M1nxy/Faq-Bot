module.exports = async (client) => {
  console.clear()

  if(client.guilds.cache.size = 1){
    console.log(`Ready on ${client.guilds.cache.size} server, for a total of ${client.users.cache.size} users`);
    client.user.setActivity(`${client.guilds.cache.size} Server`, { type: "COMPETING" });
  }
  else{
    console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
    client.user.setActivity(`${client.guilds.cache.size} Servers`, { type: "COMPETING" });
  }
};