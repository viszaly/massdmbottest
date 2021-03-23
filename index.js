const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";

client.on("message", message => {

if (message.content.startsWith(prefix + "dm")) {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` **MESSAGE SENT** `); 
 message.delete(); 
};     
});


client.on('ready',()=>{
    console.log(' Bot is online now!');
    let statuses = [
        " INVADER IS OP ",
        " Join Server - https://discord.gg/4ygg8DF ",
        " New Video - https://youtu.be/9PZ3UfWdi4w " // U can add another
        
    ]
    setInterval(function(){
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            client.user.setActivity(status, {type:"WATCHING"})
    
        }, 3000) //Seconds to Random



});

client.login("ODE1OTc4ODU1MTMwOTg4NjA1.YD0Rhw.OHaK-3MJHTHoZXxdw-Lgzxfw3nI");
