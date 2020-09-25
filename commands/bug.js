const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    const final = bot.channels.cache.get("id канала");
    let Invite = await message.guild.channels.cache.find((c) => c.type === 'text').createInvite()
    let whosend = message.author;
    const sayMessage = args.join(" ");
    const channel = bot.channels.cache.get("id канала");
    if(!sayMessage) return message.channel.send(   new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Error')
    .setDescription('Не указано описание бага'))


    let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Ваш баг успешно отправлен!")
    .setFooter("Все баги приходят разработчику",message.author.avatarURL())
    message.channel.send(embed)

    let contact = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setThumbnail(whosend.displayAvatarURL())
   .setTitle(`Новый баг!`)
   .setDescription(`Описание бага: ${sayMessage} \n\n Сервер: ${message.guild.name} | ${message.guild.id} \n Пользователь: ${message.author} | ${message.author.id}`)
   .setTimestamp()
   final.send(contact);
}
module.exports.help = {
    name: 'bug',
    aliases: ['баг'],
    description: 'Отправить баг создателю',
    category: 'Утилиты',
    usages: {'!bug text': 'Отправить оповещение о баге' }
};