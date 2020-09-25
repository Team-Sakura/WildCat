const Discord = require("discord.js");
module.exports.run = async(bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    embed.setTitle(`Аватар сервера ${message.guild.name}`)
    embed.setColor('RANDOM')
    embed.setDescription(`[Ссылка на аватар](${message.guild.iconURL()})`)
    embed.setImage(`${message.guild.iconURL()}`)
    message.channel.send(embed);
}

module.exports.help = {
    name: 'icon',
    aliases: ['иконка'],
    description: 'Аватар сервера',
    usages: { '!icon': `Вам выдадут аватар сервера, а также ссылку` },
    category: 'Информация'
}