const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send("У вас недостаточно прав!")
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send("У меня недостаточно прав!")
    }
    
    let lox = message.mentions.members.first();
    
    if(!lox) {
      return message.channel.send("Укажите пользоватея!")
    }

    if(!lox.user.bot === false) {
      return message.channel.send("Боты не люди!")
    }
    
    if(lox.id === message.author.id) {
     return message.channel.send("Вы не можете исключить самого себя!")
    }
    
  if(!args[1]) {
    return message.channel.send("Укажите причину")
  }
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Исключение")
    .setDescription(`Пользователь ${lox} \n ID : (${lox.id})`)
    .setColor("RED")
    .setFooter(`Был исключён ${message.author.username}`, message.author.avatarURL());
    
    message.channel.send(embed)
    
    lox.kick(args[1]);
    
    
    
  }

module.exports.help = {
    name: 'kick',
    aliases: ['кик'],
    description: 'Кикнуть участника сервера',
    category: 'Утилиты',
    usages: {'!kick @user#0001': 'Кикнуть участника' }
}; 