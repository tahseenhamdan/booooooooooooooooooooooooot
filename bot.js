const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

**
تعال نخطفك شوي ي لبى 


                               [ https://discord.gg/t4U7Av5 ]

الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
تعال نخطفك شوي ي لبى

                               [ https://discord.gg/t4U7Av5 ]
  
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})










client.login(process.env.BOT_TOKEN);

