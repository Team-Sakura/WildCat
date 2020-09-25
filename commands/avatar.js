const Discord = require('discord.js');

// да да, не работает по id, как то похуй если честно

module.exports.run = async (bot, message, args) => {
    try {
        
      let usr = message.mentions.users.first() ? message.mentions.users.first() : message.author;
      let embed = new Discord.MessageEmbed()
      embed.setColor('#87CEFA')
      embed.addField(`Аватар пользователя` , `[Ссылка на аватар](${usr.avatarURL()})`)
      embed.setFooter(`Запрос от: ${message.author.tag}`, message.author.avatarURL())
      embed.setImage(`${usr.displayAvatarURL({dynamic: true})}`)
      await message.channel.send(embed)
    } catch(err) {
        console.log(err);
    }

}
module.exports.help = {
    name: 'avatar',
    aliases: ['аватар'],  
    description: 'Аватар пользователя',
    usages: { '!avatar @user#0001': `Покажет аватар и даст ссылку` },
    category: 'Информация',
}