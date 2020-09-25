const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {
    // Да да, это не апи, но похуй если честно
    let images = [
        "https://cdn.nekos.life/poke/poke_013.gif",
        "https://cdn.nekos.life/poke/poke_008.gif",
        "https://cdn.nekos.life/poke/poke_012.gif",
        "https://cdn.nekos.life/poke/poke_021.gif",
        "https://cdn.nekos.life/poke/poke_001.gif",
    ];
    let randomImage = images[Math.floor(Math.random() * images.length)];
    let member = message.mentions.users.first();

    if (!member) return message.channel.send("Укажите, кого вы хотите тыкнуть");

    if (member.id == message.member.id) return message.channel.send(
        new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> вы не можете тыкнуть самого себя!`)
        .setColor("RANDOM")
        .setImage("https://www.ivi.ru/titr/uploads/2016/04/07/b913e7e7de7f020975dd8889d542981e.gif")
    );

    if(message.mentions.users.first().bot) {
        const boti = new Discord.MessageEmbed()
        .setTitle("Боты не люди!")
        .setColor("RANDOM")
        .setImage("https://cdn.discordapp.com/attachments/706355779371794533/734293403965325452/IMG_20200718_213209.png")
        return message.channel.send(boti)
      };

    const embed = new Discord.MessageEmbed()
            .setColor("#2f3136")
            .setImage(randomImage)
            .setDescription(`<@${message.author.id}> **тыкнул(а)** ${message.mentions.members.first().displayName}`)
            message.channel.send(embed)
}



module.exports.help = {
    name: 'poke',
    aliases: ['тык','тыкнуть'],
    description: 'Тыкать пользователя',
    usages: { '!poke @user#0001': 'Тыкнуть пользователя' },
    category: "Реакции"
}; 