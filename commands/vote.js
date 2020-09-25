const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const voteEmbed = new Discord.MessageEmbed();
    voteEmbed.setTitle("Мониторинги бота");
    voteEmbed.setDescription("[bots.SD.c](https://bots.server-discord.com/708400942260682832) \n [Discord Boats](https://discord.boats/bot/708400942260682832) \n [ABT Discord Bots](https://bots.bravery.fun/bot/708400942260682832) \n [BotiCord](https://boticord.top/bot/708400942260682832) \n [top.gg](https://top.gg/bot/708400942260682832)");
    voteEmbed.setColor("#87CEFA");
    voteEmbed.setFooter("Спасибо вам за поддержку","https://i.pinimg.com/originals/e6/b3/b5/e6b3b51ce90f547057b7b1b85f862a76.gif");
    voteEmbed.setTimestamp()
    message.channel.send(voteEmbed);
}

module.exports.help = {
    name: 'vote',
    aliases: ['голосование'],
    description: 'Проголосуй за бота',
    usages: { '!vote': `Голосование 1 июля` },
    category: 'Информация'
}