const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    if(!['gay','snow','jpegify','pixelate','deepfry','b&w','invert','blur'].includes(args[0])) return message.channel.send( new Discord.MessageEmbed()
    .setColor("RED") 
    .setDescription("Форматы , которые поддерживает эта команда \n ``gay``, ``snow``, ``jpegify``, ``pixelate``, ``b&w``, ``invert``, ``blur``")
    .setFooter("Напишите !image [формат]")
    .setTimestamp()
);
const member =
message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.member;
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setImage(`https://api.alexflipnote.dev/filter/${args[0]}?image=${member.user.avatarURL({dynamic: true})}`)
  message.channel.send(embed )   
 }

exports.help = {
     name: 'image',
     aliases: ['картинка'],
     description: 'Манипуляция с изображениями',
     usages: { '!image [формат]': `Выдаст вам новую аватарку` },
     category: 'Изображения'
}