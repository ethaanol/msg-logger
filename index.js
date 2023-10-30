const { Client } = require('discord.js-selfbot-v13');
const fs = require('fs');

const client = new Client({
   checkUpdate: false
});

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

function write(data) {
   let file = "log.txt";
   fs.appendFile(file, data + "\n", (err) => {
      if (err) {
         console.error("failed to write to log file.");
         return;
      }
   })
}

client.on('messageCreate', (message) => {
   if (message.guild != null) {
      console.log("LOG ->" + " [" + message.guild.name + "] " + "[#" + message.channel.name + "] " + "[" + message.author.username + "] -> " + message.content);
      write("LOG ->" + " [" + message.guild.name + "] " + "[#" + message.channel.name + "] " + "[" + message.author.username + "] -> " + message.content);
   } else {
      console.log("LOG ->" + " [UNRECOGNIZED] " + "[" + message.author.username + "] -> " + message.content);
      write("LOG ->" + " [UNRECOGNIZED] " + "[" + message.author.username + "] -> " + message.content);
   }
})

client.login("token");
