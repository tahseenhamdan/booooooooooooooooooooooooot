const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

**سلام عليكم يا قلبي 
جبت لكم افضل سيرفر سوالف 
تنورنا يحلو
احبك
this is chat server
join to server you will be happy
love you

                               [ https://discord.gg/uUraTA3
] 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 
جبت لكم افضل سيرفر سوالف 
تنورنا يحلو
احبك
this is chat server
join to server you will be happy
love you


                               [ https://discord.gg/uUraTA3
 ] 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login('NDc4ODI4NjkzODIxNzE4NTUw.DlQ3mg.k8_hxgjgoPw6ODpNa_8EMzMD1sY');
