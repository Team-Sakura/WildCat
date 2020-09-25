const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send("У вас недостаточно прав!")
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send("У меня недостаточно прав!")
    }
    
    const banan = message.mentions.members.first();
    
    if(!banan) {
      return message.channel.send("Укажите пользователя")
    }

    if(!banan.user.bot === false) {
      return message.channel.send("Боты не люди!")
    }
    
    if(banan.id === message.author.id) {
      return message.channel.send("Вы не можете заблокировать самого себя!")
    }
    
   
    
   if(!args[1]) {
     return message.channel.send("Укажите причину!")
   }
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Блокировка")
    .setColor("RED")
    .setDescription(`Пользователь ${banan} \n ID : (${banan.id})`)
    .setThumbnail(banan.avatarURL)
    .setFooter(`Был заблокирован ${message.author.tag}`,message.author.avatarURL());
    
    message.channel.send(embed)
    banan.ban(args[1])
    
    
    
  }

module.exports.help = {
    name: 'ban',
    aliases: ['бан', 'темпбан', 'tempban', 'забанить', 'заблокировать'],
    description: 'Забанить участника сервера',
    category: 'Утилиты',
    usages: {'!ban @user#0001': 'Заблокировать @user#0001' }
}; 