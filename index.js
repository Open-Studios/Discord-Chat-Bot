const Discord = require('discord.js');
const client = new Discord.Client();
const syncToken = 'YOUR BOT TOKEN HERE!';
client.login(syncToken);
client.on('ready', ()=>{
  console.log('Online! Open Studios!')
})

client.on("message", async message => {
const chatcord = require('chatcord');
const chat = new chatcord.Client()
//You can change "sync-codes" to any name you want for the channel
if (message.channel.name != 'open-studios') return;
chat.chat(message.cleanContent).then(reply => {
    if (message.author.bot) return;
    //Send's a reply
  message.channel.send(`> ${message.author}, ${reply}`)
})
});
