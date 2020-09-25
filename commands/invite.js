const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    let inviteembed = new Discord.MessageEmbed()
    inviteembed.setTitle("WildCat Links");
    inviteembed.setDescription("[Пригласить бота]() \n  \n [Официальный сервер](https://discord.gg/CC4S5Fu)")
    inviteembed.setColor("#2f3136");
    inviteembed.setFooter("Проголосовать - !vote","https://storage.googleapis.com/discordstreet/emojis/72d32076-5881-41ad-aaba-396a2454eae6.gif")
    return message.channel.send(inviteembed)
}

module.exports.help = {
    name: 'invite',
    aliases: ['инвайт','пригласить'],
    description: 'Пригласить бота',
    usages: { '!invite': `Полезная информация` },
    category: 'Информация'
}