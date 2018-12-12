const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("522215664698785792")
setInterval(function() {
channel.send(`Yosef xD ,`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
