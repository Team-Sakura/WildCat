const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||message.member;
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username}`,message.author.displayAvatarURL({dynamic: true}))  
    .setColor("RANDOM")
    .setImage(`https://api.alexflipnote.dev/amiajoke?image=${member.user.avatarURL()}`)
    message.channel.send(embed)
        }

module.exports.help = {
    name: 'joke',
    aliases: ['клоун','шутка'],
    description: 'Манипуляция с изображениями',
    usages: { '!joke': `Выдаст вам мем с вашим аватаром` },
    category: 'Изображения'
}
    