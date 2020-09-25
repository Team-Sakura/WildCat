const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {
    // Да да, это не апи, но похуй если честно
    let images = [
        "https://cdn.nekos.life/feed/feed_014.gif",
        "https://cdn.nekos.life/feed/feed_004.gif",
        "https://cdn.nekos.life/feed/feed_016.gif",
        "https://cdn.nekos.life/feed/feed_017.gif",
        "https://cdn.nekos.life/feed/feed_010.gif",
    ];
    let randomImage = images[Math.floor(Math.random() * images.length)];
    let member = message.mentions.users.first();

    if (!member) return message.channel.send("Укажите, кого вы хотите покормить");

    if (member.id == message.member.id) return message.channel.send(
        new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> вы можете накормить самого себя, но нужно заслужить!`)
        .setColor("RANDOM")
        .setImage("https://www.ivi.ru/titr/uploads/2016/04/07/b913e7e7de7f020975dd8889d542981e.gif")
    );

    const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(randomImage)
            .setDescription(`<@${message.author.id}> **покормил(а)** ${message.mentions.members.first().displayName}`)
            .setTimestamp()
            message.channel.send(embed)
}


exports.help = {
    name: 'feed',
    aliases: ['кормить'],
    description: 'Покормить пользователя',
    usages: { '!feed @user#0001': 'Покормить пользователя' },
    category: "Реакции"
};