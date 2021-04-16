module.exports = async (client) => {
  console.clear()
  console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
  client.user.setActivity(`For jb!help in ${client.guilds.cache.size} Servers`, { type: "WATCHING" });
};