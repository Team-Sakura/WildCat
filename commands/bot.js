const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
        const duration = moment.duration(bot.uptime).format(" D [day], H [hrs], m [mins], s [secs]");
        const embed = new Discord.MessageEmbed()
            .setTitle(`Статистика`)
            .setColor("#2091bd")
            .addField("ОЗУ", `\`${(process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2)} MB\``, true)
            .addField("Аптайм", `\`${duration}\``, true)
            .addField("Статистика" , `Серверов: ${bot.guilds.cache.size.toLocaleString()} \n Пользователей : ${bot.users.cache.size.toLocaleString()}`)
            .addField("Количество команд", `\`${bot.commands.size.toLocaleString()}\``, true)
            .addField("Discord.js", `\`v${version}\``, true)
            .addField("NodeJS", `\`${process.version}\``, true)
            .addField("Operation System",`\`Linux | x64\``, true)
            .addField("Пинг",`\`${bot.ws.ping} ms\``, true)
            .addField("Дата создания", `\`${moment(bot.user.createdTimestamp+10800000).format(`DD.MM.YYYY / HH:mm:ss`)}\``)
            .setThumbnail(bot.user.avatarURL())
        message.channel.send(embed);
    } catch (err) {
        console.log(err)
    }
}
module.exports.help = {
    name: 'bot',
    aliases: ['bs', 'статистика', 'ботстат'],
    description: 'Статистика бота',
    usages: { '!bot': `Покажет статистику бота` },
    category: 'Информация',
}